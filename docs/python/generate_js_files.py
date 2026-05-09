import io
import glob
import json
import os
from pathlib import Path
import re
import subprocess

def dumpJson(jsFile, jsJson, key):
        output = "// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like \"fetch\".\n// Workaround is to place json into .js files and then load them via html script tags.\n// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp\n"

        # Add the js variable name
        output += f"files[\"{key}\"] = "
        output += json.dumps(jsJson, indent=4)

        jsFile.seek(0)
        jsFile.truncate(0)
        jsFile.write(output)

def getField(file, fieldNameCasefold):
    for f in file["fields"]:
        if f["name"].casefold() == fieldNameCasefold:
            return f
        elif "altNames" in f:
            for altName in f["altNames"]:
                if altName.casefold() == fieldNameCasefold:
                    return f
    return None

def updateField(file, appendFiles, fieldExport):
    fieldExportNameCasefold = fieldExport["name"].casefold()

    # Ignore any fields that are specified to be ignored
    if "ignoreFields" in file:
        for f in file["ignoreFields"]:
            if f.casefold() == fieldExportNameCasefold:
                return

    field = getField(file, fieldExportNameCasefold)
    
    existingType = None
    if field == None:
        # If the field is in an append file, don't add it and bail
        for appendFile in appendFiles:
            if "fields" in appendFile:
                if getField(appendFile, fieldExportNameCasefold) != None:
                    return

        # Add the field
        field = dict()
        field["name"] = fieldExport["name"]
        field["description"] = ""
        file["fields"].append(field)
    elif "type" in field:
        existingType = field["type"]

    type = dict()
    type["type"] = fieldExport["type"]
    type["dataLength"] = fieldExport["dataLength"]
    type["memSize"] = fieldExport["memSize"]

    if type["type"] == "reference":
        if existingType != None:
            if "file" in existingType:
                type["file"] = existingType["file"]
            if "field" in existingType:
                type["field"] = existingType["field"]
        else:
            type["file"] = ""
            type["field"] = ""
    elif type["type"] == "parse":
        if existingType != None:
            if "description" in existingType:
                type["description"] = existingType["description"]
        else:
            type["description"] = ""

    field["type"] = type

def updateFields(file, appendFiles, fieldExports):
    if "fields" not in file:
        file["fields"] = []

    if fieldExports:
        for fieldExport in fieldExports["fields"]:
            updateField(file, appendFiles, fieldExport)

def updateFile(jsPath, allFieldExports, processedFiles):
    with io.open(jsPath, 'r+') as jsFile:
        # Strip out the js specific stuff to turn it into json
        inText = jsFile.read()
        jsonText = re.sub(r"(files(.*?)= )|(^[\/\/].*)", "", inText, flags=re.MULTILINE)
        key = re.search(r"(?<=files\[\").+?(?=\"\])", inText).group()
        file = json.loads(jsonText)

        # Only process once
        if key.casefold() in processedFiles:
            return

        # Process any append files and store them so we can check their fields later
        appendFiles = []
        if "appendFiles" in file:
            for appendFileName in file["appendFiles"]:
                jsAppendFilePath = jsPath.with_stem(appendFileName)

                # Process first so they are up to date
                updateFile(jsAppendFilePath, allFieldExports, processedFiles)

                # Read and store
                with io.open(jsAppendFilePath, 'r') as jsAppendFile:
                    # Strip out the js specific stuff to turn it into json
                    appendFileInText = jsAppendFile.read()
                    appendFileJsonText = re.sub(r"(files(.*?)= )|(^[\/\/].*)", "", appendFileInText, flags=re.MULTILINE)
                    appendFile = json.loads(appendFileJsonText)
                    appendFiles.append(appendFile)

        # Some files are "guide only", meaning they don't correspond with an actual file the code reads.
        # Don't process the fields in this case
        if "guideOnly" in file and file["guideOnly"]:
            # Some of these guide only files are portions of actual files. In this case read in the stated dependency and use that.
            # For example, the "SharedItems" js file is a portion of armor.txt, weapons.txt, and misc.txt. In this case "armor" is defined as a dependency.
            if "codeDependency" in file and file["codeDependency"]:
                fieldExports = next((f for f in allFieldExports if f["name"].casefold() == file["codeDependency"].casefold()), None)
                updateFields(file, appendFiles, fieldExports)
        else:
            fieldExports = next((f for f in allFieldExports if f["name"].casefold() == key.casefold()), None)
            updateFields(file, appendFiles, fieldExports)

        dumpJson(jsFile, file, key)
        processedFiles.append(key.casefold())

def addFile(fieldExports, dataFilesPath, processedFiles, addedPaths):
    key = fieldExports["name"]
    jsPath = Path(os.path.join(dataFilesPath, f'{key}.js'))

    with io.open(jsPath, 'w') as jsFile:
        file = dict()
        file["title"] = ""
        file["overview"] = ""
        file["fields"] = []
        
        for fieldExport in fieldExports["fields"]:
            field = dict()
            field["name"] = fieldExport["name"]
            field["description"] = ""

            type = dict()
            type["type"] = fieldExport["type"]
            type["dataLength"] = fieldExport["dataLength"]
            type["memSize"] = fieldExport["memSize"]
            if type["type"] == "reference":
                type["file"] = ""
                type["field"] = ""
            elif type["type"] == "parse":
                type["description"] = ""
            field["type"] = type

            file["fields"].append(field)

        dumpJson(jsFile, file, key)
        processedFiles.append(key.casefold())
        addedPaths.append(jsPath)

def generateJsFiles(dataPath, usePerforce):
    dataFilesPath = os.path.join(dataPath, "files")
    if (usePerforce):
        # Gather perforce files to checkout or add
        p4EditString = ""
        for jsFilepath in glob.glob(os.path.join(dataFilesPath, '*.js')):
            jsPath = Path(jsFilepath)
            if os.path.exists(jsPath):
                p4EditString += jsPath.name + " "

        # Check out or add files
        if p4EditString:
            subprocess.run("p4 edit " + p4EditString, check=True, shell=True, cwd=dataFilesPath)

    fieldExportPath = os.path.join(dataPath, "DataGuideFieldExport.json")
    allFieldExports = []
    with io.open(fieldExportPath, 'r') as fieldExportFile:
        jsonText = fieldExportFile.read()
        allFieldExports = json.loads(jsonText)["files"]

    # Update the json files with what the code expects
    processedFiles = []
    for jsFilepath in glob.glob(os.path.join(dataFilesPath, '*.js')):
        updateFile(Path(jsFilepath), allFieldExports, processedFiles)

    # For any files that were not processed, add them
    addedPaths = []
    for fieldExports in allFieldExports:
        if fieldExports["name"].casefold() not in processedFiles:
            addFile(fieldExports, dataFilesPath, processedFiles, addedPaths)

    if (usePerforce):
        # Add any new files to perforce
        p4AddString = ""
        for path in addedPaths:
            if os.path.exists(path):
                p4AddString += path.name + " "
        if p4AddString:
            subprocess.run("p4 add " + p4AddString, check=True, shell=True, cwd=dataFilesPath)

        # Revert unchanged files from perforce
        subprocess.run("p4 revert -a -c default", check=True, shell=True, cwd=dataFilesPath)
        
    return True
