// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["Runes"] = {
    "title": "Runes.txt",
    "overview": "This file controls the creation of Rune Words and their various modifiers.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Name",
            "description": "Controls the string key that is used to the display the name of the item when the Rune Word is complete",
            "type": {
                "type": "text",
                "dataLength": 63,
                "memSize": 0
            }
        },
        {
            "name": "complete",
            "description": "Boolean field. If equals 1, then the Rune Word can be crafted in-game. If equals 0, then the Rune Word cannot be crafted in-game.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "disallowCraftingInLadder",
            "description": "If 1, then the Rune Word cannot be crafted in online-ladder games. This does not affect already-crafted Rune Words. See also: $!#disallowCraftingInNonLadder!$",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "disallowCraftingInNonLadder",
            "description": "If 1, then the Rune Word cannot be crafted in online-nonladder or offline games. This does not affect already-crafted Rune Words. See also: $!#disallowCraftingInLadder!$",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "firstLadderSeason",
            "description": "The first ladder season the Rune Word can be made on (inclusive). If blank or 0 then it is available in non-ladder.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "lastLadderSeason",
            "description": "The last ladder season the Rune Word is ladder-only (inclusive). Must be used in conjunction with $!#firstLadderSeason!$.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "itype#",
            "altNames": [
                "itype1",
                "itype2",
                "itype3",
                "itype4",
                "itype5",
                "itype6"
            ],
            "description": "Controls what item types are allowed for this Rune Word.",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 16,
                "file": "ItemTypes",
                "field": "Code"
            }
        },
        {
            "name": "etype#",
            "altNames": [
                "etype1",
                "etype2",
                "etype3"
            ],
            "description": "Controls what item types are excluded for this Rune Word.",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 16,
                "file": "ItemTypes",
                "field": "Code"
            }
        },
        {
            "name": "Rune#",
            "altNames": [
                "Rune1",
                "Rune2",
                "Rune3",
                "Rune4",
                "Rune5",
                "Rune6"
            ],
            "description": "Controls what runes are required to make the Rune Word. The order of each of these fields matters.",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 32,
                "file": "misc",
                "field": "code"
            }
        },
        {
            "name": "T1Code#",
            "altNames": [
                "T1Code1",
                "T1Code2",
                "T1Code3",
                "T1Code4",
                "T1Code5",
                "T1Code6",
                "T1Code7"
            ],
            "description": "Controls the item properties that the Rune Word provides",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Reference of $!Properties#code!$ or $!PropertyGroups#code!$"
            }
        },
        {
            "name": "T1Param#",
            "altNames": [
                "T1Param1",
                "T1Param2",
                "T1Param3",
                "T1Param4",
                "T1Param5",
                "T1Param6",
                "T1Param7"
            ],
            "description": "The stat's \"parameter\" value associated with the related property ($!#T1Code#!$). Usage depends on the property function (See the $!Properties#func#!$ field)",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "A number or references $!skills#skill!$, $!MonType#type!$, or $!states#state!$"
            }
        },
        {
            "name": "T1Min#",
            "altNames": [
                "T1Min1",
                "T1Min2",
                "T1Min3",
                "T1Min4",
                "T1Min5",
                "T1Min6",
                "T1Min7"
            ],
            "description": "The stat's \"min\" value to assign to the related property ($!#T1Code#!$). Usage depends on the property function (See the $!Properties#func#!$ field)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "T1Max#",
            "altNames": [
                "T1Max1",
                "T1Max2",
                "T1Max3",
                "T1Max4",
                "T1Max5",
                "T1Max6",
                "T1Max7"
            ],
            "description": "The stat's \"max\" value to assign to the related property ($!#T1Code#!$). Usage depends on the property function (See the $!Properties#func#!$ field)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        }
    ]
}