// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["hireling"] = {
    "title": "hireling.txt",
    "referenceFiles": [
        "PlayerClass",
        "MonMode"
    ],
    "overview": "This file controls the unit statistics for player mercenaries and their related functions.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Hireling",
            "description": "This is a reference field to define the Hireling name",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "*SubType",
            "description": "Comment field describing their loadout",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Version",
            "description": "Defines which game version to use this hireling (0 = Classic mode | 100 = Expansion mode)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "Id",
            "description": "The unique identification number to define each hireling type",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Class",
            "description": "This refers to the index in $!monstats!$ for the base type of unit to use for the hireling",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Act",
            "description": "The Act that the hireling belongs to (values 1 to 5 equal Act 1 to Act 5, respectively)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Difficulty",
            "description": "The difficulty mode associated with the hireling (1 = Normal | 2 = Nightmare | 3 = Hell)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Level",
            "description": "The starting level of the unit",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Seller",
            "description": "This refers to the index in $!monstats!$ which defines the unit NPC that sells this hireling",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "NameFirst",
            "altNames": [
                "NameLast"
            ],
            "description": "Defines a string key which the game uses as a sequential range of string IDs from $!#NameFirst!$ to $!#NameLast!$ to randomly generate as hireling names. (Max name length is 48 characters)",
            "type": {
                "type": "text",
                "dataLength": 48,
                "memSize": 0
            }
        },
        {
            "name": "Gold",
            "description": "The initial cost of the hireling. This is used in the following calculation to generate the full hire price: Cost = [$!#Gold!$] * (100 + 15 * [Difference of Current Level and $!#Level!$]) / 100",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Exp/Lvl",
            "description": "This modifier is used in the following calculation to determine the amount of Experience need for the hireling's next level: [Current Level] + [Current Level] * [Current Level + 1] * [$!#Exp/Lvl!$]",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "HP",
            "description": "The starting amount of Life at base Level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "HP/Lvl",
            "description": "The amount of Life gained per Level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Defense",
            "description": "The starting amount of Defense at base Level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Def/Lvl",
            "description": "The amount of Defense gained per Level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Str",
            "description": "The starting amount of Strength at base Level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Str/Lvl",
            "description": "The amount of Strength gained per Level (Calculated in 8ths)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Dex",
            "description": "The starting amount of Dexterity at base Level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Dex/Lvl",
            "description": "The amount of Dexterity gained per Level (Calculated in 8ths)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "AR",
            "description": "The starting amount of Attack Rating at base Level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "AR/Lvl",
            "description": "The amount of Attack Rating gained per Level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Dmg-Min",
            "description": "The starting amount of minimum Physical Damage for attacks",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Dmg-Max",
            "description": "The starting amount of maximum Physical Damage for attacks",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Dmg/Lvl",
            "description": "The amount of Physical Damage gained per level, to be added to $!#Dmg-Min!$ and $!#Dmg-Max!$ (Calculated in 8ths)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "ResistFire",
            "description": "The starting amount of Fire Resistance at base Level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "ResistFire/Lvl",
            "description": "The amount of Fire Resistance gained per Level (Calculated in 4ths)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "ResistCold",
            "description": "The starting amount of Cold Resistance at base Level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "ResistCold/Lvl",
            "description": "The amount of Cold Resistance gained per Level (Calculated in 4ths)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "ResistLightning",
            "description": "The starting amount of Lightning Resistance at base Level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "ResistLightning/Lvl",
            "description": "The amount of Lightning Resistance gained per Level (Calculated in 4ths)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "ResistPoison",
            "description": "The starting amount of Poison Resistance at base Level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "ResistPoison/Lvl",
            "description": "The amount of Poison Resistance gained per Level (Calculated in 4ths)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "HireDesc",
            "description": "This accepts a string key, which is used to display as the special description of the hireling in the hire UI window",
            "type": {
                "type": "string",
                "dataLength": 255,
                "memSize": 16
            }
        },
        {
            "name": "DefaultChance",
            "description": "This is the chance for the hireling to attack with their weapon instead of using a Skill. All Chance values are summed together as a denominator value for a random roll to determine which skill to use.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Skill#",
            "altNames": [
                "Skill1",
                "Skill2",
                "Skill3",
                "Skill4",
                "Skill5",
                "Skill6"
            ],
            "description": "This gives the hireling a Skill to use (requires $!#Mode#!$, $!#Chance#!$, $!#ChancePerLvl#!$)",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "skills",
                "field": "skill"
            }
        },
        {
            "name": "Mode#",
            "altNames": [
                "Mode1",
                "Mode2",
                "Mode3",
                "Mode4",
                "Mode5",
                "Mode6"
            ],
            "description": "Uses a monster mode to determine the hireling's behavior when using the related Skill (Corresponds to $!MonMode#name!$, use the numeric ID)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "appendField": {
                "file": "MonMode",
                "field": "name"
            }
        },
        {
            "name": "Chance#",
            "altNames": [
                "Chance1",
                "Chance2",
                "Chance3",
                "Chance4",
                "Chance5",
                "Chance6"
            ],
            "description": "This is the base chance for the hireling to use the related Skill. All Chance values are summed together as a denominator value for a random roll to determine which skill to use.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "ChancePerLvl#",
            "altNames": [
                "ChancePerLvl1",
                "ChancePerLvl2",
                "ChancePerLvl3",
                "ChancePerLvl4",
                "ChancePerLvl5",
                "ChancePerLvl6"
            ],
            "description": "This is the chance for the hireling to use the related Skill, affected by the difference in the hireling's current Level and the hireling's $!#Level!$ field. All Chance values are summed together as a denominator value for a random roll to determine which skill to use. Each skill Chance is calculated with the following formula: [$!#Chance#!$] + [$!#ChancePerLvl#!$] * [Difference of Current Level and $!#Level!$] / 4",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Level#",
            "altNames": [
                "Level1",
                "Level2",
                "Level3",
                "Level4",
                "Level5",
                "Level6"
            ],
            "description": "The starting Level for the related Skill.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "LvlPerLvl#",
            "altNames": [
                "LvlPerLvl1",
                "LvlPerLvl2",
                "LvlPerLvl3",
                "LvlPerLvl4",
                "LvlPerLvl5",
                "LvlPerLvl6"
            ],
            "description": "A modifier to increase the related Skill level for every Level gained. This is used in the following calculated to determine the current skill level: [Current Skill Level] = FLOOR([$!#Level#!$] + (([$!#LvlPerLvl#!$] * [Difference of Current Level and $!#Level!$]) / 32))",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "HiringMaxLevelDifference",
            "description": "This is used to generate a range with this value plus and minus with the player's current Level. In the hiring UI window, hirelings start with a random Level that is between this range.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "resurrectcostmultiplier",
            "description": "A modifier used to calculate the hireling's current resurrect cost. Used in the following formula: [Resurrect Cost] = [Current Level] * [Current Level] / [$!#resurrectcostdivisor!$] * [$!#resurrectcostmultiplier!$]",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "resurrectcostdivisor",
            "description": "A modifier used to calculate the hireling's current resurrect cost. Used in the following formula: [Resurrect Cost] = [Current Level] * [Current Level] / [$!#resurrectcostdivisor!$] * [$!#resurrectcostmultiplier!$]",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "resurrectcostmax",
            "description": "This is the maximum Gold cost to resurrect this hireling",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "equivalentcharclass",
            "description": "Determines what class this hireling is treated like under the hood when calculating skill level bonuses and gear restrictions.",
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
        }
    ]
}