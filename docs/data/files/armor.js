// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["armor"] = {
    "title": "armor.txt",
    "referenceFiles": [
        "SharedItems",
        "enums"
    ],
    "appendFiles": [
        "SharedItems"
    ],
    "overview": "This file controls the functionalities for armor type items. This file is loaded together with other similar files in the following order: $!weapons!$, $!armor!$, $!misc!$. These combined files form the items structure. Technically these files share the same fields, but some fields are exclusive for specific item types, so they are not displayed in the data files that do not need them. These are the fields exclusive to this file.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "minac",
            "description": "The minimum amount of Defense that an armor item type can have.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "maxac",
            "description": "The maximum amount of Defense that an armor item type can have.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "block",
            "description": "Controls the block percent chance that the item provides (out of 100, but caps at 75).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "armor component",
            "altNames": [
                "rArm",
                "lArm",
                "Torso",
                "Legs",
                "rSPad",
                "lSPad"
            ],
            "description": "Controls the character's graphics and animations for the body components when wearing the armor. Corresponds to a $!enums#EARMORTYPE!$.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "appendField": {
                "file": "enums",
                "field": "EARMORTYPE"
            }
        }
    ],
    "ignoreFields": [
        "1or2handed",
        "2handed",
        "2handmindam",
        "2handmaxdam",
        "2handedwclass",
        "hit class",
        "minmisdam",
        "maxmisdam",
        "rangeadder",
        "wclass",
        "autobelt",
        "BetterGem",
        "multibuy",
        "spellicon",
        "pSpell",
        "state",
        "cstate1",
        "cstate2",
        "len",
        "stat1",
        "stat2",
        "stat3",
        "calc1",
        "calc2",
        "calc3",
        "spelldesc",
        "spelldescstr",
        "spelldescstr2",
        "spelldesccalc",
        "spelldesccolor",
        "AdvancedStashStackable",
        "UsageConditionCalc",
        "missile",
        "subtype"
    ]
}