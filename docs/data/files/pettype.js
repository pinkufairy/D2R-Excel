// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["pettype"] = {
    "title": "pettype.txt",
    "overview": "This file controls the various statistics for each type of pet from all the classes summon Skills.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "pet type",
            "description": "Defines the name of the pet type.",
            "type": {
                "type": "text",
                "dataLength": 47,
                "memSize": 32
            }
        },
        {
            "name": "group",
            "description": "Used as an ID field, where if pet types share the same group value, then only 1 pet of that group is allowed to be alive at any time. If equals 0 (or null), then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "pool",
            "description": "Marks a pet type as belonging to a pool. Pets from all pet types in the pool share the max amount of pets active. Individual pet types are still constrained by their own max. For example, if \"demon\" and \"bind demon\" are in the same pool, a pet of type \"bind demon\" will take up a slot in the \"demon\" pet type's max, the pool will have a max of 3, allowing for 2 \"demon\" and 1 \"bind demon\".",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "basemax",
            "description": "This sets a baseline maximum number of pets allowed to be alive when skill levels are reset or changed.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "warp",
            "description": "Boolean field. If equals 1, then the Pet will teleport to the player when the player teleports or warps to another area. If equals 0, then the pet will die instead.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "range",
            "description": "Boolean field. If equals 1, then the Pet will die if the player teleports or warps to another area and is located more than 40 grid tiles in distances from the Pet. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "partysend",
            "description": "Boolean field. If equals 1, then tell the Pet to do the Party Location Update command (find the location of its Player) when its health changes. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "unsummon",
            "description": "Boolean field. If equals 1, then the Pet can be unsummoned by the Unsummon skill function. If equals 0, then the Pet cannot be unsummoned.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "automap",
            "description": "Boolean field. If equals 1, then display the Pet on the Automap. If equals 0, then hide the pet on the Automap.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "name",
            "description": "String Key. Used to define the Pet's name on its party frame",
            "type": {
                "type": "string",
                "dataLength": 255,
                "memSize": 16
            }
        },
        {
            "name": "drawhp",
            "description": "Boolean field. If equals 1, then display the Pet's Life bar under the party frame. If equals 0, then hide the Pet's Life bar under the party icon.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "icontype",
            "description": "Controls the functionality for how to display the Pet Icon and number of Pets counter",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "0",
                    "Do not display the Pet icon"
                ],
                [
                    "1",
                    "Display the Pet icon and do not show the Pet counter"
                ],
                [
                    "2",
                    "Display the Pet icon and show the Pet counter"
                ],
                [
                    "3",
                    "Display individual icons for each Pet of this type. Do not show the Pet counter."
                ]
            ]
        },
        {
            "name": "baseicon",
            "description": "Define which DC6 file to use for the default Pet's icon in its party frame",
            "type": {
                "type": "text",
                "dataLength": 32,
                "memSize": 0
            }
        },
        {
            "name": "mclass#",
            "altNames": [
                "mclass1",
                "mclass2",
                "mclass3",
                "mclass4"
            ],
            "description": "Maps a monster class index defined in $!monstats!$ to an alternate icon in the corresponding $!#micon#!$",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "micon#",
            "altNames": [
                "micon1",
                "micon2",
                "micon3",
                "micon4"
            ],
            "description": "Defines which DC6 file to use for the related $!#mclass#!$ Pet's icon in its party frame",
            "type": {
                "type": "text",
                "dataLength": 32,
                "memSize": 0
            }
        },
        {
            "name": "overridename#",
            "altNames": [
                "overridename1",
                "overridename2",
                "overridename3",
                "overridename4"
            ],
            "description": "Override the string for the related $!#mclass#!$ Pet's icon.",
            "type": {
                "type": "string",
                "dataLength": 255,
                "memSize": 16
            }
        }
    ]
}