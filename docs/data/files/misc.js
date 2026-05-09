// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["misc"] = {
    "title": "misc.txt",
    "referenceFiles": [
        "SharedItems",
        "enums"
    ],
    "appendFiles": [
        "SharedItems"
    ],
    "overview": "This file controls the functionalities for miscellaneous type items, such as the non-weapons and non-armor items. This file is loaded together with other similar files in the following order: $!weapons!$, $!armor!$, $!misc!$. These combined files form the items structure. Technically these files share the same fields, but some fields are exclusive for specific item types, so they are not displayed in the data files that do not need them. These are the fields exclusive to this file.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "autobelt",
            "description": "Boolean Field. If equals 1, then the item will automatically be placed is a free slot in the belt when picked up, if possible. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "BetterGem",
            "description": "Links to another item's \"code\" field. Used by the function 18 in the $!shrines#Code!$ field to know what a selected gem's upgrade will be when the player uses the gem shrine.",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            }
        },
        {
            "name": "multibuy",
            "description": "Boolean Field. If equals 1, then use the multi-buy transaction function when holding the shift key and buying this item from an NPC store. This multi-buy function will automatically purchase enough of the item to fill up to a full quantity stack or fill the available belt slots if the item is has the $!#autobelt!$ field enabled. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "spellicon",
            "description": "Determines the icon asset for displaying the item's spell. This uses an ID value based on the global skillicon file. If this value equals -1, then the item's spell will not display an icon. Used as a parameter for a $!#pSpell!$ function.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "pSpell",
            "description": "Uses an ID value to select a spell function when the item is used. This depends on the item type.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
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
                    "Do nothing"
                ],
                [
                    "1",
                    {
                        "id": "SkillItemIdentify",
                        "text": "SkillItemIdentify"
                    },
                    "$!#spellicon!$",
                    "Sets the spell icon. Identifies an item."
                ],
                [
                    "2",
                    {
                        "id": "SkillItemTownPortal",
                        "text": "SkillItemTownPortal"
                    },
                    "",
                    "The player creates a town portal"
                ],
                [
                    "3",
                    {
                        "id": "SkillItemHealPotion",
                        "text": "SkillItemHealPotion"
                    },
                    "$!#state!$<br>$!#stat#!$<br>$!#calc#!$<br>$!#len!$",
                    "<ol><li>Applies a $!#state!$ on the player that is controlled by the $!#len!$ field</li><li>This function requires that the stat parameters be either \"hitpoints\", \"hpregen\", \"mana\", or \"manarecovery\"</li><li>Calculates a flat amount of these stats to restore to the player, based on the class and Vitality/Energy attribute for Life/Mana stats</li></ol>"
                ],
                [
                    "4",
                    {
                        "id": "SkillItemHealPotion2",
                        "text": "SkillItemHealPotion2"
                    },
                    "$!#state!$<br>$!#stat#!$<br>$!#calc#!$<br>$!#len!$",
                    "<ol><li>Applies a $!#state!$ on the player that is controlled by the $!#len!$ field</li><li>This function requires that the stat parameters be either \"hitpoints\", \"hpregen\", \"mana\", or \"manarecovery\"</li><li>Calculates a flat amount of these stats to restore to the player</li></ol>"
                ],
                [
                    "5",
                    {
                        "id": "SkillItemRejuvPotion",
                        "text": "SkillItemRejuvPotion"
                    },
                    "$!#stat#!$<br>$!#calc#!$",
                    "Adds a percentage of the stat's \"maxstat\" value (see ItemStatCost.txt) to the current stat. This percentage is determined by the related calculated value."
                ],
                [
                    "6",
                    {
                        "id": "SkillItemPotionAntidote",
                        "text": "SkillItemPotionAntidote"
                    },
                    "$!#state!$<br>$!#cstate#!$<br>$!#len!$",
                    "Clears the $!#cstate#!$ states on the user and applies the $!#state!$ state with its duration controlled by the $!#len!$ field."
                ],
                [
                    "7",
                    {
                        "id": "SkillItemTransmogrify",
                        "text": "SkillItemTransmogrify"
                    },
                    "",
                    "Opens the Horadric Cube UI"
                ],
                [
                    "8",
                    {
                        "id": "SkillItemElixir",
                        "text": "SkillItemElixir"
                    },
                    "",
                    "Get a stat from item's mod class and set it to the it's \"value\" stat"
                ],
                [
                    "9",
                    {
                        "id": "SkillItemHerb",
                        "text": "SkillItemHerb"
                    },
                    "$!#state!$<br>$!#stat#!$<br>$!#calc#!$<br>$!#len!$",
                    "<ol><li>Applies a $!#state!$ on the player that is controlled by the $!#len!$ field</li><li>Calculates a flat amount of the stats to set on the player</li><li>Has a special case where if the stat equals \"staminarecoverybonus\" then also set the current \"stamina\" stat to be equals to the \"maxstamina\" stat</li></ol>"
                ],
                [
                    "10",
                    {
                        "id": "SkillItemBookOfSkill",
                        "text": "SkillItemBookOfSkill"
                    },
                    "",
                    "Add one skill point and mark the Act 2 Radament quest reward as redeemed."
                ],
                [
                    "11",
                    {
                        "id": "SkillItemGoldenBird",
                        "text": "SkillItemGoldenBird"
                    },
                    "",
                    "Reward 20 hit points and mark the Act 3 Golden Bird quest as redeemed."
                ],
                [
                    "12",
                    {
                        "id": "SkillItemResistScroll",
                        "text": "SkillItemResistScroll"
                    },
                    "",
                    "Reward 10 fire, light, cold, and poison resist and mark the Act 5 Drehya quest as redeemed."
                ],
                [
                    "13",
                    {
                        "id": "SkillIItemRespec",
                        "text": "SkillIItemRespec"
                    },
                    "",
                    "Reset the user's stat and skill points."
                ],
                [
                    "14",
                    {
                        "id": "SkillItemSendQuestInfo",
                        "text": "SkillItemSendQuestInfo"
                    },
                    "",
                    "Send information for the Act 1 Scroll of Inifuss."
                ],
                [
                    "15",
                    {
                        "id": "SkillItemDesecrateZone",
                        "text": "SkillItemDesecrateZone"
                    },
                    "$!#calc1!$",
                    "Manually desecrate (terrorize) a manual zone from a group in the desecrated zones config with the same $!desecratedzones#group_id!$ as $!#calc1!$.<br>For each zone in the zone group's $!desecratedzones#manual_zones-zones!$, remove it if its $!desecratedzones#id!$ is already active or if the percentage of its levels that are already active is >= $!desecratedzones#manual_removal_threshold!$. Otherwise, if that percentage is >= $!desecratedzones#manual_deprioritize_threshold!$ then add it to a separate \"deprioritized list\".<br>Randomly select from the zones list. If there are no zones, try to select from the deprioritized zones."
                ]
            ]
        },
        {
            "name": "state",
            "description": "Signifies what state will be applied to the player when the item is used. Used as a parameter for a $!#pSpell!$ function.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "states",
                "field": "state"
            }
        },
        {
            "name": "cstate#",
            "altNames": [
                "cstate1",
                "cstate2"
            ],
            "description": "Signifies what state will be removed from the player when the item is used. Used as a parameter for a $!#pSpell!$ function.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "states",
                "field": "state"
            }
        },
        {
            "name": "len",
            "description": "Calculates the frame length of a state. Used as a parameter for a $!#pSpell!$ function.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Item scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "stat#",
            "altNames": [
                "stat1",
                "stat2",
                "stat3"
            ],
            "description": "Controls the stat modifier when the item is used. Used as a parameter for a $!#pSpell!$ function.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "ItemStatCost",
                "field": "Stat"
            }
        },
        {
            "name": "calc#",
            "altNames": [
                "calc1",
                "calc2",
                "calc3"
            ],
            "description": "Calculates the value of the relative $!#stat#!$ field. Used as a parameter for a $!#pSpell!$ function.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Item scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "spelldesc",
            "description": "Uses an ID value to select a function to format a string and add this string to the item's tooltip",
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
                    "Do nothing"
                ],
                [
                    "1",
                    "$!#spelldescstr!$<br>$!#spelldescstr2!$",
                    "1. Add the $!#spelldescstr!$ string to the item tooltip<br>2. If $!#spelldescstr2!$ is not null, then use this string instead of $!#spelldescstr!$ string when playing in controller mode"
                ],
                [
                    "2",
                    "$!#spelldescstr!$<br>$!#calc1!$<br>$!#stat1!$",
                    "1. Evaluate the $!#calc1!$ field<br>2. If the $!#stat1!$ value equals \"hitpoints\" or \"hpregen\" then adjust the calculated value based on the relative $!charstats#HealthPotionPercent!$ value.<br>3. If the $!#stat1!$ value equals \"mana\" or \"manarecovery\" then adjust the calculated value based on the relative $!charstats#ManaPotionPercent!$ value.<br>4. Insert the calculated value into the $!#spelldescstr!$ string and add the string to the item tooltip"
                ],
                [
                    "3",
                    "$!#spelldescstr!$<br>$!#calc1!$",
                    "1. Evaluate the $!#calc1!$ field<br>2. Add the $!#spelldescstr!$ string to the item tooltip<br>3. Append a space string and the calculated value after the $!#spelldescstr!$ string to the item tooltip"
                ],
                [
                    "4",
                    "$!#spelldescstr!$<br>$!#calc1!$",
                    "1. Evaluate the $!#calc1!$ field<br>2. Insert the calculated value into the $!#spelldescstr!$ string and add the string to the item tooltip"
                ]
            ]
        },
        {
            "name": "spelldescstr",
            "altNames": [
                "spelldescstr2"
            ],
            "description": "String Key. Used as a parameter for the $!#spelldesc!$ function.",
            "type": {
                "type": "string",
                "dataLength": 255,
                "memSize": 16
            }
        },
        {
            "name": "spelldesccalc",
            "description": "Calculates the numeric equation. Used as a parameter for the $!#spelldesc!$ function.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Item scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "spelldesccolor",
            "description": "Uses a code number to change the color of the string used in the $!#spelldesc!$ function.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "appendField": {
                "file": "enums",
                "field": "FONTCOLOR"
            }
        },
        {
            "name": "AdvancedStashStackable",
            "description": "Boolean Field. If equals 1, then marks the item as being stackable in the dedicated shared stash tab.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "UsageConditionCalc",
            "description": "If the evaluated result of this BBE is 0, then prevent the item from being used and display the name in red.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Item scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        }
    ],
    "ignoreFields": [
        "minac",
        "maxac",
        "block",
        "rArm",
        "lArm",
        "Torso",
        "Legs",
        "rSPad",
        "lSPad",
        "1or2handed",
        "2handed",
        "2handmindam",
        "2handmaxdam",
        "2handedwclass",
        "hit class",
        "minmisdam",
        "maxmisdam",
        "rangeadder",
        "wclass",
        "missile",
        "subtype"
    ]
}