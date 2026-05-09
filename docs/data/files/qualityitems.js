// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["qualityitems"] = {
    "title": "qualityitems.txt",
    "overview": "This file controls the groups item modifiers for High Quality (Superior) item types. The game will randomly choose between one of these High Quality groups, if it is allowed for the item type.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "mod#code",
            "altNames": [
                "mod1code",
                "mod2code"
            ],
            "description": "Controls the item properties that are added to the item",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Reference of $!Properties#code!$ or $!PropertyGroups#code!$"
            }
        },
        {
            "name": "mod#param",
            "altNames": [
                "mod1param",
                "mod2param"
            ],
            "description": "The stat's \"parameter\" value associated with the related property ($!#mod#code!$). Usage depends on the property function (See the $!Properties#func#!$ field)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "mod#min",
            "altNames": [
                "mod1min",
                "mod2min"
            ],
            "description": "The stat's \"min\" value to assign to the related property ($!#mod#code!$). Usage depends on the property function (See the $!Properties#func#!$ field)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "mod#max",
            "altNames": [
                "mod1max",
                "mod2max"
            ],
            "description": "The stat's \"max\" value to assign to the related property ($!#mod#code!$). Usage depends on the property function (See the $!Properties#func#!$ field)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "armor",
            "description": "Boolean Field. If equals 1, then allow this High Quality (Superior) modifier to be applied on both torso armor and helmet item types. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "weapon",
            "description": "Boolean Field. If equals 1, then allow this High Quality (Superior) modifier to be applied on melee weapon item types (except scepters, wands, and staves). If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "shield",
            "description": "Boolean Field. If equals 1, then allow this High Quality (Superior) modifier to be applied on shield item types. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "scepter",
            "description": "Boolean Field. If equals 1, then allow this High Quality (Superior) modifier to be applied on scepter item types. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "wand",
            "description": "Boolean Field. If equals 1, then allow this High Quality (Superior) modifier to be applied on wand item types. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "staff",
            "description": "Boolean Field. If equals 1, then allow this High Quality (Superior) modifier to be applied on staff item types. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "bow",
            "description": "Boolean Field. If equals 1, then allow this High Quality (Superior) modifier to be applied on bow or crossbow item types. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "boots",
            "description": "Boolean Field. If equals 1, then allow this High Quality (Superior) modifier to be applied on boots item types. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "gloves",
            "description": "Boolean Field. If equals 1, then allow this High Quality (Superior) modifier to be applied on gloves item types. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "belt",
            "description": "Boolean Field. If equals 1, then allow this High Quality (Superior) modifier to be applied on belt item types. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        }
    ]
}