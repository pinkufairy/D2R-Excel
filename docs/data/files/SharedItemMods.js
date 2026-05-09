// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["SharedItemMods"] = {
    "title": "Shared Item Mods",
    "referenceFiles": [
        "PlayerClass",
        "colors"
    ],
    "notSearchable": true,
    "noHtml": true,
    "guideOnly": true,
    "codeDependency": "automagic",
    "overview": "The item mods files are loaded together and share most fields. These are the shared fields.",
    "fields": [
        {
            "name": "Name",
            "description": "Defines the item affix name.",
            "type": {
                "type": "text",
                "dataLength": 31,
                "memSize": 0
            }
        },
        {
            "name": "version",
            "description": "Defines which game version to use this item affix (<100 = Classic mode | 100 = Expansion mode).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "spawnable",
            "description": "Boolean Field. If equals 1, then this item affix is used as part of the game's randomizer for assigning item modifiers when an item spawns. If equals 0, then this item affix is never used.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "rare",
            "description": "Boolean Field. If equals 1, then this item affix can be used when randomly assigning item modifiers when a rare item spawns. If equals 0, then this item affix is not used for rare items.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "level",
            "description": "The minimum item level required for this item affix to spawn on the item. If the item level is below this value, then the item affix will not spawn on the item.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "maxlevel",
            "description": "The maximum item level required for this item affix to spawn on the item. If the item level is above this value, then the item affix will not spawn on the item.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "levelreq",
            "description": "The minimum character level required to equip an item that has this item affix",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "classspecific",
            "description": "Controls if this item affix should only be used for class specific items. This relies on the class code specified in $!ItemTypes#Class!$, for the specific item.",
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
        },
        {
            "name": "class",
            "description": "Controls which character class is required for the class specific level requirement defined by $!#classlevelreq!$.",
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
        },
        {
            "name": "classlevelreq",
            "description": "The minimum character level required for a specific class in order to equip an item that has this item affix. This relies on the class specified in the $!#class!$ field. If equals null, then the class will default to using the $!#levelreq!$ field.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "frequency",
            "description": "Controls the probability that the affix appears on the item (a higher value means that the item affix will appear on the item more often). This value gets summed together with other $!#frequency!$ values from all possible item affixes that can spawn on the item, and then is used as a denominator value for the randomizer. Whichever item affix is randomly selected will be the one to appear on the item. The formula is calculated as the following: [Item Affix Selected] = [$!#frequency!$] / [Total Frequency]. If the item has a magic level (from $!armor#magic lvl!$, $!weapons#magic lvl!$, or $!misc#magic lvl!$) then the magic level value is multiplied with this value. If equals 0, then this item affix will never appear on an item.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "group",
            "description": "Assigns an item affix to a specific group number. Items cannot spawn with more than 1 item affix with the same group number. This is used to guarantee that certain item affixes do not overlap on the same item. If this field is null, then the group number will default to group 0.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "mod#code",
            "altNames": [
                "mod1code",
                "mod2code",
                "mod3code"
            ],
            "description": "Controls the item properties for the item affix.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "References a $!Properties#code!$ or a $!PropertyGroups#code!$"
            }
        },
        {
            "name": "mod#param",
            "altNames": [
                "mod1param",
                "mod2param",
                "mod3param"
            ],
            "description": "The parameter value associated with the related property ($!#mod#code!$). Usage depends on the property function (See $!Properties#func#!$).",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "A number or references $!skills#skill!$, $!MonType#type!$, or $!states#state!$"
            }
        },
        {
            "name": "mod#min",
            "altNames": [
                "mod1min",
                "mod2min",
                "mod3min"
            ],
            "description": "The min value to assign to the listed related ($!#mod#code!$). Usage depends on the property function (See $!Properties#func#!$).",
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
                "mod2max",
                "mod3max"
            ],
            "description": "The max value to assign to the listed related ($!#mod#code!$). Usage depends on the property function (See $!Properties#func#!$).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "transformcolor",
            "description": "Controls the color change of the item after spawning with this item affix. If empty, then the item affix will not change the item's color.",
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
            "name": "itype#",
            "altNames": [
                "itype1",
                "itype2",
                "itype3",
                "itype4",
                "itype5",
                "itype6",
                "itype7"
            ],
            "description": "Controls what Item Types are allowed to spawn with this item affix.",
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
                "etype3",
                "etype4",
                "etype5"
            ],
            "description": "Controls what Item Types are forbidden to spawn with this item affix.",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 16,
                "file": "ItemTypes",
                "field": "Code"
            }
        },
        {
            "name": "multiply",
            "description": "Multiplicative modifier for the item's buy and sell costs, based on the item affix (Calculated in 1024ths for buy cost and 4096ths for sell cost).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "add",
            "description": "Flat integer modification to the item's buy and sell costs, based on the item affix.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        }
    ]
}