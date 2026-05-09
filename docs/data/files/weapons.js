// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["weapons"] = {
    "title": "weapons.txt",
    "referenceFiles": [
        "SharedItems",
        "enums",
        "HitClass"
    ],
    "appendFiles": [
        "SharedItems"
    ],
    "overview": "This file controls the functionalities for weapons type items. This file is loaded together with other similar files in the following order: $!weapons!$, $!armor!$, $!misc!$. These combined files form the items structure. Technically these files share the same fields, but some fields are exclusive for specific item types, so they are not displayed in the data files that do not need them. These are the fields exclusive to this file.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "1or2handed",
            "description": "Boolean Field. If equals 1, then the item will be treated as a one-handed and two-handed weapon by the Barbarian class. If equals 0, then the Barbarian can only use this weapon as either one-handed or two-handed, but not both.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "2handed",
            "description": "Boolean Field. If equals 1, then the item will be treated as two-handed weapon. If equals 0, then the item will be treated as one-handed weapon.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "2handmindam",
            "description": "The minimum physical damage provided by the weapon if the item is two-handed. This relies on the $!#2handed!$ field being enabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "2handmaxdam",
            "description": "The maximum physical damage provided by the weapon if the item is two-handed. This relies on the $!#2handed!$ field being enabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "2handedwclass",
            "description": "Defines the two-handed weapon class, which controls what character animations are used when the weapon is equipped",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            },
            "appendField": {
                "file": "enums",
                "field": "EWEAPONCLASS"
            }
        },
        {
            "name": "hit class",
            "description": "Defines the hit class of the weapon which is used to know what SFX to use when the weapon hits an enemy",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 8,
                "file": "HitClass",
                "field": "Code"
            },
            "appendField": {
                "file": "HitClass",
                "field": "Code"
            }
        },
        {
            "name": "minmisdam",
            "description": "The maximum physical damage provided by the item if it is a throwing weapon",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "maxmisdam",
            "description": "The maximum physical damage provided by the item if it is a throwing weapon",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "rangeadder",
            "description": "Adds extra range in grid spaces for melee attacks while the melee weapon is equipped. The baseline melee range is 1, and this field adds to that range.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "wclass",
            "description": "Defines the one-handed weapon class, which controls what character animations are used when the weapon is equipped",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            },
            "appendField": {
                "file": "enums",
                "field": "EWEAPONCLASS"
            }
        }
    ],
    "ignoreFields": [
        "minac",
        "maxac",
        "block",
        "rArm",
        "lArm",
        "Torso",
        "Legs",
        "rSPad",
        "lSPad",
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