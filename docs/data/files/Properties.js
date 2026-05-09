// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["Properties"] = {
    "title": "Properties.txt",
    "referenceFiles": [
        "enums"
    ],
    "overview": "This file defines how item modifiers work. It takes a stat defined from $!ItemStatCost!$ and uses a function to handle the stat's \"min\", \"max\" and \"parameter\" values.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "code",
            "description": "Defines the property ID. Used as a reference in other data files (this should not be changed)",
            "type": {
                "type": "text",
                "dataLength": 47,
                "memSize": 16
            }
        },
        {
            "name": "func#",
            "altNames": [
                "func1",
                "func2",
                "func3",
                "func4",
                "func5",
                "func6",
                "func7"
            ],
            "description": "Code function used to define the Property. Uses numeric ID values to define what function to use.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "table": [
                [
                    "Code",
                    "Name",
                    "Parameters",
                    "Description"
                ],
                [
                    "0",
                    "",
                    "",
                    "null"
                ],
                [
                    "1",
                    {
                        "id": "ItemModsSetValueRegular",
                        "text": "ItemModsSetValueRegular"
                    },
                    "$!#stat#!$<br>$!#set#!$",
                    "\u00b7 Modify the stat to be randomly calculated between its \"min\" and \"max\" values<br>\u00b7 Sets the stat value to its \"max\" value if the item is High Quality (Superior)"
                ],
                [
                    "2",
                    {
                        "id": "ItemModsSetValueBaseToMax",
                        "text": "ItemModsSetValueBaseToMax"
                    },
                    "$!#stat#!$<br>$!#set#!$",
                    "Modify the stat to always be set to its \"max\" value"
                ],
                [
                    "3",
                    {
                        "id": "ItemModsSetValueRegular2",
                        "text": "ItemModsSetValueRegular2"
                    },
                    "$!#stat#!$<br>$!#set#!$",
                    "Same as function 1, $!#ItemModsSetValueRegular!$, but consecutive calls of this function will use the same calculated value as the previous call"
                ],
                [
                    "4",
                    {
                        "id": "ItemModsSetValueBaseToMax2",
                        "text": "ItemModsSetValueBaseToMax2"
                    },
                    "$!#stat#!$<br>$!#set#!$",
                    "Same as function 2, $!#ItemModsSetValueBaseToMax!$, but consecutive calls of this function will use the same calculated value as the previous call"
                ],
                [
                    "5",
                    {
                        "id": "ItemModsSetMinDamage",
                        "text": "ItemModsSetMinDamage"
                    },
                    "$!#set#!$",
                    "Sets the minimum damage value for an item"
                ],
                [
                    "6",
                    {
                        "id": "ItemModsSetMaxDamage",
                        "text": "ItemModsSetMaxDamage"
                    },
                    "$!#set#!$",
                    "Sets the maximum damage value for an item (dependent on its minimum value)"
                ],
                [
                    "7",
                    {
                        "id": "ItemModsSetDamagePct",
                        "text": "ItemModsSetDamagePct"
                    },
                    "$!#stat#!$<br>$!#set#!$",
                    "Sets the damage percent of the item based on its percentage damage \"min\" and \"max\" values. If a the item is a weapon and % bonus doesn't change the damage, just set +1 max damage instead"
                ],
                [
                    "8",
                    {
                        "id": "ItemModsSetSpeed",
                        "text": "ItemModsSetSpeed"
                    },
                    "$!#stat#!$<br>$!#set#!$",
                    "Modify the stat to be randomly calculated between its \"min\" and \"max\" values. Consecutive calls of this function will use the same calculated value as the previous call"
                ],
                [
                    "9",
                    {
                        "id": "ItemModsSetSingleSkill",
                        "text": "ItemModsSetSingleSkill"
                    },
                    "$!#stat#!$<br>$!#set#!$",
                    "Consecutive calls of this function will use the same calculated value as the previous call.<br>\u00b7 Used for modifying a single skill level<br>\u00b7 Requires the stat's \"min\" and \"max\" values for the skill's level modification<br>\u00b7 Requires the stat's \"parameter\" value for the skill ID"
                ],
                [
                    "10",
                    {
                        "id": "ItemModsSetTabSkills",
                        "text": "ItemModsSetTabSkills"
                    },
                    "$!#stat#!$<br>$!#set#!$",
                    "Consecutive calls of this function will use the same calculated value as the previous call.<br>\u00b7 Used for modifying the levels of skills from a skill tab<br>\u00b7 The skill tab level modification is defined through the calculated value<br>\u00b7 The skill tab ID is defined through the stat's \"parameter\" value. The stat's \"parameter\" value is defined as the class ID and the number of tabs that the class has:<br>&nbsp;o 0-2 = Amazon (Bow and Crossbow Skills / Javelin and Spear Skills / Passive and Magic Skills)<br>&nbsp;o 3-5 = Sorceress (Fire Spells / Lightning Spells / Cold Spells)<br>&nbsp;o 6-8 = Necromancer (Summoning Spells / Poison and Bone Spels / Curses)<br>&nbsp;o 9-11 = Paladin (Combat Skills / Defensive Auras / Offensive Auras)<br>&nbsp;o 12-14 = Barbarian (Warcries / Combat Masteries / Combat Skills)<br>&nbsp;o 15-17 = Druid (Shape Shifting / Elemental / Summoning)<br>&nbsp;o 18-20 = Assassin (Traps / Martial Arts / Shadow Disciplines)"
                ],
                [
                    "11",
                    {
                        "id": "ItemModsSetSkillOnAttack",
                        "text": "ItemModsSetSkillOnAttack"
                    },
                    "$!#stat#!$<br>$!#set#!$",
                    "\u00b7 Used for item event modifiers to cast a skill<br>\u00b7 Requires the stat's param value as the skill ID<br>\u00b7 Requires the stat's \"min\" value as the percent chance to cast the skill (if 0, then default to 5)<br>\u00b7 Requires the stat's \"max\" value as the skill's level. If that level is 0 then level equals \"<code>clamp(\"item level\" - $!skills#reqlevel!$) / 4 + 1, 1, $!skills#maxlvl!$)</code>\". If that level is below 0 then level equals \"<code>max(1, (\"item level\" - $!skills#reqlevel!$) / max(1, max(1, 99 - $!skills#reqlevel!$) / -level))</code>\""
                ],
                [
                    "12",
                    {
                        "id": "ItemModsSetRandomParam",
                        "text": "ItemModsSetRandomParam"
                    },
                    "$!#stat#!$<br>$!#set#!$",
                    "Uses the stat's \"min\" and \"max\" value as a random selection of the stat's \"parameter\" value"
                ],
                [
                    "13",
                    {
                        "id": "ItemModsSetMaxDurability",
                        "text": "ItemModsSetMaxDurability"
                    },
                    "$!#stat#!$<br>$!#set#!$",
                    "\u00b7 Modify the stat to be randomly calculated between its \"min\" and \"max\" values<br>\u00b7 Sets the stat value to its \"max\" value if the item is High Quality (Superior)<br>\u00b7 Always sets the current durability to its maximum durability after the calculation of the stat value"
                ],
                [
                    "14",
                    {
                        "id": "ItemModsSetSockets",
                        "text": "ItemModsSetSockets"
                    },
                    "",
                    "\u00b7 Determines the number of sockets on an item<br>\u00b7 If the stat has \"min\" and \"max\" values, then calculate a random number of sockets between these values. Otherwise, use the stat's \"parameter\" value as the number of sockets<br>\u00b7 The max number of sockets depends on the stat's \"max\" size, the item's inventory grid size, or the hard cap of 6 sockets maximum"
                ],
                [
                    "15",
                    {
                        "id": "ItemModsSetMin",
                        "text": "ItemModsSetMin"
                    },
                    "$!#stat#!$<br>$!#set#!$",
                    "\u00b7 Always use the stat's \"min\" value<br>\u00b7 If the stat is physical minimum damage, then set the item's minimum damage to the stat's value. Otherwise, simply set the stat's value to its \"min\" value."
                ],
                [
                    "16",
                    {
                        "id": "ItemModsSetMax",
                        "text": "ItemModsSetMax"
                    },
                    "$!#stat#!$<br>$!#set#!$",
                    "\u00b7 Always use the stat's \"max\" value<br>\u00b7 If the stat is physical maximum damage, then set the item's maximum damage to the statss value. Otherwise, simply set the stats value to its \"max\" value."
                ],
                [
                    "17",
                    {
                        "id": "ItemModsSetParam",
                        "text": "ItemModsSetParam"
                    },
                    "$!#stat#!$<br>$!#set#!$",
                    "\u00b7 Use the stat's \"parameter\" value. Otherwise, calculate a random value between the stat's \"min\" and \"max\" value. Otherwise, use 0.\u00b7 If the stat is physical maximum damage, then set the item's maximum damage to the stat's value"
                ],
                [
                    "18",
                    {
                        "id": "ItemModsSetByTime",
                        "text": "ItemModsSetByTime"
                    },
                    "$!#stat#!$",
                    "\u00b7 Modifies the stat based on the current game's time of day, and the stat's preferred time period. The closer the current game's time of day is to the stat's preferred time period, then the stronger the stat's value will be, based on its \"min\" and \"max\" values<br>\u00b7 Requires the stat's \"parameter\" value as the time period. The allowed time periods are:<br>o 0 = Day<br>o 1 = Dusk<br>o 2 = Night<br>o 3 = Dawn"
                ],
                [
                    "19",
                    {
                        "id": "ItemModsSetChargedSkill",
                        "text": "ItemModsSetChargedSkill"
                    },
                    "$!#stat#!$",
                    "\u00b7 Used for creating a stat for a charged skill.<br>\u00b7 Requires the stat's \"parameter\" value as the skill ID<br>\u00b7 Requires the stat's \"min\" value to calculate the value MaxCharges (maximum number of charges)<br>o If that value equals 0, then default to 5 max charges<br>o If that value is less than 0, then equal to the following calculation: \"<code>MaxCharges = |MaxCharges| + |MaxCharges| * [CURRENT ITEM LEVEL] / 8</code>\"<br>o MaxCharges cannot exceed 255<br>\u00b7 Requires the stat's \"max\" value as the skill's level<br>\u00b7 The spawned number of charges is calculated as the following: \"<code>Random(0 and (MaxCharges - MaxCharges / 8)) + MaxCharges / 8 + 1</code>\""
                ],
                [
                    "20",
                    {
                        "id": "ItemModsSetIndestructible",
                        "text": "ItemModsSetIndestructible"
                    },
                    "",
                    "Adds the Indestructible stat to an item"
                ],
                [
                    "21",
                    {
                        "id": "ItemModsSetValueRegPropValParam",
                        "text": "ItemModsSetValueRegPropValParam"
                    },
                    "$!#stat#!$<br>$!#set#!$<br>$!#val#!$",
                    "Modify the stat to be randomly calculated between its \"min\" and \"max\" values and use the Property $!#val#!$ value as the parameter"
                ],
                [
                    "22",
                    {
                        "id": "ItemModsSetValueRegParam",
                        "text": "ItemModsSetValueRegParam"
                    },
                    "$!#stat#!$<br>$!#set#!$",
                    "Modify the stat to be randomly calculated between its \"min\" and \"max\" values and use the stat's \"parameter\" value as the parameter"
                ],
                [
                    "23",
                    {
                        "id": "ItemModsSetEthereal",
                        "text": "ItemModsSetEthereal"
                    },
                    "",
                    "Used to add the Ethereal stat to an item, only if the item has Durability"
                ],
                [
                    "24",
                    {
                        "id": "ItemModsSetParamAndValue",
                        "text": "ItemModsSetParamAndValue"
                    },
                    "$!#stat#!$<br>$!#set#!$",
                    "\u00b7 Modify the stat's value to be randomly calculated between its \"min\" and \"max\" values and use the stat's \"parameter\" value as the parameter<br>\u00b7 Consecutive calls of this function will use the same stat value as the previous call"
                ],
                [
                    "25",
                    {
                        "id": "ItemModsSetRandomPropertyStat",
                        "text": "ItemModsSetRandomPropertyStat"
                    },
                    "$!#stat#!$<br>$!#set#!$",
                    "Select a property index from the stat's \"parameter\" value and choose one of its $!#stat#!$ with a value between the original property's \"min\" and \"max\"."
                ],
                [
                    "36",
                    {
                        "id": "ItemModsSetValueRegPropValParamSwapped",
                        "text": "ItemModsSetValueRegPropValParamSwapped"
                    },
                    "$!#stat#!$<br>$!#set#!$<br>$!#val#!$",
                    "\u00b7 Switches the usage of the Property \"val\" value with the stat's value<br>\u00b7 The Property $!#val#!$ value is used as the stat value<br>\u00b7 The stat's value (based on its \"min\" and \"max\" values) is used at the Property $!#val#!$ value"
                ]
            ]
        },
        {
            "name": "stat#",
            "altNames": [
                "stat1",
                "stat2",
                "stat3",
                "stat4",
                "stat5",
                "stat6",
                "stat7"
            ],
            "description": "Stat applied by the property. Used by the $!#func#!$ field as a possible parameter. A stat is comprised of a \"min\" and \"max\" value which it uses to calculate the actual numeric value. Stats also can have a \"parameter\" value, depending on its function.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "ItemStatCost",
                "field": "Stat"
            }
        },
        {
            "name": "set#",
            "altNames": [
                "set1",
                "set2",
                "set3",
                "set4",
                "set5",
                "set6",
                "set7"
            ],
            "description": "Boolean field. Used by the $!#func#!$ field as a possible parameter. If equals 1, then set the stat value regardless of its current value. If equals 0, then add to the stat value.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "val#",
            "altNames": [
                "val1",
                "val2",
                "val3",
                "val4",
                "val5",
                "val6",
                "val7"
            ],
            "description": "Integer field. sed by the $!#func#!$ field as a possible input parameter for additional function calculations",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "uiRangeType",
            "description": "Range type associated with the property. Is used in the Chronicle when defining the min/max stat values based on the Property's Min/Max and Param values",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            },
            "appendField": {
                "file": "enums",
                "field": "Tooltip Range Type"
            }
        }
    ]
}