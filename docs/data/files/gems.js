// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["gems"] = {
    "title": "gems.txt",
    "referenceFiles": [
        "colors"
    ],
    "overview": "This file controls the item modifiers of gems and runes for each item type. This file is used by the following files: $!armor!$, $!weapons!$, $!misc!$.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "name",
            "description": "This is a reference field to define the gem/rune name",
            "type": {
                "type": "text",
                "dataLength": 31,
                "memSize": 0
            }
        },
        {
            "name": "letter",
            "description": "Defines the string that is concatenated together in the item tooltip when a rune is socketed into an item",
            "type": {
                "type": "text",
                "dataLength": 5,
                "memSize": 0
            }
        },
        {
            "name": "transform",
            "description": "Controls the color change of the item after being socketed by the gem/rune. (Corresponds to $!colors#Code!$)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "appendField": {
                "file": "colors",
                "field": "Code"
            }
        },
        {
            "name": "code",
            "description": "Links this entry to a specific item's code.",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 32,
                "file": "misc",
                "field": "code"
            }
        },
        {
            "name": "Mod#Code",
            "altNames": [
                "weaponMod1Code",
                "weaponMod2Code",
                "weaponMod3Code",
                "helmMod1Code",
                "helmMod2Code",
                "helmMod3Code",
                "shieldMod1Code",
                "shieldMod2Code",
                "shieldMod3Code"
            ],
            "description": "Controls the item properties that the gem/rune provides when socketed into an item with a $!misc#gemapplytype!$ value that equals (weapon=0, helm=1, shield=2)",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "References a $!Properties#code!$ or a $!PropertyGroups#code!$"
            }
        },
        {
            "name": "Mod#Param",
            "altNames": [
                "weaponMod1Param",
                "weaponMod2Param",
                "weaponMod3Param",
                "helmMod1Param",
                "helmMod2Param",
                "helmMod3Param",
                "shieldMod1Param",
                "shieldMod2Param",
                "shieldMod3Param"
            ],
            "description": "The stat's \"parameter\" value associated with the listed property. Usage depends on the property function (See $!Properties#func#!$)",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "A number or references $!skills#skill!$, $!MonType#type!$, or $!states#state!$"
            }
        },
        {
            "name": "Mod#Min",
            "altNames": [
                "weaponMod1Min",
                "weaponMod2Min",
                "weaponMod3Min",
                "helmMod1Min",
                "helmMod2Min",
                "helmMod3Min",
                "shieldMod1Min",
                "shieldMod2Min",
                "shieldMod3Min"
            ],
            "description": "The stat's \"min\" value associated with the listed property. Usage depends on the property function (See $!Properties#func#!$)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Mod#Max",
            "altNames": [
                "weaponMod1Max",
                "weaponMod2Max",
                "weaponMod3Max",
                "helmMod1Max",
                "helmMod2Max",
                "helmMod3Max",
                "shieldMod1Max",
                "shieldMod2Max",
                "shieldMod3Max"
            ],
            "description": "The stat's \"max\" value associated with the listed property. Usage depends on the property function (See $!Properties#func#!$)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        }
    ]
}