// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["LvlSub"] = {
    "title": "LvlSub.txt",
    "overview": "This file controls how tiles can be substituted in for other tiles. The game will divide the level into clusters and iterate through these clusters to randomly substitute tiles with different ones for more visual diversity.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Name",
            "description": "This is a reference field to describe the Level Substitution",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Type",
            "description": "This refers to the $!Levels#SubType!$ field. This defines a group that multiple substitutions can share.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "File",
            "description": "Specifies the name of which ds1 file to use. The ds1 files contain data for building Level Presets.",
            "type": {
                "type": "text",
                "dataLength": 59,
                "memSize": 0
            }
        },
        {
            "name": "CheckAll",
            "description": "Boolean Field. If equals 1, then substitute each tile in the room. If equals 0, then substitute random tiles in the room.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "BordType",
            "description": "This controls how often substituting tiles can work for border tiles",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "0",
                    "Single One Only. This allows substituting for 1 border in total"
                ],
                [
                    "1",
                    "One Per Cluster. This allows substituting 1 border for each cluster in the level"
                ],
                [
                    "Other values",
                    "Allow substituting borders for all of the level"
                ]
            ]
        },
        {
            "name": "GridSize",
            "description": "Controls the tile size of a cluster for substituting tiles. This evenly affects both the X and Y size values of a room.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Dt1Mask",
            "description": "This functions as a bit field mask with a size of a 32 bit value. This explains to the ds1 file which of the 32 dt1 tile 1, File2=2, File3 = 4, File4=8, File5=16...File32 = 2147483648). To build the $!#Dt1Mask!$, you would select which $!LvlTypes#File #!$ fields to use and add their associated bit values together for a total value. This total value is the bitmask value.",
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
        },
        {
            "name": "Prob#",
            "altNames": [
                "Prob0",
                "Prob1",
                "Prob2",
                "Prob3",
                "Prob4"
            ],
            "description": "This value affects the probability that the tile substitution is used. This is a random chance out of 100. Which $!#Prob#!$ field that is checked depends on the $!Levels#SubTheme!$ value.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Trials#",
            "altNames": [
                "Trials0",
                "Trials1",
                "Trials2",
                "Trials3",
                "Trials4"
            ],
            "description": "Controls the number of times to randomly substitute tiles in a cluster. If this value equals -1, then the game will try to do as many tile substitutions that can be allowed based on the cluster and tile size. This field depends on the $!#CheckAll!$ field being equals to 0.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Max#",
            "altNames": [
                "Max0",
                "Max1",
                "Max2",
                "Max3",
                "Max4"
            ],
            "description": "The maximum number of clusters of tiles to substitute randomly. This field depends on the $!#CheckAll!$ field being equals to 0.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        }
    ]
}