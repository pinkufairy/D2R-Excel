// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["cubemain"] = {
    "title": "cubemain.txt",
    "referenceFiles": [
        "PlayerClass"
    ],
    "overview": "This file controls the recipes for the Horadric Cubetems structure.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "description",
            "description": "This is a reference field to define the cube recipe",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "enabled",
            "description": "Boolean field. If equals 1, then the recipe can be used in-game. If equals 0, then the recipe cannot be used in-game.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "firstLadderSeason",
            "description": "Integer field. The first ladder season this cube recipe can be made on (inclusive). If blank or 0 then it is available in non-ladder.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "lastLadderSeason",
            "description": "Integer field. The last ladder season this cube recipe is ladder-only (inclusive). Must be used in conjunction with firstLadderSeason.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "min diff",
            "description": "The minimum game difficulty to use the recipe (0 = All Game Difficulties | 1 = Nightmare and Hell Difficulty only | 2 = Hell Difficulty only)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "version",
            "description": "Defines which game version to use this recipe (0 = Classic mode | 100 = Expansion mode)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "op",
            "description": "Uses a function as an additional input requirement for the recipe",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "table": [
                [
                    "Op ID",
                    "Parameters",
                    "Description"
                ],
                [
                    "(empty)",
                    "",
                    "Do nothing"
                ],
                [
                    "1",
                    "$!#param!$<br>$!#value!$",
                    "Require that the current day of the month is less than $!#param!$ or greater than $!#value!$"
                ],
                [
                    "2",
                    "$!#value!$",
                    "Require that the current day of the week does not equal $!#value!$<br>(0=None, 1=Sunday, 2=Monday, 3=Tuesday, 4=Wednesday, 5=Thursday, 6=Friday, 7=Saturday)"
                ],
                [
                    "3",
                    "$!#param!$<br>$!#value!$",
                    "Require that the player's current stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is greater than $!#value!$"
                ],
                [
                    "4",
                    "$!#param!$<br>$!#value!$",
                    "Require that the player's current stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is less than $!#value!$"
                ],
                [
                    "5",
                    "$!#param!$<br>$!#value!$",
                    "Require that the player's current stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is not equal to $!#value!$"
                ],
                [
                    "6",
                    "$!#param!$<br>$!#value!$",
                    "Require that the player's current stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is equal to $!#value!$"
                ],
                [
                    "7",
                    "$!#param!$<br>$!#value!$",
                    "Require that the player's base stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is greater than $!#value!$"
                ],
                [
                    "8",
                    "$!#param!$<br>$!#value!$",
                    "Require that the player's base stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is less than $!#value!$"
                ],
                [
                    "9",
                    "$!#param!$<br>$!#value!$",
                    "Require that the player's base stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is not equal to $!#value!$"
                ],
                [
                    "10",
                    "$!#param!$<br>$!#value!$",
                    "Require that the player's base stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is equal to $!#value!$"
                ],
                [
                    "11",
                    "$!#param!$<br>$!#value!$",
                    "Require that the player's non-base stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is greater than $!#value!$"
                ],
                [
                    "12",
                    "$!#param!$<br>$!#value!$",
                    "Require that the player's non-base stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is less than $!#value!$"
                ],
                [
                    "13",
                    "$!#param!$<br>$!#value!$",
                    "Require that the player's non-base stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is not equal to $!#value!$"
                ],
                [
                    "14",
                    "$!#param!$<br>$!#value!$",
                    "Require that the player's non-base stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is equal to $!#value!$"
                ],
                [
                    "15",
                    "$!#param!$<br>$!#value!$",
                    "Require that the input item's current stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is greater than $!#value!$"
                ],
                [
                    "16",
                    "$!#param!$<br>$!#value!$",
                    "Require that the input item's current stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is less than $!#value!$"
                ],
                [
                    "17",
                    "$!#param!$<br>$!#value!$",
                    "Require that the input item's current stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is not equal to $!#value!$"
                ],
                [
                    "18",
                    "$!#param!$<br>$!#value!$",
                    "Require that the input item's current stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is equal to $!#value!$"
                ],
                [
                    "19",
                    "$!#param!$<br>$!#value!$",
                    "Require that the input item's base stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is greater than $!#value!$"
                ],
                [
                    "20",
                    "$!#param!$<br>$!#value!$",
                    "Require that the input item's base stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is less than $!#value!$"
                ],
                [
                    "21",
                    "$!#param!$<br>$!#value!$",
                    "Require that the input item's base stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is not equal to $!#value!$"
                ],
                [
                    "22",
                    "$!#param!$<br>$!#value!$",
                    "Require that the input item's base stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is equal to $!#value!$"
                ],
                [
                    "23",
                    "$!#param!$<br>$!#value!$",
                    "Require that the input item's non-base stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is greater than $!#value!$"
                ],
                [
                    "24",
                    "$!#param!$<br>$!#value!$",
                    "Require that the input item's non-base stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is less than $!#value!$"
                ],
                [
                    "25",
                    "$!#param!$<br>$!#value!$",
                    "Require that the input item's non-base stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is not equal to $!#value!$"
                ],
                [
                    "26",
                    "$!#param!$<br>$!#value!$",
                    "Require that the input item's non-base stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is equal to $!#value!$"
                ],
                [
                    "27",
                    "$!#value!$",
                    "Require that the item's Mod Class is not equal to $!#value!$. An item's Mod Class value can be the item's unique ID or quality type, depending on the case."
                ],
                [
                    "28",
                    "",
                    "Checks that the item has the $!armor#quest!$ and $!armor#questdiffcheck!$ flag (includes $!weapons!$ and $!misc!$), then ensures that the item's quest difficulty is greater than the game's difficulty level"
                ]
            ]
        },
        {
            "name": "param",
            "description": "Integer value used as a possible parameter for the \"op\" function",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "value",
            "description": "Integer value used as a possible parameter for the \"op\" function",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "class",
            "description": "Defines the recipe to be only usable by a defined class.",
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
            "name": "numinputs",
            "description": "Controls the number of items that need to be inside the cube for the recipe",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "input #",
            "altNames": [
                "input 1",
                "input 2",
                "input 3",
                "input 4",
                "input 5",
                "input 6",
                "input 7"
            ],
            "description": "Controls what items are required for the recipe. Uses the item's unique code. Users can also add input modifiers by adding a comma \",\" to the input and using a code.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "References an $!ItemTypes#ItemType!$, item code, $!UniqueItems#index!$, $!Sets#index!$, or one of the modifiers described below"
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "any",
                    "Any item"
                ],
                [
                    "qty=#",
                    "The number (#) of this item type required for the recipe"
                ],
                [
                    "low",
                    "Low Quality"
                ],
                [
                    "nor",
                    "Normal Quality"
                ],
                [
                    "hiq",
                    "High Quality (Superior)"
                ],
                [
                    "mag",
                    "Magic Item"
                ],
                [
                    "set",
                    "Set Item"
                ],
                [
                    "rar",
                    "Rare Item"
                ],
                [
                    "uni",
                    "Unique Item"
                ],
                [
                    "crf",
                    "Crafted Item"
                ],
                [
                    "tmp",
                    "Tempered Item"
                ],
                [
                    "nos",
                    "Item with no sockets"
                ],
                [
                    "sock=#",
                    "Item with sockets, where # defines the number of sockets"
                ],
                [
                    "noe",
                    "Item that is not Ethereal"
                ],
                [
                    "eth",
                    "Item that is Ethereal"
                ],
                [
                    "upg",
                    "Item that allows Upgrades"
                ],
                [
                    "bas",
                    "Basic Item"
                ],
                [
                    "exc",
                    "Exceptional Item"
                ],
                [
                    "eli",
                    "Elite Item"
                ],
                [
                    "nru",
                    "Item is not a Rune Word"
                ],
                [
                    "id",
                    "Item is identified"
                ]
            ]
        },
        {
            "name": "output",
            "altNames": [
                "output b",
                "output c"
            ],
            "description": "Controls an output item. Uses the item's unique code. Users can also add output modifiers by adding a comma \",\" to the output and using a code.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "References an $!ItemTypes#ItemType!$, item code, $!UniqueItems#index!$, $!Sets#index!$, or one of the modifiers described below"
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "Cow Portal",
                    "Special code to create the Portal to the Moo Moo Farm"
                ],
                [
                    "Pandemonium Portal",
                    "Special code to randomly create 1 of the 3 Pandemonium Portals: (The Matron's Den / The Forgotten Sands / The Furnace of Pain) (Does not create duplicate portals in the same game)"
                ],
                [
                    "Pandemonium Finale Portal",
                    "Special code to create the Portal to Uber Tristram"
                ],
                [
                    "Red Portal",
                    "Special code to create a permanent Red Portal to a Level ID.<br>The Level ID is determined by the output \"lvl=#\" code.<br>A max amount of portals that can be created by this recipe is determined by the output \"qty=#\""
                ],
                [
                    "usetype",
                    "Use the same item type as $!#input 1!$ for the output item's type"
                ],
                [
                    "useitem",
                    "Use the item from $!#input 1!$ as the output item"
                ],
                [
                    "qty=#",
                    "The number (#) of this item type created"
                ],
                [
                    "pre=#",
                    "Force the output item to have an item prefix, where # equals the ID of the prefix (see the row count on $!MagicPrefix!$)"
                ],
                [
                    "suf=#",
                    "Force the output item to have an item suffix, where # equals the ID of the suffix (see the row count on $!MagicSuffix!$)"
                ],
                [
                    "low",
                    "Low Quality Item"
                ],
                [
                    "nor",
                    "Normal Item"
                ],
                [
                    "hiq",
                    "High Quality Item (Superior)"
                ],
                [
                    "mag",
                    "Magic Item"
                ],
                [
                    "set",
                    "Set Item"
                ],
                [
                    "rar",
                    "Rare Item"
                ],
                [
                    "uni",
                    "Unique Item"
                ],
                [
                    "crf",
                    "Crafted Item"
                ],
                [
                    "tmp",
                    "Tempered Item"
                ],
                [
                    "eth",
                    "Ethereal Item"
                ],
                [
                    "sock",
                    "Item with sockets, where # defines the number of sockets"
                ],
                [
                    "mod",
                    "Use the item modifiers from $!#input 1!$ as the output item's modifiers"
                ],
                [
                    "uns",
                    "Destroy all gems/runes/jewels in the item's sockets"
                ],
                [
                    "rem",
                    "Remove all gems/runes/jewels in the item's sockets"
                ],
                [
                    "reg",
                    "If the function has \"usetype\" and if the item is a Unique, then regenerate/reroll the Unique"
                ],
                [
                    "exc",
                    "Exceptional Item"
                ],
                [
                    "eli",
                    "Elite Item"
                ],
                [
                    "rep",
                    "Repair the Item"
                ],
                [
                    "rch",
                    "Recharge all of the skill charges on the Item"
                ],
                [
                    "lvl=#",
                    "A parameter for other output modifiers."
                ]
            ]
        },
        {
            "name": "lvl",
            "altNames": [
                "b lvl",
                "c lvl"
            ],
            "description": "Forces the output item level to be a specific level. If this field is used, then ignore the $!#plvl!$ and $!#ilvl!$ fields.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "plvl",
            "altNames": [
                "b plvl",
                "c plvl"
            ],
            "description": "This is a numeric ratio that gets multiplied with the current player's level, to add to the output item's level requirement",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "ilvl",
            "altNames": [
                "b ilvl",
                "c ilvl"
            ],
            "description": "This is a numeric ratio that gets multiplied with $!#input 1!$ item's level, to add to the output item's level requirement",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "mod #",
            "altNames": [
                "mod 1",
                "mod 2",
                "mod 3",
                "mod 4",
                "mod 5",
                "b mod 1",
                "b mod 2",
                "b mod 3",
                "b mod 4",
                "b mod 5",
                "c mod 1",
                "c mod 2",
                "c mod 3",
                "c mod 4",
                "c mod 5"
            ],
            "description": "Controls the output item properties",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Reference of $!Properties#code!$ or $!PropertyGroups#code!$"
            }
        },
        {
            "name": "mod # chance",
            "altNames": [
                "mod 1 chance",
                "mod 2 chance",
                "mod 3 chance",
                "mod 4 chance",
                "mod 5 chance",
                "b mod 1 chance",
                "b mod 2 chance",
                "b mod 3 chance",
                "b mod 4 chance",
                "b mod 5 chance",
                "c mod 1 chance",
                "c mod 2 chance",
                "c mod 3 chance",
                "c mod 4 chance",
                "c mod 5 chance"
            ],
            "description": "The percent chance that the property will be assigned. If this equals 0, then the Property will always be assigned.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "mod # param",
            "altNames": [
                "mod 1 param",
                "mod 2 param",
                "mod 3 param",
                "mod 4 param",
                "mod 5 param",
                "b mod 1 param",
                "b mod 2 param",
                "b mod 3 param",
                "b mod 4 param",
                "b mod 5 param",
                "c mod 1 param",
                "c mod 2 param",
                "c mod 3 param",
                "c mod 4 param",
                "c mod 5 param"
            ],
            "description": "The \"parameter\" value associated with the listed property (mod). Usage depends on the property function (See $!Properties#func#!$)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "mod # min",
            "altNames": [
                "mod 1 min",
                "mod 2 min",
                "mod 3 min",
                "mod 4 min",
                "mod 5 min",
                "b mod 1 min",
                "b mod 2 min",
                "b mod 3 min",
                "b mod 4 min",
                "b mod 5 min",
                "c mod 1 min",
                "c mod 2 min",
                "c mod 3 min",
                "c mod 4 min",
                "c mod 5 min"
            ],
            "description": "The \"min\" value to assign to the listed property (mod). Usage depends on the property function (See $!Properties#func#!$)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "mod # max",
            "altNames": [
                "mod 1 max",
                "mod 2 max",
                "mod 3 max",
                "mod 4 max",
                "mod 5 max",
                "b mod 1 max",
                "b mod 2 max",
                "b mod 3 max",
                "b mod 4 max",
                "b mod 5 max",
                "c mod 1 max",
                "c mod 2 max",
                "c mod 3 max",
                "c mod 4 max",
                "c mod 5 max"
            ],
            "description": "The \"max\" value to assign to the listed property (mod). Usage depends on the property function (See $!Properties#func#!$)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        }
    ]
}