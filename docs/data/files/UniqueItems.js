// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["UniqueItems"] = {
    "title": "UniqueItems.txt",
    "referenceFiles": [
        "colors"
    ],
    "overview": "This file defines each Unique item and controls their item modifiers. The row order of items should not be changed because it defines their ID value.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "index",
            "description": "Points to a string key value to use as the Unique item's name",
            "type": {
                "type": "text",
                "dataLength": 31,
                "memSize": 0
            }
        },
        {
            "name": "version",
            "description": "Defines which game version to create this item (<100 = Classic mode | 100 = Expansion mode)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "disabled",
            "description": "Boolean Field. If equals 1, this unique is fully disabled and cannot be dropped randomly or explicitly from a treasure class.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "spawnable",
            "description": "Boolean Field. If equals 1, then this item can be rolled as a choice when randomly dropping a unique. If equals 0, then this item cannot be dropped randomly, but can still be drop explicitly from a treasure class.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "disableChronicle",
            "description": "Boolean Field. If equals 1, this unique item will not appear in the chronicle.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "DropConditionCalc",
            "description": "If the evaluated result of this condition is 0, then prevent the unique from being rolled as a choice when randomly dropping a unique.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Treasure Class scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "firstLadderSeason",
            "description": "Integer field. The first ladder season the unique item can be Dropped or created on (inclusive). If blank or 0 then it is available in non-ladder.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "lastLadderSeason",
            "description": "Integer field. The last ladder season the unique item is ladder-only (inclusive). Must be used in conjunction with $!#firstLadderSeason!$.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "rarity",
            "description": "Modifies the chances that this Unique item will spawn compared to the other Unique items. This value acts as a numerator and a denominator. Each $!#rarity!$ value gets summed together to give a total denominator, used for the random roll for the item. For example, if there are 3 possible Unique items, and their $!#rarity!$ values are 3, 5, 7, then their chances to be chosen are 3/15, 5/15, and 7/15 respectively. (The minimum $!#rarity!$ value equals 1) (Only works for games in Expansion mode)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "nolimit",
            "description": "Boolean Field. Requires the $!misc#quest!$ field to be enabled. If equals 1, then this item can be created and will automatically be identified. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
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
            "name": "code",
            "description": "Defines the baseline item code to use for this Unique item (must match the $!armor#code!$, $!weapons#code!$, or $!misc#code!$ field)",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            }
        },
        {
            "name": "carry1",
            "description": "Assigns the Unique item to a group. Players can only carry one item from each group in their inventory.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "cost mult",
            "description": "Multiplicative modifier for the Unique item's buy, sell, and repair costs",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "cost add",
            "description": "Flat integer modification to the Unique item's buy, sell, and repair costs. This is added after the $!#cost mult!$ has modified the costs.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
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
            "name": "flippyfile",
            "description": "An override for the $!armor#flippyfile!$, $!weapons#flippyfile!$, or $!misc#flippyfile!$ field. By default, the Unique item will use what was defined by the baseline item from the $!#code!$ field.",
            "type": {
                "type": "text",
                "dataLength": 31,
                "memSize": 0
            }
        },
        {
            "name": "invfile",
            "description": "An override for the $!armor#invfile!$, $!weapons#invfile!$, or $!misc#invfile!$ field. By default, the Unique item will use what was defined by the baseline item from the $!#code!$ field.",
            "type": {
                "type": "text",
                "dataLength": 31,
                "memSize": 0
            }
        },
        {
            "name": "dropsound",
            "description": "An override for the $!armor#dropsound!$, $!weapons#dropsound!$, or $!misc#dropsound!$ field. By default, the Unique item will use what was defined by the baseline item from the $!#code!$ field.",
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
            "description": "An override for the $!armor#dropsfxframe!$, $!weapons#dropsfxframe!$, or $!misc#dropsfxframe!$ field. By default, the Unique item will use what was defined by the baseline item from the $!#code!$ field.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "usesound",
            "description": "An override for the $!armor#usesound!$, $!weapons#usesound!$, or $!misc#usesound!$ field. By default, the Unique item will use what was defined by the baseline item from the $!#code!$ field.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "sounds",
                "field": "Sound"
            }
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
                "prop9",
                "prop10",
                "prop11",
                "prop12"
            ],
            "description": "Controls the item properties for the Unique item",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "References a $!Properties#code!$ or a $!PropertyGroups#code!$"
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
                "par9",
                "par10",
                "par11",
                "par12"
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
                "min9",
                "min10",
                "min11",
                "min12"
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
                "max9",
                "max10",
                "max11",
                "max12"
            ],
            "description": "The stat's \"max\" value to assign to the related property ($!#prop#!$). Usage depends on the property function (See the $!Properties#func#!$ field)",
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