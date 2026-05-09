// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["Sets"] = {
    "title": "Sets.txt",
    "referenceFiles": [
        "PlayerClass"
    ],
    "overview": "This file controls the item modifiers for Set bonus statistics when the player has equipped enough Set Items.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "index",
            "description": "Defines the specific Set ID",
            "type": {
                "type": "text",
                "dataLength": 47,
                "memSize": 16
            }
        },
        {
            "name": "name",
            "description": "Uses a string for displaying the Set name in the inventory tooltip",
            "type": {
                "type": "string",
                "dataLength": 255,
                "memSize": 16
            }
        },
        {
            "name": "version",
            "description": "Defines which game version to use this Set bonus (0 = Classic mode | 100 = Expansion mode)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "PCode#",
            "altNames": [
                "PCode2a",
                "PCode2b",
                "PCode3a",
                "PCode3b",
                "PCode4a",
                "PCode4b",
                "PCode5a",
                "PCode5b"
            ],
            "description": "Controls the each of the different pairs of Partial Set item properties. These are applied when the player has equipped the related # of Set items. \"a\" and \"b\" fields are paired together for each Partial Set bonus.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Reference of $!Properties#code!$ or $!PropertyGroups#code!$"
            }
        },
        {
            "name": "PParam#",
            "altNames": [
                "PParam2a",
                "PParam2b",
                "PParam3a",
                "PParam3b",
                "PParam4a",
                "PParam4b",
                "PParam5a",
                "PParam5b"
            ],
            "description": "The stat's \"parameter\" value associated with the related property ($!#PCode#!$). Usage depends on the property function (See the $!Properties#func#!$ field)",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "A number or references $!skills#skill!$, $!MonType#type!$, or $!states#state!$"
            }
        },
        {
            "name": "PMin#",
            "altNames": [
                "PMin2a",
                "PMin2b",
                "PMin3a",
                "PMin3b",
                "PMin4a",
                "PMin4b",
                "PMin5a",
                "PMin5b"
            ],
            "description": "The stat's \"min\" value to assign to the related property ($!#PCode#!$). Usage depends on the property function (See the $!Properties#func#!$ field)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "PMax#",
            "altNames": [
                "PMax2a",
                "PMax2b",
                "PMax3a",
                "PMax3b",
                "PMax4a",
                "PMax4b",
                "PMax5a",
                "PMax5b"
            ],
            "description": "The stat's \"max\" value to assign to the related property ($!#PCode#!$). Usage depends on the property function (See the $!Properties#func#!$ field)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "FCode#",
            "altNames": [
                "FCode1",
                "FCode2",
                "FCode3",
                "FCode4",
                "FCode5",
                "FCode6",
                "FCode7",
                "FCode8"
            ],
            "description": "Controls the each of the different Full Set item properties. These are applied when the player has all Set item pieces equipped",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Reference of $!Properties#code!$ or $!PropertyGroups#code!$"
            }
        },
        {
            "name": "FParam#",
            "altNames": [
                "FParam1",
                "FParam2",
                "FParam3",
                "FParam4",
                "FParam5",
                "FParam6",
                "FParam7",
                "FParam8"
            ],
            "description": "The stat's \"parameter\" value associated with the related property ($!#FCode#!$). Usage depends on the property function (See the $!Properties#func#!$ field)",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "A number or references $!skills#skill!$, $!MonType#type!$, or $!states#state!$"
            }
        },
        {
            "name": "FMin#",
            "altNames": [
                "FMin1",
                "FMin2",
                "FMin3",
                "FMin4",
                "FMin5",
                "FMin6",
                "FMin7",
                "FMin8"
            ],
            "description": "The stat's \"min\" value to assign to the related property ($!#FCode#!$). Usage depends on the property function (See the $!Properties#func#!$ field)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "FMax#",
            "altNames": [
                "FMax1",
                "FMax2",
                "FMax3",
                "FMax4",
                "FMax5",
                "FMax6",
                "FMax7",
                "FMax8"
            ],
            "description": "The stat's \"max\" value to assign to the related property ($!#FCode#!$). Usage depends on the property function (See the $!Properties#func#!$ field)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "UIClass",
            "description": "Three letter code which defines the player class category the set is assigned to. Is used in the Chronicle sets page to filter different sets by different player classes.",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 8,
                "file": "PlayerClass",
                "field": "Code"
            },
            "appendField": {
                "file": "PlayerClass",
                "field": "Code"
            }
        }
    ]
}