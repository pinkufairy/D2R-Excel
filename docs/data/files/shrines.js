// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["shrines"] = {
    "title": "shrines.txt",
    "overview": "This file controls the functionalities of shrine objects found in area levels.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Name",
            "description": "Name of the shrine",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Code",
            "description": "Code function used to define the Shrine's function. Uses ID values to define what function to use.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "table": [
                [
                    "Code ID",
                    "Parameters",
                    "Description"
                ],
                [
                    "0",
                    "",
                    "None"
                ],
                [
                    "1",
                    "",
                    "Gain full Life and Mana"
                ],
                [
                    "2",
                    "",
                    "Gain full Life"
                ],
                [
                    "3",
                    "",
                    "Gain full Mana"
                ],
                [
                    "4",
                    "$!#Arg0!$ = Life percent consumed<br>$!#Arg1!$ = Mana percent added",
                    "Exchange your current Life to restore Mana"
                ],
                [
                    "5",
                    "$!#Arg0!$ = Mana percent consumed<br>$!#Arg1!$ = Life percent added",
                    "Exchange your current Mana to restore Life"
                ],
                [
                    "6",
                    "$!#Arg0!$ = Defense percent",
                    "Increases Defense"
                ],
                [
                    "7",
                    "$!#Arg0!$ = Attack Rating percent<br>$!#Arg1!$ = Physical Damage percent",
                    "Increases Physical Damage and Attack Rating"
                ],
                [
                    "8",
                    "$!#Arg0!$ = Resist Fire percent",
                    "Increases Fire Resistance"
                ],
                [
                    "9",
                    "$!#Arg0!$ = Resist Cold percent",
                    "Increases Cold Resistance"
                ],
                [
                    "10",
                    "$!#Arg0!$ = Resist Lightning percent",
                    "Increases Lightning Resistance"
                ],
                [
                    "11",
                    "$!#Arg0!$ = Resist Poison percent",
                    "Increases Poison Resistance"
                ],
                [
                    "12",
                    "$!#Arg0!$ = Bonus Skill Levels",
                    "Increases all Skill levels"
                ],
                [
                    "13",
                    "$!#Arg0!$ = Mana Recharge percent",
                    "Increases Mana Recharge Rate"
                ],
                [
                    "14",
                    "$!#Arg0!$ = Stamina percent",
                    "Gain infinite Stamina"
                ],
                [
                    "15",
                    "$!#Arg0!$ = Bonus Experience percent",
                    "Temporarily gain bonus Experience from kills"
                ],
                [
                    "16",
                    "",
                    "Temporarily reverse your character's Name (Not Used)"
                ],
                [
                    "17",
                    "",
                    "Create a neutral Town Portal back to the current Act Town"
                ],
                [
                    "18",
                    "",
                    "Randomly select a gem in your inventory and upgrade its level (Otherwise, create a random chipped gem)"
                ],
                [
                    "19",
                    "$!#Arg0!$ = Life percent damage<br>$!#Arg1!$ = Range to find units",
                    "Release a nova of fireballs that cause any player or monster to lose a percentage of Life"
                ],
                [
                    "20",
                    "",
                    "Causes the nearest monster to upgrade a Unique or Champion type"
                ],
                [
                    "21",
                    "$!#Arg0!$ = Minimum potions<br>$!#Arg1!$ = Maximum potions",
                    "Deal Fire damage to nearby monsters and create a random number of Exploding Potions"
                ],
                [
                    "22",
                    "$!#Arg0!$ = Minimum potions<br>$!#Arg1!$ = Maximum potions",
                    "Create Poison Gas that damages nearby monsters and create a random number of Choking Gas Potions"
                ]
            ]
        },
        {
            "name": "Arg#",
            "altNames": [
                "Arg0",
                "Arg1"
            ],
            "description": "Integer value used as a possible parameter for the $!#Code!$ function",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Duration in frames",
            "description": "Duration of the effects of the Shrine (Calculated in Frames, where 25 Frames = 1 Second)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "reset time in minutes",
            "description": "Controls the amount of time before the Shrine is available to use again. Each value of 1 equals 1200 Frames or 48 seconds. A value of 0 means that the Shrine is a one-time use.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "StringName",
            "description": "Uses a string to display as the Shrine's name",
            "type": {
                "type": "string",
                "dataLength": 255,
                "memSize": 16
            }
        },
        {
            "name": "StringPhrase",
            "description": "Uses a string to display as the Shrine's activation phrase when it is used",
            "type": {
                "type": "string",
                "dataLength": 255,
                "memSize": 16
            }
        },
        {
            "name": "effectclass",
            "description": "Used to define the Shrine's archetype which is involved with calculating region stats",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "LevelMin",
            "description": "Define the earliest area level where the Shrine can spawn. Corresponds to an index for an area level from $!Levels!$",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        }
    ]
}