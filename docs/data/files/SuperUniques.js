// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["SuperUniques"] = {
    "title": "SuperUniques.txt",
    "overview": "This file defines the Super Unique monsters and their properties. Super Unique monsters are considered the special boss monsters that have static encounters in the game.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Superunique",
            "description": "Defines the unique name ID for the Super Unique monster",
            "type": {
                "type": "text",
                "dataLength": 47,
                "memSize": 16
            }
        },
        {
            "name": "Name",
            "description": "Uses a string for the Super Unique monster's name",
            "type": {
                "type": "string",
                "dataLength": 255,
                "memSize": 16
            }
        },
        {
            "name": "Class",
            "description": "Defines the baseline monster type for the Super Unique monster, which this monster will use for default values.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "monstats",
                "field": "Id"
            }
        },
        {
            "name": "hcIdx",
            "description": "Defines the unique numeric ID for the Super Unique monster. The existing IDs are hardcoded for specific scripts with the specified Super Unique monsters.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "MonSound",
            "description": "Defines what set of sounds to use for the Super Unique monster. If this field is empty, then the Super Unique monster will default to using the monster class sounds.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "monsounds",
                "field": "Id"
            }
        },
        {
            "name": "Mod#",
            "altNames": [
                "Mod1",
                "Mod2",
                "Mod3"
            ],
            "description": "Controls which monster modifier to assign to the Super Unique monster. Uses the index of an entry from $!monumod!$ (See that file for details on the available modifiers).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "MinGrp",
            "description": "Controls the min amount of Minion monsters that will spawn with the Super Unique monster.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "MaxGrp",
            "description": "Controls the max amount of Minion monsters that will spawn with the Super Unique monster. This value must be equal to or higher than $!#MinGrp!$. If this value is greater than $!#MinGrp!$ then a random number will be chosen between the $!#MinGrp!$ and $!#MaxGrp!$ values.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "AutoPos",
            "description": "Boolean Field. If equals 1, then the Super Unique monster will randomly spawn within a radius of its designated position. If equals 0, then the Super Unique monster will spawn at exact coordinates of its designated position.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Stacks",
            "description": "Boolean Field. If equals 1, then this Super Unique monster can spawn more than once in the same game. If equals 0, then this Super Unique monster can only spawn once in the same game.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Replaceable",
            "description": "Boolean Field. If equals 1, then the room where the Super Unique monster spawns in can be replaced during the creation of a level preset. If equals 0, then the room cannot be replaced and will remain static.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Utrans",
            "altNames": [
                "Utrans(N)",
                "Utrans(H)"
            ],
            "description": "Modifies the color transform for the unique monster respectively in Normal, Nightmare, or Hell difficulty. If this value is greater than or equal to 30, then the value will default to 2, which is the monster's default color palette shift. If the value is 0 or is empty, then a random value will be chosen.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "TC",
            "altNames": [
                "TC(N)",
                "TC(H)"
            ],
            "description": "Controls the Treasure Class to use when the Super Unique monster is killed respectively in Normal, Nightmare, or Hell difficulty.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "TreasureClassEx",
                "field": "Treasure Class"
            }
        },
        {
            "name": "TC Desecrated",
            "altNames": [
                "TC(N) Desecrated",
                "TC(H) Desecrated"
            ],
            "description": "Controls the Treasure Class to use when the Super Unique monster is desecrated (Terrorized) and killed respectively in Normal, Nightmare, or Hell difficulty.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "TreasureClassEx",
                "field": "Treasure Class"
            }
        }
    ]
}