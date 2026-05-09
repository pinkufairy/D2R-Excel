// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["objpreset"] = {
    "title": "objpreset.txt",
    "overview": "This file controls which Objects are preloaded in a preset, based on the Act number.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Index",
            "description": "Assigns a unique numeric ID to the Object Preset so that it can be properly referenced",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Act",
            "description": "Defines the Act number used for each Object Preset. Uses values between 1 to 5.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "ObjectClass",
            "description": "Assigns an Object to this Object Preset",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "objects",
                "field": "Class"
            }
        }
    ]
}