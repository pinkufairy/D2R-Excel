// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["SetItems"] = {
    "title": "SetItems.txt",
    "referenceFiles": [
        "colors"
    ],
    "overview": "This file controls the item modifiers for each Set item in a Set.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "index",
            "description": "Links to a string key for displaying the Set item name",
            "type": {
                "type": "text",
                "dataLength": 31,
                "memSize": 0
            }
        },
        {
            "name": "set",
            "description": " Defines the Set to link to this Set Item",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Sets",
                "field": "index"
            }
        },
        {
            "name": "disabled",
            "description": "Boolean Field. If equals 1, this set item fully disabled and cannot be dropped randomly or explicitly from a treasure class.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "spawnable",
            "description": "Boolean Field. If equals 1, this set item can be rolled as a choice when randomly dropping a set item. If equals 0, then this item cannot be dropped randomly, but can still be drop explicitly from a treasure class.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "disableChronicle",
            "description": "Boolean Field. If equals 1, this set item will not appear in the chronicle.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "DropConditionCalc",
            "description": "If the evaluated result of this condition is 0, hen prevent the set item from being rolled as a choice when randomly dropping a set item.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Treasure Class scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "firstLadderSeason",
            "description": "Integer field. The first ladder season the set item can be made on (inclusive). If blank or 0 then it is available in non-ladder.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "lastLadderSeason",
            "description": "Integer field. The last ladder season the set item is ladder-only (inclusive). Must be used in conjunction with $!#firstLadderSeason!$.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "item",
            "description": "Defines the baseline item code to use for this Set item",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            }
        },
        {
            "name": "rarity",
            "description": "Modifies the chances that this Unique item will spawn compared to the other Set items. This value acts as a numerator and a denominator. Each $!#rarity!$ value gets summed together to give a total denominator, used for the random roll for the item. For example, if there are 3 possible Set items, and their $!#rarity!$ values are 3, 5, 7, then their chances to be chosen are 3/15, 5/15, and 7/15 respectively. (The minimum $!#rarity!$ value equals 1)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "lvl",
            "description": "The item level for the item, which controls what object or monster needs to be in order to drop this item",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "lvl req",
            "description": "The minimum character level required to equip the item",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "chrtransform",
            "description": "Controls the color change of the item when equipped on a character or dropped on the ground. If empty, then the item will have the default item color.",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 8,
                "file": "colors",
                "field": "Code"
            },
            "appendField": {
                "file": "colors",
                "field": "Code"
            }
        },
        {
            "name": "invtransform",
            "description": "Controls the color change of the item in the inventory UI. If empty, then the item will have the default item color.",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 8,
                "file": "colors",
                "field": "Code"
            },
            "appendField": {
                "file": "colors",
                "field": "Code"
            }
        },
        {
            "name": "invfile",
            "description": "An override for the $!armor#invfile!$, $!weapons#invfile!$, or $!misc#invfile!$ field. By default, the Set Item will use what was defined by the baseline item from the $!#item!$ field.",
            "type": {
                "type": "text",
                "dataLength": 31,
                "memSize": 0
            }
        },
        {
            "name": "flippyfile",
            "description": "An override for the $!armor#flippyfile!$, $!weapons#flippyfile!$, or $!misc#flippyfile!$ field. By default, the Set Item will use what was defined by the baseline item from the $!#item!$ field.",
            "type": {
                "type": "text",
                "dataLength": 31,
                "memSize": 0
            }
        },
        {
            "name": "dropsound",
            "description": "An override for the $!armor#dropsound!$, $!weapons#dropsound!$, or $!misc#dropsound!$ field. By default, the Set Item will use what was defined by the baseline item from the $!#item!$ field.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "dropsfxframe",
            "description": "An override for the $!armor#dropsfxframe!$, $!weapons#dropsfxframe!$, or $!misc#dropsfxframe!$ field. By default, the Set Item will use what was defined by the baseline item from the $!#item!$ field.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "usesound",
            "description": "An override for the $!armor#usesound!$, $!weapons#usesound!$, or $!misc#usesound!$ field. By default, the Set Item will use what was defined by the baseline item from the $!#item!$ field.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "cost mult",
            "description": "Multiplicative modifier for the Set item's buy, sell, and repair costs",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "cost add",
            "description": "Flat integer modification to the Set item's buy, sell, and repair costs. This is added after the $!#cost mult!$ has modified the costs.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "add func",
            "description": "Controls how the additional Set item properties ($!#aprop#!$) will function on the Set item based on other related set items are equipped",
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
                    "0 (or empty)",
                    "Additional Set item properties will function like normal item properties, ignoring the Set"
                ],
                [
                    "1",
                    "Additional Set item properties will be added depending on which specific Set item is equipped. Each Set item has their own index depending on their order in data and the $!#set!$ they belong to. For example, if a Set item is defined first in the list, that that it has the index equal to 1, which means this function will make $!#aprop1a!$ and $!#aprop1b!$ fields only be added to a Set Item when that specific Set item of index 1 is equipped."
                ],
                [
                    "2",
                    "Additional Set item properties will be added depending the number of related Set items equipped. For example, if 2 Set items are equipped, then the $!#aprop1a!$, $!#aprop1b!$, $!#aprop2a!$, and $!#aprop2b!$ fields will be added to the Set item."
                ]
            ]
        },
        {
            "name": "prop#",
            "altNames": [
                "prop1",
                "prop2",
                "prop3",
                "prop4",
                "prop5",
                "prop6",
                "prop7",
                "prop8",
                "prop9"
            ],
            "description": "Controls the item properties that are add baseline to the Set Item",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Reference of $!Properties#code!$ or $!PropertyGroups#code!$"
            }
        },
        {
            "name": "par#",
            "altNames": [
                "par1",
                "par2",
                "par3",
                "par4",
                "par5",
                "par6",
                "par7",
                "par8",
                "par9"
            ],
            "description": "The stat's \"parameter\" value associated with the related property ($!#prop#!$). Usage depends on the property function (See the $!Properties#func#!$ field)",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "A number or references $!skills#skill!$, $!MonType#type!$, or $!states#state!$"
            }
        },
        {
            "name": "min#",
            "altNames": [
                "min1",
                "min2",
                "min3",
                "min4",
                "min5",
                "min6",
                "min7",
                "min8",
                "min9"
            ],
            "description": "The stat's \"min\" value to assign to the related property ($!#prop#!$). Usage depends on the property function (See the $!Properties#func#!$ field)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "max#",
            "altNames": [
                "max1",
                "max2",
                "max3",
                "max4",
                "max5",
                "max6",
                "max7",
                "max8",
                "max9"
            ],
            "description": "The stat's \"max\" value to assign to the related property ($!#prop#!$). Usage depends on the property function (See the $!Properties#func#!$ field)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "aprop#",
            "altNames": [
                "aprop1a",
                "aprop1b",
                "aprop2a",
                "aprop2b",
                "aprop3a",
                "aprop3b",
                "aprop4a",
                "aprop4b",
                "aprop5a",
                "aprop5b"
            ],
            "description": "Controls the item properties that are added to the Set Item when other pieces of the Set are also equipped. \"a\" and \"b\" fields are paired together.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Reference of $!Properties#code!$ or $!PropertyGroups#code!$"
            }
        },
        {
            "name": "apar#",
            "altNames": [
                "apar1a",
                "apar1b",
                "apar2a",
                "apar2b",
                "apar3a",
                "apar3b",
                "apar4a",
                "apar4b",
                "apar5a",
                "apar5b"
            ],
            "description": "The stat's \"parameter\" value associated with the related property ($!#aprop#!$). Usage depends on the property function (See the $!Properties#func#!$ field)",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "A number or references $!skills#skill!$, $!MonType#type!$, or $!states#state!$"
            }
        },
        {
            "name": "amin#",
            "altNames": [
                "amin1a",
                "amin1b",
                "amin2a",
                "amin2b",
                "amin3a",
                "amin3b",
                "amin4a",
                "amin4b",
                "amin5a",
                "amin5b"
            ],
            "description": "The stat's \"min\" value to assign to the related property ($!#aprop#!$). Usage depends on the property function (See the $!Properties#func#!$ field)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "amax#",
            "altNames": [
                "amax1a",
                "amax1b",
                "amax2a",
                "amax2b",
                "amax3a",
                "amax3b",
                "amax4a",
                "amax4b",
                "amax5a",
                "amax5b"
            ],
            "description": "The stat's \"max\" value to assign to the related property ($!#aprop#!$). Usage depends on the property function (See the $!Properties#func#!$ field)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "diablocloneweight",
            "description": "The amount of weight added to the diablo clone progress when this item is sold. When offline, selling this item will instead immediately spawn diablo clone.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        }
    ]
}