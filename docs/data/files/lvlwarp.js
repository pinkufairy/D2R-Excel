// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["LvlWarp"] = {
    "title": "LvlWarp.txt",
    "overview": "This file controls how the player is moved to different area levels, such as entrances and exits between different areas. This player transportation of between levels is defined as a Level Warp. Level Warps function as special tiles that are added to the area for controlling the location for where to transport the player.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Name",
            "description": "This is a reference field to define the Level Warp",
            "type": {
                "type": "text",
                "dataLength": 39,
                "memSize": 0
            }
        },
        {
            "name": "Id",
            "description": "Defines the numeric ID for the type of Level Warp. This ID can be shared between multiple Level Warps if those Level Warps want to use the same functionality. This is referenced in other files.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "SelectX",
            "altNames": [
                "SelectY"
            ],
            "description": "These values define the horizontal and vertical offsets (respectively) of the starting left corner position of the Level Warp area. This is treated as the starting position to select the interactable Level Warp area in the area level. This value is measured in pixels.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "SelectDX",
            "altNames": [
                "SelectDY"
            ],
            "description": "These values define the horizontal and vertical offsets (respectively) of the offset from the starting position of the Level Warp area. This is added with the $!#SelectX!$ & $!#SelectY!$ fields (respectively) to determine the overall size and position of the Level Warp in the area level. This value is measured in pixels.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "ExitWalkX",
            "altNames": [
                "ExitWalkY"
            ],
            "description": "These values define the horizontal and vertical positions (respectively) of the destination location where the player will walk to after exiting to this Level Warp. This value is measured with a sub-tile offset from the base position of the Level Warp. One full tile on a level is composed of a grid of 5x5 sub-tiles.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "OffsetX",
            "altNames": [
                "OffsetY"
            ],
            "description": "These values define the horizontal and vertical positions (respectively) of the sub-tile for the Level Warp, where the player will appear when exiting to this area level. This value is measured with a sub-tile offset from the base position of the Level Warp. One full tile on a level is composed of a grid of 5x5 sub-tiles.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "LitVersion",
            "description": "Boolean Field. If equals 1, then Level Warp tiles will change their appearance when highlighted. If equals 0, then the Level Warp tiles will not change appearance when highlighted.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Tiles",
            "description": "Defines an index offset to determine which tile to use in the tile set for the highlighted version of the Level Warp. These tiles are loaded and hidden/revealed when the player mouse hovers over the Level Warp tiles. This relies on $!#LitVersion!$ being enabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "NoInteract",
            "description": "Boolean Field. If equals 1, then the Level Warp cannot be directly interacted by the player. If equals 0, then the player can interact with the Level Warp.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Direction",
            "description": "Defines the orientation of the Level Warp. Uses a specific string code.",
            "type": {
                "type": "text",
                "dataLength": 1,
                "memSize": 0
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "l",
                    "Left. If this is selected, then the tile type direction should match this."
                ],
                [
                    "r",
                    "Right. If this is selected, then the tile type direction should match this."
                ],
                [
                    "b",
                    "Both. This can mean that the Level Warp can be reassigned its direction."
                ]
            ]
        },
        {
            "name": "UniqueId",
            "description": "Defines the unique numeric ID for the Level Warp. Each Level Warp should have a unique ID so that the game can handle loading that specific Level Warp's related files.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        }
    ]
}