// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["ItemStatCost"] = {
    "title": "ItemStatCost.txt",
    "referenceFiles": [
        "events",
        "enums"
    ],
    "overview": "This file controls the functionalities for each possible stat on a unit. These defined stats are used to form modifiers for the $!Properties!$ and $!PropertyGroups!$ files.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Stat",
            "description": "Defines the unique pointer for this stat, which is used in other files",
            "type": {
                "type": "text",
                "dataLength": 47,
                "memSize": 16
            }
        },
        {
            "name": "Send Other",
            "description": "Boolean Field. If equals 1, then only add the stat to a new monster if the that has no state and has an item mask. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Signed",
            "description": "Boolean Field. If equals 1, then the stat will be treated as a signed integer, meaning that it can be either a positive or negative value. If equals 0, then stat will be treated as an unsigned integer, meaning that it can only be a positive value. This only affects stats with state bits.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Send Bits",
            "description": "Controls how many bits of data for the stat to send to the game client, essentially controlling the max value possible for the stat. Signed values should have less than 32 bits, otherwise they will be treated as unsigned values.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Send Param Bits",
            "description": "Controls how many bits of data for the stat's parameter value to send to the client for a unit. This value is always treated as a signed integer.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "UpdateAnimRate",
            "description": "Boolean Field. If equals 1, then the stat will notify that game to handle and adjust the speed of the unit when the stat changes. If equals 0, then ignore this. This is only checked for stats with states or for specific skill server functions including 30, 61, 71.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Saved",
            "description": "Boolean Field. If equals 1, then this state will be inserted in the change list to be stored in the Character Save file. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "CSvSigned",
            "description": "Boolean Field. If equals 1, then the stat will be saved as a signed integer in the Character Save file. If equals 0, then the stat will be saved as an unsigned integer in the Character Save file. This is only used if the $!#Saved!$ field is enabled.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "CSvBits",
            "description": "Controls how many bits of data for the stat to send to save in the Character Save file. Signed values should have less than 32 bits, otherwise they will be treated as unsigned values. This is only used if the $!#Saved!$ field is enabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "CSvParam",
            "description": "Controls how many bits of data for the stat's parameter value to save in the Character Save file. This value is always treated as a signed integer. This is only used if the $!#Saved!$ field is enabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "fCallback",
            "description": " Boolean Field. If equals 1, then any changes to the stat will call the Callback function which will update the character's states, skills, or item events based on the changed stat value. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "fMin",
            "description": "Boolean Field. If equals 1, then the stat will have a minimum value that cannot be reduced further than that value (See $!#MinAccr!$ field). If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "MinAccr",
            "description": "The minimum value of a stat. This is only used if the $!#fMin!$ field is enabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Encode",
            "description": "Controls how the stat will modify an item's buy, sell, and repair costs. This field uses a code value to select a function to handle the calculations. This field relies on the $!#Add!$, $!#Multiply!$ and $!#ValShift!$ fields. The baseline Stat Value is first modified using the $!#ValShift!$ field to shift the bits. This Stat Value is then used in the calculations by one of the selected functions.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "table": [
                [
                    "Code",
                    "Parameters",
                    "Description"
                ],
                [
                    "0 (or empty)",
                    "$!#Add!$<br>$!#Multiply!$",
                    "Buy Cost += [Stat Value] * [$!#Multiply!$] / 1024 + [$!#Add!$]<br>Sell Cost += [Stat Value] * [$!#Multiply!$] / 1024 + [$!#Add!$]<br>Repair Cost += [Stat Value] * [$!#Multiply!$] / 1024 + [$!#Add!$]"
                ],
                [
                    "1",
                    "",
                    "Use the stat's parameter value to determine the skill ID used. Use the stat's value to determine the skill level. Obtain the $!skills#cost mult!$ and $!skills#cost add!$ values from the skill linked in this stat's parameter. The Stat Value is considered the skill's level.<br>Buy Cost += [Stat Value] * [$!skills#cost mult!$] / 1024 + [$!skills#cost add!$]<br>Sell Cost += [Stat Value] * [$!skills#cost mult!$] / 4096 + [$!skills#cost add!$]<br>Repair Cost += [Stat Value] * [$!skills#cost mult!$] / 1024 + [$!skills#cost add!$]"
                ],
                [
                    "2",
                    "",
                    "Use the stat's parameter value to determine both the skill ID and skill level. Obtain the $!skills#cost mult!$ and $!skills#cost add!$ values from the determined skill ID.<br>Buy Cost += [Stat Value] * [$!skills#cost mult!$] / 1024 + [$!skills#cost add!$]<br>Sell Cost += [Stat Value] * [$!skills#cost mult!$] / 4096 + [$!skills#cost add!$]<br>Repair Cost += [Stat Value] * [$!skills#cost mult!$] / 1024 + [$!skills#cost add!$]"
                ],
                [
                    "3",
                    "",
                    "Same as function 2"
                ],
                [
                    "4",
                    "$!#Add!$<br>$!#Multiply!$",
                    "Obtains the stat's min and max values based on the By Time bit masks and uses them to calculate the average value or Baseline stat value.<br>Buy Cost += [Baseline] * [$!#Multiply!$] / 1024 + [$!#Add!$]<br>Sell Cost += [Baseline] * [$!#Multiply!$] / 1024 + [$!#Add!$]<br>Repair Cost += [Baseline] * [$!#Multiply!$] / 1024 + [$!#Add!$]"
                ]
            ]
        },
        {
            "name": "Add",
            "description": "Used as a possible parameter value for the $!#Encode!$ function. Flat integer modification to the Unique item's buy, sell, and repair costs. This is added after the $!#Multiply!$ field has modified the costs.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Multiply",
            "description": "Used as a possible parameter value for the $!#Encode!$ function. Multiplicative modifier for the item's buy, sell, and repair costs. The way this value is used depends on the $!#Encode!$ function selected.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "ValShift",
            "description": "Used to shift the stat's input value by a number of bits to obtain the actual value when performing calculations (such as for the $!#Encode!$ function).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "1.09-Save Bits",
            "description": "Controls how many bits of data are allocated for the overall size of the stat when saving/reading an item from a Character Save. This value can be treated as a signed or unsigned integer, depending on the stat. This field is only used for items saved in a game version of Patch 1.09d or older.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "1.09-Save Add",
            "description": "Controls how many bits of data are allocated for the stat's value when saving/reading an item from a Character Save. This value is treated as a signed integer. This field is only used for items saved in a game version of Patch 1.09d or older.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Save Bits",
            "description": "Controls how many bits of data are allocated for the overall size of the stat when saving/reading an item from a Character Save. This value can be treated as a signed or unsigned integer, depending on the stat.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Save Add",
            "description": "Controls how many bits of data are allocated for the stat's value when saving/reading an item from a Character Save. This value is treated as a signed integer.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Save Param Bits",
            "description": "Controls how many bits of data for the stat's parameter value to use when saving/reading an item from a Character Save. This value is always treated as an unsigned integer.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "keepzero",
            "description": "Boolean Field. If equals 1, then this stat will remain on the stat change list, when being updated, even if that stat value is 0. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "op",
            "description": "This is the stat operator, used for advanced stat modification when calculating the value of a stat. This can involves using this stat and its value to modify another stat's value. This use a function ID to determine what to calculate.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "table": [
                [
                    "Code",
                    "Parameters",
                    "Description"
                ],
                [
                    "0 (or empty)",
                    "",
                    "No operator. Just add the stat normally"
                ],
                [
                    "1",
                    "$!#op stat#!$",
                    "Percent Operator. Gets the value of $!#op stat#!$ and multiplies it by a percentage increase equal to this stat's value:<br>[$!#op stat#!$] += [$!#op stat#!$] * value / 100"
                ],
                [
                    "2",
                    "$!#op param!$<br>$!#op base!$<br>$!#op stat#!$",
                    "By Level Operator. Gets value of $!#op stat#!$ and uses it as a multiplier with $!#op param!$ as the divisor:<br>[$!#op stat#!$] += [$!#op stat#!$] * [$!#op base!$] << [$!#op param!$]"
                ],
                [
                    "3",
                    "$!#op param!$<br>$!#op base!$<br>$!#op stat#!$",
                    "By Level Percent Operator. Gets value of $!#op stat#!$ and uses it as a multiplier with $!#op param!$ as the divisor. Then it uses this value as a percentage increase to $!#op stat#!$:<br>percent = [$!#op stat#!$] * [$!#op base!$] << [$!#op param!$]<br>[$!#op stat#!$] = [$!#op stat#!$] * percent / 100"
                ],
                [
                    "4",
                    "$!#op param!$<br>$!#op base!$<br>$!#op stat#!$",
                    "By Level Source Operator. Gets value of $!#op stat#!$ for the item (not the unit) and uses it as a multiplier with $!#op param!$ as the divisor:<br>[$!#op stat#!$] += [$!#op stat#!$] * [$!#op base!$] << [$!#op param!$]"
                ],
                [
                    "5",
                    "$!#op param!$<br>$!#op base!$<br>$!#op stat#!$",
                    "By Level Source Percent Operator. Gets value of $!#op stat#!$ for the item (not the unit) and uses it as a multiplier with $!#op param!$ as the divisor. Then it uses this value as a percentage increase to $!#op stat#!$:<br>percent = [$!#op stat#!$] * [$!#op base!$] << [$!#op param!$]<br>[$!#op stat#!$] = [$!#op stat#!$] * percent / 100"
                ],
                [
                    "6",
                    "$!#op stat#!$",
                    "By Time Operator. Gets the value of $!#op stat#!$ and increases it by a delta value which depends on game's time of day. The delta is calculated by using the stat's min and max as a range of increase/decrease and biasing this value with the current progress of game's time of day<br>[$!#op stat#!$] += [$!#op stat#!$] * [delta]"
                ],
                [
                    "7",
                    "$!#op stat#!$",
                    "By Time Percent Operator. Gets the value of $!#op stat#!$ and multiplies it by a percentage. This percentage is determined by obtaining $!#op stat#!$ and a delta value which depends on game's time of day. The delta is calculated by using the stat's min and max as a range of increase/decrease and biasing this value with the current progress of game's time of day<br>percent = [$!#op stat#!$] * [delta]<br>[$!#op stat#!$] = [$!#op stat#!$] * percent / 100"
                ],
                [
                    "8",
                    "$!#op stat#!$",
                    "Energy Operator. This will only apply for stats on the player. Gets the value of $!#op stat#!$ and multiplies it by the related $!charstats#ManaPerMagic!$ field. This is then bit shifted by the baseline Mana bit value, MANA_SHIFT = 8, with the fourths value calculation from the $!charstats#ManaPerMagic!$ field.<br>[$!#op stat#!$] = [$!#op stat#!$] * [$!charstats#ManaPerMagic!$] << (MANA_SHIFT - 2)"
                ],
                [
                    "9",
                    "$!#op stat#!$",
                    "Vitality Operator. This will only apply for stats on the player.<br>If the stat is \"maxstamina\", then the operator will get the value of $!#op stat#!$ and multiply it by the related $!charstats#StaminaPerVitality!$ field. This is then bit shifted by the baseline Stamina bit value, STAMINA_SHIFT = 8, with the fourths value calculation from the $!charstats#StaminaPerVitality!$ field:<br>[$!#op stat#!$] = [$!#op stat#!$] * [$!charstats#StaminaPerVitality!$] << (STAMINA_SHIFT - 2)<br>If the stat is not \"maxstamina\", then the operator will get the value of $!#op stat#!$ and multiply it by the related $!charstats#LifePerVitality!$ field. This is then bit shifted by the baseline Life bit value, LIFE_SHIFT = 8, with the fourths value calculation from the $!charstats#LifePerVitality!$ field:<br>[$!#op stat#!$] = [$!#op stat#!$] * [$!charstats#LifePerVitality!$] << (LIFE_SHIFT - 2)"
                ],
                [
                    "10",
                    "",
                    "Currently not being used. Does nothing."
                ],
                [
                    "11",
                    "$!#op stat#!$",
                    "Player Percent Operator. This will only apply for stats on units. Gets the value of $!#op stat#!$ and multiplies it by a percentage increase equal to this stat's value:<br>[$!#op stat#!$] += [$!#op stat#!$] * value / 100"
                ],
                [
                    "12",
                    "",
                    ""
                ],
                [
                    "13",
                    "$!#op stat#!$",
                    "Item Percent Operator. This will only apply for stats on items. Gets the value of $!#op stat#!$ and multiplies it by a percentage increase equal to this stat's value:<br>[$!#op stat#!$] += [$!#op stat#!$] * value / 100"
                ]
            ]
        },
        {
            "name": "op param",
            "description": "Used as a possible parameter value for the $!#op!$ function.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "op base",
            "description": "Used as a possible parameter value for the $!#op!$ function.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "ItemStatCost",
                "field": "Stat"
            }
        },
        {
            "name": "op stat#",
            "altNames": [
                "op stat1",
                "op stat2",
                "op stat3"
            ],
            "description": "Used as a possible parameter value for the $!#op!$ function.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "ItemStatCost",
                "field": "Stat"
            }
        },
        {
            "name": "direct",
            "description": " Boolean Field. If equals 1, then when the stat is being updated in certain skill functions having to do with state changes, the stat will update in relation to its $!#maxstat!$ field to ensure that it never exceeds that value. If equals 0, then ignore this, and the stat will simply update in these cases. This only applies to skills that use skill server function 65, 66, 81, and 82.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "maxstat",
            "description": "Controls which stat is associated with this stat to be treated as the maximum version of this stat. This means that 2 stats are essentially linked so that there can be a current version of the stat and a maximum version to control the cap of stat's value. This is used for Life, Mana, Stamina, and Durability. This field relies on the $!#direct!$ field to be enabled unless it is being used for the healing potion item spell.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "ItemStatCost",
                "field": "Stat"
            }
        },
        {
            "name": "damagerelated",
            "description": "Boolean Field. If equals 1, then this stat will be exclusive to the item and will not add to the unit. If equals 0, then ignore this, and the stat will always add to the unit. This is typically used for weapons and is important when dual wielding weapons so that when a unit attacks, then one weapon's stats do not stack with another weapon's stats.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "itemevent#",
            "altNames": [
                "itemevent1",
                "itemevent2"
            ],
            "description": "Uses an event that will activate the specified function defined by $!#itemeventfunc#!$. This points to the ID of an event defined in the events.txt file.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "events",
                "field": "event"
            },
            "appendField": {
                "file": "events",
                "field": "event"
            }
        },
        {
            "name": "itemeventfunc#",
            "altNames": [
                "itemeventfunc1",
                "itemeventfunc2"
            ],
            "description": "Specifies the functiion to use after the related item event occurred. Functions are defined by a numeric ID code and correspond to $!enums#Server Event Functions!$. This is only applied based on the $!#itemevent#!$ field definition.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            },
            "appendField": {
                "file": "enums",
                "field": "Server Event Functions"
            }
        },
        {
            "name": "descpriority",
            "description": "Controls how this stat is sorted in item tooltips. This field is compared to the same field on other stats to determine how to order the stats. The higher the value means that the stat will be sorted higher than other stats. If more than 1 stat has the same $!#descpriority!$ value, then they will be listed in the order defined in this data file.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "descfunc",
            "description": "Controls how the stat is displayed in tooltips. Uses an ID value to select a description function to format the string value.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "table": [
                [
                    "Code",
                    "Parameters",
                    "Description"
                ],
                [
                    "0",
                    "",
                    "No display. Do nothing"
                ],
                [
                    "1",
                    "$!#descval!$<br>$!#descstrpos!$<br>$!#descstrneg!$",
                    "Plus or Minus<br>If value > 0, \"+[value] [descstr]\"<br>If value < 0, \"-[value] [descstr]\""
                ],
                [
                    "2",
                    "$!#descval!$<br>$!#descstrpos!$<br>$!#descstrneg!$",
                    "Percent<br>\"[value] [descstr]\""
                ],
                [
                    "3",
                    "$!#descval!$<br>$!#descstrpos!$<br>$!#descstrneg!$",
                    "String<br>\"[value] [descstr]\""
                ],
                [
                    "4",
                    "$!#descval!$<br>$!#descstrpos!$<br>$!#descstrneg!$",
                    "Plus Percent<br>\"+[value]% [descstr]\""
                ],
                [
                    "5",
                    "$!#descval!$<br>$!#descstrpos!$<br>$!#descstrneg!$",
                    "Percent 128<br>\"+[value * 100 / 128]% [descstr]\""
                ],
                [
                    "6",
                    "$!#descval!$<br>$!#descstrpos!$<br>$!#descstrneg!$<br>$!#descstr2!$",
                    "Plus or Minus Per Level<br>If value > 0, \"+[value] [descstr] [descstr2]\"<br>If value < 0, \"-[value] [descstr] [descstr2]\""
                ],
                [
                    "7",
                    "$!#descval!$<br>$!#descstrpos!$<br>$!#descstrneg!$<br>$!#descstr2!$",
                    "Percent Per Level<br>\"[value]% [descstr] [descstr2]\""
                ],
                [
                    "8",
                    "$!#descval!$<br>$!#descstrpos!$<br>$!#descstrneg!$<br>$!#descstr2!$",
                    "Plus Percent Per Level<br>\"+[value]% [descstr] [descstr2]\""
                ],
                [
                    "9",
                    "$!#descval!$<br>$!#descstrpos!$<br>$!#descstrneg!$<br>$!#descstr2!$",
                    "String Per Level<br>\"[value] [descstr] [descstr2]\""
                ],
                [
                    "10",
                    "$!#descval!$<br>$!#descstrpos!$<br>$!#descstrneg!$<br>$!#descstr2!$",
                    "Percent 128 Per Level<br>\"[value * 100 / 128]% [descstr] [descstr2]\""
                ],
                [
                    "11",
                    "",
                    "Repair<br>Uses the string \"ModStre9t\" and inserts the value into this string"
                ],
                [
                    "12",
                    "$!#descval!$<br>$!#descstrpos!$<br>$!#descstrneg!$",
                    "Plus Sub One<br>If value > 1, then use \"+[value] [descstr]\"<br>Else, use \"[value] [descstr]\" or \"-[value] [descstr]\""
                ],
                [
                    "13",
                    "",
                    "Add Class Skill<br>Uses the $!charstats#StrAllSkills!$"
                ],
                [
                    "14",
                    "",
                    "Add Tab Skill<br>Uses $!charstats#StrSkillTab#!$ based on related tab being modified"
                ],
                [
                    "15",
                    "$!#descstrpos!$",
                    "Proc Skill<br>Gets the skill name, skill level, and chance percent to insert into the $!#descstrpos!$ string"
                ],
                [
                    "16",
                    "$!#descstrpos!$<br>$!#descstrneg!$",
                    "Aura<br>Gets the skill name, and uses the stat's value for the skill level and inserts these values into the designated \"descstr\" string"
                ],
                [
                    "17",
                    "$!#descstrpos!$<br>$!#descstrneg!$",
                    "Plus Minus By Time<br>Gets the proper value based on the time of day and inserts this value into the \"descstr\" string<br>Uses the following strings for the second part of the description, depending on the time selected: \"ModStre9d\", \"ModStre9e\", \"ModStre9f\", \"ModStre9g\""
                ],
                [
                    "18",
                    "$!#descstrpos!$<br>$!#descstrneg!$",
                    "(Same as function 17)"
                ],
                [
                    "19",
                    "$!#descstrpos!$<br>$!#descstrneg!$<br>$!#descstr2!$",
                    "Sprintf Num<br>Uses the Sprintf string function with the designated \"descstr\" string and adds $!#descstr2!$ if that value is not empty"
                ],
                [
                    "20",
                    "$!#descval!$<br>$!#descstrpos!$<br>$!#descstrneg!$",
                    "Minus Percent<br>\"[value * -1]% [descstr]\""
                ],
                [
                    "21",
                    "$!#descstrpos!$<br>$!#descstrneg!$<br>$!#descstr2!$",
                    "Minus Percent Per Level<br>\"[value * -1]% [descstr] [descstr2]\"<br>If $!#descstr2!$ is empty, then default to using the \"increaseswithplaylevelX\" string"
                ],
                [
                    "22",
                    "$!#descstrpos!$<br>$!#descstrneg!$",
                    "Versus Monster Percent<br>Uses $!MonType#strplur!$ based on the monster type selected, and inserts this value into the designated \"descstr\" string"
                ],
                [
                    "23",
                    "$!#descstrpos!$<br>$!#descstrneg!$",
                    "Reanimate<br>Obtains the related $!monstats#NameStr!$ string and inserts this string into the designated \"descstr\" string"
                ],
                [
                    "24",
                    "$!#descstrpos!$<br>$!#descstrneg!$",
                    "Charges<br>Obtains the skill, skill level, max charges, and current charges and inserts these values into the designated \"descstr\" string"
                ],
                [
                    "25",
                    "$!#descval!$<br>$!#descstrpos!$<br>$!#descstrneg!$",
                    "Minus<br>If desval equals 1, then use \"+[value * -1] [descstr]\"<br>If desval equals 2, then use \"[descstr] +[value * -1]\""
                ],
                [
                    "26",
                    "$!#descval!$<br>$!#descstrpos!$<br>$!#descstrneg!$<br>$!#descstr2!$",
                    "Minus Per Level<br>(Same as function 25)"
                ],
                [
                    "27",
                    "$!#descstrpos!$<br>$!#descstrneg!$",
                    "Single Skill<br>Obtains the $!skilldesc#str name!$ and the $!charstats#StrClassOnly!$<br>Uses the stat value as the skill level<br>Combines these values into the designated \"descstr\" string"
                ],
                [
                    "28",
                    "$!#descstrpos!$<br>$!#descstrneg!$",
                    "Non Class Skill<br>Obtains the $!skilldesc#str name!$<br>Uses the stat value as the skill level<br>Combines these values into the designated \"descstr\" string"
                ],
                [
                    "29",
                    "$!#descstrpos!$<br>$!#descstrneg!$<br>$!#descstr2!$",
                    "Sprintf num positive<br>Same as function 19, except the it uses the absolute value of [value]"
                ],
                [
                    "30",
                    "",
                    "Single Skill Random"
                ],
                [
                    "31",
                    "",
                    "Non Class Skill"
                ]
            ]
        },
        {
            "name": "descval",
            "description": "Used as a possible parameter value for the $!#descfunc!$ function. This controls the how the value of the stat is displayed.",
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
                    "0",
                    "Do not show the value of the stat"
                ],
                [
                    "1",
                    "Shows the value of the stat at the start of its description"
                ],
                [
                    "2",
                    "Shows the value of the stat at the end of its description"
                ]
            ]
        },
        {
            "name": "descstrpos",
            "description": "Used as a possible parameter value for the $!#descfunc!$ function. This uses a string to display the item stat in a tooltip when its value is positive.",
            "type": {
                "type": "string",
                "dataLength": 255,
                "memSize": 16
            }
        },
        {
            "name": "descstrneg",
            "description": "Used as a possible parameter value for the $!#descfunc!$ function. This uses a string to display the item stat in a tooltip when its value is negative.",
            "type": {
                "type": "string",
                "dataLength": 255,
                "memSize": 16
            }
        },
        {
            "name": "descstr2",
            "description": "Used as a possible parameter value for the $!#descfunc!$ function. This uses a string to append to an item stat's string in a tooltip.",
            "type": {
                "type": "string",
                "dataLength": 255,
                "memSize": 16
            }
        },
        {
            "name": "dgrp",
            "description": "Assigns the stat to a group ID value. If all stats with a matching $!#dgrp!$ value are applied on the unit, then instead of displaying each stat individually, the group description will be applied instead (see $!#dgrpfunc!$ field)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "dgrpfunc",
            "description": "Controls how the shared group of stats is displayed in tooltips. Uses an ID value to select a description function to format the string value. This function IDs are exactly the same as the $!#descfunc!$ field, see that description for more details.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "dgrpval",
            "description": "Used as a possible parameter value for the $!#dgrpfunc!$ function. This controls the how the value of the stat is displayed. (Functions the same as the $!#descval!$ field)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "dgrpstrpos",
            "description": "Used as a possible parameter value for the $!#dgrpfunc!$ function. This uses a string to display the item stat in a tooltip when its value is positive.",
            "type": {
                "type": "string",
                "dataLength": 255,
                "memSize": 16
            }
        },
        {
            "name": "dgrpstrneg",
            "description": "Used as a possible parameter value for the $!#dgrpfunc!$ function. This uses a string to display the item stat in a tooltip when its value is negative.",
            "type": {
                "type": "string",
                "dataLength": 255,
                "memSize": 16
            }
        },
        {
            "name": "dgrpstr2",
            "description": "Used as a possible parameter value for the $!#dgrpfunc!$ function. This uses a string to append to an item stat's string in a tooltip.",
            "type": {
                "type": "string",
                "dataLength": 255,
                "memSize": 16
            }
        },
        {
            "name": "stuff",
            "description": "Used as a bit shift value for handling the conversion of skill IDs and skill levels to bit values for the stat. Controls the numeric range of possible skill IDs and skill levels for charge based items. This value cannot be less than or equal to 0, or greater than 8, otherwise it will default to 6. The row that this value appears in the data file is unrelated, since this is a universally applied value.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "advdisplay",
            "description": "Controls how the stat appears in the Advanced Stats UI",
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
                    "0 (or empty",
                    "The stat will never appear on the Advanced Stats UI"
                ],
                [
                    "1",
                    "The stat will always show on the Advanced Stats UI"
                ],
                [
                    "2",
                    "The stat will only show on the Advanced Stats UI if the value is greater than 0"
                ]
            ]
        }
    ]
}