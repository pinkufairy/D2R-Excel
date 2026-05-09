// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["LvlTypes"] = {
    "title": "LvlTypes.txt",
    "overview": "This file controls which files containing tile graphics are used for creating maps. This looks at dt1 files, which contain tile images of the environments foundin the game. Each line in this file defines a Level Type and what files it uses.<br>The order of each Level Type defined in this file will convey what ID value it has, which is referenced by the following files: $!Levels!$, $!LvlPrest!$. The order of these Level Types should not be changed.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Name",
            "description": "This is a reference field to define the Level Type",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Id",
            "description": "Numeric id for this level group.",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "File #",
            "altNames": [
                "File 1",
                "File 2",
                "File 3",
                "File 4",
                "File 5",
                "File 6",
                "File 7",
                "File 8",
                "File 9",
                "File 10",
                "File 11",
                "File 12",
                "File 13",
                "File 14",
                "File 15",
                "File 16",
                "File 17",
                "File 18",
                "File 19",
                "File 20",
                "File 21",
                "File 22",
                "File 23",
                "File 24",
                "File 25",
                "File 26",
                "File 27",
                "File 28",
                "File 29",
                "File 30",
                "File 31",
                "File 32"
            ],
            "description": "Specifies the name of which dt1 file to use. The dt1 files contain the images for each area tile found in each Act. If this value equals 0, then this field will be ignored.",
            "type": {
                "type": "text",
                "dataLength": 59,
                "memSize": 0
            }
        },
        {
            "name": "Act",
            "description": "Defines which Act is related to the Level Type. When loading an Act, the game will only use the Level Types associated with that Act number. Uses a decimal number to convey each Act number (Ex: A value of 3 means Act 3)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        }
    ]
}