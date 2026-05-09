import io
import glob
import json
import os
from pathlib import Path
import re
import subprocess

files = dict()

def printError(file, message):
    print(f'{file["jsPath"]}: {message}')
def printErrorField(file, fieldName, message):
    print(f'{file["jsPath"]}, {fieldName}: {message}')

def importJs(jsPath):
    with io.open(jsPath, 'r') as jsFile:
        # Strip out the js specific stuff to turn it into json
        inText = jsFile.read()
        jsonText = re.sub(r"(files(.*?)= )|(^[\/\/].*)", "", inText, flags=re.MULTILINE)
        key = re.search(r"(?<=files\[\").+?(?=\"\])", inText).group()

        file = json.loads(jsonText)
        file["jsPath"] = jsPath.name
        file["key"] = key

        if key in files:
            printError(file, f'file key {key} already exists.')
        else:
            files[key] = file

def importFieldExport(fieldExportPath):
    with io.open(fieldExportPath, 'r') as fieldExportFile:
        jsonText = fieldExportFile.read()
        global allFieldExports
        allFieldExports = json.loads(jsonText)["files"]

def doesFileExist(fileName):
    return fileName in files

def doesFieldExist(fileName, fieldName):
    def fieldCheck(container, fieldNameCasefold):
        if "fields" in container:
            for field in container["fields"]:
                if "id" in field:
                    if field["id"] == fieldNameCasefold:
                        return True
                elif field["name"].casefold() == fieldNameCasefold:
                    return True
                if "altNames" in field:
                    for altName in field["altNames"]:
                        if altName.casefold() == fieldNameCasefold:
                            return True
                if "table" in field:
                    for row in field["table"]:
                        for column in row:
                            if type(column) == dict:
                                if "id" in column:
                                    id = column["id"]
                                    if id.casefold() == fieldNameCasefold:
                                        return True
                if fieldCheck(field, fieldNameCasefold):
                    return True
        return False

    if doesFileExist(fileName):
        file = files[fileName]
        fieldNameCasefold = fieldName.casefold()
        if fieldCheck(file, fieldNameCasefold):
            return True
        elif "appendFiles" in file:
            for appendFileName in file["appendFiles"]:
                if doesFileExist(appendFileName):
                    appendFile = files[appendFileName]
                    if fieldCheck(appendFile, fieldNameCasefold):
                        return True
    return False

def validateReferences(file):
    referenceFiles = []
    if "referenceFiles" in file:
        for referenceFile in file["referenceFiles"]:
            if referenceFile not in files:
                printError(file, f'referenceFile "{referenceFile}" does not exist.')
            else:
                referenceFiles.append(referenceFile)

    if "appendFiles" in file:
        for appendFile in file["appendFiles"]:
            if appendFile not in files:
                printError(file, f'appendFile "{appendFile}" does not exist.')
            if appendFile not in referenceFiles:
                printError(file, f'appendFile "{appendFile}" is not in "referenceFiles".')

def validateReferenceLink(file, fieldName, match):
    link = match.groups()[0]
    i = link.find('#')
    if i >= 0:
        splits = [link[0:i], link[i+1:]]
        if not splits or len(splits) > 2:
            printError(file, f'Too few or too many splits when creating data link "{link}".')
        elif splits[0]:
            # Page and element
            if not doesFieldExist(splits[0], splits[1]):
                if fieldName is None:
                    printError(file, f'reference link "{link}" does not exist.')
                else:
                    printErrorField(file, fieldName, f'reference link "{link}" does not exist.')
        else:
            # Just element
            if not doesFieldExist(file["key"], splits[1]):
                if fieldName is None:
                    printError(file, f'reference link "{link}" does not exist.')
                else:
                    printErrorField(file, fieldName, f'reference link "{link}" does not exist.')
    else:
        # Just page
        if not doesFileExist(link):
            if fieldName is None:
                printError(file, f'reference link "{link}" does not exist.')
            else:
                printErrorField(file, fieldName, f'reference link "{link}" does not exist.')

    return ""

