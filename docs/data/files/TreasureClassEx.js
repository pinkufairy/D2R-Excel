// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["TreasureClassEx"] = {
    "title": "TreasureClassEx.txt",
    "referenceFiles": [
        "enums"
    ],
    "overview": "This file controls the Treasure Class linked to a monster drop. Treasure Classes are groups of item types and their chances of dropping from a monster.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Treasure Class",
            "description": "Defines the unique Treasure Class ID, that is referenced in other files.",
            "type": {
                "type": "text",
                "dataLength": 48,
                "memSize": 0
            }
        },
        {
            "name": "group",
            "description": "Assigns the Treasure Class to a group ID value, which will connect this Treasure Class with other Treasure Classes, as a potential Treasure Class to use for an itemdrop. When determining which Treasure Class to use for an item drop, the game will iterate through all Treasure Classes that share the same group. This field works with the $!#level!$ field to determine an ideal Treasure Class to use for the monster drop. Treasure Classes that share the same group should be in contiguous order.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "level",
            "description": "Defines the level of a Treasure Class. Monsters who have a Treasure Class will pick the Treasure Class that a level value that is less than or equal to the monster's level. This is ignored for Boss monsters unless that Boss monster is desecrated.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "Picks",
            "description": "Controls how to handle the calculations for item drops. If this value is positive, then this value will control how many item drop chances will be rolled for the Treasure Class using the $!#Prob#!$ fields as probability values. If this value is negative, then this value functions as the total guaranteed quantity of item drops from the Treasure Class, and each $!#Prob#!$ field now defines the quantity of items generated from its related $!#Item#!$ field. If this field is empty, then default to a value of 1.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Unique",
            "description": "Modifies the item ratio drop for a Unique Quality item. A higher value means a better chance of being chosen. (See $!itemratio!$ for an explanation for how the Item Quality is chosen)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "Set",
            "description": "Modifies the item ratio drop for a Set Quality item. A higher value means a better chance of being chosen. (See $!itemratio!$ for an explanation for how the Item Quality is chosen)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "Rare",
            "description": "Modifies the item ratio drop for a Rare Quality item. A higher value means a better chance of being chosen. (See $!itemratio!$ for an explanation for how the Item Quality is chosen)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "Magic",
            "description": "Modifies the item ratio drop for a Magic Quality item. A higher value means a better chance of being chosen. (See $!itemratio!$ for an explanation for how the Item Quality is chosen)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "NoDrop",
            "description": "Controls the probability of no item dropping by the Treasure Class. The higher this value, then the more likely no item will drop from the monster. This can be automatically be affected by the number of players currently in the game.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Item#",
            "altNames": [
                "Item1",
                "Item2",
                "Item3",
                "Item4",
                "Item5",
                "Item6",
                "Item7",
                "Item8",
                "Item9",
                "Item10"
            ],
            "description": "Defines an entry in the treasure class. This can be a specific item code, another $!#Treasure Class!$, a $!UniqueItems#index!$, or a $!SetItems#index!$. Linking another Treasure Class in this field means that there is a chance to use that Treasure Class group of items which the game will then calculate a selection from that Treasure Class, and so on. Additional modifiers can also be defined, separated by a comma \",\". The modifier must have an equal sign \"=\" then a value. For example \"gld,mul=1280\"",
            "type": {
                "type": "text",
                "dataLength": 64,
                "memSize": 0
            },
            "table": [
                [
                    "Modifier",
                    "Description"
                ],
                [
                    "mul",
                    "Modify the \"spec mod\". For example, this modifies the amount of gold dropped or the specific unique or set index of an item."
                ],
                [
                    "cu",
                    "Modify chance to be a unique item."
                ],
                [
                    "cs",
                    "Modify chance to be a set item."
                ],
                [
                    "cr",
                    "Modify chance to be a rare item."
                ],
                [
                    "cm",
                    "Modify chance to be a magic item."
                ],
                [
                    "ce",
                    "Modify chance to be an ethereal item."
                ],
                [
                    "cg",
                    "Modify chance to be a socketed item."
                ],
                [
                    "ma",
                    "Modify the \"spec mod\". For example, this modifies the amount of gold dropped or the specific unique or set index of an item."
                ],
                [
                    "mg",
                    "Modify the \"spec mod\". For example, this modifies the amount of gold dropped or the specific unique or set index of an item."
                ]
            ]
        },
        {
            "name": "Prob#",
            "altNames": [
                "Prob1",
                "Prob2",
                "Prob3",
                "Prob4",
                "Prob5",
                "Prob6",
                "Prob7",
                "Prob8",
                "Prob9",
                "Prob10"
            ],
            "description": "The individual probability for each related $!#Item#!$ drop. The higher this value, then the more likely the $!#Item#!$ field will be chosen. The chance a drop is picked is calculated by summing all $!#Prob#!$ field values and the $!#NoDrop!$ value for a total denominator value, and then having each $!#Prob#!$ value and the $!#NoDrop!$ value rolling their chance out of the total denominator value for a drop.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "ConditionCalc",
            "description": "If the evaluated result of this condition is 0, then prevent this treasure class from being rolled. If this is a sub-treasure class, its $!#Prob#!$ is completely removed from the roll.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Treasure Class scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "firstLadderSeason",
            "description": "Integer field. If this has a value, it will only roll in ladder games starting at the season specified (inclusive). If blank or 0 then it will roll in ladder and non-ladder.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "lastLadderSeason",
            "description": "Integer field. The last ladder season the treasure class is ladder-only (inclusive). Must be used in conjunction with $!#firstLadderSeason!$.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "noAlwaysSpawn",
            "description": "Boolean field. If equals 1, then this treasure class will roll normally when being forced to always drop, like with the Find Item skill. If 0 then this treasure class will always drop an item when forced to.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "QuestFlag",
            "description": "Controls what quest record that the player needs to have completed before this treasure class can be rolled, while playing in Classic Mode. Each quest can have multiple quest records, and this field is looking for a specific quest record from a quest. If this is a sub-treasure class, its $!#Prob#!$ is completely removed from the roll.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            },
            "appendField": {
                "file": "enums",
                "field": "Quest Flags"
            }
        },
        {
            "name": "QuestFlagEx",
            "description": "Controls what quest record that the player needs to have completed before this treasure class can be rolled, while playing in Expansion Mode. Each quest can have multiple quest records, and this field is looking for a specific quest record from a quest. If this is a sub-treasure class, its $!#Prob#!$ is completely removed from the roll.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            },
            "appendField": {
                "file": "enums",
                "field": "Quest Flags"
            }
        }
    ]
}