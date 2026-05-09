// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["enums"] = {
    "title": "enums",
    "overview": "A reference for some enums that are shared between code and data. ",
    "guideOnly": true,
    "fields": [
        {
            "name": "EITEMMODTYPE",
            "description": "Types and quality of items.",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "0",
                    "Any Quality"
                ],
                [
                    "1",
                    "Low Quality (Ex: \"Crude\")"
                ],
                [
                    "2",
                    "Normal Quality"
                ],
                [
                    "3",
                    "High Quality (Superior)"
                ],
                [
                    "4",
                    "Magic Quality (Uses Magic Prefixes and Suffixes)"
                ],
                [
                    "5",
                    "Set Item"
                ],
                [
                    "6",
                    "Rare Quality"
                ],
                [
                    "7",
                    "Unique (Predetermined stats)"
                ],
                [
                    "8",
                    "Crafted"
                ],
                [
                    "9",
                    "Tempered"
                ]
            ]
        },
        {
            "name": "EARMORTYPE",
            "description": "Types of armors.",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Name",
                    "Value"
                ],
                [
                    "Light (lit)",
                    "0"
                ],
                [
                    "Medium (med)",
                    "1"
                ],
                [
                    "Heavy (hvy)",
                    "2"
                ]
            ]
        },
        {
            "name": "ETRANSTYPE",
            "description": "Types of transparency types.",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "0",
                    "Transparency at 25%"
                ],
                [
                    "1",
                    "Transparency at 50%"
                ],
                [
                    "2",
                    "Transparency at 75%"
                ],
                [
                    "3",
                    "Black Alpha Transparency"
                ],
                [
                    "4",
                    "White Alpha Transparency"
                ],
                [
                    "5",
                    "No Transparency"
                ],
                [
                    "6",
                    "Dark Transparency (Unused)"
                ],
                [
                    "7",
                    "Highlight Transparency (Used when mousing over the unit)"
                ],
                [
                    "8",
                    "Blended"
                ]
            ]
        },
        {
            "name": "EITRANSFORMCLASS",
            "description": "Types of item color transforms.",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "0",
                    "No color change"
                ],
                [
                    "1",
                    "Grey"
                ],
                [
                    "2",
                    "Grey 2"
                ],
                [
                    "3",
                    "Gold"
                ],
                [
                    "4",
                    "Brown"
                ],
                [
                    "5",
                    "Grey Brown"
                ],
                [
                    "6",
                    "Inventory Grey"
                ],
                [
                    "7",
                    "Inventory Grey 2"
                ],
                [
                    "8",
                    "Inventory Grey Brown"
                ]
            ]
        },
        {
            "name": "EMTRANSFORM",
            "description": "Types of monster color transforms.",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "0",
                    "Cold"
                ],
                [
                    "1",
                    "Poison"
                ],
                [
                    "2",
                    "Level 0"
                ],
                [
                    "3",
                    "Level 1"
                ],
                [
                    "4",
                    "Level 2"
                ],
                [
                    "5",
                    "Level 3"
                ],
                [
                    "6",
                    "Level 4"
                ],
                [
                    "7",
                    "Miscellaneous"
                ],
                [
                    "9",
                    "Random"
                ],
                [
                    "255",
                    "Special case handler. If hostile, then select the Cold transform. If not hostile, then select the Poison transform."
                ]
            ]
        },
        {
            "name": "EWEAPONCLASS",
            "description": "Types of weapon classes.",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "hth",
                    "Hand to Hand"
                ],
                [
                    "1hs",
                    "One Handed Swing"
                ],
                [
                    "1ht",
                    "One Handed Thrust"
                ],
                [
                    "bow",
                    "Bow"
                ],
                [
                    "2hs",
                    "Two Handed Swing"
                ],
                [
                    "2ht",
                    "Two Handed Thrust"
                ],
                [
                    "1js",
                    "Dual Wielding - Left Jab Right Swing"
                ],
                [
                    "1jt",
                    "Dual Wielding - Left Jab Right Thrust"
                ],
                [
                    "1ss",
                    "Dual Wielding - Left Swing Right Swing"
                ],
                [
                    "1st",
                    "Dual Wielding - Left Swing Right Thrust"
                ],
                [
                    "stf",
                    "Staff"
                ],
                [
                    "xbw",
                    "Crossbow"
                ],
                [
                    "ht1",
                    "One Hand to Hand"
                ],
                [
                    "ht2",
                    "Two Hand to Hand"
                ]
            ]
        },
        {
            "name": "Server Event Functions",
            "description": "Server functions that are used as calllbacks related to events defined in $!events!$.",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
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
                        "id": "srv-SorApplyChillingArmor",
                        "text": "SorApplyChillingArmor (Server)"
                    },
                    "$!skills#srvmissilea!$<br>$!Missiles#ReturnFire!$",
                    "Requires the event to be \"hitbymissile\". Shoot $!skills#srvmissilea!$ at the target unit, only if $!Missiles#ReturnFire!$ is set on the missile that hit the unit."
                ],
                [
                    "2",
                    {
                        "id": "SorApplyFrozenArmor",
                        "text": "SorApplyFrozenArmor"
                    },
                    "$!skills#cltoverlaya!$<br>$!skills#calc1!$",
                    "Deal skill damage with the freeze length controlled by $!skills#calc1!$ and apply an $!skills#cltoverlaya!$ to the attacker"
                ],
                [
                    "3",
                    {
                        "id": "SorApplyShiverArmor",
                        "text": "SorApplyShiverArmor"
                    },
                    "$!skills#cltoverlaya!$",
                    "Deal elemental skill damage and apply $!skills#cltoverlaya!$ to the attacker"
                ],
                [
                    "4",
                    {
                        "id": "NecApplyIronMaiden",
                        "text": "NecApplyIronMaiden"
                    },
                    "$!skills#auratargetstate!$<br>$!skills#calc1!$<br>$!skills#calc2!$<br>$!skills#calc3!$<br>$!skills#calc4!$",
                    "Deal damage to the attacking unit using the calc fields as percent damage modifiers, based on the $!skills#auratargetstate!$ being active.<br>Use $!skills#calc1!$ for monsters.<br>Use $!skills#calc2!$ for mercenaries.<br>Use $!skills#calc3!$ for players.<br>Use $!skills#calc4!$ for flat damage.<br>If the target monster is equal to \"bloodgolem\" then calculate a life steal and also create the \"steallife\" overlay on the golem's caster unit."
                ],
                [
                    "5",
                    {
                        "id": "NecApplyLifeTap",
                        "text": "NecApplyLifeTap"
                    },
                    "$!skills#auratargetstate!$<br>$!skills#calc1!$<br>$!skills#prgoverlay!$",
                    "If the target has the $!skills#auratargetstate!$ state, then apply a percentage heal to the attacker that is determined by the $!skills#calc1!$ field. Also apply an $!skills#prgoverlay!$ to the attacker when the attack is healed."
                ],
                [
                    "6",
                    {
                        "id": "ItemApplyAttackerTakesDamage",
                        "text": "ItemApplyAttackerTakesDamage"
                    },
                    "",
                    "Deal physical damage to the attacker based on the stat's value."
                ],
                [
                    "7",
                    {
                        "id": "ItemApplyKnockback",
                        "text": "ItemApplyKnockback"
                    },
                    "",
                    "Determine a chance to knockback the attacker monster, with normal size monsters having a 50% chance, $!monstats2#large!$ having a 25% chance and $!monstats2#small!$ having a 100% chance"
                ],
                [
                    "8",
                    {
                        "id": "ItemApplyHowl",
                        "text": "ItemApplyHowl"
                    },
                    "",
                    "Apply terror to the monster, changing its AI to run away. Chance uses the stat's value and are in 128ths."
                ],
                [
                    "9",
                    {
                        "id": "ItemApplyDimVision",
                        "text": "ItemApplyDimVision"
                    },
                    "",
                    "Based on a random chance, apply the \"Dim Vision\" skill to the enemy attacker with a random skill level.<br>Chance is calculated as \"<code>50 + (\"attacker level\" + ((\"stat's value\" - 1) * 4) - \"defender level\") * 5</code>\". If the event is \"domissiledamage\" then also divide the result by 3. Clamp between 1 and 99.<br>Skill level is calculated as \"<code>(chance - \"random roll\") / 5 + 1</code>\". Clamp between 1 and 20."
                ],
                [
                    "10",
                    {
                        "id": "ItemApplyAttackerTakesLtngDamage",
                        "text": "ItemApplyAttackerTakesLtngDamage"
                    },
                    "",
                    "Deal lightning damage to the attacker based on the stat's value."
                ],
                [
                    "11",
                    {
                        "id": "ItemApplyAttackerTakesFireDamage",
                        "text": "ItemApplyAttackerTakesFireDamage"
                    },
                    "",
                    "Deal fire damage to the attacker based on the stat's value."
                ],
                [
                    "12",
                    {
                        "id": "ItemApplyAttackerTakesColdDamage",
                        "text": "ItemApplyAttackerTakesColdDamage"
                    },
                    "",
                    "Deal cold damage to the attacker based on the stat's value. Apply a cold length that is modified based on the level difference between the attacker and defender: \"<code>25 + ((\"defender level\" - \"attacker level\") * 10)</code>\""
                ],
                [
                    "13",
                    {
                        "id": "ItemApplyDamageToMana",
                        "text": "ItemApplyDamageToMana"
                    },
                    "",
                    "Add mana to the source unit, based on a percentage (from the stat's value) of the damage taken. Also add a \"stealmana\" overlay to the source unit."
                ],
                [
                    "14",
                    {
                        "id": "ItemApplyFreeze",
                        "text": "ItemApplyFreeze"
                    },
                    "",
                    "Based on a random chance, deal damage to the enemy attacker and apply a freeze length.<br>Chance is calculated as \"<code>50 + (\"attacker level\" + ((\"stat's value\" - 1) * 4) - \"defender level\") * 5</code>\". If the event is \"domissiledamage\" then also subtract 6 from \"attacker level\" and divide the result by 3. Clamp between 1 and 100.<br>Length is calculated as \"<code>(chance - \"random roll\") * 2 + 25</code>\". Clamp between 25 and 250."
                ],
                [
                    "15",
                    {
                        "id": "ItemApplyOpenWounds",
                        "text": "ItemApplyOpenWounds"
                    },
                    "",
                    "Based on a random chance, apply open wounds on the target, using the \"openwounds\" state.<br>Chance is the stat's value.<br>Damage uses this level damage table: \"<code>{9, 18, 27, 36, 45}</code>\".<br>If target is a player, divide damage by 4. Also divide by 2 if the event is \"domissiledamage\".<br>If the target is an elite monster, divide damage by 2."
                ],
                [
                    "16",
                    {
                        "id": "ItemApplyCrushingBlow",
                        "text": "ItemApplyCrushingBlow"
                    },
                    "",
                    "Based on a random chance, deal crushing blow percentage life damage to the enemy attacker and apply the \"bash\" overlay.<br>Chance is the stat's value."
                ],
                [
                    "17",
                    {
                        "id": "ItemApplyManaAfterKill",
                        "text": "ItemApplyManaAfterKill"
                    },
                    "",
                    "Add mana to the source unit based on the stat's value and add a \"stealmana\" overlay"
                ],
                [
                    "18",
                    {
                        "id": "ItemApplyHealAfterDemonKill",
                        "text": "ItemApplyHealAfterDemonKill"
                    },
                    "",
                    "If a monster with $!monstats#demon!$ is killed, then add life to the source unit based on the stat's value and add a \"steallife\" overlay"
                ],
                [
                    "19",
                    {
                        "id": "ItemApplySlow",
                        "text": "ItemApplySlow"
                    },
                    "",
                    "Apply the \"slowed\" state to the target. Slow rate is based on the stat's value. It is capped at 90% normally and at 50% for elite and boss monsters, mercenaries, and players"
                ],
                [
                    "20",
                    {
                        "id": "ItemApplyHitOrAttack",
                        "text": "ItemApplyHitOrAttack"
                    },
                    "",
                    "Based on a random chance, cast a skill on the target when the source unit attacks.<br>Chance is the stat's value.<br>Skill and level are encoded into the parameter using the $!ItemStatCost#stuff!$ field."
                ],
                [
                    "21",
                    {
                        "id": "ItemApplyGetHit",
                        "text": "ItemApplyGetHit"
                    },
                    "",
                    "Based on a random chance, cast a skill on the attacker when the source unit gets hit.<br>Chance is the stat's value.<br>Skill and level are encoded into the parameter using the $!ItemStatCost#stuff!$ field."
                ],
                [
                    "22",
                    {
                        "id": "NecApplyBoneArmor",
                        "text": "NecApplyBoneArmor"
                    },
                    "$!skills#aurastate!$<br>$!skills#aurastat1!$<br>$!skills#aurastat2!$",
                    "Calculates the amount of damage to absorb based on the aura stat values. If no remaining absorbing damage is left, then remove the $!skills#aurastate!$. $!skills#aurastat1!$ is the current amount of damage left to absorb. $!skills#aurastat2!$ is the maximum amount of damage to absorb."
                ],
                [
                    "23",
                    {
                        "id": "NecApplyBloodGolemSteal",
                        "text": "NecApplyBloodGolemSteal"
                    },
                    "$!skills#calc2!$<br>$!skills#calc3!$",
                    "Calculate a life steal for the attacking unit and its boss unit. Also create the \"steallife\" overlay on both units.<br>$!skills#calc2!$ is the amount of percantage to steal. $!skills#calc3!$ is the percentage to split with the boss."
                ],
                [
                    "24",
                    {
                        "id": "SorApplyEnergyShield",
                        "text": "SorApplyEnergyShield"
                    },
                    "$!skills#aurastate!$<br>$!skills#calc1!$<br>$!skills#calc2!$<br>$!skills#prgoverlay!$",
                    "If the $!skills#aurastate!$ state is active, then use $!skills#calc1!$ to calculate the percentage of damage taken by the source unit that should be absorbed. Use $!skills#calc2!$ to calculate the amount of mana that should be consumed by the percent absorbed. Also apply the $!skills#prgoverlay!$ on the source unit. If the source unit runs out of mana, then remove the state."
                ],
                [
                    "25",
                    {
                        "id": "DruApplyCycloneArmor",
                        "text": "DruApplyCycloneArmor"
                    },
                    "$!skills#aurastate!$<br>$!skills#aurastat1!$<br>$!skills#aurastat2!$",
                    "Calculates the minimum and maximum elemental damage to absorb based on the aura stat values. If no remaining absorbing damage is left, then remove the $!skills#aurastate!$. $!skills#aurastat1!$ is the current amount of damage left to absorb. $!skills#aurastat2!$ is the maximum amount of damage to absorb."
                ],
                [
                    "26",
                    {
                        "id": "NecApplyBloodGolemShare",
                        "text": "NecApplyBloodGolemShare"
                    },
                    "$!skills#Param5!$",
                    "Uses $!skills#Param5!$ as the percentage of damage taken by the source unit that should be transferred to the source unit's boss."
                ],
                [
                    "27",
                    {
                        "id": "NecApplyClayGolemSlow",
                        "text": "NecApplyClayGolemSlow"
                    },
                    "",
                    "Apply the \"slowed\" state to the target. Slow rate is based on the stat's value. It is capped at 90% normally and at 50% for elite monsters and players"
                ],
                [
                    "28",
                    {
                        "id": "ItemApplyHealAfterKill",
                        "text": "ItemApplyHealAfterKill"
                    },
                    "",
                    "Add life to the source unit based on the stat's value and add a \"steallife\" overlay"
                ],
                [
                    "29",
                    {
                        "id": "ItemApplyRestInPeace",
                        "text": "ItemApplyRestInPeace"
                    },
                    "",
                    "ItemApplyRestInPeace - Apply the \"restinpeace\" state on the enemy unit"
                ],
                [
                    "30",
                    {
                        "id": "ItemApplyOnDeath",
                        "text": "ItemApplyOnDeath"
                    },
                    "",
                    "Based on a random chance, cast a skill when the source unit dies.<br>Chance is the stat's value.<br>Skill and level are encoded into the parameter using the $!ItemStatCost#stuff!$ field."
                ],
                [
                    "31",
                    {
                        "id": "ItemApplyReanimate",
                        "text": "ItemApplyReanimate"
                    },
                    "",
                    "Based on a random chance, revive a dead monster that is not a champion or unique.<br>Chance is the stat's value.<br>Parameter is the $!monstats!$ index to create."
                ],
                [
                    "32",
                    {
                        "id": "SkillApplyRadiusDamage",
                        "text": "SkillApplyRadiusDamage"
                    },
                    "$!skills#aurarangecalc!$<br>$!skills#HitClass!$",
                    "Use a skill's damage to deal damage in an $!skills#aurarangecalc!$ radius based on the skill's $!skills#HitClass!$. If the event is \"domeleedamage\", then also include progressive damage."
                ],
                [
                    "33",
                    {
                        "id": "SkillActivateSubskill",
                        "text": "SkillActivateSubskill"
                    },
                    "$!skills#aurastatcalc1!$<br>$!skills#aurastatcalc2!$<br>$!skills#aurastatcalc3!$<br>$!skills#aurastatcalc4!$<br>$!skills#sumskill1!$<br>$!skills#sumsk1calc!$",
                    "Based on a random chance controlled by the $!skills#aurastatcalc1!$ value, cast a skill (determined by $!skills#sumskill1!$) with a skill level controlled by $!skills#sumsk1calc!$. If $!skills#aurastatcalc2!$ value is greater than 0, then factor the $!skills#passiveitype!$ and $!skills#passivereqweaponcount!$ fields for determining if the skill should be cast or not. If $!skills#aurastatcalc3!$ is set, then swap the attacker and target units. If $!skills#aurastatcalc4!$ is set, then swap the caster unit with the unit that originally installed the event."
                ],
                [
                    "34",
                    {
                        "id": "WarApplyExecute",
                        "text": "WarApplyExecute"
                    },
                    "$!skills#calc1!$<br>$!skills#calc2!$",
                    "Kill a monster if they are at a certain percentage of health remaining. Use $!skills#calc1!$ for normal monsters and $!skills#calc2!$ for elite monsters (unique, champion, superunique)."
                ],
                [
                    "35",
                    {
                        "id": "WarApplyBloodOathShare",
                        "text": "WarApplyBloodOathShare"
                    },
                    "$!skills#pettype!$<br>$!skills#calc1!$<br>$!skills#calc2!$",
                    "Remove $!skills#calc1!$ percent from incoming damage and transfer it evenly to $!skills#calc2!$ amount of pets. If $!skills#pettype!$ is set, only share with pets of that type (also checks pooled pets, see $!pettype#pool!$)."
                ],
                [
                    "36",
                    {
                        "id": "WarApplyHexDebuff",
                        "text": "WarApplyHexDebuff"
                    },
                    "$!skills#auratargetstate!$<br>$!skills#aurastat#!$<br>$!skills#calc1!$<br>$!skills#calc3!$<br>$!skills#Param1!$",
                    "Apply a statslist to the target of length $!skills#calc1!$ using $!skills#auratargetstate!$ and applying all $!skills#aurastat#!$. If the $!skills#auratargetstate!$ is equal to \"hexpurgedebuff\", apply $!skills#Param1!$ as the $!#Server Event Functions!$ for the events \"damagedbymissile\". \"damagedinmelee\", and \"hextrigger\". Save off the value of $!skills#calc3!$ for use in $!#WarApplyPurgeExplosion!$ where it is used as the max amounts of charges."
                ],
                [
                    "37",
                    {
                        "id": "WarApplyPsychicWard",
                        "text": "WarApplyPsychicWard"
                    },
                    "$!skills#calc1!$",
                    "Apply a stun of length $!skills#calc1!$ on the attacker."
                ],
                [
                    "38",
                    {
                        "id": "WarApplyHealthLink",
                        "text": "WarApplyHealthLink"
                    },
                    "$!skills#aurafilter!$<br>$!skills#auratargetstate!$<br>$!skills#aurarangecalc!$<br>$!skills#calc1!$",
                    "Duplicate a $!skills#calc1!$ percent of the incoming damage to $!skills#aurarangecalc!$ nearby units that have $!skills#auratargetstate!$ active, filtering units using $!skills#aurafilter!$. Only duplicate damage once for each individual skill cast. Remove absorbs, status effects (cold, freeze, stun, pull, knockback), elemental conversion, and drains from the duplicated damage."
                ],
                [
                    "39",
                    {
                        "id": "WarApplyPurgeExplosion",
                        "text": "WarApplyPurgeExplosion"
                    },
                    "$!skills#aurafilter!$<br>$!skills#auratargetstate!$<br>$!skills#aurarangecalc!$<br>$!skills#calc2!$<br>$!skills#calc3!$<br>$!skills#srvoverlay!$",
                    "Roll a $!skills#calc1!$ chance to explode, applying the skill's physical and elemental damage to $!skills#aurarangecalc!$ nearby units, filtering units using $!skills#aurafilter!$, and applying $!skills#srvoverlay!$. Use $!skills#calc3!$ as the total charges, and grab the stored charges from $!#WarApplyHexDebuff!$ using $!skills#auratargetstate!$, decrementing by one. If no charges remain then remove the state."
                ],
                [
                    "40",
                    {
                        "id": "WarPsychicWardAbsorbDamage",
                        "text": "WarPsychicWardAbsorbDamage"
                    },
                    "$!skills#aurastate!$<br>$!skills#aurastat1!$<br>$!skills#aurastat2!$<br>$!skills#prgoverlay!$",
                    "Calculates the amount of damage to absorb based on the aura stat values. If no remaining absorbing damage is left, then remove the $!skills#aurastate!$. $!skills#aurastat1!$ is the current amount of damage left to absorb. $!skills#aurastat2!$ is the maximum amount of damage to absorb. Displays an overlay, using the $!skills#prgoverlay!$ as a base and then adding 0-7 based on the direction."
                ]
            ]
        },
        {
            "name": "Client Event Functions",
            "description": "Client functions that are used as calllbacks related to events defined in $!events!$.",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
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
                        "id": "clt-SorApplyChillingArmor",
                        "text": "SorApplyChillingArmor (Client)"
                    },
                    "$!skills#cltmissilea!$<br>$!Missiles#ReturnFire!$",
                    "Requires the event to be \"hitbymissile\". Shoot $!skills#cltmissilea!$ at the target unit, only if $!Missiles#ReturnFire!$ is set on the missile that hit the unit."
                ]
            ]
        },
        {
            "name": "Quests",
            "description": "List of quests in the game",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "0",
                    "Act 1 Prologue"
                ],
                [
                    "1",
                    "Den of Evil"
                ],
                [
                    "2",
                    "Sisters' Burial Grounds"
                ],
                [
                    "3",
                    "Tools of the Trade"
                ],
                [
                    "4",
                    "The Search for Cain"
                ],
                [
                    "5",
                    "The Forgotten Tower"
                ],
                [
                    "6",
                    "Sisters to the Slaughter"
                ],
                [
                    "7",
                    "Act 2 Prologue"
                ],
                [
                    "8",
                    "Radament's Lair"
                ],
                [
                    "9",
                    "The Horadric Staff"
                ],
                [
                    "10",
                    "The Tainted Sun"
                ],
                [
                    "11",
                    "The Arcane Sanctuary"
                ],
                [
                    "12",
                    "The Summoner"
                ],
                [
                    "13",
                    "The Seven Tombs"
                ],
                [
                    "14",
                    "Act 2 Traversed"
                ],
                [
                    "15",
                    "Lam Esen's Tome"
                ],
                [
                    "16",
                    "Khalim's Will"
                ],
                [
                    "17",
                    "Blade of the Old Religion"
                ],
                [
                    "18",
                    "The Golden Bird"
                ],
                [
                    "19",
                    "The Blackened Temple"
                ],
                [
                    "20",
                    "The Guardian"
                ],
                [
                    "21",
                    "Act 4 Prologue"
                ],
                [
                    "22",
                    "The Fallen Angel"
                ],
                [
                    "23",
                    "Terror's End"
                ],
                [
                    "24",
                    "The Hellforge"
                ],
                [
                    "25",
                    "Rogue Warning"
                ],
                [
                    "26",
                    "Guard in Town Warning"
                ],
                [
                    "27",
                    "Guard in Desert Warning"
                ],
                [
                    "28",
                    "Dark Wanderer Seen"
                ],
                [
                    "29",
                    "Angel Warning"
                ],
                [
                    "30",
                    "Respec from Akara Complete, Act 5 Prologue"
                ],
                [
                    "31",
                    "Siege on Harrogath"
                ],
                [
                    "32",
                    "Rescue on Mount Arreat"
                ],
                [
                    "33",
                    "Prison of Ice"
                ],
                [
                    "34",
                    "Betrayal of Harrogath"
                ],
                [
                    "35",
                    "Rite of Passage"
                ],
                [
                    "36",
                    "Eve of Destruction"
                ]
            ]
        },
        {
            "name": "Quest Flags",
            "description": "Flags for different quest steps",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "0",
                    "Act 1 Prologue Seen"
                ],
                [
                    "1",
                    "Den of Evil Complete"
                ],
                [
                    "2",
                    "Sisters' Burial Grounds Complete"
                ],
                [
                    "3",
                    "Tools of the Trade Complete"
                ],
                [
                    "4",
                    "The Search for Cain Complete"
                ],
                [
                    "5",
                    "The Forgotten Tower Complete"
                ],
                [
                    "6",
                    "Sisters to the Slaughter Complete"
                ],
                [
                    "7",
                    "Act 1 Traversed"
                ],
                [
                    "8",
                    "Act 2 Prologue Seen"
                ],
                [
                    "9",
                    "Radament's Lair Complete"
                ],
                [
                    "10",
                    "The Horadric Staff Complete"
                ],
                [
                    "11",
                    "The Tainted Sun Complete"
                ],
                [
                    "12",
                    "The Arcane Sanctuary Complete"
                ],
                [
                    "13",
                    "The Summoner Complete"
                ],
                [
                    "14",
                    "The Seven Tombs Complete"
                ],
                [
                    "15",
                    "Act 2 Traversed"
                ],
                [
                    "16",
                    "Act 3 Prologue Seen"
                ],
                [
                    "17",
                    "Lam Esen's Tome Complete"
                ],
                [
                    "18",
                    "Khalim's Will Complete"
                ],
                [
                    "19",
                    "Blade of the Old Religion Complete"
                ],
                [
                    "20",
                    "The Golden Bird Complete"
                ],
                [
                    "21",
                    "The Blackened Temple Complete"
                ],
                [
                    "22",
                    "The Guardian Complete"
                ],
                [
                    "23",
                    "Act 3 Traversed"
                ],
                [
                    "24",
                    "Act 4 Prologue Seen"
                ],
                [
                    "25",
                    "The Fallen Angel Complete"
                ],
                [
                    "26",
                    "Terror's End Complete"
                ],
                [
                    "27",
                    "The Hellforge Complete"
                ],
                [
                    "28",
                    "Act 4 Traversed"
                ],
                [
                    "29",
                    "Rogue Warning Complete"
                ],
                [
                    "30",
                    "Guard in Town Warning Complete"
                ],
                [
                    "31",
                    "Guard in Desert Warning Complete"
                ],
                [
                    "32",
                    "Dark Wanderer Seen"
                ],
                [
                    "33",
                    "Angel Warning Complete"
                ],
                [
                    "34",
                    "Act 5 Prologue Seen"
                ],
                [
                    "35",
                    "Siege on Harrogath Complete"
                ],
                [
                    "36",
                    "Rescue on Mount Arreat Complete"
                ],
                [
                    "37",
                    "Prison of Ice Complete"
                ],
                [
                    "38",
                    "Betrayal of Harrogath Complete"
                ],
                [
                    "39",
                    "Rite of Passage Complete"
                ],
                [
                    "40",
                    "Eve of Destruction Complete"
                ],
                [
                    "41",
                    "Respec from Akara Complete"
                ]
            ]
        },
        {
            "name": "Quest Checkpoints",
            "description": "Flags for different quest checkpoints",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "0",
                    "History Success"
                ],
                [
                    "1",
                    "History Earned Reward"
                ],
                [
                    "2",
                    "Checkpoint 1"
                ],
                [
                    "3",
                    "Checkpoint 2"
                ],
                [
                    "4",
                    "Checkpoint 3"
                ],
                [
                    "5",
                    "Checkpoint 4"
                ],
                [
                    "6",
                    "Checkpoint 5"
                ],
                [
                    "7",
                    "Checkpoint 6"
                ],
                [
                    "8",
                    "Checkpoint 7"
                ],
                [
                    "9",
                    "Checkpoint 8"
                ],
                [
                    "10",
                    "Checkpoint 9"
                ],
                [
                    "11",
                    "Checkpoint 10"
                ],
                [
                    "12",
                    "Complete Quest Log"
                ],
                [
                    "13",
                    "Current Game Success"
                ],
                [
                    "14",
                    "Current Game Failure"
                ],
                [
                    "15",
                    "Previous Game"
                ]
            ]
        },
        {
            "name": "FONTCOLOR",
            "description": "Types of font colors. The actual values for these colors are edited in either \"GlobalData*.json\" or \"_profile*.json\" files, ex \"GlobalDataHD.json\" or \"_profileHD.json\"",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Code",
                    "JSON Name",
                    "Description"
                ],
                [
                    "0",
                    "SPRITE_COLOR_NORMAL",
                    "White"
                ],
                [
                    "1",
                    "SPRITE_COLOR_RED",
                    "Red"
                ],
                [
                    "2",
                    "SPRITE_COLOR_GREEN",
                    "Green"
                ],
                [
                    "3",
                    "SPRITE_COLOR_BLUE",
                    "Blue"
                ],
                [
                    "4",
                    "SPRITE_COLOR_PANEL",
                    "Light Gold"
                ],
                [
                    "5",
                    "SPRITE_COLOR_GREY",
                    "Grey"
                ],
                [
                    "6",
                    "SPRITE_COLOR_BLACK",
                    "Black"
                ],
                [
                    "7",
                    "SPRITE_COLOR_BNETGOLD",
                    "Dark Gold"
                ],
                [
                    "8",
                    "SPRITE_COLOR_ORANGE",
                    "Orange"
                ],
                [
                    "9",
                    "SPRITE_COLOR_YELLOW",
                    "Yellow"
                ],
                [
                    "10",
                    "SPRITE_COLOR_DARKGREEN",
                    "Dark Green"
                ],
                [
                    "11",
                    "SPRITE_COLOR_PURPLE",
                    "Purple"
                ],
                [
                    "12",
                    "SPRITE_COLOR_NEWCHAR",
                    "Medium Green"
                ],
                [
                    "13",
                    "DefaultColor",
                    "White"
                ],
                [
                    "14",
                    "QuestColor",
                    "Gold Yellow"
                ],
                [
                    "15",
                    "RareColor",
                    "Yellow"
                ],
                [
                    "16",
                    "CraftedColor",
                    "Orange"
                ],
                [
                    "17",
                    "TemperedColor",
                    "Dark Green"
                ],
                [
                    "18",
                    "MagicColor",
                    "Blue"
                ],
                [
                    "19",
                    "SetColor",
                    "Green"
                ],
                [
                    "20",
                    "UniqueColor",
                    "Gold Yellow"
                ],
                [
                    "21",
                    "HealthPotionColor",
                    "White"
                ],
                [
                    "22",
                    "ManaPotionColor",
                    "White"
                ],
                [
                    "23",
                    "RejuvPotionColor",
                    "White"
                ],
                [
                    "24",
                    "GoldColor",
                    "White"
                ],
                [
                    "25",
                    "EtherealColor",
                    "Grey"
                ],
                [
                    "26",
                    "RuneColor",
                    "Orange"
                ],
                [
                    "27",
                    "SocketedColor",
                    "Grey"
                ],
                [
                    "28",
                    "EventItemsColor",
                    "Orange"
                ],
                [
                    "29",
                    "DesecratedColor",
                    "Purple"
                ]
            ]
        },
        {
            "name": "Aura Filter",
            "description": "Controls different flags that affect how the effects will affect the different types of units. Uses an integer value to check against different bit fields. For example, if the value equals 4354 (binary = 1000100000010) then that returns true for the 4096 (binary = 1000000000000), 256 (binary = 0000100000000), and 2 (binary = 0000000000010) bit field values.",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            },
            "bittable": [
                "Find Players",
                "Find Monsters",
                "Find Undead Monsters",
                "Find Missiles",
                "Find Objects",
                "Find Items",
                "Limit number of targets (requires code setup)",
                "Attackable units only",
                "Units not in town",
                "No missile barriers to center",
                "Missileable units only (able to be hit by missiles)",
                "Custom check function (requires code setup)",
                "Find dead units only",
                "Units not in town (again)",
                "No bosses",
                "Run a \"can target\" check, checking for unit types and player alignment",
                "Find Allies",
                "Units in melee attack range (can be different from hit range for moving targets)",
                "Unit isn't a $!monstats#primeevil!$",
                "Units not in the Just Hit state from this skill cast",
                "Units in melee hit range"
            ]
        },
        {
            "name": "Result Flags",
            "description": "Controls different flags that can affect how the target reacts after being damaged. Uses an integer value to check against different bit fields by using the \"&\" operator. For example, if the value equals 5 (binary = 101) then that returns true for both the 4 (binary = 100) and 1 (binary = 1) bit field values.",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            },
            "bittable": [
                "Hit",
                "Death",
                "Get Hit",
                "Knockback",
                "Block",
                "No Passive",
                "Pull",
                "Dodge",
                "Avoid",
                "Evade",
                "Execute",
                "Unused",
                "Ignore Friendly",
                "Double Damage",
                "Soft Hit",
                "Two Hand-to-Hand Block"
            ]
        },
        {
            "name": "Hit Flags",
            "description": "Controls different flags that can affect the damage dealt when the target is attacked. Uses an integer value to check against different bit fields by using the \"&\" operator. For example, if the value equals 6 (binary = 110) then that returns true for both the 4 (binary = 100) and 2 (binary = 10) bit field values.",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            },
            "bittable": [
                "Do not add physical damage",
                "Do not add any damage",
                "No Life Steal",
                "No Mana Steal",
                "No Stamina Steal",
                "Use Source Damage",
                "Add Elemental Damage to Steals",
                "No Triggered Events",
                "Bypass Undead",
                "Bypass Demons",
                "Bypass Beasts"
            ]
        },
        {
            "name": "Hit Class",
            "description": "Defines types of hit classes for the damage routines, mainly used for determining hit sound effects and overlays. This field only handles the hit class layers, so values beyond these defined bits are ignored. Uses an integer value to check against different bit fields by using the \"&\" operator. For example, if the value equals 6 (binary = 110) then that returns true for both the 4 (binary = 100) and 2 (binary = 10) bit field values.",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            },
            "bittable": [
                {
                    "text": "None",
                    "decimal": 0
                },
                {
                    "header": true,
                    "text": "Base Hit Classes",
                    "radiogroup": "HitClass-Base",
                    "radiogroupmask": 15
                },
                {
                    "text": "Hand to Hand",
                    "decimal": 1,
                    "radiogroup": "HitClass-Base"
                },
                {
                    "text": "One Handed Swing Small",
                    "decimal": 2,
                    "radiogroup": "HitClass-Base"
                },
                {
                    "text": "One Handed Swing Large",
                    "decimal": 3,
                    "radiogroup": "HitClass-Base"
                },
                {
                    "text": "Two Handed Swing Small",
                    "decimal": 4,
                    "radiogroup": "HitClass-Base"
                },
                {
                    "text": "Two Handed Swing Large",
                    "decimal": 5,
                    "radiogroup": "HitClass-Base"
                },
                {
                    "text": "One Handed Thrust",
                    "decimal": 6,
                    "radiogroup": "HitClass-Base"
                },
                {
                    "text": "Two Handed Thrust",
                    "decimal": 7,
                    "radiogroup": "HitClass-Base"
                },
                {
                    "text": "Club",
                    "decimal": 8,
                    "radiogroup": "HitClass-Base"
                },
                {
                    "text": "Staff",
                    "decimal": 9,
                    "radiogroup": "HitClass-Base"
                },
                {
                    "text": "Bow",
                    "decimal": 10,
                    "radiogroup": "HitClass-Base"
                },
                {
                    "text": "Crossbow",
                    "decimal": 11,
                    "radiogroup": "HitClass-Base"
                },
                {
                    "text": "Claw",
                    "decimal": 12,
                    "radiogroup": "HitClass-Base"
                },
                {
                    "text": "Do Overlay",
                    "decimal": 13,
                    "radiogroup": "HitClass-Base"
                },
                {
                    "header": true,
                    "text": "Hit Class Layers",
                    "radiogroup": "HitClass-Layer",
                    "radiogroupmask": 240
                },
                {
                    "text": "Double Layer",
                    "decimal": 16,
                    "radiogroup": "HitClass-Layer"
                },
                {
                    "text": "Fire Layer",
                    "decimal": 32,
                    "radiogroup": "HitClass-Layer"
                },
                {
                    "text": "Cold Layer",
                    "decimal": 48,
                    "radiogroup": "HitClass-Layer"
                },
                {
                    "text": "Lightning Layer",
                    "decimal": 64,
                    "radiogroup": "HitClass-Layer"
                },
                {
                    "text": "Poison Layer",
                    "decimal": 80,
                    "radiogroup": "HitClass-Layer"
                },
                {
                    "text": "Stun Layer",
                    "decimal": 96,
                    "radiogroup": "HitClass-Layer"
                },
                {
                    "text": "Bash Layer",
                    "decimal": 112,
                    "radiogroup": "HitClass-Layer"
                },
                {
                    "text": "Thorns Layer",
                    "decimal": 128,
                    "radiogroup": "HitClass-Layer"
                },
                {
                    "text": "Sanctuary Layer",
                    "decimal": 144,
                    "radiogroup": "HitClass-Layer"
                },
                {
                    "text": "Silent Voice Layer",
                    "decimal": 160,
                    "radiogroup": "HitClass-Layer"
                },
                {
                    "text": "Goo Layer",
                    "decimal": 176,
                    "radiogroup": "HitClass-Layer"
                },
                {
                    "text": "Psychic Layer",
                    "decimal": 192,
                    "radiogroup": "HitClass-Layer"
                },
                {
                    "text": "Shadow Layer",
                    "decimal": 208,
                    "radiogroup": "HitClass-Layer"
                }
            ]
        },
        {
            "name": "Skill Ranges",
            "description": "Skill ranges that affect the weapon requirements and the type of attack used",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "none",
                    "No restrictions to use the skill"
                ],
                [
                    "h2h",
                    "This is a melee skill, which requires a melee weapon"
                ],
                [
                    "rng",
                    "This is a ranged skill, which requires a ranged weapon"
                ],
                [
                    "both",
                    "This is both a melee and ranged skill, which can use either a melee or ranged weapon"
                ],
                [
                    "loc",
                    "This is a location based skill, which ignores the weapon equipped and instead uses the player's location"
                ]
            ]
        },
        {
            "name": "Tooltip Range Type",
            "description": "Used in the Chronicle to define the general type of ranges a Property might use with relation to its min, max, and param values. Updates the mod's tooltip as follows",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Value",
                    "Name",
                    "Tooltip Description"
                ],
                [
                    "0",
                    "DefaultReplacement",
                    "\"Add +X to Stat\" -> \"Add +(x - y) to Stat\""
                ],
                [
                    "1",
                    "Level",
                    "\"Add +X to Stat\" -> \"Add +(x - y) to Stat\" \n(This is different from DefaultReplacement since there's no specific minmax, and instead it's calculated based on level)"
                ],
                [
                    "2",
                    "SingleClassSkill",
                    "\"+7 to Firebolt\" -> \"+(5-15) to a Random Sorceress Skill\""
                ],
                [
                    "3",
                    "RandomClassSkills",
                    "\"+7 to Amazon Skills\" -> \"+(5-15) to a Random Class' Skill\""
                ],
                [
                    "4",
                    "NoRange",
                    "\"+X% to Fire Damage\" -> \"+X% to Fire Damage\""
                ],
                [
                    "5",
                    "DefaultReplacementWithParamID",
                    "\"+X to Skill\" -> \"+(x - y) to Skill\" \n(This is different from DefaultReplacement because it uses the param ID to differentiate between different instances of the Property, allowing you to have multiple ranged instances of the same property)"
                ],
                [
                    "6",
                    "DefaultReplacementWithChargedSkillID",
                    "\"+X to Skill\" -> \"+(x - y) to Skill\" \n(This is different from DefaultReplacement because it uses the charged skill to differentiate between different instances of the Property, allowing you to have multiple ranged instances of the same property)"
                ],
                [
                    "7",
                    "ItemLevelRange",
                    "\"Chance to cast lvl X skill\" -> \"Chance to cast lvl (x-y) skill\" \n(Where X-Y is defined based on the item level of the item)"
                ]
            ]
        }
    ]
}