def validateReferenceLinks(file, fieldName, string):
    re.sub(r"\$\!(.*?)\!\$", lambda match: validateReferenceLink(file, fieldName, match), string)

def fieldValidateFieldExists(file, field, fieldName, value):
    if value not in field:
        printErrorField(file, fieldName, f'"{value}" does not exist.')
        return False
    return True

def fieldValidateFieldNotEmpty(file, field, fieldName, value):
    if value not in field:
        printErrorField(file, fieldName, f'"{value}" does not exist.')
        return False
    elif not field[value]:
        printErrorField(file, fieldName, f'"{value}" is empty.')
        return False
    return True

def isFieldNameIgnored(file, fieldNameCasefold):
    if "ignoreFields" in file:
        for ignoreFieldName in file["ignoreFields"]:
            if ignoreFieldName.casefold() == fieldNameCasefold:
                return True
    return False

def validateFieldType(file, field, fieldName, fieldType):
    if fieldValidateFieldNotEmpty(file, fieldType, fieldName, "type"):
        fieldTypeName = fieldType["type"]
        validFieldTypes = ["int", "int or", "float", "text", "reference", "string", "boolean", "inverse boolean", "parse", "comment", "object", "array"]
        if not fieldTypeName in validFieldTypes:
            printErrorField(file, fieldName, f'invalid type "{fieldTypeName}".')

        if fieldTypeName == "reference":
            refHasFile = fieldValidateFieldNotEmpty(file, fieldType, fieldName, "file")
            refHasField = fieldValidateFieldNotEmpty(file, fieldType, fieldName, "field")
            if refHasFile and refHasField:
                refFileName = fieldType["file"]
                refFieldName = fieldType["field"]
                if not doesFieldExist(refFileName, refFieldName):
                    printErrorField(file, fieldName, f'type reference "{refFileName}#{refFieldName}" does not exist.')
        elif fieldTypeName == "parse":
            if fieldValidateFieldNotEmpty(file, fieldType, fieldName, "description"):
                validateReferenceLinks(file, fieldName, fieldType["description"])
        elif fieldTypeName == "object":
            if "file" in fieldType or "field" in fieldType:
                refHasFile = fieldValidateFieldNotEmpty(file, fieldType, fieldName, "file")
                refHasField = fieldValidateFieldNotEmpty(file, fieldType, fieldName, "field")
                if refHasFile and refHasField:
                    refFileName = fieldType["file"]
                    refFieldName = fieldType["field"]
                    if not doesFieldExist(refFileName, refFieldName):
                        printErrorField(file, fieldName, f'object type reference "{refFileName}#{refFieldName}" does not exist.')
            elif "fields" not in field:
                printErrorField(file, fieldName, f'field is an object type but has no subfields.')
        elif fieldTypeName == "array":
            if fieldValidateFieldNotEmpty(file, fieldType, fieldName, "arrayType"):
                validateFieldType(file, field, f'{fieldName}, array', fieldType["arrayType"])

    fieldValidateFieldExists(file, fieldType, fieldName, "dataLength")
    fieldValidateFieldExists(file, fieldType, fieldName, "memSize")

