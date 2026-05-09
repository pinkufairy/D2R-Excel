// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["LvlMaze"] = {
    "title": "LvlMaze.txt",
    "overview": "This file controls the sizes of the underground area levels. This file uses the levels from $!Levels!$ and specifies the sizes for each room, which can mean how many Level Presets to use to build out the entire randomly generated area.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Name",
            "description": "This is a reference field to describe the area level. Ideally this should match the name of the area level from the $!Levels!$ file.",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Level",
            "description": "This refers to the level area's $!Levels#Id!$",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Rooms",
            "altNames": [
                "Rooms(N)",
                "Rooms(H)"
            ],
            "description": "Controls the total number of rooms that a Level Maze will generate when playing the game in Normal Difficulty, Nightmare Difficulty, and Hell Difficulty, respectively.",
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
            "description": "Controls the length and width sizes of each room (ds1 map files) that is added to the Level Maze. This is measured in tile sizes.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Merge",
            "description": "This value affects the probability that a room gets an adjacent room linked next to it. This is a random chance out of 1000.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        }
    ]
}