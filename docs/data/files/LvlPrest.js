// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["LvlPrest"] = {
    "title": "LvlPrest.txt",
    "overview": "This file controls the values for each Level Preset. A Level Preset is a static area composed of tiles that is used to construct entire area levels found in the game.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Name",
            "description": "This is a reference field to define the Level Preset",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Def",
            "description": "Defines the unique numeric ID for the Level Preset. This is referenced in other files.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "LevelId",
            "description": "This refers to the area level's $!Levels#Id!$ field. If this value is not equal to 0, then this Level Preset is used to build that entire area level. If this value is equal to 0, then the Level Preset does not define the entire area level and is used as a part of constructing area levels.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Populate",
            "description": "Boolean Field. If equals 1, then units are allowed to spawn in the Level Preset. If equals 0, then units will never spawn in the Level Preset.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Logicals",
            "description": "Boolean Field. If equals 1, then the Level Preset allow for wall transparency to function. If equals 0, then walls will always appear solid.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Outdoors",
            "description": "Boolean Field. If equals 1, then the Level Preset will be classified as an outdoor area, which can mean that lighting will function differently. If equals 0, then the Level Preset will be classified as an indoor area.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Animate",
            "description": "Boolean Field. If equals 1, then the game will animate the tiles in the Level Preset. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "KillEdge",
            "description": "Boolean Field. If equals 1, then the game will remove tiles that border the size of the Level Preset. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "FillBlanks",
            "description": "Boolean Field. If equals 1, then all blank tiles in the Level Preset will be filled with unwalkable tiles. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "SizeX",
            "altNames": [
                "SizeY"
            ],
            "description": "Specifies the Length and Width tile size values of the Level Preset, which are used for determining how big to build area levels. These values are equal to 0 for Level Presets that are static.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "AutoMap",
            "description": "Boolean Field. If equals 1, then this Level Preset will be automatically completely revealed on the Automap. If equals 0, then this Level Preset will be hidden on the Automap and will need to be explored.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Scan",
            "description": "Boolean Field. If equals 1, then this Level Preset will allow the usage of warping with waypoints (This requires that the Level Preset has a waypoint object). If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Pops",
            "description": "Defines how many Pop tiles are defined in the Level Preset file. These Pop tiles are mainly used for controlling the roof and wall popping when a player enters a building in an area.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "PopPad",
            "description": "Determines the size of the Pop tile area, by using an offset value. This offset value can increase or decrease the size of the Pop tile size if it has a positive or negative value.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Files",
            "description": "Determines the number of different versions to use for the Level Preset. This value acts as a range, which the game will use for randomly choosing one of the $!#File#!$ fields to build the Level Preset. This is how the Level Presets have variety when the area level is being built.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "File#",
            "altNames": [
                "File1",
                "File2",
                "File3",
                "File4",
                "File5",
                "File6"
            ],
            "description": "Specifies the name of which ds1 file to use. The ds1 files contain data for building Level Presets. If this value equals 0, then this field will be ignored. The number of these defined fields should match the value used in the $!#Files!$ field.",
            "type": {
                "type": "text",
                "dataLength": 59,
                "memSize": 0
            }
        },
        {
            "name": "Dt1Mask",
            "description": "This functions as a bit field mask with a size of a 32 bit value. This explains to the ds1 file which of the 32 dt1 tile 1, File2=2, File3 = 4, File4=8, File5=16...File32 = 2147483648). To build the $!#Dt1Mask!$, you would select which $!LvlTypes#File #!$ fields to use from and add their associated bit values together for a total value. This total value is the bitmask value.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            },
            "bittable": [
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
            ]
        }
    ]
}