def validateField(file, field, fieldExports, usedNames):
    fieldName = "???"
    if fieldValidateFieldNotEmpty(file, field, fieldName, "name"):
        fieldName = field["name"]
        
        fieldNameCasefold = fieldName.casefold()
        if fieldNameCasefold in usedNames:
            printErrorField(file, fieldName, f'name "{fieldName}" already in use.')

        fieldId = field["id"] if "id" in field else fieldNameCasefold
        if not fieldId:
            printErrorField(file, fieldName, f'"id" is empty.')
            
        usedNames.append(fieldId)

        if isFieldNameIgnored(file, fieldNameCasefold):
            printErrorField(file, fieldName, f'name "{fieldName}" is both a field and in "ignoreFields"')

    if "altNames" in field:
        for altName in field["altNames"]:
            altNameCasefold = altName.casefold()
            if altNameCasefold in usedNames:
                printErrorField(file, fieldName, f'altName "{altName}" already in use.')
            usedNames.append(altNameCasefold)

            if isFieldNameIgnored(file, altNameCasefold):
                printErrorField(file, fieldName, f'name "{altNameCasefold}" is both an "altName" and in "ignoreFields"')

    if fieldValidateFieldNotEmpty(file, field, fieldName, "description"):
        validateReferenceLinks(file, fieldName, field["description"])

    fieldTypeName = ""
    hasDataLength = False
    hasMemSize = False
    if fieldValidateFieldExists(file, field, fieldName, "type"):
        fieldType = field["type"]

        # Some extra data grabbing for later
        fieldTypeName = fieldType["type"] if "type" in fieldType else ""
        hasDataLength = "dataLength" in fieldType
        hasMemSize = "memSize" in fieldType

        validateFieldType(file, field, f'{fieldName}, type', fieldType)

    if "table" in field:
        table = field["table"]

        # Some table fields need extra validation
        # [ "field name", entry name column, column to check is empty ]
        extraTableValidations = [
            ["Server Event Functions", 1, 3],
            ["pCltDoFunc", 1, 3],
            ["pCltHitFunc", 1, 3],
            ["pSrvDoFunc", 1, 3],
            ["pSrvHitFunc", 1, 3],
            ["pSrvDmgFunc", 1, 3],
            ["srvstfunc", 1, 3],
            ["srvdofunc", 1, 3],
            ["srvstopfunc", 1, 3],
            ["cltstfunc", 1, 3],
            ["cltdofunc", 1, 3],
            ["cltstopfunc", 1, 3],
        ]
        extraTableValidation = None
        for extraValidation in extraTableValidations:
            if fieldNameCasefold == extraValidation[0].casefold():
                extraTableValidation = extraValidation

        for row in table:
            for column in row:
                if type(column) == dict:
                    if fieldValidateFieldNotEmpty(file, column, fieldName, "id"):
                        id = column["id"]
                        if id.casefold() in usedNames:
                            printErrorField(file, fieldName, f'table id "{id}" already in use.')
                        usedNames.append(id.casefold())
                    if fieldValidateFieldNotEmpty(file, column, fieldName, "text"):
                        validateReferenceLinks(file, fieldName, column["text"])
                else:
                    validateReferenceLinks(file, fieldName, column)
            if extraTableValidation:
                if not row[extraValidation[2]]:
                    rowName = row[extraValidation[1]]["id"] if type(row[extraValidation[1]]) == dict else row[extraValidation[1]]
                    printErrorField(file, fieldName, f'"{rowName}" is empty.')

    elif "bittable" in field:
        bittable = field["bittable"]
        for row in bittable:
            if type(row) == dict:
                if fieldValidateFieldNotEmpty(file, row, fieldName, "text"):
                    validateReferenceLinks(file, fieldName, row["text"])
            else:
                validateReferenceLinks(file, fieldName, row)


    # Validate that we match what the code expects us to
    if fieldExports:
        fieldExport = next((f for f in fieldExports["fields"] if f["name"].casefold() == field["name"].casefold()), None)
        if "altNames" in field:
            for altName in field["altNames"]:
                altFieldExport = next((f for f in fieldExports["fields"] if f["name"].casefold() == altName.casefold()), None)
                
                if not altFieldExport:
                    if fieldTypeName != "comment":
                        printErrorField(file, fieldName, f'altName "{altName}" is not a code supported field.')
                elif not fieldExport:
                    fieldExport = altFieldExport

        if not fieldExport:
            if fieldTypeName != "comment":
                printErrorField(file, fieldName, 'is not a code supported field.')
        else:
            if not fieldTypeName or fieldTypeName != fieldExport["type"]:
                printErrorField(file, fieldName, f'type "{fieldTypeName if fieldTypeName else ''}" does not match code expected "{fieldExport["type"]}".')
            if not hasDataLength or field["type"]["dataLength"] != fieldExport["dataLength"]:
                printErrorField(file, fieldName, f'dataLength "{field["type"]["dataLength"] if hasDataLength else ''}" does not match code expected "{fieldExport["dataLength"]}".')
            if not hasMemSize or field["type"]["memSize"] != fieldExport["memSize"]:
                printErrorField(file, fieldName, f'memSize "{field["type"]["memSize"] if hasMemSize else ''}" does not match code expected "{fieldExport["memSize"]}".')

    if "appendField" in field:
        appendField = field["appendField"]
        appendFieldHasFile = fieldValidateFieldNotEmpty(file, appendField, fieldName, "file")
        appendFieldHasField = fieldValidateFieldNotEmpty(file, appendField, fieldName, "field")
        if appendFieldHasFile and appendFieldHasField:
            appendFieldFileName = appendField["file"]
            appendFieldFieldName = appendField["field"]

            if appendFieldFileName != file["key"] and ("referenceFiles" not in file or appendFieldFileName not in file["referenceFiles"]):
                printErrorField(file, fieldName, f'appendField file "{appendFieldFileName}" is not in "referenceFiles".')

            if not doesFieldExist(appendFieldFileName, appendFieldFieldName):
                printErrorField(file, fieldName, f'appendField "{appendFieldFileName}#{appendFieldFieldName}" does not exist.')

    if "fields" in field:
        for subField in field["fields"]:
            validateField(file, subField, fieldExports, usedNames)

