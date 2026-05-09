// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["monumod"] = {
    "title": "monumod.txt",
    "overview": "This file controls the different monster modifiers for special monsters, including Unique and Champion monsters.<br>The \"(N)\" text in field names signifies to use that specific value for games in Nightmare difficulty. The \"(H)\" text in field names signifies to use that specific value for games in Hell difficulty.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "uniquemod",
            "description": "This is a reference field to define the monster modifier",
            "type": {
                "type": "text",
                "dataLength": 47,
                "memSize": 16
            }
        },
        {
            "name": "id",
            "description": "Defines the unique numeric ID for the monster modifier. Used as a reference in other data files.",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "enabled",
            "description": "Boolean Field. If equals 1, then this monster modifier will be an available option for monsters to spawn with. If equals 0, then this monster modifier will never be used.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "version",
            "description": "Defines which game version to use this monster modifier (<100 = Classic mode | 100 = Expansion mode)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "xfer",
            "description": "Boolean Field. If equals 1, then this monster modifier can be transferred from the Boss monster to his Minion monsters, including auras. If equals 0, then the monster modifier will never be transferred.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "champion",
            "description": "Boolean Field. If equals 1, then this monster modifier will only be used by Champion monsters. If equals 0, then the monster modifier can be used by any type of special monster.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "fPick",
            "description": "Controls if this monster modifier is allowed on the monster based on the function code and the parameters it checks.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "table": [
                [
                    "Code",
                    "Descriptioin"
                ],
                [
                    "0 (or empty)",
                    "Ignore this"
                ],
                [
                    "1",
                    "Monster class must have the Attack 1 mode (checks the $!monstats2#mA1!$ field)"
                ],
                [
                    "2",
                    "Monster class cannot be flagged as Melee (checks the $!monstats#isMelee!$ field)<br>Monster class cannot have the No Multishot flag (checks the $!monstats#nomultishot!$ field)"
                ],
                [
                    "3",
                    "Monster class must have the Walk mode (checks $!monstats2#mWL!$ field)"
                ]
            ]
        },
        {
            "name": "exclude#",
            "altNames": [
                "exclude1",
                "exclude2"
            ],
            "description": "This controls which Monster Types should not have this monster modifier (Uses the $!MonType#type!$ field)",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "MonType",
                "field": "type"
            }
        },
        {
            "name": "cpick",
            "altNames": [
                "cpick (N)",
                "cpick (H)"
            ],
            "description": "Modifies the chances that this monster modifier will be chosen for a Champion monster, compared to other monster modifiers. The higher the value is, then the more likely this modifier will be chosen. This value acts as a numerator and a denominator. All $!#cpick!$ values get summed together to give a total denominator, used for the random roll. For example, if there are 3 possible monster modifiers, and their $!#cpick!$ values are 3, 4, 6, then their chances to be chosen are 3/13, 4/13, and 6/13 respectively.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "upick",
            "altNames": [
                "upick (N)",
                "upick (H)"
            ],
            "description": "Modifies the chances that this monster modifier will be chosen for a Unique monster, compared to other monster modifiers. The higher the value is, then the more likely this modifier will be chosen. This value acts as a numerator and a denominator. All $!#upick!$ values get summed together to give a total denominator, used for the random roll. For example, if there are 3 possible monster modifiers, and their $!#upick!$ values are 3, 4, 6, then their chances to be chosen are 3/13, 4/13, and 6/13 respectively.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "constants",
            "description": "These values control a special list of numeric parameters for special monsters. The row that each constant appears in the data file is unrelated. You can treat this column almost like a separate data file that controls other aspects of special monsters. See the description next to each value for more specific clarification on each constant.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        }
    ]
}