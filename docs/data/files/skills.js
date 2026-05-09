// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["skills"] = {
    "title": "skills.txt",
    "referenceFiles": [
        "enums",
        "PlayerClass",
        "events",
        "MonMode",
        "PlrMode",
        "ElemTypes"
    ],
    "overview": "This file controls all skill functionalities. Skills are abilities used by all units in the game.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "skill",
            "description": "Defines the unique name ID for the skill, which is how other files can reference the skill. The order of the defined skills will determine their ID numbers, so they should not be reordered.",
            "type": {
                "type": "text",
                "dataLength": 47,
                "memSize": 16
            }
        },
        {
            "name": "charclass",
            "description": "Assigns the skill to a specific character class which affects how skill item modifiers work and what skills the class can learn.",
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
            "name": "skilldesc",
            "description": "Pointer to data that controls the skill's tooltip and general UI display.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "skilldesc",
                "field": "skilldesc"
            }
        },
        {
            "name": "srvstfunc",
            "description": "Server Start function. This controls how the skill works when it is starting to cast, on the server side. This uses a code value to call a function, affecting how certain fields are used.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
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
                        "id": "srv-StartAttack",
                        "text": "StartAttack (Server)"
                    },
                    "",
                    "Check that the attack is melee or ranged. If the attack is ranged, then verify the ammunition."
                ],
                [
                    "2",
                    {
                        "id": "StartKick",
                        "text": "StartKick"
                    },
                    "",
                    "Calculate the damage and attack the target unit with a Hand-To-Hand hit class."
                ],
                [
                    "3",
                    {
                        "id": "srv-StartUnsummon",
                        "text": "StartUnsummon (Server)"
                    },
                    "",
                    "Validate that the target unit is not a monster or player and that the unit is owned by the caster unit. Check that the pet can be unsummoned (See $!pettype#unsummon!$)"
                ],
                [
                    "4",
                    {
                        "id": "AmaStartCheckQuantity",
                        "text": "AmaStartCheckQuantity"
                    },
                    "",
                    "Verify that the caster unit has enough weapon ammunition"
                ],
                [
                    "5",
                    {
                        "id": "AmaStartJab",
                        "text": "AmaStartJab"
                    },
                    "",
                    "Return true."
                ],
                [
                    "6",
                    {
                        "id": "AmaStartPowerStrike",
                        "text": "AmaStartPowerStrike"
                    },
                    "$!#calc1!$<br>$!#calc4!$",
                    "Validate the target enemy and attempt to attack it. Use $!#calc1!$ to control the percentage increase for physical damage dealt. Use $!#calc4!$ to control the percent of damage converted to elemental, if the $!#EType!$ field is used."
                ],
                [
                    "7",
                    {
                        "id": "srv-AmaStartImpale",
                        "text": "AmaStartImpale (Server)"
                    },
                    "$!#calc1!$<br>$!#calc2!$<br>$!#calc3!$<br>$!#calc4!$",
                    "Validate the target enemy and attempt to attack it. Use $!#calc1!$ to control the percentage increase for physical damage dealt. Use $!#calc4!$ to control the percent of damage converted to elemental, if the $!#EType!$ field is used. Use $!#calc2!$ to control the percent chance of losing weapon durability. Use $!#calc3!$ to control the flat amount of durability lost."
                ],
                [
                    "8",
                    {
                        "id": "srv-AmaStartStrafe",
                        "text": "AmaStartStrafe (Server)"
                    },
                    "$!#aurarangecalc!$<br>$!#calc1!$<br>$!#calc3!$",
                    "Attempt to find nearby valid targets and shoot them. Use $!#aurarangecalc!$ to control the range to find targets. Use $!#calc1!$ and $!#calc3!$ to control the minimum and maximum amount of shots fired."
                ],
                [
                    "9",
                    {
                        "id": "AmaStartFend",
                        "text": "AmaStartFend"
                    },
                    "$!#calc1!$",
                    "Find a valid target to attack in melee and then perform multiple attacks to nearby enemies. Use $!#calc1!$ to control the max targets to attack."
                ],
                [
                    "10",
                    {
                        "id": "AmaStartLightningStrike",
                        "text": "AmaStartLightningStrike"
                    },
                    "$!#calc1!$<br>$!#calc4!$",
                    "Validate the target enemy and attempt to attack it to deal a random amount of lightning damage. Use $!#calc1!$ to control the percentage increase for damage dealt. Use $!#calc4!$ to control the percent of damage converted to elemental, if the $!#EType!$ field is used."
                ],
                [
                    "11",
                    {
                        "id": "SorStartInferno",
                        "text": "SorStartInferno"
                    },
                    "$!#srvmissilea!$<br>$!#calc2!$",
                    "Continuously create missiles while the caster has the \"inferno\" state, and adjust the animations and modes based on the inferno frames. Use $!#calc2!$ to control the monster channel duration."
                ],
                [
                    "12",
                    {
                        "id": "SorStartTelekinesis",
                        "text": "SorStartTelekinesis"
                    },
                    "$!#aurarangecalc!$",
                    "Validate the range distance and the target type"
                ],
                [
                    "13",
                    {
                        "id": "SorStartThunderStorm",
                        "text": "SorStartThunderStorm"
                    },
                    "",
                    "Validate the skill use and setup targeting parameters"
                ],
                [
                    "14",
                    {
                        "id": "srv-SorStartHydra",
                        "text": "SorStartHydra (Server)"
                    },
                    "",
                    "Validate the target location"
                ],
                [
                    "15",
                    {
                        "id": "srv-NecStartRaiseSkeleton",
                        "text": "NecStartRaiseSkeleton (Server)"
                    },
                    "",
                    "Check for a valid target corpse that can be raised"
                ],
                [
                    "16",
                    {
                        "id": "NecStartPoisonDagger",
                        "text": "NecStartPoisonDagger"
                    },
                    "$!#calc1!$<br>$!#calc4!$",
                    "Validate the target enemy and attempt to attack it. Use $!#calc1!$ to control the percentage increase for physical damage dealt. Use $!#calc4!$ to control the percent of damage converted to elemental, if the $!#EType!$ field is used."
                ],
                [
                    "17",
                    {
                        "id": "NecStartCorpseExplosion",
                        "text": "NecStartCorpseExplosion"
                    },
                    "",
                    "Check for a valid target corpse that can explode"
                ],
                [
                    "18",
                    {
                        "id": "NecStartAttract",
                        "text": "NecStartAttract"
                    },
                    "",
                    "Return true"
                ],
                [
                    "19",
                    {
                        "id": "srv-NecStartBonePrison",
                        "text": "NecStartBonePrison (Server)"
                    },
                    "",
                    "Validate that the target is an enemy and make sure that the target is not located in town"
                ],
                [
                    "20",
                    {
                        "id": "srv-NecStartIronGolem",
                        "text": "NecStartIronGolem (Server)"
                    },
                    "",
                    "Validate that the target is an identified item located on the ground"
                ],
                [
                    "21",
                    {
                        "id": "srv-NecStartRevive",
                        "text": "NecStartRevive (Server)"
                    },
                    "",
                    "Check for a valid target corpse that can be revived"
                ],
                [
                    "22",
                    {
                        "id": "srv-AssStartPsychicHammer",
                        "text": "AssStartPsychicHammer (Server)"
                    },
                    "",
                    "Check for a valid target player or monster"
                ],
                [
                    "23",
                    {
                        "id": "AssStartProgressiveAttack",
                        "text": "AssStartProgressiveAttack"
                    },
                    "",
                    "Reset internal variable used for keeping track of skill steps."
                ],
                [
                    "24",
                    {
                        "id": "AssStartDragonTalon",
                        "text": "AssStartDragonTalon"
                    },
                    "$!#calc1!$",
                    "Use $!#calc1!$ to control the number of attacks."
                ],
                [
                    "25",
                    {
                        "id": "srv-AssStartDragonClaw",
                        "text": "AssStartDragonClaw (Server)"
                    },
                    "",
                    "Reset internal variable used for keeping track of skill steps."
                ],
                [
                    "26",
                    {
                        "id": "srv-AssStartBladeFury",
                        "text": "AssStartBladeFury (Server)"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#srvmissilea!$<br>$!#srvmissileb!$<br>$!#srvmissilec!$",
                    "Use the $!#srvmissilea!$ missile by default, or use 1 of the 3 missiles depending on the progressive charges controlled by the $!#aurastate!$ field and $!#aurastat1!$ field. If the caster unit does not have the \"inferno\" state, then add it and handle the animation frames. If the caster unit does have the \"inferno\" state, then periodically create missiles."
                ],
                [
                    "27",
                    {
                        "id": "srv-AssStartDragonTail",
                        "text": "AssStartDragonTail (Server)"
                    },
                    "$!#Param4!$<br>$!#Param8!$",
                    "Validate the target to attack and calculate the kick damage. Use $!#Param4!$ to control the attack speed. Use $!#Param8!$ to control if the attack should always hit."
                ],
                [
                    "28",
                    {
                        "id": "AssStartBladeShield",
                        "text": "AssStartBladeShield"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#srvmissilea!$<br>$!#srvmissileb!$<br>$!#srvmissilec!$<br>$!#auralencalc!$",
                    "Use the $!#srvmissilea!$ missile by default, or use 1 of the 3 missiles depending on the progressive charges controlled by the $!#aurastate!$ field and $!#aurastat1!$ field. Add the $!#aurastate!$ state that lasts a duration controlled by $!#auralencalc!$."
                ],
                [
                    "29",
                    {
                        "id": "PalStartSacrifice",
                        "text": "PalStartSacrifice"
                    },
                    "$!#calc1!$<br>$!#calc4!$",
                    "Validate the target enemy unit and determine if the caster unit can melee attack it. Use $!#calc1!$ to control the percentage increase for physical damage dealt. Use $!#calc4!$ to control the percent of damage converted to elemental, if the $!#EType!$ field is used."
                ],
                [
                    "30",
                    {
                        "id": "srv-SkillStartPlayerChannelSkill",
                        "text": "SkillStartPlayerChannelSkill"
                    },
                    "$!#srvmissilea!$",
                    "Starts a channeling skill by applying the \"skill_channeling\" state on the unit for 20 frames, saving off the skill's target. Also create a position missile using $!#srvmissilea!$ targeted at the target. If the state is already present and the target is the same, the duration of the skill is extended by 7 frames. Also extend the missile's lifetime by 7 frames."
                ],
                [
                    "31",
                    {
                        "id": "srv-PalStartCharge",
                        "text": "PalStartCharge (Server)"
                    },
                    "$!#calc2!$",
                    "Validate the target enemy unit and determine if the caster unit can melee attack it. Adjust the caster unit's movement speed. Do special adjustments for the \"duriel\" and \"clawviper1\" monster attack modes. Use $!#calc2!$ to add bonus movement speed percentage while charging."
                ],
                [
                    "32",
                    {
                        "id": "BarStartBash",
                        "text": "BarStartBash"
                    },
                    "$!#aurastate!$<br>$!#calc1!$<br>$!#calc2!$<br>$!#calc3!$<br>$!#calc4!$<br>$!#calc4!$<br>$!#calc4!$<br>$!#ResultFlags!$<br>$!#HitFlags!$<br>$!#HitClass!$",
                    "Validate the target enemy and attack it. Use $!#calc1!$ to control the physical damage percent increase. Use $!#calc2!$ to control the flat damage increase. Use $!#calc3!$ to control the attack speed bonus. Use $!#calc4!$ to control the percent of damage converted to elemental, if the $!#EType!$ field is used. Apply $!#ResultFlags!$, $!#HitFlags!$ and $!#HitClass!$. Applies $!#aurastate!$ and all $!#aurastat#!$ to self."
                ],
                [
                    "33",
                    {
                        "id": "srv-BarStartFindHeart",
                        "text": "BarStartFindHeart (Server)"
                    },
                    "",
                    "Check for a valid target corpse that can spawn potions. This relies on the $!monstats2#soft!$ and $!monstats2#noSel!$ flags."
                ],
                [
                    "34",
                    {
                        "id": "srv-BarStartFindItem",
                        "text": "BarStartFindItem (Server)"
                    },
                    "",
                    "Check for a valid target corpse that can spawn items. This relies on the $!monstats2#soft!$ and $!monstats2#noSel!$ flags."
                ],
                [
                    "35",
                    {
                        "id": "PalStartVengeance",
                        "text": "PalStartVengeance"
                    },
                    "$!#calc1!$<br>$!#calc2!$<br>$!#calc3!$",
                    "Validate the target enemy and attack it. Use the calculation fields to control fire, cold, and lightning damage percentages added to the attack."
                ],
                [
                    "36",
                    {
                        "id": "PalStartHolyShield",
                        "text": "PalStartHolyShield"
                    },
                    "",
                    "Check that the player has a shield equipped"
                ],
                [
                    "37",
                    {
                        "id": "srv-AmaStartFend2",
                        "text": "AmaStartFend2 (Server)"
                    },
                    "$!#calc1!$",
                    "Find nearby enemy targets to melee attack. Use $!#calc1!$ to control the maximum number of targets to attack."
                ],
                [
                    "38",
                    {
                        "id": "srv-BarStartWhirlwind",
                        "text": "BarStartWhirlwind (Server)"
                    },
                    "$!#aurastate!$<br>$!#auralencalc!$<br>$!#auraevent#!$<br>$!#auraeventfunc#!$",
                    "Stop any skills and validate the target location. Modify the caster unit's collision to only collide with walls and objects and save the target location. Apply the $!#aurastate!$ state with the length controlled. Applies $!#auraevent#!$ if they exist."
                ],
                [
                    "39",
                    {
                        "id": "BarStartBerserk",
                        "text": "BarStartBerserk"
                    },
                    "$!#aurastate!$<br>$!#calc1!$<br>$!#calc2!$<br>$!#calc4!$",
                    "Validate the target enemy unit and determine if the caster unit can melee attack it. Use $!#calc1!$ to control the percentage increase for physical damage dealt. Use $!#calc4!$ to control the percent of damage converted to elemental, if the $!#EType!$ field is used. Use $!#calc2!$ to control the duration for how long the caster unit has the state."
                ],
                [
                    "40",
                    {
                        "id": "srv-BarStartLeap",
                        "text": "BarStartLeap (Server)"
                    },
                    "$!#aurarangecalc!$",
                    "Adjust the caster unit collision, validate the target location, and store the location in a parameter. If the caster unit is in a monster, then handle how the monster can attack the target while leaping."
                ],
                [
                    "41",
                    {
                        "id": "srv-BarStartLeapAttack",
                        "text": "BarStartLeapAttack (Server)"
                    },
                    "",
                    "Adjust the caster unit collision, validate the target location, and store the location in a parameter. Make the caster unit uninterruptable after landing in order to melee attack a nearby target."
                ],
                [
                    "42",
                    {
                        "id": "MonStartFirehit",
                        "text": "MonStartFirehit"
                    },
                    "",
                    "If the caster unit is a player, then use the BarStartBash function (Code 32). Otherwise make the caster attack the target while in \"Skill 1\" mode and deal damage"
                ],
                [
                    "43",
                    {
                        "id": "MonStartMagottEgg",
                        "text": "MonStartMagottEgg"
                    },
                    "",
                    "Make the unit unattackable, unselectable, and unable to be hit by missiles"
                ],
                [
                    "44",
                    {
                        "id": "srv-MonStartMaggotUp",
                        "text": "MonStartMaggotUp (Server)"
                    },
                    "",
                    "Set the unit to have ground collision and adjust the collision and pathing. Teleport the unit to a viable location in the area."
                ],
                [
                    "45",
                    {
                        "id": "srv-MonStartMaggotDown",
                        "text": "MonStartMaggotDown (Server)"
                    },
                    "",
                    "Make the unit unattackable, unselectable, and unable to be hit by missiles. Adjust the unit's collision to not have pathing."
                ],
                [
                    "46",
                    {
                        "id": "srv-MonStartAndariel",
                        "text": "MonStartAndariel (Server)"
                    },
                    "",
                    "Validate the target unit and store the target's location in a parameter"
                ],
                [
                    "47",
                    {
                        "id": "MonStartJump",
                        "text": "MonStartJump"
                    },
                    "$!#calc1!$",
                    "Validate the target location. Return false if the caster unit has the \"freeze\" state. Use the $!#calc1!$ field to control the damage percent bonus. Make the caster unit attack the target, if possible."
                ],
                [
                    "48",
                    {
                        "id": "srv-MonStartSwarmMove",
                        "text": "MonStartSwarmMove (Server)"
                    },
                    "",
                    "Find and validate a path to the target."
                ],
                [
                    "49",
                    {
                        "id": "srv-MonStartNest",
                        "text": "MonStartNest (Server)"
                    },
                    "",
                    "Validate the caster unit's location and modify its collision"
                ],
                [
                    "50",
                    {
                        "id": "MonStartQuickStrike",
                        "text": "MonStartQuickStrike"
                    },
                    "",
                    "Validate the target unit and attack it"
                ],
                [
                    "51",
                    {
                        "id": "srv-MonStartSubmerge",
                        "text": "MonStartSubmerge (Server)"
                    },
                    "",
                    "Make the unit unattackable, unselectable, and unable to be hit by missiles"
                ],
                [
                    "52",
                    {
                        "id": "srv-MonStartEmerge",
                        "text": "MonStartEmerge (Server)"
                    },
                    "",
                    "Make the unit attackable, selectable, and able to be hit by missiles"
                ],
                [
                    "53",
                    {
                        "id": "srv-MonStartDiabLight",
                        "text": "MonStartDiabLight (Server)"
                    },
                    "$!#calc2!$",
                    "Add the \"inferno\" state to the caster unit. Use $!#calc2!$ to control the number of frames to add to the animation while channeling and save it in a parameter."
                ],
                [
                    "54",
                    {
                        "id": "srv-MonStartDiabRun",
                        "text": "MonStartDiabRun (Server)"
                    },
                    "",
                    "Validate the target unit and save its location in parameters"
                ],
                [
                    "55",
                    {
                        "id": "srv-MonStartMosquito",
                        "text": "MonStartMosquito (Server)"
                    },
                    "$!#calc1!$<br>$!#calc2!$",
                    "Validate the target unit and use the calculation fields to control the minimum and maximum number of animation loops for the skill."
                ],
                [
                    "56",
                    {
                        "id": "DruStartChargeUpAttack",
                        "text": "DruStartChargeUpAttack"
                    },
                    "$!#calc1!$<br>$!#calc4!$",
                    "Validate the target enemy and attempt to attack it. Use $!#calc1!$ to control the percentage increase for physical damage dealt. Use $!#calc4!$ to control the percent of damage converted to elemental, if the $!#EType!$ field is used."
                ],
                [
                    "57",
                    {
                        "id": "DruStartRabies",
                        "text": "DruStartRabies"
                    },
                    "$!#aurastate!$",
                    "Validate the $!#aurastate!$ state. Reset internal variables used to keep track of hits."
                ],
                [
                    "58",
                    {
                        "id": "DruStartFireClaws",
                        "text": "DruStartFireClaws"
                    },
                    "$!#calc1!$",
                    "Validate the target enemy and attempt to attack it. Use $!#calc1!$ to control the percentage increase for physical damage dealt."
                ],
                [
                    "59",
                    {
                        "id": "MonStartImpInferno",
                        "text": "MonStartImpInferno"
                    },
                    "$!#calc1!$",
                    "Add the \"inferno\" state to the caster unit. Use $!#calc1!$ to control the number of frames to add to the animation while channeling and save it in a parameter."
                ],
                [
                    "60",
                    {
                        "id": "MonStartBatSuckBlood",
                        "text": "MonStartBatSuckBlood"
                    },
                    "$!#calc1!$<br>$!#calc2!$<br>$!#calc3!$",
                    "Validate the target enemy and attempt to attack it. Use $!#calc1!$ to control the damage penalty percentage. Use $!#calc2!$ to control the life steal percent. Use $!#calc3!$ to control the mana steal percent."
                ],
                [
                    "61",
                    {
                        "id": "MonStartSelfResurrect",
                        "text": "MonStartSelfResurrect"
                    },
                    "",
                    "Validate that the caster unit is a monster, then resurrect the monster, making it have proper pathing, be attackable, selectable, and able to be hit by missiles."
                ],
                [
                    "62",
                    {
                        "id": "MonStartSpawner",
                        "text": "MonStartSpawner"
                    },
                    "",
                    "Save the monster's position, class, and mode as parameters"
                ],
                [
                    "63",
                    {
                        "id": "MonStartCorpseCycler",
                        "text": "MonStartCorpseCycler"
                    },
                    "$!#srvmissilea!$",
                    "Validate that the caster unit is a monster. Check for the \"noSel\" state on the target (see monstats2.txt) or add it on the target. Create the missile at the target location and corpse explode the corpse on the client."
                ],
                [
                    "64",
                    "",
                    "",
                    "Do nothing"
                ],
                [
                    "65",
                    {
                        "id": "srv-StartThrow",
                        "text": "StartThrow (Server)"
                    },
                    "",
                    "Validate that the caster unit has enough ammunition and durability"
                ],
                [
                    "66",
                    {
                        "id": "ApplyPassiveAuraEvents",
                        "text": "ApplyPassiveAuraEvents"
                    },
                    "$!#auraevent1!$<br>$!#auraeventfunc1!$<br>$!#auraevent2!$<br>$!#auraeventfunc2!$<br>$!#auraevent3!$<br>$!#auraeventfunc3!$",
                    "Check each of the aura events on the skill and apply the event handler to use the aura event functions"
                ],
                [
                    "67",
                    {
                        "id": "BarStartFrenzy",
                        "text": "BarStartFrenzy"
                    },
                    "",
                    "Resets internal variables used to keep track of frames and attacks."
                ],
                [
                    "68",
                    {
                        "id": "srv-BarStartDoubleSwing",
                        "text": "BarStartDoubleSwing (Server)"
                    },
                    "$!#calc2!$",
                    "Uses $!#calc3!$ to apply an attack rate bonus."
                ],
                [
                    "69",
                    {
                        "id": "srv-WarStartConsume",
                        "text": "WarStartConsume (Server)"
                    },
                    "$!#pettype!$",
                    "Verify the target is a pet. If $!#pettype!$ is filled out, then the pet must be of that type (also checks pooled pets, see $!pettype#pool!$)"
                ],
                [
                    "70",
                    {
                        "id": "WarStartHealthLink",
                        "text": "WarStartHealthLink"
                    },
                    "$!#aurastate!$<br>$!#auratargetstate!$<br>$!#auralencalc!$<br>$!#calc2!$",
                    "Verify $!#aurastate!$ and $!#auratargetstate!$ exist. Fail to cast if the maximum number of units affected by $!#auratargetstate!$ has been reached, using $!#calc2!$ as the max (0 is infinite units). Tracks the amount of units affected by placing a statslist on the caster of state $!#aurastate!$ and length $!#auralencalc!$ and storing what units are affected in it. If the statslist already exists (like from repeat casts), then also remove any units from the list that are no longer affected."
                ]
            ]
        },
        {
            "name": "srvdofunc",
            "description": "Server Do function. This controls how the skill works when it finishes being cast, on the server side. This uses a code value to call a function, affecting how certain fields are used.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
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
                        "id": "srv-DoAttack",
                        "text": "DoAttack (Server)"
                    },
                    "",
                    "If using a ranged weapon, then launch the weapon's missile. Otherwise, perform a standard melee attack to deal damage."
                ],
                [
                    "2",
                    {
                        "id": "DoApplyDamage",
                        "text": "DoApplyDamage"
                    },
                    "$!#srvoverlay!$<br>$!#aurastate!$<br>$!#auratargetstate!$<br>$!#auralencalc!$",
                    "Apply the overlay on the target unit when dealing damage. Apply the $!#auratargetstate!$ state on the target, if possible, with $!#auralencalc!$ controlling its duration. Apply the $!#aurastate!$ state on the caster unit, if possible."
                ],
                [
                    "3",
                    {
                        "id": "srv-DoThrow",
                        "text": "DoThrow (Server)"
                    },
                    "",
                    "Check that primary equipped weapon is a throwing weapon and handle launching the weapon's missile"
                ],
                [
                    "4",
                    {
                        "id": "DoUnsummon",
                        "text": "DoUnsummon"
                    },
                    "",
                    "Remove the pet from the caster owner"
                ],
                [
                    "5",
                    {
                        "id": "DoLeftThrow",
                        "text": "DoLeftThrow"
                    },
                    "",
                    "Check that non-primary equipped weapon is a throwing weapon and handle launching the weapon's missile"
                ],
                [
                    "6",
                    {
                        "id": "AmaDoInnerSight",
                        "text": "AmaDoInnerSight"
                    },
                    "$!#auratargetstate!$<br>$!#auralencalc!$<br>$!#aurarangecalc!$",
                    "Apply the $!#auratargetstate!$ state to all units in the area with a radius controlled by $!#aurarangecalc!$, that lasts a duration controlled by $!#auralencalc!$. The state can use any of the aura stats and their related calculation values."
                ],
                [
                    "7",
                    {
                        "id": "srv-AmaDoJab",
                        "text": "AmaDoJab (Server)"
                    },
                    "$!#calc1!$<br>$!#calc4!$",
                    "Attempt to attack the target unit. Use $!#calc1!$ to control the percent increase for physical damage dealt. Use $!#calc4!$ to control the percent of damage converted to elemental, if the $!#EType!$ field is used."
                ],
                [
                    "8",
                    {
                        "id": "srv-AmaDoMultipleShot",
                        "text": "AmaDoMultipleShot (Server)"
                    },
                    "$!#srvmissilea!$<br>$!#srvmissileb!$<br>$!#calc1!$<br>$!#calc2!$<br>$!#calc3!$<br>$!#calc5!$",
                    "Shoot a number of missiles toward a target location. If the weapon class is a bow then use $!#srvmissilea!$, otherwise use $!#srvmissileb!$ as the missile to create. Use $!#calc1!$ to control the number of missiles created. Use $!#calc2!$ to control the activation frame for each missile created. Use $!#calc3!$ to control the number of triggering missiles. Use the $!#calc5!$ value to calculate Guided Arrow synergy."
                ],
                [
                    "9",
                    {
                        "id": "BarDoFrenzy",
                        "text": "BarDoFrenzy"
                    },
                    "$!#aurastate!$<br>$!#auralencalc!$<br>$!#calc1!$<br>$!#calc4!$",
                    "Attack a target or nearby targets. Performs as many attacks as there are in the animation. Add the $!#aurastate!$ state to the caster unit, with a duration controlled by $!#auralencalc!$. Use $!#calc1!$ to control the percentage increase for physical damage dealt. Use $!#calc4!$ to control the percent of damage converted to elemental, if the $!#EType!$ field is used."
                ],
                [
                    "10",
                    {
                        "id": "srv-AmaDoGuidedArrow",
                        "text": "AmaDoGuidedArrow (Server)"
                    },
                    "$!#srvmissilea!$<br>$!#srvmissileb!$<br>$!#calc1!$",
                    "Shoot a missile that will change its path to find a nearby target to hit. If the weapon class is a bow then use $!#srvmissilea!$, otherwise use $!#srvmissileb!$ as the missile to create. Use $!#calc1!$ to control the physical damage dealt by the missile."
                ],
                [
                    "11",
                    {
                        "id": "srv-AmaDoChargedStrike",
                        "text": "AmaDoChargedStrike (Server)"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#srvmissilea!$<br>$!#srvmissileb!$<br>$!#srvmissilec!$<br>$!#calc1!$",
                    "Create the number of missiles with randomized pathing. Use the $!#srvmissilea!$ missile by default, or use 1 of the 3 missiles depending on the progressive charges controlled by the $!#aurastate!$ field and $!#aurastat1!$ fields. Use $!#calc1!$ to control the number of missiles created."
                ],
                [
                    "12",
                    {
                        "id": "srv-AmaDoStrafe",
                        "text": "AmaDoStrafe (Server)"
                    },
                    "$!#aurarangecalc!$<br>$!#srvmissilea!$<br>$!#srvmissileb!$<br>$!#calc2!$<br>$!#Param6!$",
                    "Use $!#aurarangecalc!$ to control the range to find a target. If the weapon class is a bow then use $!#srvmissilea!$, otherwise use $!#srvmissileb!$ as the missile to create. Use $!#calc2!$ to control the percent increase for physical damage dealt. Use $!#Param6!$ to control what percent within the entire animation to trigger rolling back the loop within the animation."
                ],
                [
                    "13",
                    {
                        "id": "srv-AmaDoFend",
                        "text": "AmaDoFend (Server)"
                    },
                    "$!#calc1!$<br>$!#calc4!$<br>$!#Param2!$",
                    "Attempt to attack the target unit or nearby enemies with multiple attacks. Use $!#calc1!$ to control the percent increase for physical damage dealt. Use $!#calc4!$ to control the percent of damage converted to elemental, if the $!#EType!$ field is used. Use $!#Param2!$ to control what percent within the entire animation to trigger rolling back the loop within the animation."
                ],
                [
                    "14",
                    {
                        "id": "srv-AmaDoLightningStrike",
                        "text": "AmaDoLightningStrike (Server)"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#srvmissilea!$<br>$!#srvmissileb!$<br>$!#srvmissilec!$<br>$!#calc1!$<br>$!#calc2!$",
                    "Damage the target and create a missile that bounces to different targets. Use the $!#srvmissilea!$ missile by default, or use 1 of the 3 missiles depending on the progressive charges controlled by the $!#aurastate!$ field and $!#aurastat1!$ fields. Use $!#calc1!$ to control the range of the missile to find a nearby target. Use $!#calc2!$ to control the number target chain jump hits for the missile."
                ],
                [
                    "15",
                    {
                        "id": "AmaDoDopplezon",
                        "text": "AmaDoDopplezon"
                    },
                    "$!#pettype!$<br>$!#calc2!$<br>$!#calc3!$",
                    "Create a pet unit that is a duplicate of the caster unit. Use $!#calc1!$ to control the life percent of the pet. Use $!#calc3!$ to control the Life percent increase on the pet unit based on the caster's Life. Use $!#calc2!$ to control the duration that the pet exists. Apply the \"dopllezon_appear\" overlay on the pet."
                ],
                [
                    "16",
                    {
                        "id": "AmaDoValkyrie",
                        "text": "AmaDoValkyrie"
                    },
                    "$!#pettype!$<br>$!#calc1!$<br>$!#calc2!$",
                    "Create a pet unit with generated item equipment and stats. Use $!#calc1!$ to control the life percent of the pet. Use $!#calc2!$ to control the item level for the generated items on the pet."
                ],
                [
                    "17",
                    {
                        "id": "srv-SorDoChargedBolt",
                        "text": "SorDoChargedBolt (Server)"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#srvmissilea!$<br>$!#srvmissileb!$<br>$!#srvmissilec!$<br>$!#calc1!$",
                    "Create a number of missiles that have a randomized path. Use the $!#srvmissilea!$ missile by default, or use 1 of the 3 missiles depending on the progressive charges controlled by the $!#aurastate!$ field and $!#aurastat1!$ fields. Use $!#calc1!$ to control the number of missiles created."
                ],
                [
                    "18",
                    {
                        "id": "SorDoFrozenArmor",
                        "text": "SorDoFrozenArmor"
                    },
                    "$!#aurastate!$<br>$!#auralencalc!$",
                    "Apply the state on the target unit with its length controlled by $!#auralencalc!$."
                ],
                [
                    "19",
                    {
                        "id": "srv-SorDoInferno",
                        "text": "SorDoInferno (Server)"
                    },
                    "$!#srvmissilea!$<br>$!#calc1!$",
                    "Create the missile where $!#calc1!$ controls the range. Continue creating missiles while having the \"inferno\" state."
                ],
                [
                    "20",
                    {
                        "id": "SorDoStaticField",
                        "text": "SorDoStaticField"
                    },
                    "$!#aurarangecalc!$<br>$!#calc1!$<br>$!#calc2!$",
                    "Apply damage to all units in the area. Use $!#aurarangecalc!$ to control the damage radius. Use $!#calc1!$ to control the Life percent damage. Use $!#calc2!$ to control the minimum damage dealt."
                ],
                [
                    "21",
                    {
                        "id": "SorDoTelekinesis",
                        "text": "SorDoTelekinesis"
                    },
                    "$!#calc1!$",
                    "If the target is a monster or player, then deal damage and use $!#calc1!$ to control the knockback chance. If the target is an item, then ensure that the item type is a scroll, gold, or potion. If the target is a object, then call the object's operate function."
                ],
                [
                    "22",
                    {
                        "id": "srv-SorDoFrostNova",
                        "text": "SorDoFrostNova (Server)"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#srvmissilea!$<br>$!#srvmissileb!$<br>$!#srvmissilec!$<br>$!#calc1!$",
                    "Shoot missiles in a circular array. Use the $!#srvmissilea!$ missile by default, or use 1 of the 3 missiles depending on the progressive charges controlled by the $!#aurastate!$ field and $!#aurastat1!$ fields. Use $!#calc1!$ to add to the velocity of the missiles created."
                ],
                [
                    "23",
                    {
                        "id": "SorDoBlaze",
                        "text": "SorDoBlaze"
                    },
                    "$!#aurastate!$<br>$!#auralencalc!$",
                    "Add the $!#aurastate!$ state on the caster with a duration controlled by $!#auralencalc!$. Remove any other states in the same $!states#group!$ Apply any aura stats or events."
                ],
                [
                    "24",
                    {
                        "id": "srv-SorDoFirewall",
                        "text": "SorDoFirewall (Server)"
                    },
                    "$!#srvmissilea!$<br>$!#srvmissileb!$<br>$!#calc1!$",
                    "Create 2 $!#srvmissilea!$ missiles in opposite directions and create 2 $!#srvmissileb!$ missiles also at those locations. Use $!#calc1!$ to control how many different groups of these missiles can exist at once."
                ],
                [
                    "25",
                    {
                        "id": "SorDoEnchant",
                        "text": "SorDoEnchant"
                    },
                    "$!#aurastate!$<br>$!#auralencalc!$",
                    "Add the $!#aurastate!$ state on the target with a duration controlled by $!#auralencalc!$. Apply any aura stats or events."
                ],
                [
                    "26",
                    {
                        "id": "srv-SorDoChainLightning",
                        "text": "SorDoChainLightning (Server)"
                    },
                    "$!#srvmissilea!$<br>$!#calc1!$",
                    "Create the missile, which can jump off targets hit, where $!#calc1!$ controls the number of missile chain jump hits"
                ],
                [
                    "27",
                    {
                        "id": "SorDoTeleport",
                        "text": "SorDoTeleport"
                    },
                    "",
                    "Check that the level allows teleporting (see $!Levels#Teleport!$), then validate the target location and warp the unit to that location."
                ],
                [
                    "28",
                    {
                        "id": "srv-SorDoMeteor",
                        "text": "SorDoMeteor (Server)"
                    },
                    "$!#srvmissilea!$",
                    "Check that the target location is valid to spawn the missile, then create it"
                ],
                [
                    "29",
                    {
                        "id": "SorDoThunder Storm",
                        "text": "SorDoThunder Storm"
                    },
                    "$!#aurastate!$<br>$!#auralencalc!$<br>$!#srvmissilea!$<br>$!#Param7!$",
                    "While the caster unit has the $!#aurastate!$ state with the $!#auralencalc!$ duration, find nearby a nearby enemy and shoot the missile. Use $!#Param7!$ to control the radius size for finding nearby enemies."
                ],
                [
                    "30",
                    {
                        "id": "NecDoAmplifyDamage",
                        "text": "NecDoAmplifyDamage"
                    },
                    "$!#auratargetstate!$<br>$!#aurarangecalc!$<br>$!#auralencalc!$",
                    "Apply the $!#auratargetstate!$ state on enemies in an area where $!#aurarangecalc!$ controls the radius and $!#auralencalc!$ controls the duration. Also apply and aura stats, events, and filters."
                ],
                [
                    "31",
                    {
                        "id": "srv-NecDoRaiseSkeleton",
                        "text": "NecDoRaiseSkeleton (Server)"
                    },
                    "$!#pettype!$<br>$!#calc1!$<br>$!#calc2!$",
                    "Validate the target corpse and then create a pet unit. Use $!#calc1!$ to control the life percent of the pet. Use $!#calc2!$ to control the percent chance to spawn the skeleton with a shield (only works for the \"necroskeleton\" monster)."
                ],
                [
                    "32",
                    {
                        "id": "NecDoApplyDamage",
                        "text": "NecDoApplyDamage"
                    },
                    "",
                    "Validate the target enemy and perform damage from the attacker"
                ],
                [
                    "33",
                    {
                        "id": "srv-AssDoPsychicHammer",
                        "text": "AssDoPsychicHammer (Server)"
                    },
                    "$!#calc1!$<br>$!#calc2!$<br>$!#calc3!$<br>$!#calc4!$",
                    "Validate that the target unit is a monster or player and is not in town. Use the calculation fields to control the chance to knockback the target if it is a monster, unique monster, boss, or player, respectively."
                ],
                [
                    "34",
                    {
                        "id": "AssDoProgressiveAttack",
                        "text": "AssDoProgressiveAttack"
                    },
                    "$!#aurastate!$<br>$!#auralencalc!$<br>$!#aurastat1!$<br>$!#aurastat2!$<br>$!#aurastatcalc2!$",
                    "Attempt to attack the target unit and deal damage. Calculate the progressive damage. Use $!#auralencalc!$ to determine the length of the charges. Use $!#aurastat1!$ to control the progressive charges. Use $!#aurastat2!$ as a stat when the player attacks and has no charges. Use $!#aurastatcalc2!$ to control that stat's value."
                ],
                [
                    "35",
                    {
                        "id": "AssDoDualProgressiveAttack",
                        "text": "AssDoDualProgressiveAttack"
                    },
                    "$!#aurastate!$<br>$!#auralencalc!$<br>$!#aurastat1!$<br>$!#aurastat2!$<br>$!#aurastatcalc2!$",
                    "Check that the player has 2 weapons equipped. Attempt to attack the target unit twice with a frame delay, and use the $!#AssDoProgressiveAttack!$ (Code = 34) function for each attack."
                ],
                [
                    "36",
                    {
                        "id": "ApplyClawsOfThunderLvl2",
                        "text": "ApplyClawsOfThunderLvl2"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#srvmissilea!$<br>$!#srvmissileb!$<br>$!#srvmissilec!$<br>$!#calc1!$",
                    "Shoot missiles in a circular array. Use the $!#srvmissilea!$ missile by default, or use 1 of the 3 missiles depending on the progressive charges controlled by the $!#aurastate!$ field and $!#aurastat1!$ fields. Use $!#calc1!$ to add to the velocity of the missiles created."
                ],
                [
                    "37",
                    {
                        "id": "ApplyClawsOfThunderLvl3",
                        "text": "ApplyClawsOfThunderLvl3"
                    },
                    "$!#aurastate!$<br>$!#aurarangecalc!$<br>$!#aurastat1!$<br>$!#srvmissilea!$<br>$!#srvmissileb!$<br>$!#srvmissilec!$",
                    "Shoot missiles in an arc array. Use the $!#srvmissilea!$ missile by default, or use 1 of the 3 missiles depending on the progressive charges controlled by the $!#aurastate!$ field and the $!#aurastat1!$ fields. Use $!#aurarangecalc!$ to control how many missiles are created, only if there are no values from the progressive charge calculation fields (see $!#prgcalc1!$)"
                ],
                [
                    "38",
                    {
                        "id": "AssDoAreaDamage",
                        "text": "AssDoAreaDamage"
                    },
                    "$!#aurastate!$<br>$!#aurarangecalc!$<br>$!#aurastat1!$",
                    "Deal damage to enemies in an area at a target location. Use the progressive calculation fields to determine the radius increase per charge, controlled by the $!#aurastate!$ state and the $!#aurastat1!$ value, otherwise use $!#aurarangecalc!$ for the radius."
                ],
                [
                    "39",
                    {
                        "id": "AssMissileDisc",
                        "text": "AssMissileDisc"
                    },
                    "$!#aurastate!$<br>$!#aurarangecalc!$<br>$!#aurastat1!$<br>$!#srvmissilea!$<br>$!#srvmissileb!$<br>$!#srvmissilec!$",
                    "Create a disc of randomly positioned missiles. Use the $!#srvmissilea!$ missile by default, or use 1 of the 3 missiles depending on the progressive charges controlled by the $!#aurastate!$ field and $!#aurastat1!$ fields. Use the progressive calculation fields to determine the radius increase per charge, controlled by the $!#aurastate!$ state and the $!#aurastat1!$ value, otherwise use $!#aurarangecalc!$ for the radius."
                ],
                [
                    "40",
                    {
                        "id": "ApplyRoyalStrikeLvl1",
                        "text": "ApplyRoyalStrikeLvl1"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#srvmissilea!$<br>$!#srvmissileb!$<br>$!#srvmissilec!$",
                    "Create a missile at a target location. Use the $!#srvmissilea!$ missile by default, or use 1 of the 3 missiles depending on the progressive charges controlled by the $!#aurastate!$ field and $!#aurastat1!$ fields."
                ],
                [
                    "41",
                    {
                        "id": "ApplyChaosIce",
                        "text": "ApplyChaosIce"
                    },
                    "$!#aurastate!$<br>$!#aurarangecalc!$<br>$!#aurastat1!$<br>$!#srvmissilea!$<br>$!#srvmissileb!$<br>$!#srvmissilec!$",
                    "Create multiple missiles from the caster unit. Use the $!#srvmissilea!$ missile by default, or use 1 of the 3 missiles depending on the progressive charges controlled by the $!#aurastate!$ field and $!#aurastat1!$ fields. Use the progressive calculation fields to determine the number of missiles created per charge, controlled by the $!#aurastate!$ state and the $!#aurastat1!$ value. Use $!#aurarangecalc!$ for the radius."
                ],
                [
                    "42",
                    {
                        "id": "AssDoDragonTalon",
                        "text": "AssDoDragonTalon"
                    },
                    "$!#calc2!$<br>$!#calc3!$<br>$!#calc4!$<br>$!#Param1!$<br>$!#Param2!$",
                    "Attempt to melee attack the target unit multiple times. Use the progressive fields to control the charge functions. Use each calculation field to control the percent chance to knockback for a monster, boss, or player unit. Use the parameters to control a linear calculation for the percentage of bonus physical damage dealt."
                ],
                [
                    "43",
                    {
                        "id": "srv-AssDoShockField",
                        "text": "AssDoShockField (Server)"
                    },
                    "$!#aurastate!$<br>$!#aurarangecalc!$<br>$!#aurastat1!$<br>$!#srvmissilea!$<br>$!#srvmissileb!$<br>$!#srvmissilec!$",
                    "Create multiple missiles using the lob function. Use the $!#srvmissilea!$ missile by default, or use 1 of the 3 missiles depending on the progressive charges controlled by the $!#aurastate!$ field and $!#aurastat1!$ fields. Use the progressive calculation fields to determine the number of missiles created per charge, controlled by the $!#aurastate!$ state and the $!#aurastat1!$ value. Use $!#aurarangecalc!$ for the radius."
                ],
                [
                    "44",
                    {
                        "id": "AssDoBladeSentinel",
                        "text": "AssDoBladeSentinel"
                    },
                    "$!#pettype!$",
                    "Summon a pet at the target location and cause it to oscillate"
                ],
                [
                    "45",
                    {
                        "id": "AssDoWakeOfFireSentry",
                        "text": "AssDoWakeOfFireSentry"
                    },
                    "$!#pettype!$",
                    "Summon a pet at the target location"
                ],
                [
                    "46",
                    {
                        "id": "srv-AssDoDragonClaw",
                        "text": "AssDoDragonClaw (Server)"
                    },
                    "$!#calc1!$<br>$!#calc4!$",
                    "Attempt to attack the target unit twice with a frame delay. Use $!#calc1!$ to control the percent increase for physical damage dealt. Use $!#calc4!$ to control the percent of damage converted to elemental, if the $!#EType!$ field is used. Use the progressive fields to determine progressive damage changes."
                ],
                [
                    "47",
                    {
                        "id": "AssDoCloakOfShadows",
                        "text": "AssDoCloakOfShadows"
                    },
                    "$!#aurastate!$<br>$!#auratargetstate!$<br>$!#auralencalc!$<br>$!#aurarangecalc!$",
                    "Apply the $!#aurastate!$ state on the caster unit with a duration controlled by $!#auralencalc!$. Apply the $!#auratargetstate!$ state on nearby enemies in a radius controlled by $!#aurarangecalc!$. Use any applicable aura stats or filters."
                ],
                [
                    "48",
                    {
                        "id": "srv-AssDoBladeFury",
                        "text": "AssDoBladeFury (Server)"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#srvmissilea!$<br>$!#srvmissileb!$<br>$!#srvmissilec!$",
                    "Create a missile after a frame delay. Use the $!#srvmissilea!$ missile by default, or use 1 of the 3 missiles depending on the progressive charges controlled by the $!#aurastate!$ field and $!#aurastat1!$ fields. Use the progressive calculation fields to modify the delay between creating the next missile, based on the charges."
                ],
                [
                    "49",
                    {
                        "id": "AssDoShadowWarrior",
                        "text": "AssDoShadowWarrior"
                    },
                    "$!#pettype!$<br>$!#Param5!$<br>$!#Param6!$",
                    "Create a pet unit with generated item equipment and stats. Use $!#Param5!$ and $!#Param6!$ to control the item level for the generated items on the pet."
                ],
                [
                    "50",
                    {
                        "id": "srv-AssDoDragonTail",
                        "text": "AssDoDragonTail (Server)"
                    },
                    "$!#aurarangecalc!$<br>$!#calc1!$",
                    "Attempt to attack a target unit and deal damage in an area. Use the progressive fields to control the charge functions. Use $!#aurarangecalc!$ to control the radius. Use $!#calc1!$ to control the percent increase in damage dealt."
                ],
                [
                    "51",
                    {
                        "id": "srv-AssDoMindBlast",
                        "text": "AssDoMindBlast (Server)"
                    },
                    "$!#aurarangecalc!$<br>$!#calc1!$<br>$!#calc2!$<br>$!#Param4!$",
                    "Randomly damage and convert enemies in an area. Use $!#aurarangecalc!$ to control the radius, or if using the progressive charges, then use their field values instead. Use $!#calc1!$ to control the chance to convert enemies. Use $!#calc2!$ to control the duration enemies are converted. Use $!#Param4!$ to add an additional randomized duration value."
                ],
                [
                    "52",
                    {
                        "id": "AssDoDragonFlight",
                        "text": "AssDoDragonFlight"
                    },
                    "$!#calc1!$",
                    "Teleport the caster to the target unit and attempt to attack it. Use the progressive fields to control the charge functions. Use $!#calc1!$ to control the percent increase for physical damage dealt."
                ],
                [
                    "53",
                    {
                        "id": "AssDoAreaDamage2",
                        "text": "AssDoAreaDamage2"
                    },
                    "$!#aurastate!$<br>$!#aurarangecalc!$<br>$!#aurastat1!$",
                    "Deal damage to enemies in an area around the caster. Use the progressive calculation fields to determine the radius increase per charge, controlled by the $!#aurastate!$ state and the $!#aurastat1!$ value, otherwise use $!#aurarangecalc!$ for the radius."
                ],
                [
                    "54",
                    {
                        "id": "AssDoBladeShield",
                        "text": "AssDoBladeShield"
                    },
                    "$!#aurastate!$<br>$!#aurarangecalc!$<br>$!#aurastat1!$",
                    "Deal damage to enemies in an area around the caster. Use the progressive calculation fields to determine the radius increase per charge, controlled by the $!#aurastate!$ state and the $!#aurastat1!$ value, otherwise use $!#aurarangecalc!$ for the radius."
                ],
                [
                    "55",
                    {
                        "id": "NecDoCorpseExplosion",
                        "text": "NecDoCorpseExplosion"
                    },
                    "$!#aurarangecalc!$<br>$!#calc1!$<br>$!#calc2!$<br>$!#calc3!$<br>$!#EType!$",
                    "Hide the target corpse and deal damage in an area. Use $!#aurarangecalc!$ to control the radius. Use $!#calc1!$ and $!#calc2!$ to control the min and max percent damage dealt based on the max Life from the corpse unit. Use $!#calc3!$ to control the percent of damage converted to elemental."
                ],
                [
                    "56",
                    {
                        "id": "NecCreateGolem",
                        "text": "NecCreateGolem"
                    },
                    "$!#pettype!$",
                    "Create a pet unit with defined stats. If the skill has the $!#TargetableOnly!$ and $!#TargetCorpse!$ flag enabled, then the summoned pet will copy the modifiers of the corpse."
                ],
                [
                    "57",
                    {
                        "id": "NecCreateIronGolem",
                        "text": "NecCreateIronGolem"
                    },
                    "$!#pettype!$",
                    "Validate that the target is an identified item on the ground. Remove the item and create the pet, inheriting properties from the item."
                ],
                [
                    "58",
                    {
                        "id": "NecDoRevive",
                        "text": "NecDoRevive"
                    },
                    "$!#pettype!$",
                    "Validate that the target is a corpse that can be revived, then revive the monster, applying any valid stats"
                ],
                [
                    "59",
                    {
                        "id": "NecDoAttract",
                        "text": "NecDoAttract"
                    },
                    "$!#auratargetstate!$<br>$!#auralencalc!$<br>$!#aurarangecalc!$<br>$!#aurastat1!$",
                    "Validate that the target is a monster and can have its AI changed. Apply the $!#auratargetstate!$ state on any valid monsters in an area controlled by $!#aurarangecalc!$ which lasts a duration controlled by $!#auralencalc!$."
                ],
                [
                    "60",
                    {
                        "id": "NecDoBoneWall",
                        "text": "NecDoBoneWall"
                    },
                    "$!#pettype!$<br>$!#calc2!$<br>$!#srvmissilea!$",
                    "Create the pet, and then create 2 missiles that shoot in opposite directions, where $!#calc2!$ controls the number of sub missiles to create within each of these missile parameters."
                ],
                [
                    "61",
                    {
                        "id": "NecDoConfuse",
                        "text": "NecDoConfuse"
                    },
                    "$!#aurafilter!$<br>$!#auratargetstate!$<br>$!#auralencalc!$<br>$!#aurarangecalc!$<br>$!#aurastat#!$<br>$!#calc1!$",
                    "Apply the $!#auratargetstate!$ state on any units caught by $!#aurafilter!$ in an area controlled by $!#aurarangecalc!$ which lasts a duration controlled by $!#auralencalc!$. If its a $!states#curse!$ the length is modified by $!difficultylevels#AiCurseDivisor!$. Apply $!#aurastat#!$ on each target. If the target can have its AI switched, use $!#calc1!$ as the random chance for the AI to switch. Only try to switch the AI once per skill cast."
                ],
                [
                    "62",
                    {
                        "id": "NecDoBonePrison",
                        "text": "NecDoBonePrison"
                    },
                    "$!#pettype!$",
                    "Create a number of pets around the target unit."
                ],
                [
                    "63",
                    {
                        "id": "srv-NecDoPoisonExplosion",
                        "text": "NecDoPoisonExplosion (Server)"
                    },
                    "$!#srvmissilea!$",
                    "Validate that the target corpse can explode, then update the corpse to be unselectable and create a radial ring of poison missiles."
                ],
                [
                    "64",
                    {
                        "id": "srv-PalDoSacrifice",
                        "text": "PalDoSacrifice (Server)"
                    },
                    "$!#calc2!$<br>$!#Param4!$",
                    "Attack and deal damage to the target. Deal damage to the caster based on a percentage of life controlled by $!#calc2!$ and $!#Param4!$."
                ],
                [
                    "65",
                    {
                        "id": "PalDoMight",
                        "text": "PalDoMight"
                    },
                    "$!#aurastate!$<br>$!#auratargetstate!$<br>$!#aurarangecalc!$",
                    "Apply the $!#aurastate!$ state to the caster. Apply the $!#auratargetstate!$ state to nearby units, where $!#aurarangecalc!$ controls the radius size."
                ],
                [
                    "66",
                    {
                        "id": "PalDoHolyFire",
                        "text": "PalDoHolyFire"
                    },
                    "$!#aurastate!$<br>$!#auratargetstate!$<br>$!#aurarangecalc!$",
                    "Apply the $!#aurastate!$ state to the caster. Apply the $!#auratargetstate!$ state to nearby units, where $!#aurarangecalc!$ controls the radius size. Deal damage to the nearby units in the area."
                ],
                [
                    "67",
                    {
                        "id": "srv-PalDoCharge",
                        "text": "PalDoCharge (Server)"
                    },
                    "$!#calc1!$<br>$!#calc4!$",
                    "Listen for the event frames and attempt to attack the target unit to deal damage. Use $!#calc1!$ to control the percent increase for physical damage dealt. Use $!#calc4!$ to control the percent of damage converted to elemental, if the $!#EType!$ field is used."
                ],
                [
                    "68",
                    {
                        "id": "BarDoBattleCry",
                        "text": "BarDoBattleCry"
                    },
                    "$!#aurastate!$<br>$!#auralencalc!$<br>$!#srvmissilea!$",
                    "Create a circular array of missiles and add the $!#aurastate!$ state to the caster unit where the duration is controlled by $!#auralencalc!$."
                ],
                [
                    "69",
                    {
                        "id": "srv-BarDoFindHeart",
                        "text": "BarDoFindHeart (Server)"
                    },
                    "$!#calc1!$<br>$!#Param3!$<br>$!#Param4!$",
                    "Validate the target corpse, then update the corpse to be unselectable and roll a random chance to create a potion. Use $!#calc1!$ to control the chance of finding a potion. Use $!#Param3!$ and $!#Param4!$ to control the chance for finding a mana potion and rejuvenation potion. Potions depend on the current Act level and Game Difficulty."
                ],
                [
                    "70",
                    {
                        "id": "srv-BarDoDoubleSwing",
                        "text": "BarDoDoubleSwing (Server)"
                    },
                    "$!#aurastate!$<br>$!#calc1!$<br>$!#calc2!$<br>$!#calc3!$<br>$!#calc4!$",
                    "Validate the target enemy and attack it based on the animation sequence frame to determine if it is the first attack or second attack. Uses the $!#BarStartBash!$ function (Code 32 for $!#srvstfunc!$)."
                ],
                [
                    "71",
                    {
                        "id": "BarDoTaunt",
                        "text": "BarDoTaunt"
                    },
                    "$!#auratargetstate!$<br>$!#auralencalc!$",
                    "Validate that the target is a monster and can have its AI changed to force it to attack the caster. Apply the $!#auratargetstate!$ state on the target, which lasts a duration controlled by $!#auralencalc!$. If there is no target selected, then find the nearest target within a radius value of 20."
                ],
                [
                    "72",
                    {
                        "id": "srv-BarDoFindItem",
                        "text": "BarDoFindItem (Server)"
                    },
                    "$!#calc1!$<br>$!#Param1!$<br>$!#Param2!$<br>$!#Param3!$<br>$!#Param4!$",
                    "Validate the target corpse, then update the corpse to be unselectable and roll a random chance to spawn a treasure class item. Use $!#calc1!$ to control the chance of finding an item. Use the parameter values to control the chances for finding Low Quality, Normal, High Quality, and Magic items."
                ],
                [
                    "73",
                    {
                        "id": "srv-PalDoBlessedHammer",
                        "text": "PalDoBlessedHammer (Server)"
                    },
                    "$!#srvmissilea!$<br>$!#calc1!$",
                    "Create a missile in a spiral path pattern. Use $!#calc1!$ to control the damage percent bonus when the caster has the \"concentration\" state."
                ],
                [
                    "74",
                    {
                        "id": "srv-BarDoDoubleThrow",
                        "text": "BarDoDoubleThrow (Server)"
                    },
                    "$!#calc1!$",
                    "Launch the weapon missile, where $!#calc1!$ controls the bonus damage percent"
                ],
                [
                    "75",
                    {
                        "id": "srv-BarDoGrimWard",
                        "text": "BarDoGrimWard (Server)"
                    },
                    "$!#srvmissilea!$<br>$!#srvmissileb!$<br>$!#srvmissilec!$",
                    "Validate the target corpse, then update the corpse to be unselectable and create the $!#srvmissilea!$ missile. If the target unit has the $!monstats2#large!$ flag enabled then use $!#srvmissileb!$ instead. If the target unit has the $!monstats2#small!$ flag enabled then use $!#srvmissilec!$ instead."
                ],
                [
                    "76",
                    {
                        "id": "srv-BarDoWhirlwind",
                        "text": "BarDoWhirlwind (Server)"
                    },
                    "$!#aurastate!$<br>$!#calc1!$",
                    "If the caster unit is at the target location, then remove the aura and stop whirlwinding. Otherwise, find nearby enemies and deal damage, where $!#calc1!$ controls the damage bonus."
                ],
                [
                    "77",
                    {
                        "id": "srv-BarDoLeap",
                        "text": "BarDoLeap (Server)"
                    },
                    "$!#calc1!$<br>$!#calc2!$",
                    "Validate the target position and caster's collision, and move the unit. Use $!#calc1!$ to control the range, and $!#calc2!$ to control the speed."
                ],
                [
                    "78",
                    {
                        "id": "srv-BarDoLeapAttack",
                        "text": "BarDoLeapAttack (Server)"
                    },
                    "$!#calc1!$<br>$!#calc2!$<br>$!#calc4!$",
                    "Validate the target position and the caster's collision, and move the unit. Make the unit attack the target, if nearby, or find another nearby target. Use $!#calc2!$ to control the speed. Use $!#calc1!$ to control the percent increase for physical damage dealt. Use $!#calc4!$ to control the percent of damage converted to elemental, if the $!#EType!$ field is used."
                ],
                [
                    "79",
                    {
                        "id": "PalDoConversion",
                        "text": "PalDoConversion"
                    },
                    "$!#auratargetstate!$<br>$!#auralencalc!$<br>$!#calc1!$<br>$!#Param5!$",
                    "Validate that the target is a monster and can have its AI changed to fight alongside the player. Apply the $!#auratargetstate!$ state on the target, which lasts a duration controlled by $!#auralencalc!$. Use $!#calc1!$ to control the chance to convert. Use $!#Param5!$ to enable a expire effect."
                ],
                [
                    "80",
                    {
                        "id": "PalDoFistOfTheHeavens",
                        "text": "PalDoFistOfTheHeavens"
                    },
                    "$!#srvmissilea!$<br>$!#srvoverlay!$",
                    "Create the missile and apply the overlay on the target unit"
                ],
                [
                    "81",
                    {
                        "id": "PalDoHolyFreeze",
                        "text": "PalDoHolyFreeze"
                    },
                    "$!#aurastate!$<br>$!#auratargetstate!$<br>$!#aurarangecalc!$",
                    "Apply the $!#aurastate!$ state on the caster, and apply the $!#auratargetstate!$ on any nearby enemies with a radius controlled by $!#aurarangecalc!$"
                ],
                [
                    "82",
                    {
                        "id": "PalDoRedemption",
                        "text": "PalDoRedemption"
                    },
                    "$!#aurastate!$<br>$!#aurarangecalc!$<br>$!#calc1!$<br>$!#calc2!$<br>$!#calc3!$",
                    "Apply the $!#aurastate!$ state on the caster. Use $!#aurarangecalc!$ to control the radius of the aura, which will look for valid corpses to redeem. Use $!#calc1!$ to control the chance to redeem. Use $!#calc2!$ to control the life gain. Use $!#calc3!$ to control the mana gain."
                ],
                [
                    "83",
                    {
                        "id": "MonDoFirehit",
                        "text": "MonDoFirehit"
                    },
                    "",
                    "Apply damage to the target"
                ],
                [
                    "84",
                    {
                        "id": "MonDoMaggotEgg",
                        "text": "MonDoMaggotEgg"
                    },
                    "$!#calc1!$",
                    "Spawn a number of units around the caster and kill the caster. Use $!#calc1!$ to control the number of spawned units."
                ],
                [
                    "85",
                    {
                        "id": "MonDoShamanFire",
                        "text": "MonDoShamanFire"
                    },
                    "$!#srvmissilea!$",
                    "Get the missile and possibly add the monster's number in class to the missile ID to get another missile ID instead, and then fire that missile"
                ],
                [
                    "86",
                    {
                        "id": "srv-MonDoMaggotDown",
                        "text": "MonDoMaggotDown (Server)"
                    },
                    "$!#calc1!$",
                    "Check for the proper frame count and then heal the caster by a percentage of Life controlled by $!#calc1!$"
                ],
                [
                    "87",
                    {
                        "id": "MonDoMaggotLay",
                        "text": "MonDoMaggotLay"
                    },
                    "",
                    "Spawn a unit in 1 of 8 possible directions nearby the target location"
                ],
                [
                    "88",
                    {
                        "id": "srv-MonDoAndariel",
                        "text": "MonDoAndariel (Server)"
                    },
                    "$!#srvmissilea!$",
                    "For multiple frames, spawn a missile in 1 of 8 possible directions"
                ],
                [
                    "89",
                    {
                        "id": "MonDoJump",
                        "text": "MonDoJump"
                    },
                    "",
                    "Validate the target path and check for the completion of the animation or the arrival to destination, then update the unit's collision. Handle special cases for the \"sandleaper1\" monster frame counts."
                ],
                [
                    "90",
                    {
                        "id": "srv-MonDoSwarmMove",
                        "text": "MonDoSwarmMove (Server)"
                    },
                    "$!#calc1!$<br>$!#calc2!$",
                    "Check for the skill flag to stop the sequence, otherwise reset the sequence. Use $!#calc1!$ to control the animation starting frame at the beginning of the sequence. Use $!#calc2!$ to control the animation frame when ending the sequence."
                ],
                [
                    "91",
                    {
                        "id": "srv-MonDoNest",
                        "text": "MonDoNest (Server)"
                    },
                    "$!#sumoverlay!$",
                    "Make the caster unit interruptable. Create the monster saved in the function parameter and make that monster unable to reward Experience and Item Drops, and add the overlay on that monster."
                ],
                [
                    "92",
                    {
                        "id": "MonDoQuickStrike",
                        "text": "MonDoQuickStrike"
                    },
                    "$!#srvmissilea!$",
                    "Apply damage to the target. Check for the monster's missile frame and then launch the missile."
                ],
                [
                    "93",
                    {
                        "id": "srv-MonDoGargoyleTrap",
                        "text": "MonDoGargoyleTrap (Server)"
                    },
                    "$!#srvmissilea!$",
                    "Create the missile in one of the allowed directions that is closest to the target unit"
                ],
                [
                    "94",
                    {
                        "id": "srv-MonDoSubmerge",
                        "text": "MonDoSubmerge (Server)"
                    },
                    "",
                    "When on the last frame, set the animation sequence rate to 0 and clear the frame events"
                ],
                [
                    "95",
                    {
                        "id": "MonDoMonsterInferno",
                        "text": "MonDoMonsterInferno"
                    },
                    "$!#srvmissilea!$<br>$!#calc1!$<br>$!#calc3!$",
                    "Continuously create missiles based on the monster's Inferno fields (See $!monstats2#InfernoLen!$, $!monstats2#InfernoAnim!$, $!monstats2#InfernoRollback!$). Use $!#calc1!$ to adjust the missile range. Use $!#calc3!$ to adjust the density when to create the next missile."
                ],
                [
                    "96",
                    {
                        "id": "MonDoZakarumHeal",
                        "text": "MonDoZakarumHeal"
                    },
                    "$!#calc1!$<br>$!#calc2!$",
                    "Heal the ally target by a random percentage of the target's life, where $!#calc1!$ controls the min percent and $!#calc2!$ controls the max percent"
                ],
                [
                    "97",
                    {
                        "id": "MonDoResurrect",
                        "text": "MonDoResurrect"
                    },
                    "$!#srvoverlay!$",
                    "Validate that the monster is dead and can be resurrected. Make the monster have proper collision, be attackable, be selectable, able to be hit by missiles, not provide experience, and not provide item drops. Also update the monster's mode and add an overlay."
                ],
                [
                    "98",
                    {
                        "id": "MonDoTeleport",
                        "text": "MonDoTeleport"
                    },
                    "",
                    "Validate the target location and teleport the unit. Adjust the location if the monster has a boss owner."
                ],
                [
                    "99",
                    {
                        "id": "srv-MonDoPrimePoisonNova",
                        "text": "MonDoPrimePoisonNova (Server)"
                    },
                    "$!#srvmissilea!$<br>$!#calc1!$<br>$!#calc2!$",
                    "Create 2 rings of missiles. Use $!#calc1!$ to control the number of missile subloops. Use $!#calc2!$ to control how many missiles are created per ring. Use the missile's $!Missiles#Param1!$ and $!Missiles#Param2!$ values to control its velocity per ring."
                ],
                [
                    "100",
                    {
                        "id": "MonDoDiabCold",
                        "text": "MonDoDiabCold"
                    },
                    "$!#srvoverlay!$",
                    "Deal elemental damage to the target and apply the overlay. Adjust the Freeze Length using the $!#ELen!$ fields from the skill."
                ],
                [
                    "101",
                    {
                        "id": "srv-MonDoFingerMageSpider",
                        "text": "MonDoFingerMageSpider (Server)"
                    },
                    "$!#srvmissilea!$<br>$!#calc1!$",
                    "Create the missile with a facing opposite of the target or caster unit, and use $!#calc1!$ to control the missile's subloops."
                ],
                [
                    "102",
                    {
                        "id": "srv-MonDiabWallMaker",
                        "text": "MonDiabWallMaker (Server)"
                    },
                    "$!#srvmissilea!$<br>$!#calc1!$",
                    "Create a number of missiles with a randomized path and range. Use $!#calc1!$ to control the number of missiles created."
                ],
                [
                    "103",
                    {
                        "id": "srv-MonDoDiabRun",
                        "text": "MonDoDiabRun (Server)"
                    },
                    "$!#calc1!$<br>$!#Param1!$<br>$!#Param2!$<br>$!#Param3!$<br>$!#Param4!$<br>$!#Param5!$<br>$!#Param6!$",
                    "Move the caster unit with increased speed towards a target, and then attack the target, dealing damage. Use $!#calc1!$ to control the increase in movement speed. The 6 parameter values controls the run animation's stop frame length, stop event frame, start event frame, start frame length, loop repeat event frame, loop frame length, and loop start event frame."
                ],
                [
                    "104",
                    {
                        "id": "MonDoDiabPrison",
                        "text": "MonDoDiabPrison"
                    },
                    "$!#summon!$",
                    "Create multiple of the $!#summon!$ units around the target, based on the type of unit that is being targeted"
                ],
                [
                    "105",
                    {
                        "id": "srv-MonDoDesertTurret",
                        "text": "MonDoDesertTurret (Server)"
                    },
                    "$!#srvmissilea!$<br>$!#calc1!$",
                    "Create a number of missiles in 8 possible directions. Use $!#calc1!$ to control the number of missiles created."
                ],
                [
                    "106",
                    {
                        "id": "srv-MonDoArcaneTower",
                        "text": "MonDoArcaneTower (Server)"
                    },
                    "$!#srvmissilea!$",
                    "Create a circular array of missiles"
                ],
                [
                    "107",
                    {
                        "id": "srv-MonDoMosquito",
                        "text": "MonDoMosquito (Server)"
                    },
                    "$!#calc3!$<br>$!#Param1!$",
                    "Validate that the caster is in melee range for the target and then deal damage, including randomized poison damage, mana drain, and stamina drain. Use $!#calc3!$ to control the heal percentage on the caster based on the damage dealt. Use $!#Param1!$ to control the animation frame to start the repeat loop."
                ],
                [
                    "108",
                    {
                        "id": "srv-MonDoRegurgitatorEat",
                        "text": "MonDoRegurgitatorEat (Server)"
                    },
                    "$!#calc1!$",
                    "Validate that the target corpse is a monster and then remove it and heal the caster by a percentage of the target's life, controlled by $!#calc1!$"
                ],
                [
                    "109",
                    {
                        "id": "DoTownPortal",
                        "text": "DoTownPortal"
                    },
                    "",
                    "Creates a Town Portal without using a scroll."
                ],
                [
                    "110",
                    {
                        "id": "srv-MonDoHireFireMissile",
                        "text": "MonDoHireFireMissile (Server)"
                    },
                    "$!#srvmissilea!$",
                    "Launch the weapon missile to the target. Use $!#srvmissilea!$ if the weapon missile is \"arrow\" or \"bolt\""
                ],
                [
                    "111",
                    {
                        "id": "srv-MonDoFetishAura",
                        "text": "MonDoFetishAura (Server)"
                    },
                    "$!#Param4!$",
                    "Apply an aura to nearby \"fetish1\" or \"fetishblow1\" monster types, increasing their attack rate. Use $!#Param4!$ to control the radius."
                ],
                [
                    "112",
                    {
                        "id": "MonDoCurse",
                        "text": "MonDoCurse"
                    },
                    "$!#auratargetstate!$<br>$!#aurarangecalc!$<br>$!#auralencalc!$<br>$!#Param5!$<br>$!#Param6!$<br>$!#Param7!$",
                    "Apply a random curse to enemy units in an area. Randomly select between the following curses: Amplify Damage, Weaken, Life Tap, Decrepify, Lower Resist. Use $!#aurarangecalc!$ to control the radius. Use $!#auralencalc!$ to control the duration. Use $!#Param5!$ and $!#Param6!$ to control the resistance percentage change for the Lower Resist curse. Use $!#Param7!$ to control the Decrepify attack speed and movement speed change."
                ],
                [
                    "113",
                    {
                        "id": "ItemDoBookSkill",
                        "text": "ItemDoBookSkill"
                    },
                    "",
                    "Check the caster's inventory for an item that has the \"Book\" or \"Scroll\" Item Type (See $!ItemTypes!$), and then use that item's skill and update its quantity."
                ],
                [
                    "114",
                    {
                        "id": "DruDoRaven",
                        "text": "DruDoRaven"
                    },
                    "$!#pettype!$<br>$!#calc1!$<br>$!#calc2!$",
                    "Create the pet unit and make it unattackable. Use $!#calc1!$ to control the pet's bonus Life percent. Use $!#calc2!$ to control the summoned pet's unit level."
                ],
                [
                    "115",
                    {
                        "id": "DruCreateVineCreature",
                        "text": "DruCreateVineCreature"
                    },
                    "$!#pettype!$<br>$!#calc1!$<br>$!#calc2!$",
                    "Create the pet unit in the \"Skill 1\" mode. Use $!#calc1!$ to control the pet's bonus Life percent. Use $!#calc2!$ to control the summoned pet's unit level."
                ],
                [
                    "116",
                    {
                        "id": "DruDoWerewolf",
                        "text": "DruDoWerewolf"
                    },
                    "$!#aurastate!$<br>$!#auralencalc!$<br>$!#Param12!$",
                    "Add/Remove the $!#aurastate!$ state on the caster, depending if the caster unit does or does not have the state. Use $!#auralencalc!$ to control the state duration. Use $!#Param12!$ to control whether you should be able to shift directly to a form without first going back to human form using \"1\" to allow and \"0\" to not allow."
                ],
                [
                    "117",
                    {
                        "id": "srv-DruDoFireStorm",
                        "text": "DruDoFireStorm (Server)"
                    },
                    "$!#srvmissilea!$<br>$!#calc1!$",
                    "Create a number of missiles that move in a randomized pattern. Use $!#calc1!$ to control the number of missiles created."
                ],
                [
                    "118",
                    {
                        "id": "srv-DruDoTwister",
                        "text": "DruDoTwister (Server)"
                    },
                    "$!#srvmissilea!$<br>$!#calc1!$",
                    "Create a number of missiles that move in a randomized pattern. Use $!#calc1!$ to control the number of missiles created."
                ],
                [
                    "119",
                    {
                        "id": "DruCreateTotem",
                        "text": "DruCreateTotem"
                    },
                    "$!#pettype!$<br>$!#calc1!$<br>$!#calc2!$",
                    "Create the pet unit at a valid target location. Use $!#calc1!$ to control the pet's bonus Life percent. Use $!#calc2!$ to control the summoned pet's unit level."
                ],
                [
                    "120",
                    {
                        "id": "DruDoFeralRage",
                        "text": "DruDoFeralRage"
                    },
                    "$!#aurastate!$<br>$!#auralencalc!$<br>$!#calc2!$",
                    "After hitting the target, apply the state on the caster unit with a duration controlled by $!#auralencalc!$ and with the capability to stack with charges. Use $!#calc2!$ to control the max charges."
                ],
                [
                    "121",
                    {
                        "id": "DruDoRabies",
                        "text": "DruDoRabies"
                    },
                    "$!#auratargetstate!$<br>$!#calc1!$",
                    "Attack the target to deal damage. Apply the $!#auratargetstate!$ where its duration is controlled by the $!#ELen!$ field. Use $!#calc1!$ to control the percent increase in physical damage."
                ],
                [
                    "122",
                    {
                        "id": "DruDoHunger",
                        "text": "DruDoHunger"
                    },
                    "$!#calc1!$<br>$!#calc2!$<br>$!#calc3!$",
                    "Attempt to attack the target, dealing damage and restoring Life and Mana. Use Use $!#calc1!$ to control the percent change in physical damage. Use $!#calc2!$ and $!#calc3!$ to control the life steal and mana steal gained from the attack damage."
                ],
                [
                    "123",
                    {
                        "id": "srv-DruDoVolcano",
                        "text": "DruDoVolcano (Server)"
                    },
                    "$!#srvmissilea!$",
                    "Validate the target location and then create the missile"
                ],
                [
                    "124",
                    {
                        "id": "srv-DruDoArmageddon",
                        "text": "DruDoArmageddon (Server)"
                    },
                    "$!#aurastate!$<br>$!#auralencalc!$<br>$!#Param4!$",
                    "Apply the $!#aurastate!$ state on the caster unit which lasts a duration controlled by $!#auralencalc!$. Use $!#Param4!$ to control the duration between sending an event state update."
                ],
                [
                    "125",
                    {
                        "id": "srv-MonDoWakeOfFire",
                        "text": "MonDoWakeOfFire (Server)"
                    },
                    "$!#srvmissilea!$",
                    "Create a missile from the source unit with a saved direction"
                ],
                [
                    "126",
                    {
                        "id": "MonDoImpInferno",
                        "text": "MonDoImpInferno"
                    },
                    "$!#srvmissilea!$<br>$!#calc2!$<br>$!#Param2!$",
                    "Based on the animation frames set in $!monstats2!$, create a missile where $!#calc2!$ controls the missile's range (and also $!Missiles#Param2!$ from)."
                ],
                [
                    "127",
                    {
                        "id": "MonDoBatSuckBlood",
                        "text": "MonDoBatSuckBlood"
                    },
                    "$!#calc1!$",
                    "Deal damage to the target and then use $!#calc1!$ to control the percentage of max Life healed on the caster unit"
                ],
                [
                    "128",
                    {
                        "id": "MonDoCryHelp",
                        "text": "MonDoCryHelp"
                    },
                    "$!#calc1!$<br>$!#srvoverlay!$",
                    "If the caster is a monster, then command the caster to attack the target for a duration controlled by $!#calc1!$. Apply the overlay on the target."
                ],
                [
                    "129",
                    {
                        "id": "MonDoImpTeleport",
                        "text": "MonDoImpTeleport"
                    },
                    "$!#aurastate!$",
                    "If the target location is on the ground, then warp the unit to that location. If the type of unit targeted is the \"barricadetower\" or \"siegebeast1\" and the caster unit type is \"imp1\", then add the \"attached\" state to the caster unit, and update the AI, animation events, and stats to be not interactable."
                ],
                [
                    "130",
                    {
                        "id": "MonDoVineAttack",
                        "text": "MonDoVineAttack"
                    },
                    "$!#srvmissilea!$<br>$!#calc1!$",
                    "Create a number of missiles in a random spread pattern with 4 possible spread directions. Use $!#calc1!$ to control the number of missiles created."
                ],
                [
                    "131",
                    {
                        "id": "MonDoOverseerWhip",
                        "text": "MonDoOverseerWhip"
                    },
                    "$!#auratargetstate!$<br>$!#calc1!$",
                    "Validate that the target is a living monster. If the target unit type is \"minion1\", then perform a random chance to bloodlust the target. Use $!#calc1!$ to control the percent chance to bloodlust the target, which will apply the $!#auratargetstate!$ state on the target. If bloodlust does not happen, then change the monster class and AI to the suicide minion."
                ],
                [
                    "132",
                    {
                        "id": "MonDoImpFireMissile",
                        "text": "MonDoImpFireMissile"
                    },
                    "$!#srvmissilea!$",
                    "Based on the monster's number in class, increment the index of the linked $!#srvmissilea!$ missile and then create that missile based on the index."
                ],
                [
                    "133",
                    {
                        "id": "MonDoImpregnate",
                        "text": "MonDoImpregnate"
                    },
                    "",
                    "Validate that the target is a friendly dead monster and that it does not have the \"pregnant\" state. Then add the \"pregnant\" state to the target and create a \"painworm1\" type monster."
                ],
                [
                    "134",
                    {
                        "id": "srv-MonDoSiegeBeastStomp",
                        "text": "MonDoSiegeBeastStomp (Server)"
                    },
                    "$!#srvmissilea!$<br>$!#aurarangecalc!$",
                    "Deal damage to nearby enemies in an aura where $!#aurarangecalc!$ controls the radius of the damage"
                ],
                [
                    "135",
                    {
                        "id": "MonDoSpawner",
                        "text": "MonDoSpawner"
                    },
                    "$!#sumoverlay!$",
                    "Create the monster saved in the parameter with the added overlay, with no experience provided, and with no item spawning."
                ],
                [
                    "136",
                    {
                        "id": "srv-MonDoDeathMauler",
                        "text": "MonDoDeathMauler (Server)"
                    },
                    "$!#srvmissilea!$<br>$!#calc1!$",
                    "Validate the target location and then create the missile with an animation rate controlled by $!#calc1!$. The missile's range is modified based on the distance from the caster."
                ],
                [
                    "137",
                    {
                        "id": "srv-MonDoFenrisRage",
                        "text": "MonDoFenrisRage (Server)"
                    },
                    "$!#aurastate!$",
                    "Validate that the target is an enemy corpse that has not been used. Apply the state on the caster, adding any aura events on the caster."
                ],
                [
                    "138",
                    {
                        "id": "srv-MonDoBaalInferno",
                        "text": "MonDoBaalInferno (Server)"
                    },
                    "$!#srvmissilea!$<br>$!#calc1!$<br>$!#calc2!$",
                    "Shoot multiple missiles from the caster unit to a target location. Use $!#calc1!$ to control the number of missiles created. Use $!#calc2!$ to control the range of the missiles. Check the inferno frame events for the monster (see $!monstats2!$)."
                ],
                [
                    "139",
                    {
                        "id": "srv-MonDoBaalCold",
                        "text": "MonDoBaalCold (Server)"
                    },
                    "$!#srvmissilea!$",
                    "Validate the target location and then create the missile using the directions from the saved parameters."
                ],
                [
                    "140",
                    {
                        "id": "MonDoBaalTentacle",
                        "text": "MonDoBaalTentacle"
                    },
                    "",
                    "Based on the monster class of the caster, create a number of \"baaltentacle1\" summoned monsters randomly positioned in a location with a radius size of 9. Make sure these monsters do not provide exp or reward items."
                ],
                [
                    "141",
                    {
                        "id": "MonDoBaalCorpseExplosion",
                        "text": "MonDoBaalCorpseExplosion"
                    },
                    "$!#aurarangecalc!$<br>$!#calc1!$<br>$!#calc2!$<br>$!#calc3!$<br>$!#EType!$<br>$!#Param5!$<br>$!#Param6!$",
                    "Find a nearby dead monster and then do the $!#NecDoCorpseExplosion!$ function (Code = 55) except where $!#Param5!$ and $!#Param6!$ control the baseline radius and radius increase per skill level."
                ],
                [
                    "142",
                    {
                        "id": "AssDoAreaAttack",
                        "text": "AssDoAreaAttack"
                    },
                    "$!#prgcalc1!$<br>$!#prgcalc2!$<br>$!#prgcalc3!$<br>$!#aurastate!$<br>$!#aurastat1!$<br>$!#aurarangecalc!$",
                    "Deal attack damage in an area. Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, use the proper $!#prgcalc#!$ value to control the radius, based on the number of progressive charges. Otherwise, default to using $!#aurarangecalc!$ for the radius."
                ],
                [
                    "143",
                    {
                        "id": "srv-ApplyRoyalStrikeLvl2",
                        "text": "ApplyRoyalStrikeLvl2 (Server)"
                    },
                    "$!#prgcalc1!$<br>$!#prgcalc2!$<br>$!#prgcalc3!$<br>$!#aurastate!$<br>$!#aurastat1!$<br>$!#srvmissilea!$<br>$!#srvmissileb!$<br>$!#srvmissilec!$",
                    "Create a number of missiles that move in a randomized pattern. Use the $!#srvmissilea!$ missile by default, or use 1 of the 3 missiles depending on the progressive charges controlled by the $!#aurastate!$ field and $!#aurastat1!$ fields. Use $!#aurarangecalc!$ value by default for the number of missiles created, or use the appropriate progressive calculation fields, based on the number of progressive charges."
                ],
                [
                    "144",
                    {
                        "id": "SorDoHydra",
                        "text": "SorDoHydra"
                    },
                    "$!#pettype!$<br>$!#calc1!$",
                    "Validate the target location and create 3 pets, where $!#calc1!$ controls their duration and bonus life percent."
                ],
                [
                    "145",
                    {
                        "id": "DruApplyHurricane",
                        "text": "DruApplyHurricane"
                    },
                    "$!#aurastate!$<br>$!#aurarangecalc!$<br>$!#Param4!$",
                    "Apply the state on the caster with the radius controlled by $!#aurarangecalc!$ and the frame state updates to deal radius damage controlled by $!#Param4!$"
                ],
                [
                    "146",
                    {
                        "id": "DruApplyArmageddon",
                        "text": "DruApplyArmageddon"
                    },
                    "$!#aurastate!$<br>$!#aurarangecalc!$<br>$!#srvmissilea!$<br>$!#Param4!$",
                    "Update the state on the caster unit based on the events, and then create a missile in a radius controlled by $!#aurarangecalc!$ at a periodic frame interval controlled by $!#Param4!$"
                ],
                [
                    "147",
                    {
                        "id": "srv-MonApplyAttached",
                        "text": "MonApplyAttached (Server)"
                    },
                    "",
                    "Get the source unit of the caster and update the caster's pathing to follow the source unit, like a rider attached to its mount."
                ],
                [
                    "148",
                    {
                        "id": "srv-MonDoDoomKnightMissile",
                        "text": "MonDoDoomKnightMissile (Server)"
                    },
                    "$!#srvmissilea!$",
                    "Create the $!#srvmissilea!$ using either the lob function or the normal linear function, depending on the $!#lob!$ flag. Also select the missile or up to 3 index values higher, depending on the monster's graphics variation for the \"Special 3\" component variation."
                ],
                [
                    "149",
                    {
                        "id": "srv-MonDoNecroMageMissile",
                        "text": "MonDoNecroMageMissile (Server)"
                    },
                    "$!#srvmissilea!$",
                    "Create the $!#srvmissilea!$ using either the lob function or the normal linear function, depending on the $!#lob!$ flag. Also select the missile or up to 3 index values higher, depending on the monster's graphics variation for the \"Special 4\" component variation."
                ],
                [
                    "150",
                    {
                        "id": "PalDoSmite",
                        "text": "PalDoSmite"
                    },
                    "$!#calc1!$<br>$!#calc2!$<br>$!#calc4!$",
                    "Validate the target enemy and that the target is in melee range, and then attempt to attack the target. Use $!#calc1!$ to control the percent increase for physical damage dealt. Use $!#calc2!$ to control the stun length. Use $!#calc4!$ to control the percent of damage converted to elemental, if the $!#EType!$ field is used."
                ],
                [
                    "151",
                    {
                        "id": "srv-SorDoChainLightning2",
                        "text": "SorDoChainLightning2 (Server)"
                    },
                    "$!#srvmissilea!$<br>$!#calc1!$",
                    "Launch the missile that can do chain hits to other nearby enemies. Use $!#calc1!$ to control the number of chain hits."
                ],
                [
                    "152",
                    {
                        "id": "MonDoDiabloLight",
                        "text": "MonDoDiabloLight"
                    },
                    "$!#srvmissilea!$<br>$!#calc1!$<br>$!#calc3!$",
                    "Shoot a missile from the caster to the target location, adhering to the caster's inferno animation frames (See $!monstats2!$). Use $!#calc1!$ to control the missile range, otherwise default to using the missile's $!Missiles#Param2!$ value calculated with its current level. Use $!#calc3!$ to control the periodic frame count for how often to create the missile."
                ],
                [
                    "153",
                    {
                        "id": "WarDoSealDeathExplode",
                        "text": "WarDoSealDeathExplode"
                    },
                    "",
                    "Perform $!skills#NecDoCorpseExplosion!$ on the target if it is a monster (don't check for a corpse)."
                ],
                [
                    "154",
                    {
                        "id": "srv-WarDoRingOfFire",
                        "text": "WarDoRingOfFire (Server)"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#srvmissile#!$<br>$!#calc2!$<br>$!#calc3!$",
                    "Fire $!#calc2!$ number (must be a power of 2) of missiles in a circle. Use the $!#srvmissilea!$ missile by default, or use 1 of the 3 missiles depending on the progressive charges controlled by the $!#aurastate!$ field and $!#aurastat1!$ fields. $!#calc3!$ will determine the additional velocity of the missiles."
                ],
                [
                    "155",
                    {
                        "id": "WarDoDeathMark",
                        "text": "WarDoDeathMark"
                    },
                    "$!#auratargetstate!$<br>$!#auralencalc!$<br>$!#aurarangecalc!$<br>$!#aurastat#!$<br>$!#auraevent#!$<br>$!#pettype!$<br>$!#sumoverlay!$<br>$!#calc1!$<br>$!#calc2!$",
                    "Teleport $!#calc2!$ amount of pets to a target location using $!#aurarangecalc!$ as the range and respecting $!Levels#Teleport!$. If $!#pettype!$ is filled out, then the pet must be of that type (also checks pooled pets, see $!pettype#pool!$). For each pet teleported: attempt to direct their AI at the target, apply $!#sumoverlay!$, and if $!#calc1!$ is true remove the stun, freeze, and cold states. <br>If a target exists and a pet was teleported to them, apply $!#auratargetstate!$ for length $!#auralencalc!$ with all the $!#aurastat#!$ and $!#auraevent#!$."
                ],
                [
                    "156",
                    {
                        "id": "srv-WarDoFlameWave",
                        "text": "WarDoFlameWave (Server)"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#srvmissile#!$<br>$!#calc1!$<br>$!#calc2!$",
                    "Spawn missiles in a wall pattern centered on the player. Use the $!#srvmissilea!$ missile by default, or use 1 of the 3 missiles depending on the progressive charges controlled by the $!#aurastate!$ field and $!#aurastat1!$ fields. $!#calc1!$ is the number of missiles to spawn to the left and right of the player. $!#calc2!$ is the number of frames to wait for the wall missiles to start moving."
                ],
                [
                    "157",
                    {
                        "id": "srv-WarDoSeal",
                        "text": "WarDoSeal (Server)"
                    },
                    "$!#prgcalc1!$<br>$!#srvmissile#!$<br>$!#aurastate!$<br>$!#calc3!$",
                    "Use the $!#srvmissilea!$ missile by default, or if $!#progressive!$ is true use 1 of the 3 missiles depending on the value of $!#prgcalc1!$. Validate the target location and then create the missile. Use $!#calc3!$ as the maximum amount of missiles to allow, using a statslist with $!#aurastate!$. Make space for the new missile, removing the oldest missiles first."
                ],
                [
                    "158",
                    {
                        "id": "WarDoBindDemon",
                        "text": "WarDoBindDemon"
                    },
                    "$!#aurastate!$<br>$!#aurastat#!$<br>$!#auraevent#!$<br>$!#passivestat#!$<br>$!#pettype!$<br>$!#petmax!$<br>$!#sumskill#!$<br>$!#sumumod!$<br>$!#sumoverlay!$<br>$!#calc1!$<br>$!#calc2!$<br>$!#calc3!$<br>$!#calc4!$<br>$!#calc5!$<br>$!#calc6!$",
                    "Convert an existing monster to a pet. Test the monster can be converted, has an entry in $!MonPet!$, and roll against $!MonPet#bindchancecalc!$. On a success convert the target to a $!#pettype!$ pet, limited by $!#petmax!$. Use $!#calc2!$, $!#calc3!$, $!#calc4!$, and $!#calc5!$ as monster mods to apply. Set the monsters level to min(player level, monster level). Use $!#calc6!$ to determine HP regen behavior, with 0 being the monsters default HP regen behavior (no regen for elites), 1 disabling HP regen, and 2 always enabling HP regen. Apply $!#aurastate!$, all $!#aurastat#!$, all $!#auraevent#!$, all $!#passivestat#!$, all $!#sumskill#!$, $!#sumumod!$, and $!#sumoverlay!$ to the monster. Use $!#calc1!$ as additional percent max life. Add any equipment from $!monequip!$."
                ],
                [
                    "159",
                    {
                        "id": "WarDoConsume",
                        "text": "WarDoConsume"
                    },
                    "$!#aurastate!$<br>$!#auralencalc!$<br>$!#aurastat#!$<br>$!#auraevent#!$<br>$!#pettype!$<br>$!#calc1!$",
                    "Verify the target is a monster and not dead. Apply a $!#auralencalc!$ length statslist to the player using $!#aurastate!$ and apply all $!#aurastat#!$ and $!#auraevent#!$. If the monster has an entry in $!MonPet!$, apply all its $!MonPet#consumestat#!$. Deal $!#calc1!$ percent of the monster's hp as damage to it. If the skill has a $!#pettype!$, save it off in the statslist.<br>If this function is called again as a periodic callback, then check for a saved $!#pettype!$ in the statslist. If we're at the max for the pet type (also checks pooled pets, see $!pettype#pool!$) then remove the statslist."
                ],
                [
                    "160",
                    {
                        "id": "srv-WarDoBloodBoil",
                        "text": "WarDoBloodBoil (Server)"
                    },
                    "$!#aurafilter!$<br>$!#aurarangecalc!$<br>$!#pettype!$<br>$!#calc1!$<br>$!#calc2!$<br>$!#calc3!$<br>$!#calc4!$<br>$!#ResultFlags!$<br>$!#HitFlags!$",
                    "For each pet, using only pets of $!#pettype!$ if it is set (also checks pooled pets, see $!pettype#pool!$), damage them and then damage all targets in an area around them. Damage the pet by a percent of its max health, using $!#calc1!$ if only one pet exists, $!#calc2!$ for two, and $!#calc3!$ for three. If more than three pets are present, just use $!#calc1!$. If the pet would die from this damage then don't proceed.<br>For every target in an $!#aurarangecalc!$ radius around the pet that matches the $!#aurafilter!$, damage them by the skill's physical and elemental damage, using $!#ResultFlags!$ and $!#HitFlags!$. Apply a next hit delay of $!#calc4!$ frames."
                ],
                [
                    "161",
                    {
                        "id": "srv-WarDoEngorge",
                        "text": "WarDoEngorge (Server)"
                    },
                    "$!#srvoverlay!$<br>$!#aurastate!$<br>$!#auralencalc!$<br>$!#aurastat#!$<br>$!#auraevent#!$<br>$!#pettype!$<br>$!#calc1!$",
                    "For each pet, heal them by $!#calc1!$ percent of their health and apply $!#aurastate!$, all $!#aurastat#!$, and all $!#auraevent#!$ for the duration of $!#auralencalc!$. If $!#pettype!$ is filled out, then the pet must be of that type (also checks pooled pets, see $!pettype#pool!$). Disable corpse visuals on the target."
                ],
                [
                    "162",
                    {
                        "id": "WarDoHealthLink",
                        "text": "WarDoHealthLink"
                    },
                    "$!#aurafilter!$<br>$!#aurastate!$<br>$!#auratargetstate!$<br>$!#auralencalc!$<br>$!#aurarangecalc!$<br>$!#aurastat#!$<br>$!#auraevent#!$<br>$!#calc3!$",
                    "Apply a $!#auralencalc!$ length statslist to the target using $!#auratargetstate!$ and apply all $!#aurastat#!$ and $!#auraevent#!$. Save the caster off as well. For the caster, find an existing statslist of $!#aurastate!$ and save the target into it.<br>Repeat this for a $!#calc3!$ max of targets, using $!#aurafilter!$ to filter targets and $!#aurarangecalc!$ as the range. Run $!#WarStartHealthLink!$ for every target found this way."
                ],
                [
                    "163",
                    {
                        "id": "WarDoApocalpyse",
                        "text": "WarDoApocalpyse"
                    },
                    "$!#srvoverlay!$<br>$!#aurafilter!$<br>$!#auratargetstate!$<br>$!#aurarangecalc!$<br>$!#aurastat#!$<br>$!#ResultFlags!$<br>$!#HitFlags!$<br>$!#HitClass!$",
                    "Search for targets in an area using $!#aurafilter!$ as the filter and $!#aurarangecalc!$ as the range. For each target, apply $!#auratargetstate!$ and all $!#aurastat#!$, do the skill's physical and elemental damage, then remove $!#auratargetstate!$ and all $!#aurastat#!$. Use $!#ResultFlags!$, $!#HitFlags!$, and $!#HitClass!$ when applying the damage. Also apply $!#srvoverlay!$."
                ],
                [
                    "164",
                    {
                        "id": "srv-WarDoCleave",
                        "text": "WarDoCleave (Server)"
                    },
                    "$!#aurafilter!$<br>$!#calc5!$<br>$!#calc6!$<br>$!#calc7!$",
                    "Attack targets in an area. Divide a circle into $!#calc6!$ slices and use $!#calc5!$ as the amount of slices of that circle to damage targets in. The front of the circle is the direction to the target from the caster. Note that the calculated area is constrained to the game square system which only has 64 directions. Filter targets using $!#aurafilter!$. Use $!#calc7!$ as a range bonus. For each target, run $!#BarStartBash!$, but don't apply the attack rate speed up."
                ],
                [
                    "165",
                    {
                        "id": "WarDoRebound",
                        "text": "WarDoRebound"
                    },
                    "$!#srvoverlay!$<br>$!#auratargetstate!$<br>$!#calc1!$<br>$!#calc2!$<br>$!#ResultFlags!$<br>$!#HitFlags!$",
                    "Periodically applies the skill's physical and elemental damage and refreshes states on units in a $!#aurarangecalc!$ radius which statisfy $!#aurafilter!$. $!#calc1!$ specifies the amount of life drain to add to the damage. $!#calc2!$ specifies the amount of mana drain to apply to the damage. $!#auratargetstate!$ specifies which state to refresh. If the state is part of a $!states#group!$, all the states that belong to the group will be refreshed, using each state's associated skill's $!#calc1!$ as the new length. Apply $!#srvoverlay!$."
                ],
                [
                    "166",
                    {
                        "id": "srv-WarDoMirroredBlades",
                        "text": "WarDoMirroredBlades (Server)"
                    },
                    "$!#srvmissilea!$<br>$!#decquant!$<br>$!#lob!$<br>$!#calc1!$<br>$!#calc5!$<br>$!#calc6!$<br>$!#calc7!$<br>$!#calc8!$<br>$!#calc9!$<br>$!#Param12!$",
                    "Attack multiple times at once, supporting melee weapons, missile weapons, and normal missiles. Use $!#calc5!$ as the total amount of attacks to perform or missiles to create.<br>\u00b7 For melee weapons, run $!#BarStartBash!$ for each attack, but don't apply the attack rate speed up. The first attack consumes durability and uses full weapon damage. Any attacks after do not consume durability, have weapon damage modified by $!#calc6!$ percent, and the Crushing Blow base divisor is replaced by $!#calc9!$ for players/mercenaries and $!#calc7!$ for everything else.<br>\u00b7 For missile weapons, use the weapon's missile type, including special missiles from stats. Use $!#calc1!$ to control the physical damage percent increase. The first missile consumes durability unless the missile type says otherwise. Any missiles after do not consume durability, have total damage modified by $!#calc6!$ percent (using \"skill_missile_damage_scale\" applied multiplicatively with existing sources), are offset by 1 square from each other (alternating sides), and the Crushing Blow base divisor is replaced by $!#calc9!$ for players/mercenaries and $!#calc8!$ for everything else. Consider each missile created as a separate cast if $!#Param12!$ is true.<br>\u00b7 For normal missiles, use $!#srvmissilea!$. Lob the missiles if $!#lob!$ is set. The first missile consumes durability if $!#decquant!$ is set. Otherwise the same as the missile weapon flow."
                ],
                [
                    "167",
                    {
                        "id": "WarDoMiasmaChains",
                        "text": "WarDoMiasmaChains"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#srvmissile#!$",
                    "Creates progressive missile that path towards the target. Progressive missile: use the $!#srvmissilea!$ missile by default, or use 1 of the 3 missiles depending on the progressive charges controlled by the $!#aurastate!$ field and $!#aurastat1!$ field."
                ],
                [
                    "168",
                    {
                        "id": "BarDoColossalWhirlwind",
                        "text": "BarDoColossalWhirlwind"
                    },
                    "$!#calc2!$<br>$!#calc3!$<br>$!#calc6!$",
                    "Runs a skill with Skill Id $!#calc6!$ at level $!#calc2!$, at a random chance of $!#calc3!$/100. Then run $!#srv-BarDoWhirlwind!$."
                ],
                [
                    "169",
                    {
                        "id": "MonDoSelfHeal",
                        "text": "MonDoSelfHeal"
                    },
                    "$!#calc1!$",
                    "Heal the unit by $!#calc1!$ percent of their maxhp, minimum 1 hit point."
                ],
                [
                    "170",
                    {
                        "id": "BarDoColossalLeapAttack",
                        "text": "BarDoColossalLeapAttack"
                    },
                    "$!#calc6!$<br>$!#calc7!$",
                    "Run $!#srv-BarDoLeapAttack!$. Then runs a skill with Skill Id $!#calc5!$ at level $!#calc6!$ after landing."
                ],
                [
                    "171",
                    {
                        "id": "srv-MonDoChargedBoltDisk",
                        "text": "MonDoChargedBoltDisk (Server)"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#srvmissile#!$<br>$!#calc1!$",
                    "Create a $!#calc1!$ number of missiles in a disc, all using the charged bolt type of random paths. Use the $!#srvmissilea!$ missile by default, or use 1 of the 3 missiles depending on the progressive charges controlled by the $!#aurastate!$ field and $!#aurastat1!$ fields."
                ]
            ]
        },
        {
            "name": "srvstopfunc",
            "description": "Server Stop function. This controls how the skill cleans up after ending. This uses a code value to call a function, affecting how certain fields are used.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
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
                        "id": "BarStopWhirlwind",
                        "text": "BarStopWhirlwind"
                    },
                    "$!#aurastate!$",
                    "Handles changing the collision, pathing, and aura state of the caster."
                ]
            ]
        },
        {
            "name": "prgstack",
            "description": "Boolean Field. If equals 1, then all $!#srvprgfunc#!$ functions will execute, based on the current number of progressive charges. If equals 0, then only the relative $!#srvprgfunc#!$ function will execute, based on the current number of progressive charges.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "srvprgfunc#",
            "altNames": [
                "srvprgfunc1",
                "srvprgfunc2",
                "srvprgfunc3"
            ],
            "description": "Controls what Server Do function is used when executing the progressive skill with a charge number equal to 1, 2, and 3, respectively. This field uses the same functions as the $!#srvdofunc!$ field.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "prgcalc#",
            "altNames": [
                "prgcalc1",
                "prgcalc2",
                "prgcalc3"
            ],
            "description": "Calculation Field. Used as a possible parameter for calculating values when executing the progressive skill with a charge number equal to 1, 2, and 3, respectively.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "prgdam",
            "description": "Calls a function to modify the progressive damage dealt",
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
                    "Do nothing"
                ],
                [
                    "1",
                    {
                        "id": "ModifyProgressiveDamage",
                        "text": "ModifyProgressiveDamage"
                    },
                    "$!#aurastat1!$<br>$!#calc1!$<br>$!#tgtoverlay!$",
                    "Modify the percentage of the physical damage dealt by \"$!#calc1!$ * $!#aurastat1!$\" and apply $!#tgtoverlay!$ on the target. For tooltips the bonus is calculated as \"($!skillcalc!$ identifier \"ln12\") * $!#aurastat1!$\""
                ],
                [
                    "2",
                    {
                        "id": "ModifyProgressiveSteal",
                        "text": "ModifyProgressiveSteal"
                    },
                    "$!#aurastat1!$<br>$!#calc1!$",
                    "Modify the percentage of the life steal and mana steal gained by the value of $!#aurastat1!$<br>1: \"life steal + $!#calc1!$\"<br>2: \"life steal + $!#calc1!$\" and \"mana steal + $!#calc1!$\"<br>3: \"life steal + (2 * $!#calc1!$)\" and \"mana steal + (2 * $!#calc1!$)\""
                ],
                [
                    "3",
                    {
                        "id": "ModifyProgressiveElemental",
                        "text": "ModifyProgressiveElemental"
                    },
                    "$!#aurastat1!$<br>$!#Param2!$<br>$!#EType!$",
                    "Add the skill's elemental damage (see $!#EMin!$ and related fields). If $!#EType!$ equals Cold, then when $!#aurastat1!$ equals 2 or 3, add \"Cold Length / $!#Param2!$\" to the Freeze Length"
                ],
                [
                    "4",
                    {
                        "id": "ModifyProgressiveElementalConvert",
                        "text": "ModifyProgressiveElementalConvert"
                    },
                    "$!#aurastat1!$<br>$!#calc1!$<br>$!#Param5!$<br>$!#EType!$",
                    "Add the skill's elemental damage (see $!#EMin!$ and related fields). If $!#EType!$ equals Cold, then when $!#aurastat1!$ equals 3, add \"Cold Length / $!#Param5!$\" to the Freeze Length. Convert a $!#calc1!$ percentage of the physical damage dealt to the skill's elemental damage."
                ]
            ]
        },
        {
            "name": "srvmissile",
            "description": "Used as a parameter for controlling the main missile used by the server functions.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Missiles",
                "field": "Missile"
            }
        },
        {
            "name": "decquant",
            "description": "Boolean Field. If equals 1, then the unit's ammo quantity will be updated each time the skill's $!#srvdofunc!$ is called. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "lob",
            "description": "Boolean Field. If equals 1, then missiles created by the skill's functions will use the missile lobbing function, which will cause the missile fly in an arc pattern. If equals 0, then missiles that are created will use the normal linear function.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "srvmissile#",
            "altNames": [
                "srvmissilea",
                "srvmissileb",
                "srvmissilec"
            ],
            "description": "Used as a parameter for controlling the secondary missiles used by the server functions.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Missiles",
                "field": "Missile"
            }
        },
        {
            "name": "useServerMissilesOnRemoteClients",
            "description": "Control new missile changes per player skill. Values of 1 will force enable it for that skill. Skills that have matching server/client missiles sets for the skill get auto enabled. Setting this to a value greater than 1 will force it to skip this auto enable logic. If equals 0, then ignore this. Note: this feature is disabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "srvoverlay",
            "description": "Used as a possible parameter used by various skill functions to create an overlay on units.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Overlay",
                "field": "overlay"
            }
        },
        {
            "name": "aurafilter",
            "description": "Controls different flags that affect how the skill's aura will affect the different types of units. Uses an integer value to check against different bit fields. For example, if the value equals 4354 (binary = 1000100000010) then that returns true for the 4096 (binary = 1000000000000), 256 (binary = 0000100000000), and 2 (binary = 0000000000010) bit field values.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            },
            "appendField": {
                "file": "enums",
                "field": "Aura Filter"
            }
        },
        {
            "name": "aurastate",
            "description": "A state applied to the caster unit. Used as a possible parameter used by various skill functions.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "states",
                "field": "state"
            }
        },
        {
            "name": "auratargetstate",
            "description": "A state applied to the target unit. Used as a possible parameter used by various skill functions.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "states",
                "field": "state"
            }
        },
        {
            "name": "auralencalc",
            "description": "Calculation Field. Controls the state duration on the unit (where 25 Frames = 1 second). If this value is empty, then the state duration will be controlled by other functions, or it will last forever. Used as a possible parameter used by various skill functions.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "aurarangecalc",
            "description": "Calculation Field. Controls the area radius size for auras and other effects, measured in grid sub-tiles. Used as a possible parameter used by various skill functions.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "aurastat#",
            "altNames": [
                "aurastat1",
                "aurastat2",
                "aurastat3",
                "aurastat4",
                "aurastat5",
                "aurastat6"
            ],
            "description": "Controls which stat modifiers will be altered or added by the skill. Used as a possible parameter used by various skill functions.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "ItemStatCost",
                "field": "Stat"
            }
        },
        {
            "name": "aurastatcalc#",
            "altNames": [
                "aurastatcalc1",
                "aurastatcalc2",
                "aurastatcalc3",
                "aurastatcalc4",
                "aurastatcalc5",
                "aurastatcalc6"
            ],
            "description": "Calculation Field. Controls the value for the relative $!#aurastat#!$ field.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "auraevent#",
            "altNames": [
                "auraevent1",
                "auraevent2",
                "auraevent3",
                "auraevent4"
            ],
            "description": "Controls what event will trigger the relative $!#auraeventfunc#!$ field function. Used as a possible parameter used by various skill functions.",
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
            "name": "auraeventfunc#",
            "altNames": [
                "auraeventfunc1",
                "auraeventfunc2",
                "auraeventfunc3",
                "auraeventfunc4"
            ],
            "description": "Controls the function used when the relative $!#auraevent#!$ event is triggered. Corresponds to a $!enums#Server Event Functions!$.",
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
            "name": "passivestate",
            "description": "Links to a state that is automatically applied as a passive when the skill gains levels.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "states",
                "field": "state"
            }
        },
        {
            "name": "passiveitype",
            "description": "Links to an Item Type to define what type of item needs to be equipped in order to enable the $!#passivestate!$. Not all stats support this behavior, usually only ones with \"mastery\" in the name.",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 16,
                "file": "ItemTypes",
                "field": "ItemType"
            }
        },
        {
            "name": "passivereqweaponcount",
            "description": "Controls how many equipped weapons are needed for the $!#passivestate!$ to be enabled. If the value equals 1, then the player must have 1 weapon equipped for the $!#passivestate!$ to be enabled. If the value equals 2, then the player must be dual wielding weapons for the $!#passivestate!$ to be enabled. If the value equals 0, then ignore this field. Not all stats support this behavior, usually only ones with \"mastery\" in the name.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "passivestat#",
            "altNames": [
                "passivestat1",
                "passivestat2",
                "passivestat3",
                "passivestat4",
                "passivestat5",
                "passivestat6",
                "passivestat7",
                "passivestat8",
                "passivestat9",
                "passivestat10",
                "passivestat11",
                "passivestat12",
                "passivestat13",
                "passivestat14"
            ],
            "description": "Assigns stat modifiers to the $!#passivestate!$.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "ItemStatCost",
                "field": "Stat"
            }
        },
        {
            "name": "passivecalc#",
            "altNames": [
                "passivecalc1",
                "passivecalc2",
                "passivecalc3",
                "passivecalc4",
                "passivecalc5",
                "passivecalc6",
                "passivecalc7",
                "passivecalc8",
                "passivecalc9",
                "passivecalc10",
                "passivecalc11",
                "passivecalc12",
                "passivecalc13",
                "passivecalc14"
            ],
            "description": "Calculation Field. Controls the value for the relative $!#passivestat#!$ field.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "summon",
            "description": "Controls what monster is summoned by the skill. This field's usage will depend on the skill function used. This field can also be used as reference for AI behaviors and for the $!skilldesc!$ file.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "monstats",
                "field": "Id"
            }
        },
        {
            "name": "pettype",
            "description": "Links to a pet type data to control how the summoned unit is displayed on the UI",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 8,
                "file": "pettype",
                "field": "pet type"
            }
        },
        {
            "name": "petmax",
            "description": "Calculation Field. Used skill functions that summon pets to control how many summon units are allowed at a time.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "requirespettype",
            "description": "Boolean Field. If equals 1, then the skill requires at least one pet of the $!pettype!$ to cast.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "summode",
            "description": "Defines the animation mode that the summoned monster will be initiated with. Uses a $!MonMode#code!$.",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 8,
                "file": "MonMode",
                "field": "code"
            },
            "appendField": {
                "file": "MonMode",
                "field": "name"
            }
        },
        {
            "name": "sumskill#",
            "altNames": [
                "sumskill1",
                "sumskill2",
                "sumskill3",
                "sumskill4",
                "sumskill5"
            ],
            "description": "Assigns a skill to the summoned monster. This can be useful for adding a skill to a monster to transition its synergy bonuses.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "skills",
                "field": "skill"
            }
        },
        {
            "name": "sumsk#calc",
            "altNames": [
                "sumsk1calc",
                "sumsk2calc",
                "sumsk3calc",
                "sumsk4calc",
                "sumsk5calc"
            ],
            "description": "Calculation Field. Controls the skill level for the designated $!#sumskill#!$ field when the skill is assigned to the monster.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "sumumod",
            "description": "Assigns a monster modifier to the summoned monster. Uses the index of an entry in $!monumod!$",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "sumoverlay",
            "description": "Creates an overlay on the summoned monster when it is first created.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Overlay",
                "field": "overlay"
            }
        },
        {
            "name": "stsuccessonly",
            "description": "Boolean Field. If equals 1, then the following sound and overlay fields will only play when the skill is successfully cast, instead of always being used even when the skill cast is interrupted. If equals 0, then the following sound and overlay fields will always be used when the skill is cast, regardless if the skill was interrupted or not.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "stsound",
            "description": "Controls what client sound is played when the skill is used, based on the client starting function",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "stsoundclass",
            "description": "Controls what client sound is played when the skill is used by the skill's assigned class (See $!#charclass!$ field), based on the client starting function. If the unit using the skill is not the same class as the $!#charclass!$ value for the skill, then this sound will not play.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "stsounddelay",
            "description": "Boolean Field. If equals 1, then use the weapon's hit class to determine the delay in frames (where 25 frames = 1 second) before playing the skill's start sound. If equals 0, then the skill's start sound will play immediately.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Hit Class",
                    "Sound Used",
                    "Sound Delay"
                ],
                [
                    "None",
                    "None",
                    "0 frames"
                ],
                [
                    "Hand-To-Hand",
                    "weapon_punch_1",
                    "6 frames"
                ],
                [
                    "One Handed Swing Small",
                    "weapon_1hs_small_1",
                    "6 frames"
                ],
                [
                    "One Handed Swing Large",
                    "weapon_1hs_large_1",
                    "6 frames"
                ],
                [
                    "Two Handed Swing Small",
                    "weapon_2hs_small_1",
                    "8 frames"
                ],
                [
                    "Two Handed Swing Large",
                    "weapon_2hs_large_1",
                    "8 frames"
                ],
                [
                    "One Handed Thrust",
                    "weapon_1ht_1",
                    "6 frames"
                ],
                [
                    "Two Handed Thrust",
                    "weapon_2ht_1",
                    "6 frames"
                ],
                [
                    "Club",
                    "weapon_1hs_large_1",
                    "6 frames"
                ],
                [
                    "Staff",
                    "weapon_staff_1",
                    "6 frames"
                ],
                [
                    "Bow",
                    "None",
                    "0 frames"
                ],
                [
                    "Crossbow",
                    "None",
                    "0 frames"
                ],
                [
                    "Claw",
                    "None",
                    "0 frames"
                ]
            ]
        },
        {
            "name": "weaponsnd",
            "description": "Boolean Field. If equals 1, then play the weapon's hit sound when hitting an enemy with this skill. The sound chosen is based on the weapon's hit class. Also use the sound delay based on the weapon's hit class to determine the delay in frames (where 25 frames = 1 second) before playing the weapon hit sound (See $!#stsounddelay!$ for the types of hit class sounds and delays used). If equals 0, then do not play the weapon hit sound when hitting an enemy with the skill attack.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "dosound",
            "description": "Controls the sound for the skill each time the $!#cltdofunc!$ is used",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "dosound a",
            "altNames": [
                "dosound b"
            ],
            "description": "Used as a possible parameter for playing additional sounds based on the $!#cltdofunc!$ used",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "tgtoverlay",
            "description": "Used as a possible parameter for adding an Overlay on the target unit, based on the $!#cltdofunc!$ used",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Overlay",
                "field": "overlay"
            }
        },
        {
            "name": "tgtsound",
            "description": "Used as a possible parameter for playing a sound located on the target unit, based on the $!#cltdofunc!$ used",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "prgoverlay",
            "description": "Used as a possible parameter for adding an Overlay on the caster unit for progressive charge-up skill functions, based on the $!#cltdofunc!$ used and how many progressive charges the caster unit has",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Overlay",
                "field": "overlay"
            }
        },
        {
            "name": "prgsound",
            "description": "Used as a possible parameter for playing a sound when using the skill for progressive charge-up skill functions, based on the $!#cltdofunc!$ used and how many progressive charges the caster unit has",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "castoverlay",
            "description": "Used as a possible parameter for adding an Overlay on the caster unit when using the skill, based on the $!#cltstfunc!$ / $!#cltdofunc!$ used",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Overlay",
                "field": "overlay"
            }
        },
        {
            "name": "cltoverlaya",
            "altNames": [
                "cltoverlayb"
            ],
            "description": "Used as a possible parameter for adding additional Overlays on the caster unit, based on the $!#cltstfunc!$ / $!#cltdofunc!$ used",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Overlay",
                "field": "overlay"
            }
        },
        {
            "name": "cltstfunc",
            "description": "Client Start function. This controls how the skill works when it is starting to cast, on the client side. This uses a code value to call a function, affecting how certain fields are used.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
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
                        "id": "clt-StartAttack",
                        "text": "StartAttack (Client)"
                    },
                    "",
                    "Check that the weapon is not a \"Missile Potion\" item type and if the player has enough ammunition if it is a ranged weapon"
                ],
                [
                    "2",
                    {
                        "id": "clt-StartThrow",
                        "text": "StartThrow (Client)"
                    },
                    "",
                    "Check that the player has enough ammunition"
                ],
                [
                    "3",
                    {
                        "id": "clt-StartUnsummon",
                        "text": "StartUnsummon (Client)"
                    },
                    "",
                    "Check that the target is a monster owned by the player and that the monster's Pet Type has $!pettype#unsummon!$ enabled"
                ],
                [
                    "4",
                    {
                        "id": "StartLeftAttack",
                        "text": "StartLeftAttack"
                    },
                    "",
                    "Return true"
                ],
                [
                    "5",
                    {
                        "id": "clt-AssStartPsychicHammer",
                        "text": "AssStartPsychicHammer (Client)"
                    },
                    "",
                    "Check that the target is a valid player or monster"
                ],
                [
                    "6",
                    {
                        "id": "clt-AssStartDragonClaw",
                        "text": "AssStartDragonClaw (Client)"
                    },
                    "$!#calc1!$",
                    "Validate that the target is a proper enemy, and use the skill's $!#calc1!$ field to save the number of kicks to be used by the skill"
                ],
                [
                    "7",
                    {
                        "id": "AssStartCloakOfShadows",
                        "text": "AssStartCloakOfShadows"
                    },
                    "$!#aurastate!$",
                    "Check that the player does not already have the state"
                ],
                [
                    "8",
                    {
                        "id": "clt-AssStartBladeFury",
                        "text": "AssStartBladeFury (Client)"
                    },
                    "$!#prgoverlay!$<br>$!#prgsound!$<br>$!#seqinput!$",
                    "Add the overlay and sound if the player does not have the \"inferno\" state. If the player does not have the \"inferno\" state, then add it. Otherwise set the player's animation sequence frame."
                ],
                [
                    "9",
                    {
                        "id": "clt-AssStartDragonTail",
                        "text": "AssStartDragonTail (Client)"
                    },
                    "$!#Param4!$",
                    "Adjust the player's attack speed using the skill's parameter"
                ],
                [
                    "10",
                    {
                        "id": "AssStartDragonFlight",
                        "text": "AssStartDragonFlight"
                    },
                    "",
                    "Validate that the target is an enemy monster or player"
                ],
                [
                    "11",
                    {
                        "id": "srv-AmaStartCheckQuantity",
                        "text": "AmaStartCheckQuantity (Server)"
                    },
                    "",
                    "Check that the player has enough ammunition for the weapon"
                ],
                [
                    "12",
                    {
                        "id": "srv-AmaStartJab",
                        "text": "AmaStartJab (Server)"
                    },
                    "",
                    "Validate the skill and prepare to track the max targets to attack"
                ],
                [
                    "13",
                    {
                        "id": "clt-AmaStartStrafe",
                        "text": "AmaStartStrafe (Client)"
                    },
                    "$!#aurarangecalc!$<br>$!#calc1!$<br>$!#calc3!$",
                    "Use the skill's calculation fields to track the minimum and maximum number of shots. Use the skill's $!#aurarangecalc!$ value to count nearby valid targets. Have the caster unit face the first valid target found."
                ],
                [
                    "14",
                    {
                        "id": "srv-AmaStartFend",
                        "text": "AmaStartFend (Server)"
                    },
                    "$!#calc1!$",
                    "Find at least an initial valid target and prepare to track the max targets to attack"
                ],
                [
                    "15",
                    {
                        "id": "srv-SorStartInferno",
                        "text": "SorStartInferno (Server)"
                    },
                    "$!#prgoverlay!$<br>$!#prgsound!$",
                    "Add the overlay and sound if the player does not have the \"inferno\" state. If the player does not have the \"inferno\" state, then add it. Otherwise set the player's animation sequence frame."
                ],
                [
                    "16",
                    {
                        "id": "srv-SorStartTelekinesis",
                        "text": "SorStartTelekinesis (Server)"
                    },
                    "$!#aurarangecalc!$",
                    "Check the range of the skill using the $!#aurarangecalc!$ value and ensure there is a valid monster or player to target in the area"
                ],
                [
                    "17",
                    {
                        "id": "clt-SorStartHydra",
                        "text": "SorStartHydra (Client)"
                    },
                    "",
                    "Check for a valid area and ensure that the skill cannot be used in town"
                ],
                [
                    "18",
                    {
                        "id": "NecStartCurse",
                        "text": "NecStartCurse"
                    },
                    "$!#cltmissilec!$",
                    "Validate and launch the client missile"
                ],
                [
                    "19",
                    {
                        "id": "NecStartTeeth",
                        "text": "NecStartTeeth"
                    },
                    "$!#cltmissilec!$",
                    "Validate and create the missile to launch in a direction based on the cast position"
                ],
                [
                    "20",
                    {
                        "id": "clt-NecStartRaiseSkeleton",
                        "text": "NecStartRaiseSkeleton (Client)"
                    },
                    "",
                    "Check that the target corpse is valid"
                ],
                [
                    "21",
                    {
                        "id": "NecStartCExplosion",
                        "text": "NecStartCExplosion"
                    },
                    "",
                    "Check that there is a valid enemy corpse"
                ],
                [
                    "22",
                    {
                        "id": "clt-NecStartBonePrison",
                        "text": "NecStartBonePrison (Client)"
                    },
                    "",
                    "Check for a valid area and ensure that the skill cannot be used in town"
                ],
                [
                    "23",
                    {
                        "id": "clt-NecStartIronGolem",
                        "text": "NecStartIronGolem (Client)"
                    },
                    "",
                    "Check that the target item on the ground is valid and that it is identified"
                ],
                [
                    "24",
                    {
                        "id": "clt-NecStartRevive",
                        "text": "NecStartRevive (Client)"
                    },
                    "$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$",
                    "Validate that the target monster can be revived. Based on the monster's $!monstats2#OverlayHeight!$ value, create 1 of the 3 client missiles in a random direction. If the monster's $!monstats2#OverlayHeight!$ value equals 1, then create $!#cltmissileb!$. If the monster's $!monstats2#OverlayHeight!$ value equals 3, then create $!#cltmissilec!$."
                ],
                [
                    "25",
                    {
                        "id": "clt-PalStartCharge",
                        "text": "PalStartCharge (Client)"
                    },
                    "$!#dosound a!$<br>$!#Param1!$",
                    "If the player is in melee range of the target, then start an attack. If the caster unit is a player then play the $!#dosound a!$ sound. If the caster unit is a monster, then play the monster's $!monsounds#Skill#!$. Ensure that the target is not in an uninterruptable state. Adjust the movement speed of the caster unit. Set the caster unit's movement velocity speed percent so the skill's $!#Param1!$ value. Add movement parameters for the skill function."
                ],
                [
                    "26",
                    {
                        "id": "clt-BarStartFindHeart",
                        "text": "BarStartFindHeart (Client)"
                    },
                    "",
                    "Check that the target corpse is valid and has not been used yet"
                ],
                [
                    "27",
                    {
                        "id": "clt-BarStartDoubleSwing",
                        "text": "BarStartDoubleSwing (Client)"
                    },
                    "$!#cltcalc1!$",
                    "Adjust the caster unit's attack speed based on the $!#cltcalc1!$ field"
                ],
                [
                    "28",
                    {
                        "id": "clt-BarStartFindItem",
                        "text": "BarStartFindItem (Client)"
                    },
                    "",
                    "Check that the target corpse is valid and has not been used yet"
                ],
                [
                    "29",
                    {
                        "id": "clt-BarStartLeap",
                        "text": "BarStartLeap (Client)"
                    },
                    "$!#aurarangecalc!$",
                    "Check that the caster unit is not in an uninterruptible state. If the caster unit is a monster, then find a valid location past the target unit. If the caster unit is not a monster, then find a valid location and ensure that the target location is not in town. Store the target location. The target range is controlled by the $!#aurarangecalc!$ field."
                ],
                [
                    "30",
                    {
                        "id": "clt-BarStartLeapAttack",
                        "text": "BarStartLeapAttack (Client)"
                    },
                    "",
                    "Check that the caster unit is not in an uninterruptible state. If the player is in melee range of the target, then start an attack. Validate the target location, checking for proper player collision. Store the target location."
                ],
                [
                    "31",
                    {
                        "id": "clt-BarStartWhirlwind",
                        "text": "BarStartWhirlwind (Client)"
                    },
                    "",
                    "Check that the caster unit is not in an uninterruptible state. Modify the caster unit's collision to only collide with walls and objects. Adjust the caster unit's velocity. Add movement parameters for the skill function. Minimum whirlwind distance equals 5."
                ],
                [
                    "32",
                    {
                        "id": "clt-MonStartMaggotUp",
                        "text": "MonStartMaggotUp (Client)"
                    },
                    "$!#cltmissilea!$<br>$!#cltmissileb!$",
                    "Set the caster unit to be attackable and selectable. If the current area level is in Act 2, then create the $!#cltmissileb!$ missile, otherwise create the $!#cltmissilea!$ missile. Find a valid location, checking for collision, and then warp the caster unit to that location."
                ],
                [
                    "33",
                    {
                        "id": "clt-MonStartMaggotDown",
                        "text": "MonStartMaggotDown (Client)"
                    },
                    "",
                    "Set the unit to no longer be attackable or selectable and remove its collision"
                ],
                [
                    "34",
                    {
                        "id": "clt-MonStartAndariel",
                        "text": "MonStartAndariel (Client)"
                    },
                    "",
                    "Validate the target enemy and store the target unit's location for the skill function"
                ],
                [
                    "35",
                    {
                        "id": "clt-MonStartSwarmMove",
                        "text": "MonStartSwarmMove (Client)"
                    },
                    "",
                    "Find a valid path with a proper distance, and set movement parameters"
                ],
                [
                    "36",
                    {
                        "id": "clt-MonStartNest",
                        "text": "MonStartNest (Client)"
                    },
                    "",
                    "Validate the monster class, store the target location, and set the collision in the caster unit's location to be a monster collision"
                ],
                [
                    "37",
                    {
                        "id": "clt-MonStartSubmerge",
                        "text": "MonStartSubmerge (Client)"
                    },
                    "",
                    "Set the unit to no longer be attackable or selectable"
                ],
                [
                    "38",
                    {
                        "id": "clt-MonStartEmerge",
                        "text": "MonStartEmerge (Client)"
                    },
                    "",
                    "Set the unit to be attackable or selectable"
                ],
                [
                    "39",
                    {
                        "id": "MonStartResurrect",
                        "text": "MonStartResurrect"
                    },
                    "",
                    "Unhide the unit"
                ],
                [
                    "40",
                    {
                        "id": "clt-MonStartDiabLight",
                        "text": "MonStartDiabLight (Client)"
                    },
                    "$!#cltcalc1!$",
                    "Use the $!#cltcalc1!$ field to calculate a periodic delay for spawning missile and store that value in a parameter"
                ],
                [
                    "41",
                    {
                        "id": "clt-MonStartDiabRun",
                        "text": "MonStartDiabRun (Client)"
                    },
                    "",
                    "Clear all function flags on the skill"
                ],
                [
                    "42",
                    {
                        "id": "clt-MonStartMosquito",
                        "text": "MonStartMosquito (Client)"
                    },
                    "$!#calc1!$<br>$!#calc2!$",
                    "Validate the target enemy. Use the $!#calc1!$ and $!#calc2!$ fields as min and max values to randomly select a value to control a loop count, and store that loop count as a parameter for the skill function."
                ],
                [
                    "43",
                    {
                        "id": "MonStartCurse",
                        "text": "MonStartCurse"
                    },
                    "$!#cltmissilea!$",
                    "Validate and launch the client missile"
                ],
                [
                    "44",
                    {
                        "id": "MonStartHellMeteor",
                        "text": "MonStartHellMeteor"
                    },
                    "",
                    "Create the following missiles: \"hellmeteordown\", \"hellmeteorball\", \"hellmeteorup\", \"hellmeteorball\", \"hellmeteorlaunch1\", \"hellmeteorlaunch2\""
                ],
                [
                    "45",
                    {
                        "id": "DruStartWereWolf",
                        "text": "DruStartWereWolf"
                    },
                    "$!#aurastate!$<br>$!#cltoverlaya!$<br>$!#cltoverlayb!$",
                    "Add the $!#cltoverlayb!$ overlay to the caster unit if the unit has the $!#aurastate!$ state. Otherwise, add the $!#cltoverlaya!$ overlay to the caster unit."
                ],
                [
                    "46",
                    {
                        "id": "MonStartBaalTaunt",
                        "text": "MonStartBaalTaunt"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissilea!$<br>$!#prgsound!$",
                    "Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, validate the $!#cltmissilea!$ missile. Create the \"baal taunt control\" missile. Play the $!#prgsound!$ sound."
                ],
                [
                    "47",
                    {
                        "id": "MonStartCatapultDropMissile",
                        "text": "MonStartCatapultDropMissile"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltcalc1!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$",
                    "Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, validate the $!#cltmissilea!$ missile or use the other missiles based on the $!#aurastat1!$ value. Create the missile and use the $!#cltcalc1!$ value to set the missile's fall rate."
                ],
                [
                    "48",
                    {
                        "id": "MonStartTeleport2",
                        "text": "MonStartTeleport2"
                    },
                    "$!#cltmissilea!$",
                    "Create the missile at the target location"
                ],
                [
                    "49",
                    {
                        "id": "MonStartVines",
                        "text": "MonStartVines"
                    },
                    "$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltcalc1!$",
                    "Create the $!#cltmissilea!$ missile. Use the $!#cltcalc1!$ value to control the number of created $!#cltmissileb!$ missiles."
                ],
                [
                    "50",
                    {
                        "id": "MonStartDeathSentry",
                        "text": "MonStartDeathSentry"
                    },
                    "",
                    "Validate the target enemy and store the target unit's location for the skill function"
                ],
                [
                    "51",
                    {
                        "id": "sMonStartFenrisRage",
                        "text": "sMonStartFenrisRage"
                    },
                    "",
                    "Validate the target enemy corpse. Store the target unit's location and unit class for the skill function."
                ],
                [
                    "52",
                    {
                        "id": "MonStartInfernoSentry",
                        "text": "MonStartInfernoSentry"
                    },
                    "$!#calc2!$",
                    "Add the \"inferno\" state to the caster unit if it is not already added. Use the $!#calc1!$ field to control the animation frame tick and store the value for the skill function."
                ],
                [
                    "53",
                    {
                        "id": "clt-AmaStartFend2",
                        "text": "AmaStartFend2 (Client)"
                    },
                    "$!#calc1!$",
                    "Find at least an initial valid target and track the max targets to attack using the $!#calc1!$ value. Have the caster unit face the target unit."
                ],
                [
                    "54",
                    {
                        "id": "MonStartFetishInferno",
                        "text": "MonStartFetishInferno"
                    },
                    "",
                    "Reset internal variables for $!#MonDoFetishInferno!$."
                ],
                [
                    "55",
                    {
                        "id": "clt-AmaStartImpale",
                        "text": "AmaStartImpale (Client)"
                    },
                    "$!#Param9!$",
                    "Adjust the caster unit's attack speed based on the $!#Param9!$ field"
                ],
                [
                    "56",
                    {
                        "id": "clt-WarStartConsume",
                        "text": "WarStartConsume (Client)"
                    },
                    "$!#pettype!$",
                    "Verify the target is a pet. If $!#pettype!$ is filled out, then the pet must be of that type (also checks pooled pets, see $!pettype#pool!$)"
                ],
                [
                    "57",
                    {
                        "id": "WarStartMirroredBlades",
                        "text": "WarStartMirroredBlades"
                    },
                    "$!#cltcalc2!$<br>$!#calc5!$",
                    "If the weapon isn't a missile weapon, set up $!#calc5!$ graphical copies of the weapon, capped by $!#cltcalc2!$ (HD mode only). Also set up randomized HD weapon animations. Run $!#clt-BarStartDoubleSwing!$."
                ],
                [
                    "58",
                    {
                        "id": "clt-SkillStartPlayerChannelSkill",
                        "text": "SkillStartPlayerChannelSkill"
                    },
                    "$!#prgoverlay!$<br>$!#prgsound!$<br>",
                    "Starts a channeling skill by applying the \"skill_channeling\" state on the unit for 20 frames, applying $!#prgoverlay!$, and playing $!#prgsound!$. If the state is already present, the duration of the skill is extended by 7 frames. Animation sequences are set back to frame 8."
                ],
                [
                    "59",
                    {
                        "id": "WarStartCleave",
                        "text": "WarStartCleave"
                    },
                    "",
                    "Set up randomized HD weapon animations. Run $!#clt-BarStartDoubleSwing!$."
                ],
                [
                    "60",
                    {
                        "id": "SkillStartActiveStatePeriodic",
                        "text": "SkillStartActiveStatePeriodic"
                    },
                    "$!#periodic!$",
                    "Starts the provided skill to be applied periodically on the client. Requires skill to be marked as $!#periodic!$."
                ]
            ]
        },
        {
            "name": "cltdofunc",
            "description": "Client Do function. This controls how the skill works when it finishes being cast, on the client side. This uses a code value to call a function, affecting how certain fields are used.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            },
            "table": [
                [
                    "0",
                    "",
                    "",
                    "Do nothing"
                ],
                [
                    "1",
                    {
                        "id": "clt-DoAttack",
                        "text": "DoAttack (Client)"
                    },
                    "",
                    "If this is a ranged attack, then launch the client missile. Otherwise, apply damage to the target."
                ],
                [
                    "2",
                    {
                        "id": "clt-DoThrow",
                        "text": "DoThrow (Client)"
                    },
                    "",
                    "If the weapon is a \"Missile Potion\" item type then launch a missile using the lob function. Otherwise, launch a missile with the normal linear function."
                ],
                [
                    "3",
                    {
                        "id": "clt-AssDoPsychicHammer",
                        "text": "AssDoPsychicHammer (Client)"
                    },
                    "",
                    "Validate the $!#clt-AssStartPsychicHammer!$ function"
                ],
                [
                    "4",
                    {
                        "id": "clt-AssDoDragonClaw",
                        "text": "AssDoDragonClaw (Client)"
                    },
                    "",
                    "Check the number of attacks. Roll back the animation by 100%."
                ],
                [
                    "5",
                    {
                        "id": "clt-AssDoShockField",
                        "text": "AssDoShockField (Client)"
                    },
                    "$!#prgcalc1!$<br>$!#prgcalc2!$<br>$!#prgcalc3!$<br>$!#aurarangecalc!$<br>$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$",
                    "Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, validate the $!#cltmissilea!$ missile or use the other missiles based on the $!#aurastat1!$ value. Get the number of missiles using the $!#prgcalc#!$ values, based on the number of progressive charges. Get the range by using the $!#aurarangecalc!$ field. Create the calculated number of missiles using the lob function."
                ],
                [
                    "6",
                    {
                        "id": "clt-AssDoBladeFury",
                        "text": "AssDoBladeFury (Client)"
                    },
                    "$!#prgcalc1!$<br>$!#prgcalc2!$<br>$!#prgcalc3!$<br>$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$",
                    "Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, validate the $!#cltmissilea!$ missile or use the other missiles based on the $!#aurastat1!$ value. Get the number of missiles using the $!#prgcalc#!$ values, based on the number of progressive charges. Every periodic delay create a client missile and set the Z position to 15. If the caster unit has the \"inferno\" state, then repeat the sequence do frame."
                ],
                [
                    "7",
                    {
                        "id": "clt-AssDoDragonTail",
                        "text": "AssDoDragonTail (Client)"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$",
                    "Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, validate the $!#cltmissilea!$ missile or use the other missiles based on the $!#aurastat1!$ value. Create the client missile and set the caster unit's mode event."
                ],
                [
                    "8",
                    {
                        "id": "clt-AssDoMindblast",
                        "text": "AssDoMindblast (Client)"
                    },
                    "$!#aurarangecalc!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$",
                    "Create the $!#cltmissilea!$ missile at the target location. Use the $!#aurarangecalc!$ field to calculate the area radius value of the missile. Set the missile's spawn class to $!#cltmissileb!$."
                ],
                [
                    "9",
                    {
                        "id": "AssDoMissileDisc",
                        "text": "AssDoMissileDisc"
                    },
                    "$!#prgcalc1!$<br>$!#prgcalc2!$<br>$!#prgcalc3!$<br>$!#aurarangecalc!$<br>$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$",
                    "Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, validate the $!#cltmissilea!$ missile or use the other missiles based on the $!#aurastat1!$ value. Get the number of missiles using the $!#prgcalc#!$ values, based on the number of progressive charges. Get the radius by using the $!#aurarangecalc!$ field. Create a ring of client missiles where the number of missile depends on the size of the radius value."
                ],
                [
                    "10",
                    {
                        "id": "AssClawsOfThunderLvl2",
                        "text": "AssClawsOfThunderLvl2"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$",
                    "Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, validate the $!#cltmissilea!$ missile or use the other missiles based on the $!#aurastat1!$ value. Create the client missile where its velocity is calculated based on the skill level instead of the missile level."
                ],
                [
                    "11",
                    {
                        "id": "AssClawsOfThunderLvl3",
                        "text": "AssClawsOfThunderLvl3"
                    },
                    "$!#prgcalc1!$<br>$!#prgcalc2!$<br>$!#prgcalc3!$<br>$!#aurarangecalc!$<br>$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$",
                    "Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, validate the $!#cltmissilea!$ missile or use the other missiles based on the $!#aurastat1!$ value. Get the number of missiles using the $!#prgcalc#!$ values, based on the number of progressive charges. Use the $!#aurarangecalc!$ field to calculate the number of missiles. Create the client missiles using random pattern directions."
                ],
                [
                    "12",
                    {
                        "id": "AssTigerStrike",
                        "text": "AssTigerStrike"
                    },
                    "$!#prgoverlay!$<br>$!#prgsound!$<br>$!#aurastate!$<br>$!#aurastat1!$",
                    "Based on the $!#progressive!$ flag, if the caster unit has the $!#aurastate!$ state, or if the $!#aurastat1!$ field value is greater than 0, determine whether to add the overlay and sound on the caster unit. If the caster unit has progressive charges, then increase the index of the overlay and the sound by 1 per charge and add those overlay and sounds instead."
                ],
                [
                    "13",
                    {
                        "id": "AssCobraStrike",
                        "text": "AssCobraStrike"
                    },
                    "$!#prgoverlay!$<br>$!#prgsound!$<br>$!#aurastate!$<br>$!#aurastat1!$",
                    "Based on the $!#progressive!$ flag, if the caster unit has the $!#aurastate!$ state, or if the $!#aurastat1!$ field value is greater than 0, determine whether to add the overlay and sound on the target unit. If the caster unit has progressive charges, then increase the index of the overlay and the sound by 1 per charge and add those overlay and sounds instead."
                ],
                [
                    "14",
                    {
                        "id": "AssRoyalStrikeMeteorLvl1",
                        "text": "AssRoyalStrikeMeteorLvl1"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$",
                    "Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, validate the $!#cltmissilea!$ missile or use the other missiles based on the $!#aurastat1!$ value. Create the selected client missile at the target location."
                ],
                [
                    "15",
                    {
                        "id": "AssRoyalStrikeChaosIce",
                        "text": "AssRoyalStrikeChaosIce"
                    },
                    "$!#prgcalc1!$<br>$!#prgcalc2!$<br>$!#prgcalc3!$<br>$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$",
                    "Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, validate the $!#cltmissilea!$ missile or use the other missiles based on the $!#aurastat1!$ value. Get the number of missiles using the $!#prgcalc#!$ values, based on the number of progressive charges. Create the number of selected client missiles using randomized directions."
                ],
                [
                    "16",
                    {
                        "id": "clt-AmaDoJab",
                        "text": "AmaDoJab (Client)"
                    },
                    "$!#dosound a!$<br>$!#dosound b!$",
                    "On the frame event of type \"Sound\", if the caster unit is a player then play the $!#dosound a!$ sound, or if the caster unit is a monster than play the $!#dosound b!$ sound"
                ],
                [
                    "17",
                    {
                        "id": "clt-AmaDoMultipleShot",
                        "text": "AmaDoMultipleShot (Client)"
                    },
                    "$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#calc1!$<br>$!#calc2!$<br>$!#calc5!$",
                    "If the weapon class is not equal to a \"bow\" then use $!#cltmissileb!$, otherwise use $!#cltmissilea!$. Use the $!#calc1!$ value to determine the number of missiles to create. Use the $!#calc2!$ value to determine the activation frame of the missiles. Create the missiles. Use the $!#calc5!$ value to calculate Guided Arrow synergy."
                ],
                [
                    "18",
                    {
                        "id": "clt-AmaDoGuidedArrow",
                        "text": "AmaDoGuidedArrow (Client)"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$",
                    "Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, validate the $!#cltmissilea!$ missile or use the other missiles based on the $!#aurastat1!$ value. Create the selected client missile with flags of either following a target or going to a location to be retargeted later."
                ],
                [
                    "19",
                    {
                        "id": "clt-AmaDoChargedStrike",
                        "text": "AmaDoChargedStrike (Client)"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$<br>$!#calc1!$",
                    "Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, validate the $!#cltmissilea!$ missile or use the other missiles based on the $!#aurastat1!$ value. Use the $!#calc1!$ value to determine the number of missiles to create. Create the missiles that move in a randomized path towards the direction."
                ],
                [
                    "20",
                    {
                        "id": "clt-AmaDoStrafe",
                        "text": "AmaDoStrafe (Client)"
                    },
                    "$!#aurarangecalc!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#Param6!$",
                    "Use $!#aurarangecalc!$ to determine the skill range. The max targets and current target are controlled by a saved parameter. If the weapon class is not equal to a \"bow\" then use $!#cltmissileb!$, otherwise use $!#cltmissilea!$. Use the $!#Param6!$ value to determine the percentage of animation frames to rollback. Find the next target to attack. Create a client missile, making the caster unit face the direction, and update the target count parameter."
                ],
                [
                    "21",
                    {
                        "id": "clt-AmaDoFend",
                        "text": "AmaDoFend (Client)"
                    },
                    "$!#Param2!$",
                    "Use the weapon range to determine the skill range. Find the next valid target to attack and then update the maximum targets to attack next time. Use the $!#Param2!$ value to determine the percentage of animation frames to rollback. Based on the hit class, determine what weapon sound to play."
                ],
                [
                    "22",
                    {
                        "id": "clt-AmaDoLightningStrike",
                        "text": "AmaDoLightningStrike (Client)"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$<br>$!#calc1!$<br>$!#calc2!$",
                    "Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, validate the $!#cltmissilea!$ missile or use the other missiles based on the $!#aurastat1!$ value. Use the $!#calc1!$ value to determine the range of the missile to find the next target. Use the $!#calc2!$ value to determine the maximum number of chain hits for the missile. Create the missile targeting the target unit."
                ],
                [
                    "23",
                    {
                        "id": "clt-SorDoChargedBolt",
                        "text": "SorDoChargedBolt (Client)"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$<br>$!#calc1!$",
                    "Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, validate the $!#cltmissilea!$ missile or use the other missiles based on the $!#aurastat1!$ value. Use the $!#calc1!$ value to determine the number of missiles to create. Create the missiles that move in a randomized path towards the direction."
                ],
                [
                    "24",
                    {
                        "id": "clt-SorDoInferno",
                        "text": "SorDoInferno (Client)"
                    },
                    "$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#calc1!$",
                    "Randomly select between either $!#cltmissilea!$ or $!#cltmissileb!$. Use the $!#calc1!$ value to determine the range of the missile. Create the client missile and adjust the caster unit's animation frames. If the caster unit still has the \"inferno\" state, then repeat the animation do frame."
                ],
                [
                    "25",
                    {
                        "id": "clt-SorDoFrostNova",
                        "text": "SorDoFrostNova (Client)"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$<br>$!#cltcalc1!$",
                    "Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, validate the $!#cltmissilea!$ missile or use the other missiles based on the $!#aurastat1!$ value. Use the $!#cltcalc1!$ value to determine the additional velocity to add to the missiles created. Create a ring of missiles."
                ],
                [
                    "26",
                    {
                        "id": "clt-SorDoFirewall",
                        "text": "SorDoFirewall (Client)"
                    },
                    "$!#cltmissilea!$<br>$!#calc1!$",
                    "Validate the target location. Validate that the missile create has a missile linked in its $!Missiles#SubMissile1!$ field (see Missiles.txt). Use the $!#calc1!$ value to determine the maximum number of fire wall spawning missiles. Create 2 of the $!#cltmissilea!$ missiles thar are launched in opposite directions. Create 1 of the $!#cltmissilea!$ missile's sub missile."
                ],
                [
                    "27",
                    {
                        "id": "clt-SorDoChainLightning",
                        "text": "SorDoChainLightning (Client)"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$<br>$!#cltcalc1!$",
                    "Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, validate the $!#cltmissilea!$ missile or use the other missiles based on the $!#aurastat1!$ value. Use the $!#calc1!$ value to determine the maximum number of chain hits for the missile. Create the missile targeting the target unit and update the number of chain hits in a parameter."
                ],
                [
                    "28",
                    {
                        "id": "clt-SorDoMeteor",
                        "text": "SorDoMeteor (Client)"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$",
                    "Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, validate the $!#cltmissilea!$ missile or use the other missiles based on the $!#aurastat1!$ value. Validate that the target location is valid and then create the missile."
                ],
                [
                    "29",
                    {
                        "id": "SorDoFrozenOrb",
                        "text": "SorDoFrozenOrb"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$",
                    "Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, validate the $!#cltmissilea!$ missile or use the other missiles based on the $!#aurastat1!$ value. Launch the selected client missile."
                ],
                [
                    "30",
                    {
                        "id": "NecDoCurse",
                        "text": "NecDoCurse"
                    },
                    "$!#aurarangecalc!$<br>$!#cltmissilea!$",
                    "Use $!#aurarangecalc!$ to determine the radius of the skill and always subtract a value of 3 (Min value = 2). Create the client missile at the cursor location and also create a light at the location with RGB values equal to 255, 0, 0."
                ],
                [
                    "31",
                    {
                        "id": "clt-NecDoRaiseSkeleton",
                        "text": "NecDoRaiseSkeleton (Client)"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$",
                    "Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, validate the $!#cltmissilea!$ missile or use the other missiles based on the $!#aurastat1!$ value. Launch the selected client missile facing the directions saved in the parameters."
                ],
                [
                    "32",
                    {
                        "id": "NecDoCExplosion",
                        "text": "NecDoCExplosion"
                    },
                    "$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$<br>$!#tgtsound!$",
                    "Create $!#cltmissilea!$ at the target location facing a random direction. If the target monster is $!monstats2#small!$ then spawn 1 $!#cltmissilea!$. If the target monster is $!monstats2#large!$ then spawn 3 $!#cltmissilea!$ missiles in a radius value of 3, and if that missile has a $!Missiles#SubMissile1!$ value, then also spawn 4 sub missiles in a radius value of 2. If the target monster is neither $!monstats2#small!$ nor $!monstats2#large!$, then spawn 2 $!#cltmissilea!$ missiles in a radius value of 2, and spawn 3 of its sub missiles in a radius value of 1. Spawn 1 $!#cltmissileb!$ normally. Spawn 1 $!#cltmissilec!$ missile with its level equal to 2. If there is no target enemy, then play the $!#tgtsound!$ sound."
                ],
                [
                    "33",
                    {
                        "id": "clt-NecDoPoisonExplosion",
                        "text": "NecDoPoisonExplosion (Client)"
                    },
                    "$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$<br>$!#tgtsound!$",
                    "Create $!#cltmissilea!$ at the target location facing a random direction. Spawn an inner and outer radial ring of $!#cltmissileb!$ missiles, based on the missile's $!Missiles#Param1!$ and $!Missiles#Param2!$ values. Spawn 1 $!#cltmissilec!$ missile with its level equal to 2. If there is no target enemy, then play the $!#tgtsound!$ sound."
                ],
                [
                    "34",
                    {
                        "id": "clt-PalDoSacrifice",
                        "text": "PalDoSacrifice (Client)"
                    },
                    "$!#cltmissilea!$<br>$!#cltcalc1!$",
                    "Validate the target enemy and spawn the client missile in a random direction, where the missile can receive additional range that is randomly selected between 0 and the $!#cltcalc1!$ value."
                ],
                [
                    "35",
                    {
                        "id": "clt-PalDoBlessedHammer",
                        "text": "PalDoBlessedHammer (Client)"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$",
                    "Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, validate the $!#cltmissilea!$ missile or use the other missiles based on the $!#aurastat1!$ value. Launch the selected client missile with a spiral path."
                ],
                [
                    "36",
                    {
                        "id": "PalDoFistOfHeavens",
                        "text": "PalDoFistOfHeavens"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$",
                    "Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, validate the $!#cltmissilea!$ missile or use the other missiles based on the $!#aurastat1!$ value. Launch the selected client missile and save the target unit type and ID as parameters."
                ],
                [
                    "37",
                    {
                        "id": "clt-PalDoCharge",
                        "text": "PalDoCharge (Client)"
                    },
                    "",
                    "Setup a sequence of frames to play the animation. If the caster unit is a player or monster, then play its attack sound at the sound frame event. Set the unit's animation and frame length and order the unit to move to a location or the previously targeted unit. If the player does not need to move, then attack the target or a nearby target."
                ],
                [
                    "38",
                    {
                        "id": "clt-BarDoFindHeart",
                        "text": "BarDoFindHeart (Client)"
                    },
                    "",
                    "If the target is valid, then set the mode event and create blood missiles from the monster (see $!monstats2#Bleed!$)"
                ],
                [
                    "39",
                    {
                        "id": "clt-BarDoDoubleSwing",
                        "text": "BarDoDoubleSwing (Client)"
                    },
                    "",
                    "If the caster unit's animation sequence frame is less than 6, then play the weapon sound and have the character turn to face the target. Otherwise, have the caster unit find a proper target and face that target."
                ],
                [
                    "40",
                    {
                        "id": "clt-BarDoFindItem",
                        "text": "BarDoFindItem (Client)"
                    },
                    "",
                    "If the target is valid (see $!monstats2#soft!$), then set the mode event and create blood missiles from the monster (see $!monstats2#Bleed!$)"
                ],
                [
                    "41",
                    {
                        "id": "clt-BarDoGrimWard",
                        "text": "BarDoGrimWard (Client)"
                    },
                    "$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$",
                    "If the target is valid (see $!monstats2#soft!$) and there is valid space at that target's location, then create one of the following missiles. By default, use the $!#cltmissilea!$ missile. If the monster is large (see $!monstats2#large!$), then use the $!#cltmissilec!$ missile. If the monster is small (see $!monstats2#small!$), then use the $!#cltmissileb!$ missile. Also, always create a \"corpseexplosion\" missile."
                ],
                [
                    "42",
                    {
                        "id": "clt-BarDoDoubleThrow",
                        "text": "BarDoDoubleThrow (Client)"
                    },
                    "",
                    "Check that the attacking weapon is throwable and shoot a missile based on the weapon's missile class. If the weapon's item type is a \"Missile Potion\" (see $!ItemTypes!$), then use the lobbing missile launch function, otherwise use the normal linear missile launch function."
                ],
                [
                    "43",
                    {
                        "id": "clt-BarDoLeap",
                        "text": "BarDoLeap (Client)"
                    },
                    "",
                    "Check different flags and parameters to determine when to stop leaping. There are special cases to handle the \"sandleadper1\" and \"ancientbarb1\" monsters."
                ],
                [
                    "44",
                    {
                        "id": "clt-BarDoLeapAttack",
                        "text": "BarDoLeapAttack (Client)"
                    },
                    "",
                    "Check different flags and parameters to determine when to stop leaping. After leaping, if there is a valid target, then attack the target."
                ],
                [
                    "45",
                    {
                        "id": "clt-BarDoWhirlwind",
                        "text": "BarDoWhirlwind (Client)"
                    },
                    "",
                    "Continue to whirlwind based until at reaching the target location or if the skill flags have been changed."
                ],
                [
                    "46",
                    {
                        "id": "MonDoMagottEgg",
                        "text": "MonDoMagottEgg"
                    },
                    "",
                    "Set the unit's animation sequence rate to 0"
                ],
                [
                    "47",
                    {
                        "id": "clt-MonDoMaggotDown",
                        "text": "MonDoMaggotDown (Client)"
                    },
                    "",
                    "When the unit's animation frame reaches 0, then set the unit's animation sequence rate to 0"
                ],
                [
                    "48",
                    {
                        "id": "clt-MonDoAndariel",
                        "text": "MonDoAndariel (Client)"
                    },
                    "$!#cltmissilea!$",
                    "Based on the unit's current direction, launch the missile in one of 8 directions"
                ],
                [
                    "49",
                    {
                        "id": "clt-MonDoSwarmMove",
                        "text": "MonDoSwarmMove (Client)"
                    },
                    "$!#calc1!$<br>$!#calc2!$",
                    "Set the unit's animation sequence start and stop frames based on the skill's calculation values"
                ],
                [
                    "50",
                    {
                        "id": "clt-MonDoNest",
                        "text": "MonDoNest (Client)"
                    },
                    "",
                    "Remove the monster collision at the target location"
                ],
                [
                    "51",
                    {
                        "id": "clt-MonDoGargoyleTrap",
                        "text": "MonDoGargoyleTrap (Client)"
                    },
                    "$!#cltmissilea!$",
                    "Launch the missile in one of 4 directions."
                ],
                [
                    "52",
                    {
                        "id": "clt-MonDoSubmerge",
                        "text": "MonDoSubmerge (Client)"
                    },
                    "",
                    "This equals the $!#clt-MonDoMaggotDown!$ function (Code = 47)"
                ],
                [
                    "53",
                    {
                        "id": "clt-MonDoFetishAura",
                        "text": "MonDoFetishAura (Client)"
                    },
                    "$!#aurarangecalc!$<br>$!#cltmissilea!$<br>$!#cltcalc1!$",
                    "Create a disc of missiles where $!#aurarangecalc!$ controls the disc radius size (Minimum value = 1) and $!#cltcalc1!$ controls the density of missiles created (higher value means less missiles)."
                ],
                [
                    "54",
                    {
                        "id": "MonDoFetishInferno",
                        "text": "MonDoFetishInferno"
                    },
                    "$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#calc1!$",
                    "Randomly create 2 of either $!#cltmissilea!$ or $!#cltmissileb!$ missiles. Use $!#calc1!$ to determine the range of the missile if it is greater than 0, otherwise use the missile's $!Missiles#Param2!$ value."
                ],
                [
                    "55",
                    {
                        "id": "clt-MonDoPrimePoisonNova",
                        "text": "MonDoPrimePoisonNova (Client)"
                    },
                    "$!#cltmissilea!$<br>$!#calc1!$<br>$!#calc2!$",
                    "Creates 8 missiles in different directions using a velocity set by the missile's $!Missiles#Param1!$ value. Then uses $!#calc2!$ to control how many additional missiles to create using a velocity set by the missile's $!Missiles#Param2!$ value. Uses $!#calc1!$ to set the missile's subloops."
                ],
                [
                    "56",
                    {
                        "id": "MonDoDiabLight",
                        "text": "MonDoDiabLight"
                    },
                    "$!#cltmissilea!$<br>$!#cltcalc1!$<br>$!#calc1!$",
                    "Create the missile at an interval controlled by the $!#cltcalc1!$ value. Use $!#calc1!$ to determine the range of the missile if it is greater than 0, otherwise use the missile's $!Missiles#Param2!$ value. Also use the monster's inferno values to set the animation frames (see monstats2.txt)"
                ],
                [
                    "57",
                    {
                        "id": "clt-MonDoFingerMageSpider",
                        "text": "MonDoFingerMageSpider (Client)"
                    },
                    "$!#cltmissilea!$<br>$!#calc1!$",
                    "Create the missile with its subloops controlled by $!#calc1!$ and have that missile positioned and face the caster unit"
                ],
                [
                    "58",
                    {
                        "id": "clt-MonDiabWallMaker",
                        "text": "MonDiabWallMaker (Client)"
                    },
                    "$!#cltmissilea!$<br>$!#calc1!$",
                    "Create a number of missiles controlled by the $!#calc1!$ value where their pathing and direction is randomized"
                ],
                [
                    "59",
                    {
                        "id": "clt-MonDoDiabRun",
                        "text": "MonDoDiabRun (Client)"
                    },
                    "$!#calc1!$<br>$!#Param1!$<br>$!#Param2!$<br>$!#Param3!$<br>$!#Param4!$<br>$!#Param5!$<br>$!#Param6!$",
                    "Modifies the caster unit's movement speed by a percentage controlled by $!#calc1!$ and controls its animations to adhere to this run mode. The 6 parameter values controls the run animation's stop frame length, stop event frame, start event frame, start frame length, loop repeat event frame, loop frame length, and loop start event frame."
                ],
                [
                    "60",
                    {
                        "id": "clt-MonDoDesertTurret",
                        "text": "MonDoDesertTurret (Client)"
                    },
                    "$!#cltmissilea!$<br>$!#calc1!$",
                    "Fire a number of missiles controlled by the $!#calc1!$ value that are directed in 8 possible directions"
                ],
                [
                    "61",
                    {
                        "id": "clt-MonDoArcaneTower",
                        "text": "MonDoArcaneTower (Client)"
                    },
                    "$!#cltmissilea!$",
                    "Fire missiles in all possible directions with particles"
                ],
                [
                    "62",
                    {
                        "id": "clt-MonDoMosquito",
                        "text": "MonDoMosquito (Client)"
                    },
                    "$!#Param1!$",
                    "Check that the caster unit cannot melee the target and then repeat the animation for a number of loops saved in a parameter, where $!#Param1!$ controls the frame to repeat the animation."
                ],
                [
                    "63",
                    {
                        "id": "clt-MonDoRegurgitatorEat",
                        "text": "MonDoRegurgitatorEat (Client)"
                    },
                    "$!#cltmissilea!$<br>$!#cltmissileb!$",
                    "Create 1 $!#cltmissilea!$ missile in a random direction. Create 5 $!#cltmissileb!$ missiles in a radius value of 4."
                ],
                [
                    "64",
                    {
                        "id": "MonDoQueenDeath",
                        "text": "MonDoQueenDeath"
                    },
                    "",
                    "Repeatedly loop the animation using hardcoded frame counts, and then set the unit to Dead mode when finished"
                ],
                [
                    "65",
                    {
                        "id": "MonDoCurseRadius",
                        "text": "MonDoCurseRadius"
                    },
                    "$!#aurarangecalc!$<br>$!#cltmissileb!$",
                    "Find a valid target and create a \"cursecenter\" missile. Then create the $!#cltmissileb!$ missile with a radius controlled by $!#aurarangecalc!$"
                ],
                [
                    "66",
                    {
                        "id": "clt-MonDoHireFireMissile",
                        "text": "MonDoHireFireMissile (Client)"
                    },
                    "",
                    "Use the lob launch function or normal linear launch function when creating the missile"
                ],
                [
                    "67",
                    {
                        "id": "clt-DruDoFirestorm",
                        "text": "DruDoFirestorm (Server)"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$<br>$!#calc1!$",
                    "Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, validate the $!#cltmissilea!$ missile or use the other missiles based on the $!#aurastat1!$ value. Launch a number of selected client missiles, controlled by the $!#calc1!$ value. These missiles has randomized directions and pathing, and they have an increased animation rate."
                ],
                [
                    "68",
                    {
                        "id": "clt-DruDoTwister",
                        "text": "DruDoTwister (Client)"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$<br>$!#calc1!$",
                    "Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, validate the $!#cltmissilea!$ missile or use the other missiles based on the $!#aurastat1!$ value. Launch a number of selected client missiles, controlled by the $!#calc1!$ value. These missiles start with a linear direction and then change to randomized pathing."
                ],
                [
                    "69",
                    {
                        "id": "DruDoTornado",
                        "text": "DruDoTornado"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$<br>$!#calc1!$",
                    "Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, validate the $!#cltmissilea!$ missile or use the other missiles based on the $!#aurastat1!$ value. Launch a number of selected client missiles, controlled by the $!#calc1!$ value. These missiles start with a linear direction and then change to randomized pathing, and they have an increased animation rate."
                ],
                [
                    "70",
                    {
                        "id": "clt-MonDoWakeofFire",
                        "text": "MonDoWakeofFire (Client)"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$",
                    "Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, validate the $!#cltmissilea!$ missile or use the other missiles based on the $!#aurastat1!$ value. Launch the selected missile in the opposite direction."
                ],
                [
                    "71",
                    {
                        "id": "MonDoInferno",
                        "text": "MonDoInferno"
                    },
                    "$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltcalc1!$<br>$!#cltcalc2!$",
                    "Randomly create 1 of either $!#cltmissilea!$ or $!#cltmissileb!$ missiles. Use $!#cltcalc1!$ to control the missile's Z offset. Use $!#cltcalc2!$ to control add to the missile's range, which is also determined by the missile's $!Missiles#Param2!$ value"
                ],
                [
                    "72",
                    {
                        "id": "MonDoImpFireBall",
                        "text": "MonDoImpFireBall"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$<br>$!#cltcalc1!$",
                    "Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, validate the $!#cltmissilea!$ missile or use the other missiles based on the $!#aurastat1!$ value. Launch the missile to the target location. Use the $!#cltcalc1!$ value to control the missile's Z offset value."
                ],
                [
                    "73",
                    {
                        "id": "MonDoTeleport2",
                        "text": "MonDoTeleport2"
                    },
                    "$!#cltmissileb!$",
                    "Create the missile at the caster unit's location with its skill level set to 1"
                ],
                [
                    "74",
                    {
                        "id": "MonDoTeleport3",
                        "text": "MonDoTeleport3"
                    },
                    "$!#cltmissileb!$",
                    "Create the missile at the caster unit's location with its skill level set to 1. Also create a particle and add it to the target unit."
                ],
                [
                    "75",
                    {
                        "id": "clt-MonDoSiegeBeastStomp",
                        "text": "MonDoSiegeBeastStomp (Client)"
                    },
                    "$!#Param1!$<br>$!#Param2!$<br>$!#Param3!$<br>$!#Param4!$",
                    "Shake the camera screen, where the parameters control the magnitude, shake build up duration, shake loop duration, and shake fade duration (controlled in frames where 25 frames = 1 second)."
                ],
                [
                    "76",
                    {
                        "id": "clt-MonDoDeathMauler",
                        "text": "MonDoDeathMauler (Client)"
                    },
                    "$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#calc1!$",
                    "Continuously create $!#cltmissileb!$ missiles as the trail missile's using the missile's $!Missiles#Param1!$ and $!Missiles#Param2!$ values to control the frequency and range/frames of the missile's creation. Create the $!#cltmissilea!$ missile with an animation rate controlled by $!#calc1!$, set this missile to not draw, and update its range and activation frame delay based on the $!#cltmissileb!$ missile's $!Missiles#Param1!$ and $!Missiles#Param2!$ values."
                ],
                [
                    "77",
                    {
                        "id": "MonDoInfernoSentry",
                        "text": "MonDoInfernoSentry"
                    },
                    "$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltcalc1!$<br>$!#calc1!$",
                    "Randomly create 1 of either $!#cltmissilea!$ or $!#cltmissileb!$ missiles. Use $!#cltcalc1!$ to control the missile's Z offset. Use $!#calc1!$ to control the missile range duration. Repeat the Do frame while the caster unit has the \"inferno\" state."
                ],
                [
                    "78",
                    {
                        "id": "MonDoDeathSentry",
                        "text": "MonDoDeathSentry"
                    },
                    "$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#prgsound!$",
                    "Create the $!#cltmissilea!$ missile at the target location and play the $!#prgsound!$ sound. Then create the $!#cltmissileb!$ missile at the target location."
                ],
                [
                    "79",
                    {
                        "id": "clt-MonDoFenrisRage",
                        "text": "MonDoFenrisRage (Client)"
                    },
                    "$!#cltmissilea!$",
                    "Create the $!#cltmissilea!$ missile at the target location"
                ],
                [
                    "80",
                    {
                        "id": "clt-MonDoBaalInferno",
                        "text": "MonDoBaalInferno (Client)"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$<br>$!#calc1!$<br>$!#calc2!$",
                    "Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, validate the $!#cltmissilea!$ missile or use the other missiles based on the $!#aurastat1!$ value. Create a number of the selected missiles where $!#calc1!$ controls the number of missiles created, and $!#calc2!$ controls the range duration of the missiles. Repeat the Do frame while the caster unit has the \"inferno\" state."
                ],
                [
                    "81",
                    {
                        "id": "clt-MonDoBaalCold",
                        "text": "MonDoBaalCold (Client)"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$",
                    "Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, validate the $!#cltmissilea!$ missile or use the other missiles based on the $!#aurastat1!$ value. Launch the selected missile to the target location."
                ],
                [
                    "82",
                    {
                        "id": "MonStartBaalCExplode",
                        "text": "MonStartBaalCExplode"
                    },
                    "$!#Param5!$<br>$!#Param6!$",
                    "Use $!#Param5!$ and $!#Param6!$ to calculate the baseline and increase per skill level change in the radius to find a target. Search for valid dead targets and create a \"baalcorpseexplodedelay\" missile for each target found."
                ],
                [
                    "83",
                    {
                        "id": "clt-ApplyRoyalStrikeLvl2",
                        "text": "ApplyRoyalStrikeLvl2 (Client)"
                    },
                    "$!#prgcalc1!$<br>$!#prgcalc2!$<br>$!#prgcalc3!$<br>$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$<br>$!#aurarangecalc!$<br>$!#Param2!$",
                    "Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, validate the $!#cltmissilea!$ missile or use the other missiles based on the $!#aurastat1!$ value. Get the number of missiles using the $!#prgcalc#!$ values, based on the number of progressive charges, and if they are equal to or less than 0, then use the $!#aurarangecalc!$ value instead. Create the missile, using the $!#Param2!$ value to control the number of chain hits that the missile bounces."
                ],
                [
                    "84",
                    {
                        "id": "SorDoThunderStorm",
                        "text": "SorDoThunderStorm"
                    },
                    "$!#cltmissilea!$<br>$!#prgoverlay!$",
                    "Launch the missile at the target's position, with a starting Z position equal to 280 and a starting velocity equal to -40. Also add the overlay to the target unit."
                ],
                [
                    "85",
                    {
                        "id": "ItemDoOpenWounds",
                        "text": "ItemDoOpenWounds"
                    },
                    "",
                    "Create a blood missile from the unit every 5 frames (see $!monstats2#Bleed!$)"
                ],
                [
                    "86",
                    {
                        "id": "PalDoSanctuary",
                        "text": "PalDoSanctuary"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$<br>$!#aurarangecalc!$",
                    "Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, validate the $!#cltmissilea!$ missile or use the other missiles based on the $!#aurastat1!$ value. Use the $!#aurarangecalc!$ value to determine the radius to randomly create missiles and also the number of missiles to create."
                ],
                [
                    "87",
                    {
                        "id": "SorApplyShiverArmor",
                        "text": "SorApplyShiverArmor"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$<br>$!#cltcalc1!$<br>$!#cltcalc2!$<br>$!#cltcalc3!$",
                    "Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, validate the $!#cltmissilea!$ missile or use the other missiles based on the $!#aurastat1!$ value. Create the selected missile using the lob function. Use $!#cltcalc1!$ to control the delay between creating missiles. Use $!#cltcalc2!$ to control the radius to create the missile. Use $!#cltcalc3!$ to control the vertical height of the missile when it is created."
                ],
                [
                    "88",
                    {
                        "id": "clt-MonApplyAttached",
                        "text": "MonApplyAttached (Client)"
                    },
                    "",
                    "Attach the source unit on the caster unit."
                ],
                [
                    "89",
                    {
                        "id": "MonDoVineBeast",
                        "text": "MonDoVineBeast"
                    },
                    "$!#cltmissilec!$<br>$!#cltmissiled!$<br>$!#cltcalc1!$",
                    "Validate that the caster unit is a monster type. Validate that the skill used is the \"Vine Attack\" skill and get its stats, otherwise use a default level 1 \"Vine Attack\" skill. Use the $!#cltcalc1!$ value to determine the frame delay between creating missiles and also the minimum distance between missiles created. If the current mode of the unit is \"Walk\" then randomly choose between creating the $!#cltmissilec!$ or $!#cltmissiled!$ missile. If the current mode of the unit is \"Neutral\" then kill any existing old missile and create the $!#cltmissiled!$."
                ],
                [
                    "90",
                    {
                        "id": "DruDoHurricane",
                        "text": "DruDoHurricane"
                    },
                    "$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$<br>$!#prgsound!$<br>$!#cltcalc1!$<br>$!#cltcalc2!$",
                    "Play the $!#prgsound!$ sound and stop playing it if the caster unit is in town. Use $!#cltcalc1!$ to how many sets of 3 missiles to create at a time, at a random height. Randomly choose between one of the 3 missiles to create each time, and use $!#cltcalc2!$ to control the maximum Z height position of the missile."
                ],
                [
                    "91",
                    {
                        "id": "DruDoVolcanoProgressive",
                        "text": "DruDoVolcanoProgressive"
                    },
                    "$!#cltmissilea!$<br>$!#cltmissileb!$",
                    "Create both missiles at the valid target position"
                ],
                [
                    "92",
                    {
                        "id": "clt-DruDoArmageddon",
                        "text": "DruDoArmageddon (Client)"
                    },
                    "$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltcalc1!$<br>$!#cltcalc2!$<br>$!#cltcalc3!$<br>$!#aurarangecalc!$",
                    "Create both missiles with a negative fall rate and slide rate. Use the $!#aurarangecalc!$ value to control a radius value, but this value is not used. Use the $!#cltcalc1!$ value to control the frame count for determining the starting height and offset. Use the $!#cltcalc2!$ value to control the missile fall rate per frame. Use the $!#cltcalc3!$ value to control the missile slide rate per frame."
                ],
                [
                    "93",
                    {
                        "id": "MonDoCorpseCycler",
                        "text": "MonDoCorpseCycler"
                    },
                    "$!#cltmissileb!$",
                    "Validate the target unit, and create the $!#cltmissileb!$ missile on the target and 3 blood missiles (see $!monstats2#Bleed!$)"
                ],
                [
                    "94",
                    {
                        "id": "clt-MonDoDoomKnightMissile",
                        "text": "MonDoDoomKnightMissile (Client)"
                    },
                    "$!#cltmissilea!$",
                    "Create the $!#cltmissilea!$ using either the lob function or the normal linear function, depending on the $!#lob!$ flag. Also select the missile or up to 3 index values higher, depending on the monster's graphics variation for the \"Special 3\" component variation."
                ],
                [
                    "95",
                    {
                        "id": "clt-MonDoNecroMageMissile",
                        "text": "MonDoNecroMageMissile (Client)"
                    },
                    "$!#cltmissilea!$",
                    "Create the $!#cltmissilea!$ using either the lob function or the normal linear function, depending on the $!#lob!$ flag. Also select the missile or up to 3 index values higher, depending on the monster's graphics variation for the \"Special 4\" component variation."
                ],
                [
                    "96",
                    {
                        "id": "clt-SorDoChainLightning2",
                        "text": "SorDoChainLightning2 (Client)"
                    },
                    "$!#aurarangecalc!$<br>$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$<br>$!#cltmissilec!$<br>$!#calc1!$",
                    "Based on the $!#progressive!$ flag or the $!#aurastate!$ field, create the $!#cltmissilea!$ missile. Otherwise, use one of the 3 client missiles based on the $!#aurastat1!$ value. Create the missile and use the $!#calc1!$ value to set the number of chain hits."
                ],
                [
                    "97",
                    {
                        "id": "clt-DruDoVolcano",
                        "text": "DruDoVolcano (Client)"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissile#!$",
                    "Based on the $!#progressive!$ flag, the $!#aurastate!$ field, or the $!#aurastat1!$ field, validate the $!#cltmissilea!$ missile or use the other missiles based on the $!#aurastat1!$ value. Validate that the target location is valid."
                ],
                [
                    "98",
                    {
                        "id": "WarDoDeathSealExplosion",
                        "text": "WarDoDeathSealExplosion"
                    },
                    "",
                    "Run $!#NecDoCExplosion!$ on the target if it is a monster."
                ],
                [
                    "99",
                    {
                        "id": "clt-WarDoRingOfFire",
                        "text": "WarDoRingOfFire (Client)"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissile#!$<br>$!#calc2!$<br>$!#calc3!$",
                    "Fire $!#calc2!$ number (must be a power of 2) of missiles in a circle. Use the $!#cltmissilea!$ missile by default, or use 1 of the 3 missiles depending on the progressive charges controlled by the $!#aurastate!$ field and $!#aurastat1!$ fields. $!#calc3!$ will determine the additional velocity of the missiles."
                ],
                [
                    "100",
                    {
                        "id": "clt-WarDoFlameWave",
                        "text": "WarDoFlameWave (Client)"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissile#!$<br>$!#calc1!$<br>$!#calc2!$",
                    "Spawn missiles in a wall pattern centered on the player. Use the $!#cltmissilea!$ missile by default, or use 1 of the 3 missiles depending on the progressive charges controlled by the $!#aurastate!$ field and $!#aurastat1!$ fields. $!#calc1!$ is the number of missiles to spawn to the left and right of the player. $!#calc2!$ is the number of frames to wait for the wall missiles to start moving."
                ],
                [
                    "101",
                    {
                        "id": "clt-WarDoSeal",
                        "text": "WarDoSeal (Client)"
                    },
                    "$!#prgcalc1!$<br>$!#cltmissile#!$<br>$!#aurastate!$<br>$!#calc3!$",
                    "Use the $!#cltmissilea!$ missile by default, or if $!#progressive!$ is true use 1 of the 3 missiles depending on the value of $!#prgcalc1!$. Validate the target location and then create the missile. Use $!#calc3!$ as the maximum amount of missiles to allow, using a statslist with $!#aurastate!$. Make space for the new missile, removing the oldest missiles first."
                ],
                [
                    "102",
                    {
                        "id": "clt-WarDoEngorge",
                        "text": "WarDoEngorge (Client)"
                    },
                    "$!#pettype!$<br>$!#cltmissilea!$<br>$!#cltmissileb!$",
                    "Creates vfx missiles on the engorge target ($!#cltmissileb!$) and on the affected pets ($!#cltmissilea!$). If $!#pettype!$ is filled out, then the pet must be of that type (also checks pooled pets, see $!pettype#pool!$)"
                ],
                [
                    "103",
                    {
                        "id": "clt-WarDoCleave",
                        "text": "WarDoCleave (Client)"
                    },
                    "$!#calc5!$<br>$!#calc6!$<br>$!#calc7!$",
                    "For internal development builds only, draw debug info for the attacked area. Divide a circle into $!#calc6!$ slices and use $!#calc5!$ as the amount of slices that are attackable. Use $!#calc7!$ as a range bonus."
                ],
                [
                    "104",
                    {
                        "id": "clt-WarDoMirroredBlades",
                        "text": "WarDoMirroredBlades (Client)"
                    },
                    "$!#cltmissilea!$<br>$!#lob!$<br>$!#calc5!$<br>$!#Param12!$",
                    "Create multiple missiles at once, supporting missile weapons and normal missiles. Use $!#calc5!$ as the total amount of missiles to create.<br>\u00b7 For missile weapons, use the weapon's missile type, including special missiles from stats. Any missiles after the first are offset by 1 square from each other (alternating sides). Consider each missile created as a separate cast if $!#Param12!$ is true.<br>\u00b7 For normal missiles, use $!#cltmissilea!$. Lob the missiles if $!#lob!$ is set. Otherwise the same as the missile weapon flow."
                ],
                [
                    "105",
                    {
                        "id": "clt-WarDoBloodBoil",
                        "text": "WarDoBloodBoil (Client)"
                    },
                    "$!#pettype!$<br>$!#calc1!$<br>$!#calc2!$<br>$!#calc3!$<br>$!#cltcalc1!$<br>$!#cltcalc2!$<br>$!#cltcalc3!$",
                    "For each pet, using only pets of $!#pettype!$ if it is set (also checks pooled pets, see $!pettype#pool!$), check if the skill will kill them and if not create a missile on top of them. Check if a percent of its max health will kill the pet, using $!#calc1!$ if only one pet exists, $!#calc2!$ for two, and $!#calc3!$ for three. If more than three pets are present, just use $!#calc1!$. If the pet would die from this damage then don't proceed.<br>Create a missile on top of the pet. Set its radius to $!#cltcalc2!$ normally, $!#cltcalc1!$ if its $!monstats2#small!$, or $!#cltcalc3!$ if its $!monstats2#large!$. Use $!Missiles#CltParam1!$ as the missile's timeout timer (used by $!Missiles#ProcessHoldLastWithTimeout!$)."
                ],
                [
                    "106",
                    {
                        "id": "SkillDoPlayerChannelSkill",
                        "text": "SkillDoPlayerChannelSkill"
                    },
                    "$!#cltmissilea!$",
                    "Spawns $!#cltmissilea!$ towards the target if provided. Update channeling animation on multiplayer units, similarly to $!#clt-SkillStartPlayerChannelSkill!$."
                ],
                [
                    "107",
                    {
                        "id": "SkillDoActiveStatePeriodic",
                        "text": "SkillDoActiveStatePeriodic"
                    },
                    "$!#periodic!$<br>$!#perdelay!$",
                    "Requires $!#periodic!$ to be set on the skill and for the skill to exist on the unit. Periodically runs the skill's do function. Automatically registers for the next period using $!#perdelay!$."
                ],
                [
                    "108",
                    {
                        "id": "clt-MonDoChargedBoltDisk",
                        "text": "MonDoChargedBoltDisk (Client)"
                    },
                    "$!#aurastate!$<br>$!#aurastat1!$<br>$!#cltmissile#!$<br>$!#calc1!$",
                    "Create a $!#calc1!$ number of missiles in a disc, all using the charged bolt type of random paths. Use the $!#cltmissilea!$ missile by default, or use 1 of the 3 missiles depending on the progressive charges controlled by the $!#aurastate!$ field and $!#aurastat1!$ fields."
                ],
                [
                    "109",
                    {
                        "id": "WarDoEldritchBlastPeriodic",
                        "text": "WarDoEldritchBlastPeriodic"
                    },
                    "",
                    "Triggers $!#clt-SorDoFrostNova!$ only when run as a periodic callback. Do not modify the unit's mode event so that input continues to be processed."
                ]
            ]
        },
        {
            "name": "cltstopfunc",
            "description": "Client Stop function. This controls how the skill cleans up after ending. This uses a code value to call a function, affecting how certain fields are used.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
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
                        "id": "SkillBarRemoveWhirlwind",
                        "text": "SkillBarRemoveWhirlwind"
                    },
                    "$!#aurastate!$",
                    "Handles changing the collision and pathing of the caster, and also stops the whirlwind sound."
                ]
            ]
        },
        {
            "name": "cltprgfunc#",
            "altNames": [
                "cltprgfunc1",
                "cltprgfunc2",
                "cltprgfunc3"
            ],
            "description": "Controls which Client Do function is used when the skill is executed while having a progressive charge number equal to 1, 2, and 3, respectively. (uses $!#cltdofunc!$ values)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "cltmissile",
            "description": "Used as a parameter for controlling the main missile by the client functions.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Missiles",
                "field": "Missile"
            }
        },
        {
            "name": "cltmissile#",
            "altNames": [
                "cltmissilea",
                "cltmissileb",
                "cltmissilec",
                "cltmissiled"
            ],
            "description": "Used as a parameter for controlling the secondary missiles used by the client functions.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Missiles",
                "field": "Missile"
            }
        },
        {
            "name": "cltcalc#",
            "altNames": [
                "cltcalc1",
                "cltcalc2",
                "cltcalc3"
            ],
            "description": "Calculation Field. Use as a possible parameter for controlling values for the client functions.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "warp",
            "description": "Boolean Field. If equals 1 and the skill uses a function that involves warping/teleporting, then check for a scene transition loading screen, if necessary. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "immediate",
            "description": "Boolean Field. If equals 1 and the skill has a periodic function, then immediately perform the skill's function when the periodic skill is activated. If equals 0, then wait until the skill's first periodic delay before performing the skill's function.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "enhanceable",
            "description": "Boolean Field. If equals 1, then the skill will be included in the plus to all skills item modifier. If equals 0, then the skill will not be included in the plus to all skills item modifier.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "attackrank",
            "description": "Controls the skill's AI score value for determining what is the best target for the AI. The higher the value, then the more likely the AI will select a target with this skill equipped.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "noammo",
            "description": "Boolean Field. If equals 1, then the skill will not check that weapon's ammo when performing an attack. This relies on the $!ItemTypes#Shoots!$ field. If equals 0, then the weapon will consume its ammo when being used by the skill.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "range",
            "description": "Determines how the unit uses the skill, which affects the weapon requirements and the type of attack used.",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 8,
                "file": "enums",
                "field": "Skill Ranges"
            },
            "appendField": {
                "file": "enums",
                "field": "Skill Ranges"
            }
        },
        {
            "name": "weapsel",
            "description": "If the unit can dual wield weapons, then this field will control how the weapons are used for the skill",
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
                    "Use the Left or Right Hand weapon"
                ],
                [
                    "1",
                    "Use the Left Hand weapon"
                ],
                [
                    "2",
                    "Use the Left and/or Right Hand weapon"
                ],
                [
                    "3",
                    "Always use both weapons"
                ],
                [
                    "4",
                    "Ignore the weapon used"
                ]
            ]
        },
        {
            "name": "requiresweapon",
            "description": "Boolean Field. If equals 1, then the skill requires an equiped weapon to cast.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "itypea#",
            "altNames": [
                "itypea1",
                "itypea2",
                "itypea3"
            ],
            "description": "Controls what Item Types are included, or allowed, when determining if this skill can be used",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 16,
                "file": "ItemTypes",
                "field": "Code"
            }
        },
        {
            "name": "etypea#",
            "altNames": [
                "etypea1",
                "etypea2"
            ],
            "description": "Controls what Item Types are excluded, or not allowed, when determining if this skill can be used",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 16,
                "file": "ItemTypes",
                "field": "Code"
            }
        },
        {
            "name": "itypeb#",
            "altNames": [
                "itypeb1",
                "itypeb2",
                "itypeb3"
            ],
            "description": "Controls what alternate Item Types are included, or allowed, when determining if this skill can be used. This acts as a second set of Item Types to check.",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 16,
                "file": "ItemTypes",
                "field": "Code"
            }
        },
        {
            "name": "etypeb#",
            "altNames": [
                "etypeb1",
                "etypeb2"
            ],
            "description": "Controls what alternate Item Types are excluded, or not allowed, when determining if this skill can be used. This acts as a second set of Item Types to check.",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 16,
                "file": "ItemTypes",
                "field": "Code"
            }
        },
        {
            "name": "anim",
            "description": "Controls the animation mode that the player character will use when using this skill. Setting the mode to Sequence (SQ) will cause the player character to play a time controlled animation sequence, utilizing certain sequence fields. Uses a $!PlrMode#Code!$",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 8,
                "file": "PlrMode",
                "field": "Code"
            },
            "appendField": {
                "file": "PlrMode",
                "field": "Name"
            }
        },
        {
            "name": "seqtrans",
            "description": "If the $!#anim!$ field equals SQ (Sequence) and this field equals SC (Cast), then the sequence animation speed can be modified by the faster cast rate stat modifier. Uses a $!PlrMode#Code!$",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 8,
                "file": "PlrMode",
                "field": "Code"
            },
            "appendField": {
                "file": "PlrMode",
                "field": "Name"
            }
        },
        {
            "name": "monanim",
            "description": "Controls the animation mode that the monster will use when using this skill. This is similar to the $!#anim!$ field except with monster units using the skill instead of player units. Uses a $!MonMode#code!$",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 8,
                "file": "MonMode",
                "field": "code"
            },
            "appendField": {
                "file": "MonMode",
                "field": "name"
            }
        },
        {
            "name": "seqnum",
            "description": "If the unit is a player and the $!#anim!$ used for the skill is a Sequence, then this field will control the index of which sequence animation to use. These sequences are specifically designed for certain skills, and each sequence has a set number of frames using certain animations.",
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
                    "0 (or empty)",
                    "Do nothing"
                ],
                [
                    "1",
                    "Jab"
                ],
                [
                    "2",
                    "Sacrifice"
                ],
                [
                    "3",
                    "Chastise"
                ],
                [
                    "4",
                    "Charge"
                ],
                [
                    "5",
                    "Defiance"
                ],
                [
                    "6",
                    "Inferno"
                ],
                [
                    "7",
                    "Strafe"
                ],
                [
                    "8",
                    "Impale"
                ],
                [
                    "9",
                    "Fend"
                ],
                [
                    "10",
                    "Whirlwind"
                ],
                [
                    "11",
                    "Double Swing"
                ],
                [
                    "12",
                    "Lightning"
                ],
                [
                    "13",
                    "Leap"
                ],
                [
                    "14",
                    "Leap Attack"
                ],
                [
                    "15",
                    "Double Throw"
                ],
                [
                    "16",
                    "Tiger Fist"
                ],
                [
                    "17",
                    "Projection"
                ],
                [
                    "18",
                    "Arctic Blast"
                ],
                [
                    "19",
                    "Triple Kick"
                ],
                [
                    "20",
                    "Dragon Breath"
                ],
                [
                    "21",
                    "Dragon Flight"
                ],
                [
                    "22",
                    "Druid Unmorph"
                ],
                [
                    "23",
                    "Assassin Blade Fury"
                ],
                [
                    "24",
                    "Cleave"
                ],
                [
                    "25",
                    "Mirrored Blades"
                ],
                [
                    "26",
                    "Bind Demon"
                ]
            ]
        },
        {
            "name": "seqinput",
            "description": "For skills that can repeat, this controls the number of frames to wait before the \"Do\" frame in the sequence. This acts as a delay in frames (25 Frames = 1 second) to wait within the sequence animation before it is allowed to be cast again or for looping back to the start of the sequence, such as for the Sorceress Inferno skill.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "durability",
            "description": "Boolean Field. If equals 1 and when the player character ends an animation mode that was not Attack 1, Attack 2, or Throw, then check the quantity and durability of the player's items to see if the valid weapons are out of ammo or are broken. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "UseAttackRate",
            "description": "Boolean Field. If equals 1, then the current attack speed should be updated after using the skill, relative to the \"attackrate\" stat (See $!ItemStatCost!$), and if the skill was an attacking skill. If equals 0, then the attack speed will not be updated after using the skill.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "LineOfSight",
            "description": "Controls the skill's collision filters for valid target locations when it is being cast",
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
                    "No collision filter"
                ],
                [
                    "1",
                    "Missile Barrier"
                ],
                [
                    "2",
                    "Player Path - Walls, no pathing, objects, doors, no player pathing"
                ],
                [
                    "3",
                    "Player Monster - Monsters, Players"
                ],
                [
                    "4",
                    "Player Flying - Missile barriers, doors"
                ],
                [
                    "5",
                    "Radial Barrier - Missile barriers, doors, walls"
                ]
            ]
        },
        {
            "name": "TargetableOnly",
            "description": "Boolean Field. If equals 1, then the skill will require a target unit in order to be used. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SearchEnemyXY",
            "description": "Boolean Field. If equals 1, then when the skill is cast on a target location, it will automatically search in different directions in the target area to find the first available enemy target. If equals 0, then ignore this. This field can be overridden if the $!#SearchEnemyNear!$ field is enabled.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SearchEnemyNear",
            "description": "Boolean Field. If equals 1, then when the skill is cast on a target location, it will automatically find the nearest enemy target. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SearchOpenXY",
            "description": "Boolean Field. If equals 1, then automatically search in a radius of size 7 in around the clicked target location to find an available unoccupied location to use the skill, testing for collision. If equals 0, then ignore this. This field can be overridden if the $!#SearchEnemyNear!$ or $!#SearchEnemyXY!$ field is enabled.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SelectProc",
            "description": "Uses a function to check that the target is a corpse with various parameters before validating the usage of the skill",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "table": [
                [
                    "Code",
                    "Name",
                    "Description"
                ],
                [
                    "0",
                    "",
                    ""
                ],
                [
                    "1",
                    {
                        "id": "CorpseExplode",
                        "text": "CorpseExplode"
                    },
                    "Check that the target is a corpse"
                ],
                [
                    "2",
                    {
                        "id": "RaiseSkeleton",
                        "text": "RaiseSkeleton"
                    },
                    "Check that the target is a monster corpse, and that the corpse was a unit that has a velocity (if the unit does not move, then the corpse cannot be used)"
                ],
                [
                    "3",
                    {
                        "id": "Revive",
                        "text": "Revive"
                    },
                    "Use the $!#RaiseSkeleton!$ function (Code = 2) and that the monser has a switchable AI"
                ],
                [
                    "4",
                    {
                        "id": "HeartMonster",
                        "text": "HeartMonster"
                    },
                    "Check that the target is a monster corpse and that the monster has the $!monstats2#soft!$ flag enabled"
                ],
                [
                    "5",
                    {
                        "id": "ItemMonster",
                        "text": "ItemMonster"
                    },
                    "Check that the target is a monster corpse"
                ],
                [
                    "6",
                    {
                        "id": "WardMonster",
                        "text": "WardMonster"
                    },
                    "Check that the target is a monster corpse and that the monster has the $!monstats2#soft!$ flag enabled"
                ]
            ]
        },
        {
            "name": "TargetCorpse",
            "description": "Boolean Field. If equals 1, then the skill is allowed to target corpses. If equals 0, then skill cannot target corpses.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "TargetPet",
            "description": "Boolean Field. If equals 1, then the skill is allowed to target pets (summons and mercenaries). If equals 0, then the skill cannot target pets.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "TargetAlly",
            "description": "Boolean Field. If equals 1, then the skill is allowed to target ally units. If equals 0, then the skill cannot target ally units.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "TargetItem",
            "description": "Boolean Field. If equals 1, then the skill is allowed to target items on the ground. If equals 0, then the skill cannot target items.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "AttackNoMana",
            "description": "Boolean Field. If equals 1, then then when the caster does not have enough mana to cast the skill and attempts to use the skill, the caster will default to using the Attack skill. If equals 0, then attempting to use the skill without enough mana will do nothing.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "TgtPlaceCheck",
            "description": "Boolean Field. If equals 1, then check that the target location is available for spawning a unit, testing collision. If equals 0, then ignore this. This is only used for skills that monsters use to spawn new units.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "KeepCursorStateOnKill",
            "description": "Boolean Field. If equals 1, then the mouse click hold state will continue to stay active after killing a selected target. If equals 0, then after killing the target, the mouse click hold state will reset.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ContinueCastUnselected",
            "description": "Boolean Field. If equals 1, then while the mouse is held down and there is no more target selected, then the skill will continue being used at the mouse's location. If equals 0, then while the mouse is held down and there is no more target selected, then the player character will cancel the skill and move to the mouse location.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ClearSelectedOnHold",
            "description": "Boolean Field. If equals 1, then when the mouse is held down, the target selection will be cleared. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ItemEffect",
            "description": "Uses a Server Do function (See $!#srvdofunc!$) for handling how the skill is used when it is triggered by an item, on the server side.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "ItemCltEffect",
            "description": "Uses a Client Do function (See $!#cltdofunc!$) for handling how the skill is used when it is triggered by an item, on the client side.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "ItemTgtDo",
            "description": "Boolean Field. If equals 1, then use the skill from the enemy target instead of the caster. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ItemTarget",
            "description": "Controls the targeting behavior of the skill when it is triggered by an item.",
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
                    "0 (or empty)",
                    "Default to targeting the attacker"
                ],
                [
                    "1",
                    "Target the caster"
                ],
                [
                    "2",
                    "Target a random location in a radius with a size of 20. Also tests collision."
                ],
                [
                    "3",
                    "Target a random nearby corpse"
                ],
                [
                    "4",
                    "Target the attacker, and if that attacker is not found then target a previous attacker or the previous attacker's location"
                ]
            ]
        },
        {
            "name": "ItemUseRestrict",
            "description": "Boolean Field. If equals 1, then use the state restriction defined in the $!#restrict!$ field when being triggered by an item.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ItemCheckStart",
            "description": "Boolean Field. If equals 1, then use the skill's Server Start function (See $!#srvstfunc!$) when the skill is trigged by an item. If equals 0, then the skill's Server Start function is ignored.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ItemCltCheckStart",
            "description": "Boolean Field. If equals 1, then when the skill is triggered by an item, and if the target is dead and the skill has a Client Start function (See $!#cltstfunc!$), then add the \"corpse_noselect\" flag to the target. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ItemCastSound",
            "description": "Play a sound when the skill is used by an item event.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "ItemCastOverlay",
            "description": "Add a cast overlay when the skill is used by an item event.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Overlay",
                "field": "overlay"
            }
        },
        {
            "name": "skpoints",
            "description": "Controls the number of Skill Points needed to level up the skill",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "reqlevel",
            "description": "Minimum character level required to be allowed to spend Skill Points on this skill. For Reign of the Warlock mode games, also use this to calculate an item's staff mods, using the following level tiers: {1, 6, 12, 18, 24, 30}.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "maxlvl",
            "description": "Maximum base level for the skill from spending Skill Points. Skill levels can be increased beyond this through item modifiers.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "reqstr",
            "description": "Minimum Strength attribute required to be allowed to spend Skill Points on this skill",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "reqdex",
            "description": "Minimum Dexterity attribute required to be allowed to spend Skill Points on this skill",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "reqint",
            "description": "Minimum Intelligence attribute required to be allowed to spend Skill Points on this skill",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "reqvit",
            "description": "Minimum Vitality attribute required to be allowed to spend Skill Points on this skill",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "reqskill#",
            "altNames": [
                "reqskill1",
                "reqskill2",
                "reqskill3"
            ],
            "description": "Points to a $!#skill!$ field to act as a prerequisite skill. The prerequisite skill must be least base level 1 before the player is allowed to spend Skill Points on this skill.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "skills",
                "field": "skill"
            }
        },
        {
            "name": "restrict",
            "description": "Controls how the skill is used when the unit has a restricted state (See the $!states#restrict!$ field)",
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
                    "None - The skill cannot be used when the unit has a restricted state"
                ],
                [
                    "1",
                    "Any - The skill can be used in when the unit has any restricted state"
                ],
                [
                    "2",
                    "State Only - The skill can only be used when the unit has a restricted state (See $!#State#!$)"
                ],
                [
                    "3",
                    "Pop State - The skill can be used at any time but when used, it will remove the unit's restrict states"
                ]
            ]
        },
        {
            "name": "State#",
            "altNames": [
                "State1",
                "State2",
                "State3"
            ],
            "description": "Used as parameters for the $!#restrict!$ field to control what specific states will restrict the usage of the skill.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "states",
                "field": "state"
            }
        },
        {
            "name": "localdelay",
            "description": "Controls the Casting Delay duration for this skill after it is used (25 frames = 1 second)",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "globaldelay",
            "description": "Controls the Casting Delay duration for all other skills with Casting Delays after this skill is used (25 frames = 1 second)",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "leftskill",
            "description": "Boolean Field. If equals 1, then the skill will appear on the list of skills to assign for the Left Mouse Button. If equals 0, then the skill will not appear on the Left Mouse Button skill list.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rightskill",
            "description": "Boolean Field. If equals 1, then the skill will appear on the list of skills to assign for the Right Mouse Button. If equals 0, then the skill will not appear on the Right Mouse Button skill list.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "repeat",
            "description": "Boolean Field. If equals 1 and the skill has no $!#anim!$ mode declared, then on the client side, the unit's mode will repeat its current mode (this can also happen if the unit has the \"inferno\" state). If equals 0, then the unit will have its mode set to Neutral when starting to use the skill. Also is used to mark the skill as repeatable in some AIs, like the generic pet ai.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "alwayshit",
            "description": "Boolean Field. If equals 1, then skills that rely on attack rating and defense will ignore those stats and will always hit enemies. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "usemanaondo",
            "description": "Boolean Field. If equals 1, then the skill will consume mana on its do function instead of its start function. If equals 0, then the skill will consume mana on its start function, which is the general case for skills.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "startmana",
            "description": "Controls the required amount of mana to start using the skill. This only works with certain $!#srvstfunc!$ functions such as $!#srv-SorStartInferno!$ (Code = 11) or $!#srv-AssStartBladeFury!$ (Code = 26).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "minmana",
            "description": "Controls the minimum amount of mana to use the skill. This can control skills that reduce in mana cost per level to not fall below this amount.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "manashift",
            "description": "This acts as a multiplicative modifier to control the precision of the mana cost after calculating the total mana cost with the $!#mana!$ and $!#lvlmana!$. Mana is calculated in 256ths in code which equals 8 bits. This field acts as a bitwise shift value, which means it will modify the mana value by the power of 2. For example, if this value equals 5 then that means divide the mana value of 256ths by 2^5 = 32 (or multiply the mana by 32/256). A value equal to 8 means 256/256 which means that the mana of 256ths value is not shifted.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "mana",
            "description": "Defines the base mana cost to use the skill at level 1",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "lvlmana",
            "description": "Defines the change in mana cost per skill level gained",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "interrupt",
            "description": "Boolean Field. If equals 1, then the casting the skill will be interruptible such as when the player is getting hit while casting a skill. If equals 0, then the skill should be uninterruptible.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "InTown",
            "description": "Boolean Field. If equals 1, then the skill can be used while the unit is in town. If equals 0, then the skill cannot be used in town.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "aura",
            "description": "Boolean Field. If equals 1, then the skill will be classified as an aura, which will make the skill execute its function periodically (using the $!#perdelay!$ field), based on the if the $!#aurastate!$ state is active. Aura skills will also override a preexisting state if that state matches the skill's $!#aurastate!$ state. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "periodic",
            "description": "Boolean Field. If equals 1, then the skill will execute its function periodically (using the $!#perdelay!$ field), based on the if the $!#aurastate!$ state is active. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "perdelay",
            "description": "Calculation Field. Controls the periodic rate that the skill continuously executes its function. Minimum value equals 5. This field requires $!#periodic!$ or $!#aura!$ field to be enabled.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "periodicClearAura",
            "description": "Boolean Field. If equals 1, then upon removal of the registered periodic event, the associated $!#aurastate!$ will be cleared.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "finishing",
            "description": "Boolean Field. If equals 1, then the skill will be classified as a finishing move, which can affect how progressive charges are consumed when using the skill and how the skill's description tooltip is displayed. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "prgchargestocast",
            "description": "Controls how many progressive charges are required to cast the skill",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "prgchargesconsumed",
            "description": "Controls how many progressive charges are consumed when the skill attack hits an enemy",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "passive",
            "description": "Boolean Field. If equals 1, then the skill will be treated as a passive, which can mean that the skill will not show up in the skill selection menu and will not run a server do function. If equals 0, then the skill is an active skill that can be used.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "progressive",
            "description": "Boolean Field. If equals 1, then the skill will use the progressive calculations to act as a charge-up skill that will add charges. This is only used for certain skill functions and will generally require the usage of the $!#prgcalc#!$ fields and the $!#aurastat#!$ fields. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "scroll",
            "description": "Boolean Field. If equals 1, then the skill can appear as a scroll version in the skill selection UI, if the skill allows for the scroll mechanics and if the player has the skill's scroll item in the inventory. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "calc#",
            "altNames": [
                "calc1",
                "calc2",
                "calc3",
                "calc4",
                "calc5",
                "calc6",
                "calc7",
                "calc8",
                "calc9",
                "calc10"
            ],
            "description": "Calculation Field. It is used as a possible parameter for skill functions or as a numeric input for other calculation fields.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "Param#",
            "altNames": [
                "Param1",
                "Param2",
                "Param3",
                "Param4",
                "Param5",
                "Param6",
                "Param7",
                "Param8",
                "Param9",
                "Param10",
                "Param11",
                "Param12",
                "Param13",
                "Param14",
                "Param15",
                "Param16",
                "Param17",
                "Param18",
                "Param19",
                "Param20"
            ],
            "description": "Integer Field. It is used as a possible parameter for skill functions or as a numeric input for other calculation fields.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "InGame",
            "description": "Boolean Field. If equals 1, then the skill is enabled to be used in-game. If equals 0, then the skill will be disabled in-game.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ToHit",
            "description": "Baseline bonus Attack Rating that is added to the attack when using this skill at level 1",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "LevToHit",
            "description": "Additional bonus Attack Rating when using this skill, calculated per skill level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "ToHitCalc",
            "description": "Calculation Field. Calculates the bonus Attack Rating when using the skill. This will override the $!#ToHit!$ and $!#LevToHit!$ fields if it is not blank.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "ResultFlags",
            "description": "Controls different flags that can affect how the target reacts after being hit by the skill attack. Uses an integer value to check against different bit fields by using the \"&\" operator. For example, if the value equals 5 (binary = 101) then that returns true for both the 4 (binary = 100) and 1 (binary = 1) bit field values.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            },
            "appendField": {
                "file": "enums",
                "field": "Result Flags"
            }
        },
        {
            "name": "HitFlags",
            "description": "Controls different flags that can affect the damage dealt when the target is hit by the skill. Uses an integer value to check against different bit fields by using the \"&\" operator. For example, if the value equals 6 (binary = 110) then that returns true for both the 4 (binary = 100) and 2 (binary = 10) bit field values.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            },
            "appendField": {
                "file": "enums",
                "field": "Hit Flags"
            }
        },
        {
            "name": "HitClass",
            "description": "Defines the skill's damage routines when hitting, mainly used for determining hit sound effects and overlays. Uses an integer value to check against different bit fields by using the \"&\" operator. For example, if the value equals 6 (binary = 110) then that returns true for both the 4 (binary = 100) and 2 (binary = 10) bit field values. There are binary masks to check between Base Hit Classes and Hit Class Layers, which can distinguish bewteen overlays or sounds are displayed.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            },
            "appendField": {
                "file": "enums",
                "field": "Hit Class"
            }
        },
        {
            "name": "Kick",
            "description": "Boolean Field. If equals 1, then a separate function is used to calculate the physical damage dealt by the skill, ignoring the following damage fields. This function will factor in the player character's Strength and Dexterity attributes (or Monster's level) to determine the baseline damage dealt. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "HitShift",
            "description": "Controls the percentage modifier for the skill's damage. This value cannot be less than 0 or greater than 8. This is calculated in 256ths. Used like so: \"damage << $!#HitShift!$\"",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "table": [
                [
                    "Value",
                    "Description",
                    "Percentage"
                ],
                [
                    "8",
                    "256/256",
                    "100%"
                ],
                [
                    "7",
                    "128/256",
                    "50%"
                ],
                [
                    "6",
                    "64/256",
                    "25%"
                ],
                [
                    "5",
                    "32/256",
                    "12.5%"
                ],
                [
                    "4",
                    "16/256",
                    "6.25%"
                ],
                [
                    "3",
                    "8/256",
                    "3.125%"
                ],
                [
                    "2",
                    "4/256",
                    "1.5625%"
                ],
                [
                    "1",
                    "2/256",
                    ".78125%"
                ],
                [
                    "0",
                    "1/256",
                    ".390625%"
                ]
            ]
        },
        {
            "name": "SrcDam",
            "description": "Controls the percentage modifier for how much weapon damage is transferred to the skill's damage (Out of 128). For example, if the value equals 64, then 50% (64/128) of the weapon's damage will be added to the skill's damage.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "MinDam",
            "description": "Minimum baseline physical damage dealt by the skill",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "MinLevDam#",
            "altNames": [
                "MinLevDam1",
                "MinLevDam2",
                "MinLevDam3",
                "MinLevDam4",
                "MinLevDam5"
            ],
            "description": "Controls the additional minimum physical damage dealt by the skill, calculated using the leveling formula between 5 level thresholds of the skill's current level. The level thresholds are levels 2-8, 9-16, 17-22, 23-28, 29 and beyond. These 5 level thresholds correlate to each field number.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "MaxDam",
            "description": "Maximum baseline physical damage dealt by the skill",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "MaxLevDam#",
            "altNames": [
                "MaxLevDam1",
                "MaxLevDam2",
                "MaxLevDam3",
                "MaxLevDam4",
                "MaxLevDam5"
            ],
            "description": "Controls the additional maximum physical damage dealt by the skill, calculated using the leveling formula between 5 level thresholds of the skill's current level. The level thresholds are levels 2-8, 9-16, 17-22, 23-28, 29 and beyond. These 5 level thresholds correlate to each field number.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "DmgSymPerCalc",
            "description": "Calculation Field. Determines the percentage increase to the physical damage dealt by the skill.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "EType",
            "description": "Defines the type of elemental damage dealt by the skill. If this field is empty, then the related elemental fields below will not be used. Types with length use $!#ELen!$",
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
            "name": "EMin",
            "description": "Minimum baseline elemental damage dealt by the skill",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "EMinLev#",
            "altNames": [
                "EMinLev1",
                "EMinLev2",
                "EMinLev3",
                "EMinLev4",
                "EMinLev5"
            ],
            "description": "Controls the additional minimum elemental damage dealt by the skill, calculated using the leveling formula between 5 level thresholds of the skill's current level. The level thresholds are levels 2-8, 9-16, 17-22, 23-28, 29 and beyond. These 5 level thresholds correlate to each field number.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "EMax",
            "description": "Maximum baseline elemental damage dealt by the skill",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "EMaxLev#",
            "altNames": [
                "EMaxLev1",
                "EMaxLev2",
                "EMaxLev3",
                "EMaxLev4",
                "EMaxLev5"
            ],
            "description": "Controls the additional maximum elemental damage dealt by the skill, calculated using the leveling formula between 5 level thresholds of the skill's current level. The level thresholds are levels 2-8, 9-16, 17-22, 23-28, 29 and beyond. These 5 level thresholds correlate to each field.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "EDmgSymPerCalc",
            "description": "Calculation Field. Determines the percentage increase to the total elemental damage dealt by the skill.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "ELen",
            "description": "The baseline elemental duration dealt by the skill. This is calculated in frame lengths where 25 Frames = 1 second. These fields only apply to appropriate elemental types with a duration.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "ELevLen#",
            "altNames": [
                "ELevLen1",
                "ELevLen2",
                "ELevLen3"
            ],
            "description": "Controls the additional elemental duration added by the skill, calculated using the leveling formula between 3 level thresholds of the skills current level. The level thresholds are levels 2-8, 9-16, 17 and beyond. These 3 level thresholds correlate to each field number. These fields only apply to appropriate elemental types with a duration.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "ELenSymPerCalc",
            "description": "Calculation Field. Determines the percentage increase to the total elemental duration dealt by the skill.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "aitype",
            "description": "Controls what the skill's archetype for how the AI will handle using this skill. This mostly affects the mercenary AI, Shadow Warrior AI, and generic pet ai, but some types are used for general AI.",
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
                    "None"
                ],
                [
                    "1",
                    "Buff"
                ],
                [
                    "2",
                    "Debuff"
                ],
                [
                    "3",
                    "Summon"
                ],
                [
                    "4",
                    "Melee"
                ],
                [
                    "5",
                    "Ranged"
                ],
                [
                    "6",
                    "Aura"
                ],
                [
                    "7",
                    "Teleport"
                ],
                [
                    "8",
                    "Heal"
                ],
                [
                    "9",
                    "Resurrect"
                ],
                [
                    "10",
                    "Passive"
                ],
                [
                    "11",
                    "Area Range"
                ],
                [
                    "12",
                    "Steal"
                ],
                [
                    "13",
                    "Move Attack"
                ]
            ]
        },
        {
            "name": "aibonus",
            "description": "This is only used with the Shadow Master AI and generic pet ai. This value is a flat integer rating that gets added to the AI's parameters when deciding which skill is most likely to be used next. The higher this value, then the more likely this skill will be used by the AI.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "cost mult",
            "description": "Multiplicative modifier of an item's gold cost, only when the item has a stat modifier with this skill. This will affect the item's buy, sell, and repair costs (Calculated in 1024ths).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "cost add",
            "description": "Flat integer modification of an item's gold cost, only when the item has a stat modifier with this skill. This will affect the item's buy, sell, and repair costs. This is added after the $!#cost mult!$ has modified the costs.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        }
    ]
}