def validateFields(file, fieldExports):
    if "fields" not in file:
        printError(file, f'has no "fields" array.')
    
    usedNames = []
    for field in file["fields"]:
        validateField(file, field, fieldExports, usedNames)
    
    if "appendFiles" in file:
        for appendFileName in file["appendFiles"]:
            if appendFileName in files:
                appendFile = files[appendFileName]
                if "fields" in appendFile:
                    for field in appendFile["fields"]:
                        validateField(appendFile, field, fieldExports, usedNames)

    # After processing all the json fields, check for any missing code-expected fields
    if fieldExports:
        for fieldExport in fieldExports["fields"]:
            if fieldExport["name"].casefold() not in usedNames and not isFieldNameIgnored(file, fieldExport["name"].casefold()):
                printError(file, f'does not contain code expected field "{fieldExport["name"]}".')

def validateFile(file):
    guideOnly = "guideOnly" in file and file["guideOnly"]

    fieldExports = None
    if not guideOnly:
        fieldExports = next((f for f in allFieldExports if f["name"].casefold() == file["key"].casefold()), None)

    if not guideOnly and not fieldExports:
        printError(file, f'code does not support file {file["key"]}')

    if "title" not in file:
        printError(file, 'title does not exist.')
    elif not file["title"]:
        printError(file, 'title is empty.')

    if "overview" not in file:
        printError(file, 'overview does not exist.')
    elif not file["overview"]:
        printError(file, 'overview is empty.')
    else:
        validateReferenceLinks(file, None, file["overview"])

    validateReferences(file)
    validateFields(file, fieldExports)

def validateDataGuide(dataPath):
    importFieldExport(os.path.join(dataPath, "DataGuideFieldExport.json"))

    # Import all the files
    dataFilesPath = os.path.join(dataPath, "files")
    for jsFilepath in glob.glob(os.path.join(dataFilesPath, '*.js')):
        importJs(Path(jsFilepath))

    # Validate 'em
    usedFiles = []
    for key, file in files.items():
        validateFile(file)
        usedFiles.append(key.casefold())

    # After processing all the files, check for any missing code-expected files
    if allFieldExports:
        for fieldExports in allFieldExports:
            if fieldExports["name"].casefold() not in usedFiles:
                print(f'{fieldExports["name"]}: code expected file does not exist in data guide')
    
    return True
