// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["skilldesc"] = {
    "title": "skilldesc.txt",
    "referenceFiles": [
        "ElemTypes"
    ],
    "overview": "This file controls a skill's tooltip description and how it is displayed on the Skill Tree.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "skilldesc",
            "description": "The name of the skill description, as a reference for associated Data files",
            "type": {
                "type": "text",
                "dataLength": 47,
                "memSize": 16
            }
        },
        {
            "name": "SkillPage",
            "description": "Determines which page on the Skill tree to display the skill",
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
                    "Do not display on any skill tree page"
                ],
                [
                    "1",
                    "Skill Tree Page 1"
                ],
                [
                    "2",
                    "Skill Tree Page 2"
                ],
                [
                    "3",
                    "Skill Tree Page 3"
                ]
            ]
        },
        {
            "name": "SkillRow",
            "description": "Determines which row on the Skill tree page to display the skill",
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
                    "Do not display on the skill tree page"
                ],
                [
                    "1",
                    "Row 1"
                ],
                [
                    "2",
                    "Row 2"
                ],
                [
                    "3",
                    "Row 3"
                ],
                [
                    "4",
                    "Row 4"
                ],
                [
                    "5",
                    "Row 5"
                ],
                [
                    "6",
                    "Row 6"
                ]
            ]
        },
        {
            "name": "SkillColumn",
            "description": "Determines which column on the Skill tree page to display the skill",
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
                    "Do not display on any skill tree page"
                ],
                [
                    "1",
                    "Left Column"
                ],
                [
                    "2",
                    "Middle Column"
                ],
                [
                    "3",
                    "Right Column"
                ]
            ]
        },
        {
            "name": "ListRow",
            "description": "Determines which row the skill will be listed in, for the skill select UI.",
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
                    "Common Skill Row"
                ],
                [
                    "1",
                    "Skill Tree 1 Row"
                ],
                [
                    "2",
                    "Skill Tree 2 Row"
                ],
                [
                    "3",
                    "Skill Tree 3 Row"
                ],
                [
                    "(Other)",
                    "Skill will not appear in the Skill Selection UI"
                ]
            ]
        },
        {
            "name": "IconCel",
            "description": "Determines the icon asset for displaying the skill. This requires an ID value based on the skillicon files. Class specific skills use their designated class skillicon files (controlled by the $!skills#charclass!$), and non-class skills use the global skillicon file. This will use the value as the standard icon to display, and the next value (value + 1) as the button pressed icon display.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "HireableIconCel",
            "description": "Determines the icon asset for displaying the skill on a hireable (mercenary). This requires an ID value based on the hireable skillicon files. This will use the value as the standard icon to display, and the next value (value + 1) as the button pressed icon display.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "str name",
            "description": "Uses a string to display as the skill name",
            "type": {
                "type": "string",
                "dataLength": 255,
                "memSize": 16
            }
        },
        {
            "name": "str short",
            "description": "Uses a string to display as the skill description in shortcuts or when selecting a skill",
            "type": {
                "type": "string",
                "dataLength": 255,
                "memSize": 16
            }
        },
        {
            "name": "str long",
            "description": "Uses a string to display as the skill description on the Skill Tree",
            "type": {
                "type": "string",
                "dataLength": 255,
                "memSize": 16
            }
        },
        {
            "name": "str alt",
            "description": "Uses a string to display the skill name on the Character Screen when the skill is selected",
            "type": {
                "type": "string",
                "dataLength": 255,
                "memSize": 16
            }
        },
        {
            "name": "descdam",
            "description": "Use a function to calculate a skill's damage and determine how to display it. These functions sometimes require certain skill fields, especially the damage related fields.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            },
            "table": [
                [
                    "0",
                    "",
                    "null"
                ],
                [
                    "1",
                    "$!#ddam calc1!$<br>$!#ddam calc2!$",
                    "Calculates the basic Attack damage (Uses function 7)<br>$!#ddam calc1!$ is used as a percent bonus<br>$!#ddam calc2!$ is used as a flat number bonus"
                ],
                [
                    "2",
                    "",
                    "Calculates the character's kick damage"
                ],
                [
                    "3",
                    "",
                    "Calculates the character's throwing weapon damage"
                ],
                [
                    "4",
                    "",
                    "Calculates the character's left throwing weapon damage"
                ],
                [
                    "5",
                    "",
                    "Calculates damage using the equipped weapon damage and the linked skill's physical and elemental damage"
                ],
                [
                    "6",
                    "",
                    "Similar to function 5<br>Calculates the damage of the skill but with carry-over of elemental damage from the source, such as a missile direct hit and then a missile explosion"
                ],
                [
                    "7",
                    "$!#ddam calc1!$<br>$!#ddam calc2!$",
                    "Calculates the damage of a skill, including damage bonuses<br>$!#ddam calc1!$ is used as a percent bonus<br>$!#ddam calc2!$ is used as a flat number bonus"
                ],
                [
                    "8",
                    "$!#ddam calc1!$<br>$!#ddam calc2!$",
                    "Calculates the elemental damage of a skill as a periodic damage (every 25 frames = 1 second)<br>$!#ddam calc1!$ is used as a multiplier of the damage (If equals 0 then default to 1)<br>$!#ddam calc2!$ is used as a divisor of the damage (If equals 0 then default to 1)"
                ],
                [
                    "9",
                    "",
                    "Calculates the elemental damage of a skill as a periodic damage (every 25 frames = 1 second)<br>The damage is always multiplied by 3"
                ],
                [
                    "10",
                    "",
                    "Calculates damage based on the shield equipped and the damage provided by the skill Holy Shield.<br>Also adds a damage percent bonus based on the linked skill's Param3 & Param4 values, plus the stat bonuses from Strength and Dexterity "
                ],
                [
                    "11",
                    "",
                    "Calculates damage by obtaining the current weapon damage, and then adds the following:<br>Fire percent damage based on the linked skill's Calc1 field<br>Cold percent damage based on the linked skill's Calc2 field<br>Lightning percent damage based on the linked skill's Calc3 field"
                ],
                [
                    "12",
                    "",
                    "Calculates a skill's damage based on the status of the Concentration Aura state<br>If the game is in Expansion, then use the linked skill's Calc1 field to define the bonus damage when using Concentration<br>If the game is in Classic, then use the Concentration skill's damage percent increase to define the bonus damage when using Concentration"
                ],
                [
                    "13",
                    "",
                    "Calculates throwing damage, where it adds a damage percent bonus defined by the linked skill's Calc1 field"
                ],
                [
                    "14",
                    "",
                    "Calculates the damage of a skill, and uses the linked skill's Param5 field as an overall damage percent penalty"
                ],
                [
                    "15",
                    "",
                    "Calculates the total damage by adding a damage percent bonus from the linked skill's Param1 & Param2 linear increase calculation, the progressive increase from charges from the linked skill, and the boot damage"
                ],
                [
                    "16",
                    "",
                    "Calculates the total damage by adding a damage percent bonus from the linked skill's Calc1 value, the progressive increase from charges from the linked skill, and the boot damage"
                ],
                [
                    "17",
                    "$!#ddam calc1!$<br>$!#ddam calc2!$",
                    "Calculates the damage of a skill and displays the physical damage and the elemental damage separately<br>$!#ddam calc1!$ is used as a percent bonus<br>$!#ddam calc2!$ is used as a flat number bonus"
                ],
                [
                    "18",
                    "$!#ddam calc1!$<br>$!#ddam calc2!$",
                    "Calculates the damage of a skill, including damage bonuses (Uses function 7)<br>$!#ddam calc1!$ is used as a percent bonus<br>$!#ddam calc2!$ is used as a flat number bonus"
                ],
                [
                    "19",
                    "$!#ddam calc1!$<br>$!#ddam calc2!$",
                    "Calculates the damage of a dual wielding attack. If not dual wielding, then it calculates a normal attack damage<br>$!#ddam calc1!$ is used as a percent bonus<br>$!#ddam calc2!$ is used as a flat number bonus"
                ],
                [
                    "20",
                    "$!#ddam calc1!$<br>$!#ddam calc2!$",
                    "Same as function 19, but does not add elemental damage"
                ],
                [
                    "21",
                    "",
                    "Calculates the throwing weapon damage with the linked skill's elemental damage added"
                ],
                [
                    "22",
                    "",
                    "Calculates the throwing weapon damage for dual wielding throwing weapons and displays them as two values"
                ],
                [
                    "23",
                    "",
                    "Calculates the damage of a skill and displays the physical damage and elemental damage separately<br>(Similar to function 17)"
                ],
                [
                    "24",
                    "",
                    "Calculates damage using the equipped weapon damage and the linked skill's physical and elemental damage<br>(Similar to function 5)"
                ],
                [
                    "25",
                    "$!#ddam calc1!$<br>$!#ddam calc2!$",
                    "Same as function 5 with a percentage multiplier to min and max."
                ],
                [
                    "26",
                    "$!#ddam calc1!$<br>$!#ddam calc2!$",
                    "Calculates weapon damage and skill damage as two values."
                ]
            ]
        },
        {
            "name": "ddam calc#",
            "altNames": [
                "ddam calc1",
                "ddam calc2"
            ],
            "description": "Integer calc value used as a possible parameter for the $!#descdam!$ function",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "p#dmelem",
            "altNames": [
                "p1dmelem",
                "p2dmelem",
                "p3dmelem"
            ],
            "description": "Used for skills that have charge-ups to display the damage on the Character Screen, controls the elemental type for that charge",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 8,
                "file": "ElemTypes",
                "field": "Code"
            },
            "appendField": {
                "file": "ElemTypes",
                "field": "Code"
            }
        },
        {
            "name": "p#dmmin",
            "altNames": [
                "p1dmmin",
                "p2dmmin",
                "p3dmmin"
            ],
            "description": "Used for skills that have charge-ups to display the damage on the Character Screen, controls the minimum damage for that charge",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "p#dmmax",
            "altNames": [
                "p1dmmax",
                "p2dmmax",
                "p3dmmax"
            ],
            "description": "Used for skills that have charge-ups to display the damage on the Character Screen, controls the maximum damage for that charge",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "descatt",
            "description": "Used to display the overall Attack Rating of the skill in the Character Screen",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "0",
                    "null"
                ],
                [
                    "1",
                    "Displays the overall Attack Rating the character's primary weapon"
                ],
                [
                    "2",
                    "If the character can dual wield two weapons, then display the overall Attack Rating for each weapon"
                ],
                [
                    "3",
                    "Displays the overall Attack Rating for throwing the right-hand weapon"
                ],
                [
                    "4",
                    "Displays the overall Attack Rating for throwing the left-hand weapon"
                ],
                [
                    "5",
                    "Displays the overall Attack Rating for a skill marked with the \"finishing\" flag"
                ]
            ]
        },
        {
            "name": "descmissile#",
            "altNames": [
                "descmissile1",
                "descmissile2",
                "descmissile3"
            ],
            "description": "Links a missile to be used as a reference value for calculations",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Missiles",
                "field": "Missile"
            }
        },
        {
            "name": "descline#",
            "altNames": [
                "descline1",
                "descline2",
                "descline3",
                "descline4",
                "descline5",
                "descline6"
            ],
            "description": "Uses an ID value to select a description function to format the string value. Displays this text as the current level and next level description lines in the skill tooltip.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "table": [
                [
                    "0",
                    "",
                    "None"
                ],
                [
                    "13",
                    "$!#desctexta#!$<br>$!#desccalca#!$<br>$!#desccalcb#!$",
                    "Calculates the Life value of the monster referenced from the $!skills#summon!$ field in the linked skill. Also multiplies this value with [$!#desccalca#!$] as a Life Percent bonus or adds to this value with [$!#desccalcb#!$] as a Life Add bonus.<br><br>Inserts this calculated Life value into [$!#desctexta#!$] and output that string"
                ],
                [
                    "31",
                    "$!#desctexta#!$<br>$!#desctextb#!$<br>$!#desccalca#!$<br>$!#desccalcb#!$",
                    "Performs the calculation using the $!difficultylevels#AiCurseDivisor!$ based on the current game's difficulty mode: [$!#desccalca#!$] / [$!difficultylevels#AiCurseDivisor!$] / [$!#desccalcb#!$]<br><br>If this value is equals to 1, then insert the calculated value into [$!#desctexta#!$] and output that string<br>If this value is greater than or less than 1, then insert the calculated value into [$!#desctextb#!$] and output that string"
                ],
                [
                    "34",
                    "$!#desctexta#!$",
                    "Calculates the Damage value of the monster referenced from the $!skills#summon!$ field in the linked skill. Then this function inserts that value into [$!#desctexta#!$] and outputs that string"
                ],
                [
                    "36",
                    "$!#desctexta#!$<br>$!#desctextb#!$<br>$!#desccalca#!$<br>$!#desccalcb#!$",
                    "Performs the calculation of a value: [$!#desccalca#!$] / [$!#desccalcb#!$]<br><br>If this value is equals to 1, then insert the value into [$!#desctexta#!$] and output that string<br>If this value is greater than or less than 1, then insert the value into [$!#desctextb#!$] and output that string"
                ],
                [
                    "40",
                    "$!#desctexta#!$<br>$!#desctextb#!$<br>$!#desccalca#!$",
                    "Use [$!#desccalca#!$] as a code to change the color of the string<br><br>0 = White (R=255, G=255, B=255)<br>1 = Red (R=255, G=77, B=77)<br>2 = Green (R=0, G=255, B=0)<br>3 = Blue (R=105, G=105, B=255)<br>4 = Light Gold (R=199, G=179, B=119)<br>5 = Grey (R=105, G=105, B=105)<br>6 = Black (R=0, G=0, B=0)<br>7 = Dark Gold (R=208, G=194, B=125)<br>8 = Orange (R=255, G=168, B=0)<br>9 = Yellow (R=255, G=255, B=100)<br>10 = Dark Green (R=0, G=128, B=0)<br>11 = Purple (R=174, G=0, B=255)<br>12 = Medium Green (R=0, G=200, B=0)<br><br>Inserts [$!#desctextb#!$] into [$!#desctexta#!$] and outputs that string"
                ],
                [
                    "56",
                    "",
                    "Gets the quantity of the item that is connected to the linked skill and inserts this value into the \"scrollbooktext\" string and outputs that string"
                ],
                [
                    "74",
                    "$!#desctexta#!$<br>$!#desccalca#!$",
                    "Inserts [$!#desccalca#!$] into [$!#desctexta#!$] and outputs that string"
                ],
                [
                    "75",
                    "$!#desctexta#!$<br>$!#desccalca#!$<br>$!#desccalcb#!$",
                    "Inserts [$!#desccalca#!$] and [$!#desccalcb#!$] into [$!#desctexta#!$] and outputs that string"
                ],
                [
                    "76",
                    "$!#desctexta#!$<br>$!#desctextb#!$<br>$!#desccalca#!$",
                    "Inserts [$!#desctextb#!$] and [$!#desccalca#!$] into [$!#desctexta#!$] and outputs that string"
                ],
                [
                    "77",
                    "$!#desctexta#!$<br>$!#desctextb#!$<br>$!#desccalca#!$<br>$!#desccalcb#!$",
                    "Inserts [$!#desctextb#!$], [$!#desccalca#!$], and [$!#desccalcb#!$] into [$!#desctexta#!$] and outputs that string"
                ]
            ]
        },
        {
            "name": "desctexta#",
            "altNames": [
                "desctexta1",
                "desctexta2",
                "desctexta3",
                "desctexta4",
                "desctexta5",
                "desctexta6"
            ],
            "description": "String value used as the first possible string parameter for the $!#descline#!$ function",
            "type": {
                "type": "string",
                "dataLength": 255,
                "memSize": 16
            }
        },
        {
            "name": "desctextb#",
            "altNames": [
                "desctextb1",
                "desctextb2",
                "desctextb3",
                "desctextb4",
                "desctextb5",
                "desctextb6"
            ],
            "description": "String value used as the second possible string parameter for the $!#descline#!$ function",
            "type": {
                "type": "string",
                "dataLength": 255,
                "memSize": 16
            }
        },
        {
            "name": "desccalca#",
            "altNames": [
                "desccalca1",
                "desccalca2",
                "desccalca3",
                "desccalca4",
                "desccalca5",
                "desccalca6"
            ],
            "description": "Integer calculation value used as the first possible numeric parameter for the $!#descline#!$ function",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "desccalcb#",
            "altNames": [
                "desccalcb1",
                "desccalcb2",
                "desccalcb3",
                "desccalcb4",
                "desccalcb5",
                "desccalcb6"
            ],
            "description": "Integer calculation value used as the second possible numeric parameter for the $!#descline#!$ function",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "dsc2line#",
            "altNames": [
                "dsc2line1",
                "dsc2line2",
                "dsc2line3",
                "dsc2line4",
                "dsc2line5"
            ],
            "description": "Uses an ID value to select a description function to format the string value. Displays this text as a pinned line, after the skill description. (Uses the same function codes as $!#descline#!$)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "dsc2texta#",
            "altNames": [
                "dsc2texta1",
                "dsc2texta2",
                "dsc2texta3",
                "dsc2texta4",
                "dsc2texta5"
            ],
            "description": "String value used as the first possible string parameter for the $!#dsc2line#!$ function",
            "type": {
                "type": "string",
                "dataLength": 255,
                "memSize": 16
            }
        },
        {
            "name": "dsc2textb#",
            "altNames": [
                "dsc2textb1",
                "dsc2textb2",
                "dsc2textb3",
                "dsc2textb4",
                "dsc2textb5"
            ],
            "description": "String value used as the second possible string parameter for the $!#dsc2line#!$ function",
            "type": {
                "type": "string",
                "dataLength": 255,
                "memSize": 16
            }
        },
        {
            "name": "dsc2calca#",
            "altNames": [
                "dsc2calca1",
                "dsc2calca2",
                "dsc2calca3",
                "dsc2calca4",
                "dsc2calca5"
            ],
            "description": "Integer Calc value used as the first possible numeric parameter for the $!#dsc2line#!$ function",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "dsc2calcb#",
            "altNames": [
                "dsc2calcb1",
                "dsc2calcb2",
                "dsc2calcb3",
                "dsc2calcb4",
                "dsc2calcb5"
            ],
            "description": "Integer Calc value used as the second possible numeric parameter for the $!#dsc2line#!$ function",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "dsc3line#",
            "altNames": [
                "dsc3line1",
                "dsc3line2",
                "dsc3line3",
                "dsc3line4",
                "dsc3line5",
                "dsc3line6",
                "dsc3line7"
            ],
            "description": "Uses an ID value to select a description function to format the string value. Displays this text as a pinned line at the bottom of the skill tooltip. (Uses the same function codes as $!#descline#!$)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "dsc3texta#",
            "altNames": [
                "dsc3texta1",
                "dsc3texta2",
                "dsc3texta3",
                "dsc3texta4",
                "dsc3texta5",
                "dsc3texta6",
                "dsc3texta7"
            ],
            "description": "String value used as the first possible string parameter for the $!#dsc3line#!$ function",
            "type": {
                "type": "string",
                "dataLength": 255,
                "memSize": 16
            }
        },
        {
            "name": "dsc3textb#",
            "altNames": [
                "dsc3textb1",
                "dsc3textb2",
                "dsc3textb3",
                "dsc3textb4",
                "dsc3textb5",
                "dsc3textb6",
                "dsc3textb7"
            ],
            "description": "String value used as the second possible string parameter for the $!#dsc3line#!$ function",
            "type": {
                "type": "string",
                "dataLength": 255,
                "memSize": 16
            }
        },
        {
            "name": "dsc3calca#",
            "altNames": [
                "dsc3calca1",
                "dsc3calca2",
                "dsc3calca3",
                "dsc3calca4",
                "dsc3calca5",
                "dsc3calca6",
                "dsc3calca7"
            ],
            "description": "Integer Calc value used as the first possible numeric parameter for the $!#dsc3line#!$ function",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "dsc3calcb#",
            "altNames": [
                "dsc3calcb1",
                "dsc3calcb2",
                "dsc3calcb3",
                "dsc3calcb4",
                "dsc3calcb5",
                "dsc3calcb6",
                "dsc3calcb7"
            ],
            "description": "Integer Calc value used as the second possible numeric parameter for the $!#dsc3line#!$ function",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "item proc text",
            "description": "String value used as an override format for when the skill appears as a \"chance to cast\" property on an item. Can be formatted to include $!#descline#!$ in the string using \"%s\" entries. Leave blank to ignore and use the string format in $!ItemStatCost!$.",
            "type": {
                "type": "string",
                "dataLength": 255,
                "memSize": 16
            }
        },
        {
            "name": "item proc descline count",
            "description": "Integer value for how many $!#descline#!$  entries should be formatted into the $!#item proc text!$ string.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        }
    ]
}