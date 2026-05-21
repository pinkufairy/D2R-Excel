// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["Missiles"] = {
    "title": "Missiles.txt",
    "referenceFiles": [
        "enums",
        "ElemTypes"
    ],
    "overview": "This file controls the different functions for all missiles and their statistics. Missiles are projectiles used throughout the game for attacks, skills, and special effects.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Missile",
            "description": "Defines the unique name ID for the missile, which is how other files can reference the missile. The order of defined missiles will determine their ID numbers, so they should not be reordered.",
            "type": {
                "type": "text",
                "dataLength": 31,
                "memSize": 16
            }
        },
        {
            "name": "pCltDoFunc",
            "description": "Uses an ID value to select a function for the missile's behavior while active every frame on the client side. This is more about handling the local graphics while the missile is moving.",
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
                    "0 (or empty)",
                    "",
                    "",
                    "Do nothing"
                ],
                [
                    "1",
                    {
                        "id": "ProcessMissileMode",
                        "text": "ProcessMissileMode"
                    },
                    "",
                    "Perform the standard client missile move function. This is called in most of the other functions"
                ],
                [
                    "2",
                    {
                        "id": "ProcessBlood",
                        "text": "ProcessBlood"
                    },
                    "",
                    "Kill the missile if it goes off screen. Otherwise, set the number of duration frames for the missile to equal 128 and perform the standard missile move function."
                ],
                [
                    "3",
                    {
                        "id": "PoisonJavelin",
                        "text": "PoisonJavelin"
                    },
                    "$!#CltCalc1!$<br>$!#CltSubMissile1!$",
                    "Create a sub missile each frame that the current missile is moving where \"CltCalc1\" controls the number of subloops for the created sub missile."
                ],
                [
                    "4",
                    {
                        "id": "PoisonCloud",
                        "text": "PoisonCloud"
                    },
                    "$!#CltParam1!$<br>$!#CltParam2!$<br>$!#CltParam3!$<br>$!#CltSubMissile1!$",
                    "Create multiple sub missiles randomly in a area where the parameters control the spawn rate, number of sub missiles to spawn per rate, and the spawn radius size, respectively."
                ],
                [
                    "5",
                    {
                        "id": "clt-Firewall",
                        "text": "Firewall (Client)"
                    },
                    "$!#SubStart!$<br>$!#SubStop!$",
                    "Create an animation sequence for the missile where the difference of the $!#SubStart!$ and $!#SubStop!$ fields control the length of the sequence within the animation, and the game will randomly choose a frame within this sequence to loop back to."
                ],
                [
                    "6",
                    {
                        "id": "FirewallMaker",
                        "text": "FirewallMaker"
                    },
                    "$!#CltParam1!$<br>$!#CltSubMissile1!$<br>$!#CltSubMissile2!$<br>$!#CltSubMissile3!$",
                    "Randomly create 1 of the 3 possible sub missiles, where the parameter controls the random chance that the sub missile spawns with no light."
                ],
                [
                    "7",
                    {
                        "id": "ProcessGuidedArrow",
                        "text": "ProcessGuidedArrow"
                    },
                    "$!#CltParam1!$",
                    "Try to retarget the missile on a possible target unit where the parameter controls the rate at which the missile should attempt to retarget again."
                ],
                [
                    "8",
                    {
                        "id": "LightningMaker",
                        "text": "LightningMaker"
                    },
                    "$!#CltParam1!$<br>$!#CltSubMissile1!$<br>$!#InitSteps!$",
                    "Attempt to create a sub missile where the parameter controls the number of subloops for the sub missile (minimum value equals 1). The sub missile is only created if the current missile's has existed for greater than or equal to the $!#InitSteps!$ value."
                ],
                [
                    "9",
                    {
                        "id": "ProcessMeteorCenter",
                        "text": "ProcessMeteorCenter"
                    },
                    "$!#CltParam1!$<br>$!#CltParam2!$<br>$!#CltParam3!$<br>$!#CltSubMissile1!$<br>$!#CltSubMissile2!$<br>$!#ProgSound!$",
                    "Create each sub missile where the parameters control the number of frames, the missile fall rate (Used to calculate the starting height), and the missile slide rate (used to calculated the starting position offset), respectively. Also attempt to play the $!#ProgSound!$ sound at 2 frames before the $!#CltParam1!$ frame count."
                ],
                [
                    "10",
                    {
                        "id": "ProcessMonBliz",
                        "text": "ProcessMonBliz"
                    },
                    "$!#CltParam1!$<br>$!#CltParam2!$<br>$!#CltParam3!$<br>$!#CltSubMissile1!$<br>$!#CltSubMissile2!$",
                    "Randomly create 1 of the 2 sub missiles in an area radius, where the parameters control the baseline radius size (affected by the missile level), the spawn frequency (minimum equals 3 frames, affected by the missile level), and the level divisor (affects the difference in value for the other fields per missile level). The $!#CltParam1!$ and $!#CltParam2!$ parameters also can control the missile fall distance and fall rate."
                ],
                [
                    "11",
                    {
                        "id": "ProcessHoldLast",
                        "text": "ProcessHoldLast"
                    },
                    "",
                    "At the end of the missile's animation, set it to dead and destroy its light. Otherwise, run the $!#ProcessMissileMode!$ function."
                ],
                [
                    "12",
                    {
                        "id": "ProcessScreenShake",
                        "text": "ProcessScreenShake"
                    },
                    "$!#CltParam1!$<br>$!#CltParam2!$",
                    "Run the $!#ProcessMissileMode!$ function and also call the camera shaking function. The $!#CltParam1!$ field controls the camera shake magnitude, and the $!#CltParam2!$ field controls the camera shake duration."
                ],
                [
                    "13",
                    {
                        "id": "ProcessBlizzard",
                        "text": "ProcessBlizzard"
                    },
                    "$!#CltParam1!$<br>$!#CltParam2!$<br>$!#CltSubMissile1!$<br>$!#CltSubMissile2!$",
                    "Randomly create 1 of the 2 missiles in a calculated area every duration. The radius and spawn frequency are controlled by the missile's linked skill's $!skills#calc1!$ and $!skills#calc2!$ fields. The $!#CltParam1!$ and $!#CltParam2!$ parameters control the sub missile fall distance and fall rate."
                ],
                [
                    "14",
                    {
                        "id": "FingerMageSpider2",
                        "text": "FingerMageSpider2"
                    },
                    "$!#CltParam3!$<br>$!#CltParam4!$<br>$!#CltParam5!$",
                    "Shoot a missile that can be retargeted on a unit. The parameters control the retarget frequency, the retarget distance range, and the retarget position offset (minimum value equals 1), respectively."
                ],
                [
                    "15",
                    {
                        "id": "clt-FingerMageSpider",
                        "text": "FingerMageSpider (Client)"
                    },
                    "$!#CltParam1!$<br>$!#CltParam2!$<br>$!#CltParam3!$<br>$!#CltParam4!$<br>$!#CltParam5!$<br>$!#CltSubMissile1!$",
                    "Shoot a missile that can be retargeted on a unit and can spawn a sub missile. The parameters control the number of frames to wait before spawning the sub missile (minimum value equals 1), the number of frames to wait before processing the missile, the retarget frequency, the retarget distance range, and the retarget position offset (minimum value equals 1), respectively."
                ],
                [
                    "16",
                    {
                        "id": "DiabWallMaker",
                        "text": "DiabWallMaker"
                    },
                    "$!#CltSubMissile1!$",
                    "Shoot a missile using the $!#ProcessMissileMode!$ function where every frame while moving it can create a sub missile that will have a random chance to spawn with no light"
                ],
                [
                    "17",
                    {
                        "id": "ProcessCurse",
                        "text": "ProcessCurse"
                    },
                    "$!#CltParam1!$<br>$!#CltSubMissile1!$",
                    "Shoot a missile that will create a disc of sub missiles every 3 frames after a specified frame duration controlled by the parameter. The radius and density of the disc of sub missile is controlled by the current missile's radius value, which is given to the missile by the skill function."
                ],
                [
                    "18",
                    {
                        "id": "SimpleTrailMaker",
                        "text": "SimpleTrailMaker"
                    },
                    "$!#CltParam1!$<br>$!#CltSubMissile1!$<br>$!#InitSteps!$",
                    "Shoot a missile that will create a sub missile after the $!#InitSteps!$ frame count, where the parameter controls the sub missile's subloops. The sub missile will follow the same direction, offset, and path of the current missile"
                ],
                [
                    "19",
                    {
                        "id": "ProcessFrozenOrb",
                        "text": "ProcessFrozenOrb"
                    },
                    "$!#CltParam1!$<br>$!#CltParam2!$<br>$!#CltSubMissile1!$",
                    "Shoot a missile that will create sub missiles at a spawn rate and different directions. The $!#CltParam1!$ value controls the rate to spawn sub missiles, and the $!#CltParam2!$ value controls the direction index increment for looping through which direction the next created sub missile should fire towards."
                ],
                [
                    "20",
                    {
                        "id": "ProcessFrozenOrbNova",
                        "text": "ProcessFrozenOrbNova"
                    },
                    "$!#CltParam1!$<br>$!#CltParam2!$",
                    "Shoot a missile that will have a delay until processing and then will process its path at a specified rate. The $!#CltParam1!$ value controls the activation frame, and the $!#CltParam2!$ value controls the periodic rate to process the missile path"
                ],
                [
                    "21",
                    {
                        "id": "BRDeathControl",
                        "text": "BRDeathControl"
                    },
                    "$!#CltParam1!$<br>$!#CltSubMissile1!$",
                    "Create a sub missile after a periodic delay that can spawn in a random location in a radius controlled by the parameter. The periodic delay can be 25, 10, 3, or 15 frames, depending how many frames the current missile has lasted."
                ],
                [
                    "22",
                    {
                        "id": "BRDeathLightning",
                        "text": "BRDeathLightning"
                    },
                    "$!#CltParam1!$<br>$!#CltSubMissile1!$",
                    "Shoot a missile that will retarget to a randomized direction every periodic frame delay and will create sub missiles while moving."
                ],
                [
                    "23",
                    {
                        "id": "ProcessDOELight",
                        "text": "ProcessDOELight"
                    },
                    "",
                    "Run the $!#ProcessMissileMode!$ function and ensure that the missile lasts 500 frames if its frame count is less than 100"
                ],
                [
                    "24",
                    {
                        "id": "ProcessCairnStones",
                        "text": "ProcessCairnStones"
                    },
                    "$!#CltParam1!$<br>$!#CltParam2!$<br>$!#CltParam3!$<br>$!#CltSubMissile1!$<br>$!#CltSubMissile2!$",
                    "Create multiple $!#CltSubMissile1!$ sub missiles in a radius controlled by $!#CltParam2!$ and a spawn frequency controlled by $!#CltParam3!$, lasting a duration controlled by $!#CltParam1!$. The $!#CltParam1!$ field also controls the start time for spawning more $!#CltSubMissile1!$ sub missiles and $!#CltSubMissile2!$ sub missiles every 8 frames if there are any of the \"StoneAlpha\" to \"StoneTheta\" objects in the room."
                ],
                [
                    "25",
                    {
                        "id": "ProcessTowerMist",
                        "text": "ProcessTowerMist"
                    },
                    "$!#CltParam1!$<br>$!#CltParam2!$<br>$!#CltParam3!$<br>$!#CltSubMissile1!$",
                    "Shoot a missile that will spawn a sub missile randomly in a defined radius after a periodic delay"
                ],
                [
                    "26",
                    {
                        "id": "SmithDeathControl",
                        "text": "SmithDeathControl"
                    },
                    "$!#CltParam1!$<br>$!#CltParam2!$<br>$!#CltParam3!$<br>$!#CltSubMissile1!$<br>$!#CltSubMissile2!$",
                    "Create $!#CltSubMissile1!$ sub missile in a random position in a radius controlled by $!#CltParam3!$ where $!#CltParam1!$ controls its spawn rate. Create $!#CltSubMissile2!$ sub missile as a lobbing missile in a random position in the same radius where $!#CltParam2!$ controls its spawn rate. Also the $!#CltSubMissile2!$ sub missile's level is controlled by the following function: 1 + RANDOM(0, 5)"
                ],
                [
                    "27",
                    {
                        "id": "SmithFirewallMaker",
                        "text": "SmithFirewallMaker"
                    },
                    "$!#CltParam1!$<br>$!#CltSubMissile1!$",
                    "Create the sub missile every frame while moving. The parameter controls the delay until the current missile needs to retarget in a new direction"
                ],
                [
                    "28",
                    {
                        "id": "SmithDoNotDraw",
                        "text": "SmithDoNotDraw"
                    },
                    "$!#CltParam1!$<br>$!#CltSubMissile1!$",
                    "Create 4 sub missiles in different directions after a delay that is controlled by the parameter."
                ],
                [
                    "29",
                    {
                        "id": "ProcessAndyControl0",
                        "text": "ProcessAndyControl0"
                    },
                    "$!#CltParam1!$<br>$!#CltParam2!$<br>$!#CltParam3!$<br>$!#CltSubMissile1!$<br>$!#CltSubMissile2!$<br>$!#CltSubMissile3!$<br>$!#ProgSound!$",
                    "Create $!#CltSubMissile1!$ after 10 Frames which subsequently will make its own $!#CltSubMissile1!$ where its $!#CltParam1!$, $!#CltParam2!$ and $!#CltParam3!$ fields control the Z offset, Z Velocity Max, and Z Acceleration, respectively. Create $!#CltSubMissile2!$ randomly in a radius equal to 20 and at a periodic rate controlled by $!#CltParam1!$. $!#CltParam2!$ controls the duration of the camera shake, which starts after 90 frames. Between frame 115 and 315, create $!#CltSubMissile3!$ randomly in a radius equal to 6 where its $!#CltParam1!$ and $!#CltParam2!$ values control the Z offset and Z velocity."
                ],
                [
                    "30",
                    {
                        "id": "ProcessTowerChestSpawner",
                        "text": "ProcessTowerChestSpawner"
                    },
                    "$!#CltParam1!$<br>$!#CltParam2!$<br>$!#CltParam3!$<br>$!#CltSubMissile1!$",
                    "Start creating the sub missile periodically after an initial delay controlled by $!#CltParam1!$. $!#CltParam2!$ controls the periodic rate to spawn the sub missile and $!#CltParam3!$ controls the radius size to spawn the sub missile randomly in an area."
                ],
                [
                    "31",
                    {
                        "id": "ProcessHoradricStaff",
                        "text": "ProcessHoradricStaff"
                    },
                    "",
                    "This function does multiple hardcoded features. Shake the screen after 150 frames. Create 7 \"horadriclight\" missiles. After 165 frames, create the \"horadriclightning\" missile at a specific position, direction, and velocity. After 150 frames, create the \"dust\" missile every other frame."
                ],
                [
                    "32",
                    {
                        "id": "ProcessRadDeath",
                        "text": "ProcessRadDeath"
                    },
                    "",
                    "Create a \"radamenthandofgod\" missile at an increasing rate based on the total frame count of the current missile"
                ],
                [
                    "33",
                    {
                        "id": "ProcessTaintedSun",
                        "text": "ProcessTaintedSun"
                    },
                    "",
                    "Create a \"taintedsunflash\" missile at an increasing rate and at random ranges, based on the total frame count of the current missile. Also add a \"horadric_light\" overlay on the altar object in the level room."
                ],
                [
                    "34",
                    {
                        "id": "ProcessTaintedSunBall",
                        "text": "ProcessTaintedSunBall"
                    },
                    "",
                    "The missile will change its path and velocities throughout its life cycle using different mods, to follow a crafted pattern"
                ],
                [
                    "35",
                    {
                        "id": "ProcessQueenDeath",
                        "text": "ProcessQueenDeath"
                    },
                    "",
                    "Every 4 frames, create a \"queendeathglob\" using a lobbing function in a random position in a defined radius of size 12."
                ],
                [
                    "36",
                    {
                        "id": "ProcessDurielDeath",
                        "text": "ProcessDurielDeath"
                    },
                    "",
                    "Create a \"explodingarrowexp\" missile at an increasing rate and at random ranges, based on the total frame count of the current missile. Also create a \"durieldeathrock\" missile at an increasing rate and at random ranges, based on the total frame count of the current missile. Run a camera shake function."
                ],
                [
                    "37",
                    {
                        "id": "ProcessDiabloAppears",
                        "text": "ProcessDiabloAppears"
                    },
                    "",
                    "Run a camera shake function and request to play the \"monster_diablo_taunt_1\" sound"
                ],
                [
                    "38",
                    {
                        "id": "ProcessHellForge",
                        "text": "ProcessHellForge"
                    },
                    "",
                    "Create multiple lobbing \"hffragment1\" missiles at an increasing rate in random directions, based on the total frame count of the current missile. Run a camera shake function."
                ],
                [
                    "39",
                    {
                        "id": "ProcessHFragment1",
                        "text": "ProcessHFragment1"
                    },
                    "",
                    "If the missile has a source unit, then set the missile frame to 0 and run the $!#ProcessMissileMode!$ function"
                ],
                [
                    "40",
                    {
                        "id": "ProcessHFragment2",
                        "text": "ProcessHFragment2"
                    },
                    "",
                    "Periodically create a \"hfspirit1\" missile after a randomized periodic delay."
                ],
                [
                    "41",
                    {
                        "id": "ProcessSoul",
                        "text": "ProcessSoul"
                    },
                    "",
                    "Adjust the animation rate of the missile after certain key frames during the missile's duration."
                ],
                [
                    "42",
                    {
                        "id": "ProcessIzualDeath",
                        "text": "ProcessIzualDeath"
                    },
                    "$!#Param1!$<br>$!#Param2!$",
                    "Create the \"izual mist loop\" missile every frame in a random radius of size 10. Create a \"izual lightning\" missile every frame between the value of the $!#Param1!$ and $!#Param2!$ fields."
                ],
                [
                    "43",
                    {
                        "id": "ProcessAttached",
                        "text": "ProcessAttached"
                    },
                    "",
                    "Attach the missile follow its source unit's position. Kill the missile if the unit is dead."
                ],
                [
                    "44",
                    {
                        "id": "ProcessDistraction",
                        "text": "ProcessDistraction"
                    },
                    "$!#CltSubMissile1!$",
                    "Attach the missile follow its source unit's position. Create a sub missile while moving."
                ],
                [
                    "45",
                    {
                        "id": "ProcessDistractionFog",
                        "text": "ProcessDistractionFog"
                    },
                    "$!#CltParam1!$<br>$!#CltParam2!$<br>$!#CltParam3!$<br>$!#CltSubMissile1!$",
                    "Create a number of sub missiles in an area at a defined rate. $!#CltParam1!$ controls the spawn rate, $!#CltParam2!$ controls the number of missiles to spawn per rate, and $!#CltParam3!$ controls the radius to randomly spawn the sub missiles."
                ],
                [
                    "46",
                    {
                        "id": "clt-ProcessTrailJav",
                        "text": "ProcessTrailJav (Client)"
                    },
                    "$!#CltParam1!$<br>$!#CltSubMissile1!$",
                    "Create 2 sub missiles per frame while moving with perpendicular directions and a defined number of subloops controlled by the parameter"
                ],
                [
                    "47",
                    {
                        "id": "ProcessMoltenBoulder",
                        "text": "ProcessMoltenBoulder"
                    },
                    "$!#CltParam1!$<br>$!#CltSubMissile1!$<br>$!#CltSubMissile2!$<br>$!#CltSubMissile3!$<br>$!#ProgSound!$",
                    "Play the $!#ProgSound!$ sound if the missile has a bounce value. Run the $!#FirewallMaker!$ function (Code = 6)."
                ],
                [
                    "48",
                    {
                        "id": "ProcessEruption",
                        "text": "ProcessEruption"
                    },
                    "$!#CltSubMissile1!$<br>$!#CltSubMissile2!$",
                    "Uses the linked skills $!skills#calc1!$ and $!skills#calc2!$ fields to get the spawn radius and spawn frequency for creating the 2 sub missiles. For $!#CltSubMissile1!$, the missile is automatically set to dead mode when it is created."
                ],
                [
                    "49",
                    {
                        "id": "clt-ProcessVines",
                        "text": "ProcessVines (Client)"
                    },
                    "$!#CltParam1!$<br>$!#CltSubMissile1!$",
                    "Periodically spawn the sub missile in the same direction as the current missile where the parameter controls the spawn rate"
                ],
                [
                    "50",
                    {
                        "id": "clt-ProcessVolcano",
                        "text": "ProcessVolcano (Client)"
                    },
                    "$!#CltParam1!$<br>$!#CltParam2!$<br>$!#CltParam3!$<br>$!#CltParam4!$<br>$!#CltParam5!$<br>$!#CltSubMissile1!$",
                    "Spawn a sub missile with the lob function at a defined spawn rate at certain frames within the current missile's duration. $!#CltParam1!$ controls the periodic spawn rate, $!#CltParam2!$ controls the radius to spawn the sub missile, $!#CltParam3!$ controls the starting frame to begin spawning the sub missile, $!#CltParam4!$ controls the end frame to stop spawning the sub missile, and $!#CltParam5!$ controls the lob start value."
                ],
                [
                    "51",
                    {
                        "id": "clt-ProcessRecycleDelay",
                        "text": "ProcessRecycleDelay (Client)"
                    },
                    "$!#CltParam1!$<br>$!#CltParam2!$<br>$!#CltParam3!$<br>$!#CltParam4!$<br>$!#CltSubMissile1!$<br>$!#CltSubMissile2!$<br>$!#ProgSound!$",
                    "Create $!#CltSubMissile1!$ at a frame controlled by $!#CltParam1!$ in a radius controlled by $!#CltParam4!$ and a spawn count controlled by $!#CltParam3!$. Create $!#CltSubMissile2!$ sub missile at a frame controlled by $!#CltParam2!$ and also request to play the $!#ProgSound!$ at the same time."
                ],
                [
                    "52",
                    {
                        "id": "clt-ProcessMakePerpMissiles",
                        "text": "ProcessMakePerpMissiles (Client)"
                    },
                    "$!#CltSubMissile1!$",
                    "Create 2 of the same sub missile every frame while moving that face at perpendicular directions"
                ],
                [
                    "53",
                    {
                        "id": "ProcessTigerFury",
                        "text": "ProcessTigerFury"
                    },
                    "$!#CltParam1!$<br>$!#CltSubMissile1!$",
                    "Create a sub missile every frame while moving and then run the $!#ProcessGuidedArrow!$ function (Code = 7)."
                ],
                [
                    "54",
                    {
                        "id": "ProcessAnyaCenter",
                        "text": "ProcessAnyaCenter"
                    },
                    "",
                    "Create a \"anya icemagic\" missile every frame until frame 110. Create a decreasing number of \"anyasteam1\" missiles in a random position and velocity, every frame until frame 110. Perform a camera shake function. Create a \"anyasteamvent\" missile and a \"anyasteam\" missile randomly in a radius every 7 frames until frame 200."
                ],
                [
                    "55",
                    {
                        "id": "ProcessAncientDeath",
                        "text": "ProcessAncientDeath"
                    },
                    "",
                    "Create a \"ancient death cloud\" missile every 3 frames randomly in an area in a random direction"
                ],
                [
                    "56",
                    {
                        "id": "clt-ProcessBaalTaunt",
                        "text": "ProcessBaalTaunt (Client)"
                    },
                    "$!#CltParam1!$<br>$!#CltParam2!$<br>$!#CltParam3!$<br>$!#CltSubMissile1!$<br>$!#CltSubMissile2!$<br>$!#CltSubMissile3!$",
                    "Randomly choose to spawn one of the 3 sub missiles where each of the parameters control the spawn rate for each of the sub missiles."
                ],
                [
                    "57",
                    {
                        "id": "ProcessBladeShieldCenter",
                        "text": "ProcessBladeShieldCenter"
                    },
                    "$!#CltSubMissile1!$",
                    "Attach the current missile to the source unit and after a certain delay, create a sub missile every frame that moves in a missile spiral path"
                ],
                [
                    "58",
                    {
                        "id": "ProcessChaosIce",
                        "text": "ProcessChaosIce"
                    },
                    "$!#Param1!$",
                    "Randomly decide to change the path of the missile to a different direction"
                ],
                [
                    "59",
                    {
                        "id": "ProcessWorldstoneChip",
                        "text": "ProcessWorldstoneChip"
                    },
                    "",
                    "If the current Z offset is too low or too high, then stop the missile"
                ],
                [
                    "60",
                    {
                        "id": "ProcessHurricane",
                        "text": "ProcessHurricane"
                    },
                    "",
                    "Every 2 Frames change the missile path to a different direction"
                ],
                [
                    "61",
                    {
                        "id": "ProcessOverseerCtrl",
                        "text": "ProcessOverseerCtrl"
                    },
                    "",
                    "Randomly create either the \"catapult cold ball\" missile or \"catapult meteor ball\" missile at an increasing spawn rate in a random position in a radius."
                ],
                [
                    "62",
                    {
                        "id": "ProcessNihlathak",
                        "text": "ProcessNihlathak"
                    },
                    "",
                    "This function handles the missile visuals for Nihlathak's death.<br>\u00b7 Every frame has a random chance to create 2 of the following missiles in a random position: \"nehlithakswoosh\", \"nehlithakdebris1\", \"nehlithakdebris2\", \"nehlithakdebris3\", \"nehlithakdebris4\".<br>\u00b7 After frame 60, every 20 frames create a \"brdeathlightningbolt\" missile in a random direction.<br>\u00b7         At frame 25, create a \"nehlithakhole\" and \"nehlithakholelight\" at the missile's location."
                ],
                [
                    "63",
                    {
                        "id": "ProcessNihlathakHurr",
                        "text": "ProcessNihlathakHurr"
                    },
                    "",
                    "Update the path of the missile at every frame"
                ],
                [
                    "64",
                    {
                        "id": "ProcessBaalControl",
                        "text": "ProcessBaalControl"
                    },
                    "",
                    "This function handles the missile visuals for Baal's death.<br>\u00b7 Randomly spawn either a \"baalfx spirit 1\" missile or \"baalfx spirit 2\" missile at an increasing rate and in a random direction.<br>\u00b7 At frame 450, create a \"baalfx baal head appear\" missile<br>\u00b7 At frame 425, create a \"baalfx baal head 1\" missile<br>\u00b7 At frame 375, create a \"baalfx baal head 2\" missile<br>\u00b7 At frame 325, create a \"baalfx baal head 3\" missile\u00b7 After some time and when the \"tyrael3\" unit is found within the level, then randomly create either the \"baalfx tyreal debris 1\", \"baalfx tyreal debris 2\", or \"baalfx tyreal debris 3\" every frame for a specified duration"
                ],
                [
                    "65",
                    {
                        "id": "ProcessBaalSpirit",
                        "text": "ProcessBaalSpirit"
                    },
                    "",
                    "The missile will follow different modes that can change its path and direction, which are controlled by the $!#ProcessBaalControl!$ function (Code = 64)"
                ],
                [
                    "66",
                    {
                        "id": "ProcessWorldstoneShake",
                        "text": "ProcessWorldstoneShake"
                    },
                    "",
                    "Attach the missile to the source unit. Call the camera shake function at random periodic delays. There is a small chance to randomly create either the \"baalfx tyreal debris 1\", \"baalfx tyreal debris 2\", or \"baalfx tyreal debris 3\" at periodic durations."
                ],
                [
                    "67",
                    {
                        "id": "clt-ProcessMissileDelayed",
                        "text": "ProcessMissileDelayed (Client)"
                    },
                    "$!#CltParam1!$<br>$!#CltParam2!$<br>$!#CltParam3!$<br>$!#CltSubMissile1!$<br>$!#CltSubMissile2!$<br>$!#CltSubMissile3!$",
                    "Create a sub missile at a specified frame at the source unit's location. Each parameter controls the specific frame to spawn one of the sub missiles."
                ],
                [
                    "68",
                    {
                        "id": "clt-ProcessSucFireBall",
                        "text": "ProcessSucFireBall (Client)"
                    },
                    "$!#CltParam1!$<br>$!#CltSubMissile1!$",
                    "Create a sub missile every frame while the current missile is moving where the number of sub loops for the sub missile is controlled by the parameter"
                ],
                [
                    "69",
                    {
                        "id": "ProcessHoldLastWithTimeout",
                        "text": "ProcessHoldLastWithTimeout"
                    },
                    "",
                    "At the end of the missile's animation, tick down a timer that when reaches 0 kills the missile. Only works with missiles created by certain skill functions, like $!skills#NecDoCExplosion!$ or $!skills#clt-WarDoBloodBoil!$. Otherwise, run the $!#ProcessMissileMode!$ function."
                ],
                [
                    "70",
                    {
                        "id": "ProcessHoldLastCheckSource",
                        "text": "ProcessHoldLastCheckSource"
                    },
                    "",
                    "At the end of the missile's animation, set it to dead and destroy its light, and if the source unit no longer exists, remove the missile. Otherwise, run the $!#ProcessMissileMode!$ function."
                ],
                [
                    "71",
                    {
                        "id": "WaveTrailMaker",
                        "text": "WaveTrailMaker"
                    },
                    "$!#CltSubMissile1!$<br>$!#CltSubMissile2!$<br>$!#Param2!$<br>$!#CltParam1!$",
                    "Create $!#CltSubMissile1!$ as a trailing missile. Optionally leaves $!#CltSubMissile2!$ as a linger missile, falling back on the trailing missile. $!#Param2!$ controls duration of linger missile compared to the range value. $!#CltParam1!$ controls the number of subloops."
                ],
                [
                    "72",
                    {
                        "id": "RadialMaker",
                        "text": "RadialMaker"
                    },
                    "$!#CltSubMissile1!$",
                    "Spawns $!#CltSubMissile1!$ at the target's location, only once."
                ],
                [
                    "73",
                    {
                        "id": "WaveWallMaker",
                        "text": "WaveWallMaker"
                    },
                    "$!#CltSubMissile1!$<br>$!#Param1!$<br>$!#Param2!$",
                    "Create a series of $!#CltSubMissile1!$ as a wave wall. $!#Param1!$ controls the delay between each wall missile's creation. $!#Param2!$ controls how many missiles to add on each side of the wall. Sets velocity to 1. Must be used with $!skills#clt-WarDoFlameWave!$ so all parameters are set properly. Also uses $!#CltSubMissile1!$ as the trail missile and sets some information on each created wall missile used by $!#WaveTrailMaker!$. The wave wall missile's $!#Param1!$ controls duration of tail offset."
                ],
                [
                    "74",
                    {
                        "id": "ProcessTargetAttached",
                        "text": "ProcessTargetAttached"
                    },
                    "",
                    "Moves missile to keep it attached to a target unit, if it still exists. Uses internal params as the target."
                ],
                [
                    "75",
                    {
                        "id": "ProcessSoaringStrike",
                        "text": "ProcessSoaringStrike"
                    },
                    "",
                    "Updates missile for a boomering effect: when the missile is on the \"return trip\" of the boomerang, adjust its path to go towards its source."
                ],
                [
                    "76",
                    {
                        "id": "ProcessMiasmaChains",
                        "text": "ProcessMiasmaChains"
                    },
                    "$!#Param3!$<br>$!#Range!$<br>$!#Radius!$",
                    "Move the missile until it has a collision or exceeds its duration. Once it does, try to attach to a target in its originally calculated $!#Radius!$. Otherwise, attach to the floor, only allowing valid end locations if $!#Param3!$ is 1. Extend the missile's duration back to its originally calculated $!#Range!$. Afterwards, update the missile's position to its target's."
                ],
                [
                    "77",
                    {
                        "id": "ProcessHeraldSpawner",
                        "text": "ProcessHeraldSpawner"
                    },
                    "$!#CltCalc1!$<br>$!#CltParam4!$<br>$!#CltParam5!$<br>$!#CltSubMissile2!$<br>$!#CltSubMissile3!$",
                    "VFX control for herald spawning.<br>Spawn $!#CltSubMissile2!$ missiles as lightning bolts. If this missile was created by the herald system, spawn an amount equal to the herald tier multiplied by $!#CltParam4!$, where the interval of spawning is centered around the midpoint of the missile's range. Otherwise if $!#CltCalc1!$ is > 0, use it for the interval (not centered).<br>Spawn $!#CltSubMissile3!$ as the explosion missile when the missile reaches the $!#CltParam5!$ frame.<br>Run $!#ProcessTowerMist!$.<br>On the first frame, set the missile's collision mask to \"nopath\"."
                ]
            ]
        },
        {
            "name": "pCltHitFunc",
            "description": "Uses an ID value to select a specialized function for the missile's behavior when hitting something on the client side. This is more about handling the local graphics at the moment of missile collision.",
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
                        "id": "HitExplodingArrow",
                        "text": "HitExplodingArrow"
                    },
                    "$!#cHitPar1!$<br>$!#cHitPar2!$<br>$!#CltHitSubMissile1!$",
                    "Create a disc of sub missiles with a defined radius and missile count"
                ],
                [
                    "2",
                    {
                        "id": "clt-HitPlagueJavelin",
                        "text": "HitPlagueJavelin (Client)"
                    },
                    "$!#cHitPar1!$<br>$!#cHitPar2!$<br>$!#cHitPar3!$<br>$!#CltHitSubMissile1!$<br>$!#Param1!$<br>$!#Param2!$",
                    "Create an inner and outer disc of sub missiles with a specified density for each ring. Each sub missile will use its $!#Param1!$ and $!#Param2!$ fields to define their velocities"
                ],
                [
                    "3",
                    {
                        "id": "HitOilPotion",
                        "text": "HitOilPotion"
                    },
                    "$!#CltHitSubMissile1!$<br>$!#CltHitSubMissile2!$<br>$!#CltHitSubMissile3!$",
                    "Create $!#CltHitSubMissile1!$ and then randomly create either $!#CltHitSubMissile2!$ or $!#CltHitSubMissile3!$"
                ],
                [
                    "4",
                    {
                        "id": "clt-HitDoNova",
                        "text": "HitDoNova (Client)"
                    },
                    "$!#cHitPar1!$<br>$!#CltHitSubMissile1!$",
                    "Create a ring of sub missiles with a defined count"
                ],
                [
                    "5",
                    {
                        "id": "clt-HitSoaringStrike",
                        "text": "HitSoaringStrike (Client)"
                    },
                    "",
                    "Adjusts the missile for a boomerang effect. If the missile is \"going out\" it always pierces. Start the \"return trip\" back to the source if it reaches its lifetime or hits a wall. Cap the return trip path at 50 squares. If on the return trip, kill the missile if it reaches its lifetime or hits a wall."
                ],
                [
                    "6",
                    "",
                    "",
                    "Do nothing"
                ],
                [
                    "7",
                    "",
                    "",
                    "Do nothing"
                ],
                [
                    "8",
                    "",
                    "",
                    "Do nothing"
                ],
                [
                    "9",
                    {
                        "id": "clt-HitHolyBolt",
                        "text": "HitHolyBolt (Client)"
                    },
                    "$!#cHitPar1!$<br>$!#cHitPar2!$<br>$!#cHitPar3!$<br>$!#CltHitSubMissile1!$<br>$!#ProgOverlay!$",
                    "Determine whether to impact allies, how that damage is modified by the $!#dParam1!$ field based on the unit type hit, and if the missile should be killed on hitting an allowed unit. If impacting a unit then create a sub missile. When hitting an ally, create an overlay."
                ],
                [
                    "10",
                    {
                        "id": "HitLightningOverlay",
                        "text": "HitLightningOverlay"
                    },
                    "$!#ProgOverlay!$",
                    "Add an overlay on the target unit"
                ],
                [
                    "11",
                    "",
                    "",
                    "Do nothing"
                ],
                [
                    "12",
                    {
                        "id": "clt-HitImmolationArrow",
                        "text": "HitImmolationArrow (Client)"
                    },
                    "$!#cHitPar1!$<br>$!#cHitPar2!$<br>$!#CltHitSubMissile1!$<br>$!#CltHitSubMissile2!$<br>$!#CltHitSubMissile3!$<br>$!#SHitCalc1!$",
                    "Create a ring of sub missiles with a defined radius and density count. Use $!#SHitCalc1!$ to control the range (duration) of the sub missile"
                ],
                [
                    "13",
                    {
                        "id": "clt-HitGuidedArrow",
                        "text": "HitGuidedArrow (Client)"
                    },
                    "$!#Param2!$",
                    "Control the missile flags to either mark the target, go to the target, or run the missile retarget function"
                ],
                [
                    "14",
                    {
                        "id": "HitFreezingArrow",
                        "text": "HitFreezingArrow"
                    },
                    "$!#CltHitSubMissile1!$<br>$!#CltHitSubMissile2!$",
                    "Create the $!#CltHitSubMissile1!$ sub missile normally, and create $!#CltHitSubMissile2!$ sub missile in a random rotation"
                ],
                [
                    "15",
                    "",
                    "",
                    "Do nothing"
                ],
                [
                    "16",
                    {
                        "id": "clt-HitChainLightning",
                        "text": "HitChainLightning (Client)"
                    },
                    "$!#cHitPar1!$<br>$!#ProgOverlay!$",
                    "Create duplicate of this missile if there is a valid unit in range and there are still enough chain hits. Add an overlay on the target unit."
                ],
                [
                    "17",
                    "",
                    "",
                    "Do nothing"
                ],
                [
                    "18",
                    {
                        "id": "clt-HitMeteorCenter",
                        "text": "HitMeteorCenter (Client)"
                    },
                    "$!#cHitPar1!$<br>$!#cHitPar2!$<br>$!#cHitPar3!$<br>$!#CltHitSubMissile1!$<br>$!#CltHitSubMissile2!$<br>$!#CltHitSubMissile3!$<br>$!#CltHitSubMissile4!$",
                    "Create a ring of $!#CltHitSubMissile1!$ sub missiles where $!#cHitPar1!$ controls the density. Create a $!#CltHitSubMissile2!$ sub missile where the range is controlled by the linked skill's $!#Param3!$ and $!#Param4!$ values from the skills.txt file, and also set the missile's light radius value to 12. Create a ring of $!#CltHitSubMissile3!$ sub missiles where $!#cHitPar2!$ controls the density. Create a ring of $!#CltHitSubMissile4!$ sub missiles where $!#cHitPar3!$ controls the density."
                ],
                [
                    "19",
                    {
                        "id": "HitMonBliz",
                        "text": "HitMonBliz"
                    },
                    "$!#CltHitSubMissile1!$<br>$!#CltHitSubMissile2!$",
                    "Randomly choose between creating one of the sub missiles"
                ],
                [
                    "20",
                    "",
                    "",
                    "Do nothing"
                ],
                [
                    "21",
                    "",
                    "",
                    "Do nothing"
                ],
                [
                    "22",
                    "",
                    "",
                    "Do nothing"
                ],
                [
                    "23",
                    "",
                    "",
                    "Do nothing"
                ],
                [
                    "24",
                    {
                        "id": "HitBoneSpear",
                        "text": "HitBoneSpear"
                    },
                    "$!#CltHitSubMissile1!$",
                    "Create a sub missile at the target location"
                ],
                [
                    "25",
                    {
                        "id": "clt-HitLightningFury",
                        "text": "HitLightningFury (Client)"
                    },
                    "$!#cHitPar1!$<br>$!#cHitPar2!$<br>$!#CltHitSubMissile1!$",
                    "Create a sub missile per enemy found in an area, where the radius and the maximum number of possible missiles to spawn are controlled by the parameters "
                ],
                [
                    "26",
                    {
                        "id": "clt-HitFistOfHeavensDelay",
                        "text": "HitFistOfHeavensDelay (Client)"
                    },
                    "$!#cHitPar1!$<br>$!#cHitPar2!$<br>$!#CltHitSubMissile1!$<br>$!#HitSubMissile1!$",
                    "If there is no $!#HitSubMissile1!$ sub missile, then do nothing. Otherwise, create a sub missile per enemy found in an area, where the radius and the maximum number of possible missiles to spawn are controlled by the parameters"
                ],
                [
                    "27",
                    "",
                    "",
                    "nullptr"
                ],
                [
                    "28",
                    {
                        "id": "clt-HitMonsterRancidGasPotion",
                        "text": "HitMonsterRancidGasPotion (Client)"
                    },
                    "$!#cHitPar1!$<br>$!#CltHitSubMissile1!$<br>$!#Param1!$",
                    "Create a disc of sub missiles with a specified density. Each sub missile will use its $!#Param1!$ field to define its velocity."
                ],
                [
                    "29",
                    {
                        "id": "HitGrimWard",
                        "text": "HitGrimWard"
                    },
                    "$!#cHitPar1!$<br>$!#CltHitSubMissile1!$",
                    "Create a sub missile with a specified duration and force its direction to be the same as the missile that created it"
                ],
                [
                    "30",
                    {
                        "id": "clt-HitFrozenOrb",
                        "text": "HitFrozenOrb (Client)"
                    },
                    "$!#cHitPar1!$<br>$!#CltHitSubMissile1!$",
                    "Create a disc of sub missiles with a specified density."
                ],
                [
                    "31",
                    {
                        "id": "HitIceBreak",
                        "text": "HitIceBreak"
                    },
                    "",
                    "Create a missile with a forced animation rate value of 1, depending on the missile class used.<br>\u00b7 If \"Missile\" equals \"icebreaksmall\" then create \"icebreaksmallmelt\"<br>\u00b7 If \"Missile\" equals \"icebreakmedium\" then create \"icebreaklargemelt\"<br>\u00b7 If \"Missile\" equals \"icebreaklarge\" then create \"icebreaklargemelt\"<br>\u00b7 If \"Missile\" equals \"catapult cold explosion\" then create \"icebreaklargemelt\""
                ],
                [
                    "32",
                    {
                        "id": "clt-HitFirehead",
                        "text": "HitFirehead (Client)"
                    },
                    "$!#cHitPar1!$<br>$!#cHitPar2!$<br>$!#CltHitSubMissile1!$<br>$!#CltHitSubMissile2!$<br>$!#ProgOverlay!$",
                    "Create the $!#CltHitSubMissile1!$ sub missile at the target location and create a ring of $!#CltHitSubMissile2!$ sub missiles where the parameters control the ring radius and density. Also add an overlay on the source unit."
                ],
                [
                    "33",
                    {
                        "id": "HitFlyingRocks",
                        "text": "HitFlyingRocks"
                    },
                    "$!#cHitPar1!$<br>$!#CltHitSubMissile1!$",
                    "Create a random number of sub missiles in a defined area radius controlled by $!#cHitPar1!$"
                ],
                [
                    "34",
                    {
                        "id": "HitSmithDoNotDraw",
                        "text": "HitSmithDoNotDraw"
                    },
                    "",
                    "Make the source unit invisibile"
                ],
                [
                    "35",
                    "",
                    "",
                    "Do nothing"
                ],
                [
                    "36",
                    {
                        "id": "HitHellMeteor",
                        "text": "HitHellMeteor"
                    },
                    "$!#Param1!$",
                    "Do nothing is colliding with a wall. Otherwise, create a disc of randomly selected missiles. The random missiles chosen are either \"firewall\", \"firesmall\", or \"firemedium\". The missile's $!#Param1!$ field controls the disc radius. The duration of each missile created is calculated with the following: Range = 25 + RANDOM(0, 25) - 12"
                ],
                [
                    "37",
                    {
                        "id": "HitRadHandOfGod",
                        "text": "HitRadHandOfGod"
                    },
                    "",
                    "Create a random number of \"radamentholybolt\" missiles in random positions in a radius"
                ],
                [
                    "38",
                    {
                        "id": "HitTaintedSunFlash",
                        "text": "HitTaintedSunFlash"
                    },
                    "",
                    "Create a \"taintedsunball\" missile"
                ],
                [
                    "39",
                    {
                        "id": "HitQueenDeathGlob",
                        "text": "HitQueenDeathGlob"
                    },
                    "",
                    "Randomly create 1 of the next 2 missile's defined in the $!Missiles!$ file after the missile that uses this function. For example, if \"Missile\" equals \"queendeathglob\" (ID = 354) and it uses this function, then randomly choose to create \"queendeathsplat1\" (ID = 355) or \"queendeathsplat2\" (ID = 356)."
                ],
                [
                    "40",
                    {
                        "id": "HitHealingBolt",
                        "text": "HitHealingBolt"
                    },
                    "",
                    "Determine that the target is an allied unit"
                ],
                [
                    "41",
                    {
                        "id": "HitDurielDeathRock",
                        "text": "HitDurielDeathRock"
                    },
                    "",
                    "Create 3 \"durieldeathdebris\" missiles randomly in a radius value of 6. Create a \"durieldeathsmoke\" missile at the previous missile's location."
                ],
                [
                    "42",
                    {
                        "id": "HitSoulStoneFragment1",
                        "text": "HitSoulStoneFragment1"
                    },
                    "",
                    "Create a \"hffragment2\" missile on the target unit"
                ],
                [
                    "43",
                    {
                        "id": "HitSoulStoneFragment2",
                        "text": "HitSoulStoneFragment2"
                    },
                    "",
                    "Create a \"hffragment3\" missile on the target unit, with 0 velocity, and a random delay between 10 to 45 frames."
                ],
                [
                    "44",
                    {
                        "id": "clt-HitCreateNextMissile",
                        "text": "HitCreateNextMissile (Client)"
                    },
                    "$!#CltHitSubMissile1!$",
                    "Create a sub missile and set its direction to match the old missile's path"
                ],
                [
                    "45",
                    "",
                    "",
                    "Do nothing"
                ],
                [
                    "46",
                    {
                        "id": "clt-HitCatapultChargedBall",
                        "text": "HitCatapultChargedBall (Client)"
                    },
                    "$!#cHitPar1!$<br>$!#cHitPar2!$<br>$!#HitSubMissile1!$",
                    "Create a disc of sub missiles where the number of missiles created is controlled by the following formula: [$!#cHitPar1!$] + [$!#cHitPar2!$] * ([Missile current level] - 1)"
                ],
                [
                    "47",
                    {
                        "id": "clt-HitCatapultSpikeBag",
                        "text": "HitCatapultSpikeBag (Client)"
                    },
                    "$!#cHitPar1!$<br>$!#cHitPar2!$<br>$!#CltHitSubMissile1!$<br>$!#CltHitSubMissile2!$",
                    "Create $!#CltHitSubMissile1!$ sub missiles using the lob function where $!#cHitPar1!$ and $!#cHitPar2!$ are used to calculate the number of missiles in the following formula: MissileCount = [$!#cHitPar1!$] + [$!#cHitPar2!$] * ([Missile current level] - 1). The radius is this missile lob function is determined by doing MissileCount / 4.<br><br>Also create $!#CltHitSubMissile2!$ at the location of the old missile."
                ],
                [
                    "48",
                    {
                        "id": "HitCatapultCold",
                        "text": "HitCatapultCold"
                    },
                    "",
                    "Create a \"freezingarrowexp1\" (ID = 88) missile in the center of the previous missile location. Also create 8 different \"freezingarrowexp2\" (ID = 89) missiles ejected in 8 different directions. Also create 8 different \"catapult cold explosion\" (ID = 417) missiles that have a randomized range and velocity and use the lob function to launch these missiles which an initial Z offset equal to 30."
                ],
                [
                    "49",
                    "",
                    "",
                    "Do nothing"
                ],
                [
                    "50",
                    {
                        "id": "HitCatapultMeteor",
                        "text": "HitCatapultMeteor"
                    },
                    "$!#cHitPar1!$<br>$!#cHitPar2!$<br>$!#CltHitSubMissile1!$<br>$!#CltHitSubMissile2!$",
                    "Run the spray rock function to spawn different missiles. First create multiple \"moltenboulder-flyingrocks\" (ID = 456) missiles where the $!#cHitPar1!$ field controls the number of missiles to spawn and the targeted radius distance to spawn these missiles is equal to this value multiplied by 2. The $!#cHitPar2!$ field controls these missiles' velocity. The $!#CltHitSubMissile1!$ sub missile is never spawned, but these \"moltenboulder-flyingrocks\" will not spawn unless this field has a value. Next create a ring of 18 $!#CltHitSubMissile2!$ sub missiles."
                ],
                [
                    "51",
                    {
                        "id": "clt-HitLightJav",
                        "text": "HitLightJav (Client)"
                    },
                    "$!#cHitPar1!$<br>$!#cHitPar2!$<br>$!#CltHitSubMissile1!$",
                    "Create a disc of the sub missiles where $!#cHitPar1!$ controls the number of sub missiles to spawn and $!#cHitPar2!$ acts as a Boolean Field where if enabled, it will cause these spawned sub missiles to have a randomized path."
                ],
                [
                    "52",
                    {
                        "id": "HitMoltenBoulder",
                        "text": "HitMoltenBoulder"
                    },
                    "$!#cHitPar1!$<br>$!#cHitPar2!$<br>$!#cHitPar3!$<br>$!#CltHitSubMissile1!$",
                    "If hitting the target or a monster with the $!monstats2#large!$ flag enabled, then create $!#CltHitSubMissile1!$ sub missile. Also run the spray rock function to spawn different missiles. First create multiple \"moltenboulder-flyingrocks\" (ID = 456) missiles where the $!#cHitPar1!$ field controls the number of missiles to spawn and the targeted radius distance to spawn these missiles is equal to this value multiplied by 2. The $!#cHitPar2!$ field controls these missiles' velocity. The $!#CltHitSubMissile2!$ sub missile is never spawned, but these \"moltenboulder-flyingrocks\" will not spawn unless this field has a value. Next create a ring of 18 $!#CltHitSubMissile3!$ sub missiles."
                ],
                [
                    "53",
                    {
                        "id": "clt-CreateRollingBoulder",
                        "text": "CreateRollingBoulder (Client)"
                    },
                    "$!#cHitPar1!$<br>$!#cHitPar2!$<br>$!#cHitPar3!$<br>$!#CltHitSubMissile1!$",
                    "Create the sub missile that bounces, where $!#cHitPar1!$ controls the number of bounces, $!#cHitPar2!$ controls the bounce dampening percentage, and $!#cHitPar3!$ controls the number of steps, or the lifetime remaining in ticks (Minimum value equal to 1)."
                ],
                [
                    "54",
                    {
                        "id": "HitVineTrail",
                        "text": "HitVineTrail"
                    },
                    "$!#CltHitSubMissile1!$",
                    "Create the sub missile and force it to get the same direction as the previous missile"
                ],
                [
                    "55",
                    {
                        "id": "clt-HitDebris",
                        "text": "HitDebris (Client)"
                    },
                    "$!#CltHitSubMissile1!$<br>$!#CltHitSubMissile2!$<br>$!#CltHitSubMissile3!$",
                    "Create all 3 sub missiles at the source unit location"
                ],
                [
                    "56",
                    {
                        "id": "HitRecycleVine",
                        "text": "HitRecycleVine"
                    },
                    "$!#CltHitSubMissile1!$",
                    "Create the sub missile at the source unit location and force it to get the same direction as the previous missile"
                ],
                [
                    "57",
                    {
                        "id": "HitBaalSpawn",
                        "text": "HitBaalSpawn"
                    },
                    "$!#cHitPar1!$<br>$!#cHitPar2!$<br>$!#CltHitSubMissile1!$",
                    "Create a disc ring of sub missiles where the parameters control the radius and density of the ring, respectively"
                ],
                [
                    "58",
                    "",
                    "",
                    "Do nothing"
                ],
                [
                    "59",
                    "",
                    "",
                    "Do nothing"
                ],
                [
                    "60",
                    {
                        "id": "HitNihlathak1",
                        "text": "HitNihlathak1"
                    },
                    "$!#cHitPar1!$<br>$!#CltHitSubMissile1!$<br>$!#CltHitSubMissile2!$",
                    "Create the $!#CltHitSubMissile1!$ sub missile at the location of the previous missile. Create the $!#CltHitSubMissile2!$ sub missile at the same position, but $!#cHitPar1!$ controls the z offset of the sub missile."
                ],
                [
                    "61",
                    {
                        "id": "HitWorldstoneShake",
                        "text": "HitWorldstoneShake"
                    },
                    "",
                    "Stop the camera shake"
                ],
                [
                    "62",
                    {
                        "id": "clt-HitBaalRandomBolts",
                        "text": "HitBaalRandomBolts (Client)"
                    },
                    "$!#cHitPar1!$<br>$!#CltHitSubMissile1!$",
                    "Create the sub missile where the range is randomized by the parameter (minimum value equals 1) and the target location is also randomized by this range value"
                ],
                [
                    "63",
                    {
                        "id": "clt-HitBaalTauntPoison",
                        "text": "HitBaalTauntPoison (Client)"
                    },
                    "$!#cHitPar1!$<br>$!#CltHitSubMissile1!$<br>$!#Param1!$<br>$!#Param2!$",
                    "Create a disc of sub missiles where $!#cHitPar1!$ controls the ring density (minimum value equals 1). Each sub missile will use its $!#Param1!$ and $!#Param2!$ fields to define their velocities"
                ],
                [
                    "64",
                    {
                        "id": "clt-HitBladeFury",
                        "text": "HitBladeFury (Client)"
                    },
                    "$!#cHitPar1!$<br>$!#CltHitSubMissile1!$",
                    "Create a disc of sub missiles with the parameter controlling the ring density (minimum value equals 1)"
                ],
                [
                    "65",
                    {
                        "id": "HitSetTarget",
                        "text": "HitSetTarget"
                    },
                    "",
                    "Set the hit target as the missile's target"
                ]
            ]
        },
        {
            "name": "pSrvDoFunc",
            "description": "Uses an ID value to select a specialized function for the missile's behavior while active every frame on the server side",
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
                        "id": "MissileDoArrow",
                        "text": "MissileDoArrow"
                    },
                    "",
                    "Perform the standard missile move function. This is called in most of the other functions"
                ],
                [
                    "2",
                    {
                        "id": "MissileDoPoisonJavelin",
                        "text": "MissileDoPoisonJavelin"
                    },
                    "$!#SrvCalc1!$<br>$!#SubMissile1!$",
                    "Create a sub missile with a specified number of subloops"
                ],
                [
                    "3",
                    {
                        "id": "StillMissileKludge",
                        "text": "StillMissileKludge"
                    },
                    "",
                    "Check the missile velocity to determine whether or not to set the collision mask to Missile"
                ],
                [
                    "4",
                    {
                        "id": "MissileAttachAndHit",
                        "text": "MissileAttachAndHit"
                    },
                    "$!#Param1!$<br>$!#Param2!$<br>$!#InitSteps!$",
                    "Moves the missile to the target. If $!#Param1!$ is greater than 0, then the missile is killed when the target becomes unavailable or dies. Periodically calls the hit function. $!#InitSteps!$ controls the hit period. If $!#Param2!$ is set, call the hit function along the length of a missile's link."
                ],
                [
                    "5",
                    {
                        "id": "srv-Firewall",
                        "text": "Firewall (Server)"
                    },
                    "$!#SubStart!$<br>$!#SubStop!$",
                    "Create an animation sequence for the missile, set the collision mask to Missile"
                ],
                [
                    "6",
                    {
                        "id": "MissileMakeFirewall",
                        "text": "MissileMakeFirewall"
                    },
                    "$!#SubMissile1!$",
                    "Create sub missiles based on the count that was passed to this missile"
                ],
                [
                    "7",
                    {
                        "id": "MissileGuidedArrow",
                        "text": "MissileGuidedArrow"
                    },
                    "$!#Param1!$",
                    "Use the parameter to control the retarget time on the unit"
                ],
                [
                    "8",
                    {
                        "id": "MissileMonBliz",
                        "text": "MissileMonBliz"
                    },
                    "$!#Param1!$<br>$!#Param2!$<br>$!#Param3!$<br>$!#SubMissile1!$",
                    "Create multiple sub missiles, using the parameters as the spawn radius, spawn frequency, and level divisor"
                ],
                [
                    "9",
                    {
                        "id": "MissileMakeBatLightning",
                        "text": "MissileMakeBatLightning"
                    },
                    "$!#SubMissile1!$",
                    "Create a sub missile based on the missile's path moved"
                ],
                [
                    "10",
                    {
                        "id": "MissileBlizzard",
                        "text": "MissileBlizzard"
                    },
                    "$!#SubMissile1!$",
                    "Create multiple sub missiles, use the linked skill's $!skills#calc1!$ field for the radius, and the $!skills#calc2!$ field for the sub missile spawn frequency"
                ],
                [
                    "11",
                    {
                        "id": "srv-FingerMageSpider",
                        "text": "FingerMageSpider (Server)"
                    },
                    "$!#Param1!$<br>$!#Param2!$<br>$!#Param3!$",
                    "Shoot a missile that can be retargeted. Uses the parameters to control the periodic delay between retargeting, the maximum distance to retarget, and the distance delta for where to retarget."
                ],
                [
                    "12",
                    {
                        "id": "MissileDiabWallMaker",
                        "text": "MissileDiabWallMaker"
                    },
                    "$!#SubMissile1!$",
                    "Shoot a missile and have that missile create sub missiles as it is moving"
                ],
                [
                    "13",
                    {
                        "id": "MissileBoneWallMaker",
                        "text": "MissileBoneWallMaker"
                    },
                    "",
                    "Shoot a missile and have that missile create pet summons as it is moving, using the linked skill's $!skills#pettype!$ field"
                ],
                [
                    "14",
                    {
                        "id": "MissileDoGrimWard",
                        "text": "MissileDoGrimWard"
                    },
                    "$!#Param1!$<br>$!#Param2!$",
                    "Shoot a missile where every periodic delay, do a function from the linked $!skills#srvdofunc!$ field. $!#Param1!$ controls the periodic frame delay, and $!#Param2!$ controls which function code number to use."
                ],
                [
                    "15",
                    {
                        "id": "MissileFrozenOrb",
                        "text": "MissileFrozenOrb"
                    },
                    "$!#Param1!$<br>$!#Param2!$<br>$!#SubMissile1!$",
                    "Shoot a missile and have that missile shoot sub missiles in different directions as it is moving. $!#Param1!$ controls the sub missile spawn rate and $!#Param2!$ controls the change in direction per sub missile spawn."
                ],
                [
                    "16",
                    {
                        "id": "MissileFrozenOrbNova",
                        "text": "MissileFrozenOrbNova"
                    },
                    "$!#Param1!$<br>$!#Param2!$",
                    "Shoot a missile in a set direction. $!#Param1!$ controls the delay until the missile moves and $!#Param2!$ controls the periodic frame delay for updating the missile's target path"
                ],
                [
                    "17",
                    {
                        "id": "MissileDoCairnStones",
                        "text": "MissileDoCairnStones"
                    },
                    "$!#Param1!$<br>$!#Param2!$<br>$!#Param3!$<br>$!#Param4!$<br>$!#Param5!$<br>$!#SubMissile1!$",
                    "Shoot sub missiles in a radius and then after a delay, create a portal to another level. Uses parameters to control the delays between creating sub missiles, the radius to create the sub missiles, which level ID to link the portal to, and the delay before creating the portal."
                ],
                [
                    "18",
                    {
                        "id": "DoTowerChestSpawner",
                        "text": "DoTowerChestSpawner"
                    },
                    "$!#Param1!$<br>$!#Param2!$<br>$!#Param3!$",
                    "Open the chest object to spawn items, and create random gold piles in an area"
                ],
                [
                    "19",
                    {
                        "id": "DoRadamentDeath",
                        "text": "DoRadamentDeath"
                    },
                    "",
                    "Use the Paladin Redemption skill function on nearby corpses in an area"
                ],
                [
                    "20",
                    {
                        "id": "MissileAttachUntilDead",
                        "text": "MissileAttachUntilDead"
                    },
                    "",
                    "Shoot the missile and keep it attached to the source until. If the source unit dies, then kill the missile."
                ],
                [
                    "21",
                    {
                        "id": "MissileDoDistraction",
                        "text": "MissileDoDistraction"
                    },
                    "$!#SubMissile1!$",
                    "Create a sub missile and run the MissileAttachUntilDead function"
                ],
                [
                    "22",
                    {
                        "id": "srv-ProcessTrailJav",
                        "text": "ProcessTrailJav (Server)"
                    },
                    "$!#Param1!$<br>$!#SubMissile1!$",
                    "Shoot the missile and have it create 2 sub missiles every frame while it is moving"
                ],
                [
                    "23",
                    {
                        "id": "srv-ProcessSucFireBall",
                        "text": "ProcessSucFireBall (Server)"
                    },
                    "$!#Param1!$<br>$!#SubMissile1!$",
                    "Create a sub missile every frame while the missile is moving, where the parameter controls the sub missile's subloops"
                ],
                [
                    "24",
                    "",
                    "$!#Param1!$<br>$!#SubMissile1!$",
                    "Duplicate of function 23"
                ],
                [
                    "25",
                    {
                        "id": "MissileEruption",
                        "text": "MissileEruption"
                    },
                    "$!#SubMissile1!$",
                    "Shoot the missile and have it create sub missiles in a radius at a periodic rate, which is controlled by the link skill's $!skills#calc1!$ and $!skills#calc2!$ fields."
                ],
                [
                    "26",
                    {
                        "id": "srv-ProcessVines",
                        "text": "ProcessVines (Server)"
                    },
                    "$!#Param1!$<br>$!#SubMissile1!$",
                    "Shoot the missile and have it create sub missiles at a periodic rate, which is controlled by the parameter"
                ],
                [
                    "27",
                    {
                        "id": "MissileTornado",
                        "text": "MissileTornado"
                    },
                    "$!#Param1!$<br>$!#Param2!$",
                    "Shoot the missile and have it deal damage at a periodic rate in a radius, which is controlled by the parameters or by the linked skill's $!skills#calc4!$ and $!skills#aurarangecalc!$ fields"
                ],
                [
                    "28",
                    {
                        "id": "srv-ProcessVolcano",
                        "text": "ProcessVolcano (Server)"
                    },
                    "$!#Param1!$<br>$!#Param2!$<br>$!#Param3!$<br>$!#Param4!$<br>$!#Param5!$<br>$!#SubMissile1!$",
                    "Shoot the missile and have it periodically create sub missiles in a lobbing pattern. Use parameters to control the periodic frame delay for spawning sub missiles, the radius to spawn the sub missiles, the start and stop frame count for when to spawn and stop spawning sub missiles, and the lob start value for the sub missiles"
                ],
                [
                    "29",
                    {
                        "id": "srv-ProcessRecycleDelay",
                        "text": "ProcessRecycleDelay (Server)"
                    },
                    "$!#Param1!$",
                    "Shoot the missile and after a certain delay, process any life steal or mana steal, based on the linked skill's $!skills#calc1!$ and $!skills#calc2!$ fields"
                ],
                [
                    "30",
                    {
                        "id": "MissileRabiesPlague",
                        "text": "MissileRabiesPlague"
                    },
                    "$!#Param1!$<br>$!#Param2!$<br>$!#SubMissile1!$",
                    "Shoot the missile, have it attached to the source unit, and have it periodically spawn sub missiles in a radius"
                ],
                [
                    "31",
                    {
                        "id": "srv-ProcessMakePerpMissiles",
                        "text": "ProcessMakePerpMissiles (Server)"
                    },
                    "$!#SubMissile1!$",
                    "Shoot the missile and have it create 2 sub missiles that are fired in perpendicular directions"
                ],
                [
                    "32",
                    {
                        "id": "MissileTigerFuryPath",
                        "text": "MissileTigerFuryPath"
                    },
                    "$!#SubMissile1!$",
                    "Shoot the missile using the $!#MissileGuidedArrow!$ function and have it create a sub missile"
                ],
                [
                    "33",
                    {
                        "id": "ProcessRecycleManaDelay",
                        "text": "ProcessRecycleManaDelay"
                    },
                    "$!#Param1!$<br>$!#Param2!$<br>$!#SubMissile1!$",
                    "Shoot the missile and after a certain delay, process any mana steal, based on the linked skill's $!skills#calc1!$ field, and create a sub missile after another certain delay"
                ],
                [
                    "34",
                    {
                        "id": "srv-ProcessBaalTaunt",
                        "text": "ProcessBaalTaunt (Server)"
                    },
                    "$!#Param1!$<br>$!#Param2!$<br>$!#Param3!$<br>$!#Param4!$<br>$!#SubMissile1!$<br>$!#SubMissile2!$",
                    "Randomly choose one of the 4 parameters to select a delay and randomly spawn one of the sub missiles"
                ],
                [
                    "35",
                    {
                        "id": "MissileDoChaosIce",
                        "text": "MissileDoChaosIce"
                    },
                    "$!#Param1!$",
                    "Shoot the missile and have it repath in a perpendicular direction after a periodic delay"
                ],
                [
                    "36",
                    {
                        "id": "MissileDoBaalDeathControl",
                        "text": "MissileDoBaalDeathControl"
                    },
                    "",
                    "Shoot the missile and spawn the Tyrael unit"
                ],
                [
                    "37",
                    {
                        "id": "srv-ProcessMissileDelayed",
                        "text": "ProcessMissileDelayed (Server)"
                    },
                    "$!#SubMissile1!$<br>$!#SubMissile2!$<br>$!#SubMissile3!$",
                    "Shoot the missile and have it create 1 of each sub missile"
                ],
                [
                    "38",
                    {
                        "id": "MissileMakeWaveTrail",
                        "text": "MissileMakeWaveTrail"
                    },
                    "$!#SubMissile1!$<br>$!#Param1!$<br>$!#Param2!$",
                    "Create $!#SubMissile1!$ as a trailing missile. Optionally leaves $!#SubMissile1!$ as a linger missile, falling back on the trailing missile. $!#Param2!$ controls duration of linger missile compared to the range value."
                ],
                [
                    "39",
                    {
                        "id": "MissileDoAbyss",
                        "text": "MissileDoAbyss"
                    },
                    "$!#Param1!$<br>$!#Radius!$<br>$!#ResultFlags!$<br>$!#HitFlags!$",
                    "Applies the missile's damage on all unit within $!#Radius!$ range. Use the $!#ResultFlags!$ and $!#HitFlags!$. Disable the \"pull\" result flag after the first tick. Center the pull on this missile."
                ],
                [
                    "40",
                    {
                        "id": "MissileRadialMaker",
                        "text": "MissileRadialMaker"
                    },
                    "$!#SubMissile1!$",
                    "Spawns $!#SubMissile1!$ at the target's location, only once."
                ],
                [
                    "41",
                    {
                        "id": "MissileDot",
                        "text": "MissileDot"
                    },
                    "$!#Param1!$<br>$!#InitSteps!$<br>$!#Radius!$",
                    "Periadically apply damage from the missile. If $!#Param1!$ is greater than 0, then the missile damage is done on the link, otherwise around its $!#Radius!$. $!#InitSteps!$ controls the hit period."
                ],
                [
                    "42",
                    {
                        "id": "MissileMakeWaveWall",
                        "text": "MissileMakeWaveWall"
                    },
                    "$!#SubMissile1!$<br>$!#Param1!$<br>$!#Param2!$",
                    "Create a series of $!#SubMissile1!$ as a wave wall. $!#Param1!$ controls the delay between each wall missile's creation. $!#Param2!$ controls how many missiles to add on each side of the wall. Sets velocity to 1. Must be used with $!skills#srv-WarDoFlameWave!$ so all parameters are set properly. Also uses $!#SubMissile1!$ as the trail missile and sets some information on each created wall missile used by $!#MissileMakeWaveTrail!$. The wave wall missile's $!#Param1!$ controls duration of tail offset."
                ],
                [
                    "43",
                    {
                        "id": "MissileLinkSpawner",
                        "text": "MissileLinkSpawner"
                    },
                    "$!#SubMissile1!$<br>$!#SrvCalc1!$<br>$!#CltCalc1!$<br>$!#Param1!$<br>$!#Param2!$<br>$!#Param3!$<br>$!#Param4!$<br>$!#Param5!$<br>",
                    "Spawns $!#SubMissile1!$ and attaches a link between the missile and an anchor.<br>$!#SrvCalc1!$ controls the length of the link.<br>$!#Param1!$ is the anchor type: 0->Source, 1->HitTarget, 2->CurrentEnemy, 3->SourceEnemy, 4->Attacker, 5->ClosestEnemy, 6->ClosestEnemyFromTarget, 7->ClosestEnemyFromSource.<br>If $!#Param2!$ is greater than 0, then the link is created as a position on the ground (not attached to a unit).<br>If $!#Param3!$ is greater than 0, then the link is cut when the anchor unit dies.<br>If $!#Param4!$ is greater than 0, then the missile will move and end at the target.<br>If $!#Param5!$ is greater than 0, then the link is cut when the anchor teleports.<br>$!#CltCalc1!$ is the limit of active missiles at any one time (if zero, then no limit).<br>Propagate any channeling duty from $!skills#srv-SkillStartPlayerChannelSkill!$ to the created missile."
                ],
                [
                    "44",
                    {
                        "id": "MissileDoSoaringStrike",
                        "text": "MissileDoSoaringStrike"
                    },
                    "",
                    "Updates missile for a boomering effect: when the missile is on the \"return trip\" of the boomerang, adjust its path to go towards its source."
                ],
                [
                    "45",
                    {
                        "id": "MissileDoMiasmaChains",
                        "text": "MissileDoMiasmaChains"
                    },
                    "$!#Param2!$<br>$!#Param3!$<br>$!#Range!$<br>$!#Radius!$<br>$!#InitSteps!$",
                    "Move the missile until it has a collision or exceeds its duration. Once it does, try to attach to a target in its originally calculated $!#Radius!$. Otherwise, attach to the floor, only allowing valid end locations if $!#Param3!$ is 1. Extend the missile's duration back to its originally calculated $!#Range!$. Afterwards, execute $!#pSrvHitFunc!$ on its target every $!#InitSteps!$ frames. If $!#Param2!$ is 1, also execute $!#pSrvHitFunc!$ on all targets between it and the missile's anchor."
                ]
            ]
        },
        {
            "name": "pSrvHitFunc",
            "description": "Uses an ID value to select a specialized function for the missile's behavior when hitting something on the server side",
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
                        "id": "RadialFireDamage",
                        "text": "RadialFireDamage"
                    },
                    "$!#sHitPar1!$",
                    "Deal elemental damage in an area where the $!#sHitPar1!$ controls the damage radius. If the parameter is <= 0, use the skill's $!skills#calc1!$ field as the radius."
                ],
                [
                    "2",
                    {
                        "id": "srv-HitPlagueJavelin",
                        "text": "HitPlagueJavelin (Server)"
                    },
                    "$!#sHitPar1!$<br>$!#sHitPar2!$<br>$!#HitSubMissile1!$",
                    "Kill the missile while dealing its damage, and also deal radial poison damage in an area by creating sub missiles in a defined radius for a specified number of loops"
                ],
                [
                    "3",
                    {
                        "id": "NoTargetRadialDamage",
                        "text": "NoTargetRadialDamage"
                    },
                    "$!#sHitPar1!$",
                    "Deal the missile damage in a defined area radius"
                ],
                [
                    "4",
                    {
                        "id": "HitCreateMissile",
                        "text": "HitCreateMissile"
                    },
                    "$!#sHitPar1!$<br>$!#HitSubMissile1!$<br>$!#HitSubMissile2!$<br>$!#HitSubMissile3!$<br>$!#HitSubMissile4!$",
                    "Determine whether to kill this missile on hit or not, and then create 1 of each hit sub missile"
                ],
                [
                    "5",
                    {
                        "id": "srv-HitDoNova",
                        "text": "HitDoNova (Server)"
                    },
                    "$!#sHitPar1!$<br>$!#HitSubMissile1!$",
                    "Create a certain number of sub missiles and shoot them outwards in an equalized distance from the location of this missile"
                ],
                [
                    "6",
                    {
                        "id": "HitSummon",
                        "text": "HitSummon"
                    },
                    "$!#sHitPar1!$<br>$!#sHitPar2!$",
                    "Create a monster in a specific starting mode at the missile's location. The $!#sHitPar1!$ field controls the monster ID to use, and the $!#sHitPar2!$ field controls which mode to set on the monster."
                ],
                [
                    "7",
                    {
                        "id": "srv-HitHolyBolt",
                        "text": "HitHolyBolt (Server)"
                    },
                    "$!#sHitPar1!$<br>$!#sHitPar2!$<br>$!#sHitPar3!$<br>$!#dParam1!$",
                    "Determine whether to impact allies, how that damage is modified by the $!#dParam1!$ field based on the unit type hit, and if the missile should be killed on hitting an allowed unit"
                ],
                [
                    "8",
                    {
                        "id": "HitBlaze",
                        "text": "HitBlaze"
                    },
                    "",
                    "The missile will deal damage if the source unit has the \"blaze\" state"
                ],
                [
                    "9",
                    {
                        "id": "srv-HitImmolationArrow",
                        "text": "HitImmolationArrow (Server)"
                    },
                    "$!#sHitPar1!$<br>$!#sHitCalc1!$<br>$!#HitSubMissile1!$",
                    "Deal radius damage and create sub missiles with specified range values in a defined radius. If there is a freeze length or cold length from the elemental damage, then set it to 0."
                ],
                [
                    "10",
                    {
                        "id": "srv-HitGuidedArrow",
                        "text": "HitGuidedArrow (Server)"
                    },
                    "",
                    "Control if the missile should be redirected on a target when possible, or if it should be destroyed"
                ],
                [
                    "11",
                    {
                        "id": "HitCreateMissileNoDmg",
                        "text": "HitCreateMissileNoDmg"
                    },
                    "$!#sHitPar1!$<br>$!#HitSubMissile1!$<br>$!#HitSubMissile2!$<br>$!#HitSubMissile3!$<br>$!#HitSubMissile4!$",
                    "Kill this missile on hit and create 1 of each hit sub missile"
                ],
                [
                    "12",
                    {
                        "id": "srv-HitChainLightning",
                        "text": "HitChainLightning (Server)"
                    },
                    "$!#sHitPar1!$",
                    "Create duplicate of this missile if there is a valid unit in range and there are still enough chain hits"
                ],
                [
                    "13",
                    {
                        "id": "HitGlacialSpike",
                        "text": "HitGlacialSpike"
                    },
                    "$!#sHitPar1!$<br>$!#sHitPar2!$",
                    "Deal elemental damage in a specified radius with a specified elemental duration, if applicable"
                ],
                [
                    "14",
                    {
                        "id": "srv-HitMeteorCenter",
                        "text": "HitMeteorCenter (Server)"
                    },
                    "$!#sHitPar1!$<br>$!#sHitPar2!$<br>$!#HitSubMissile1!$",
                    "Deal damage in a specified radius and create a ring of hit sub missiles (controlled by a count) and define the duration of these sub missiles based on the linked skill's $!#Param3!$ and $!#Param4!$ values"
                ],
                [
                    "15",
                    {
                        "id": "HitSpiderLay",
                        "text": "HitSpiderLay"
                    },
                    "$!#HitSubMissile1!$",
                    "Kill the missile and create a sub missile at the location"
                ],
                [
                    "16",
                    {
                        "id": "HitSpiderGoo",
                        "text": "HitSpiderGoo"
                    },
                    "",
                    "Apply the state from the linked skill's $!skills#auratargetstate!$ field with a duration defined by the linked skill's $!skills#calc4!$ field"
                ],
                [
                    "17",
                    {
                        "id": "HitHowl",
                        "text": "HitHowl"
                    },
                    "",
                    "Use the linked skill's $!skills#auratargetstate!$, $!skills#calc2!$, $!skills#calc3!$, and $!skills#Param2!$ fields to apply a state (with a defined level and duration) to units in a defined radius. Also call the AIScare function."
                ],
                [
                    "18",
                    {
                        "id": "HitShout",
                        "text": "HitShout"
                    },
                    "",
                    "Kill the missile and call the AddShout function on hit allied units, which applies the $!skills#aurastate!$ state defined in the linked skill"
                ],
                [
                    "19",
                    {
                        "id": "HitFingerMageSpiderHit",
                        "text": "HitFingerMageSpiderHit"
                    },
                    "",
                    "Kill the missile and apply the $!skills#auratargetstate!$ defined in the linked skill"
                ],
                [
                    "20",
                    {
                        "id": "srv-HitLightningFury",
                        "text": "HitLightningFury (Server)"
                    },
                    "$!#sHitPar1!$<br>$!#sHitPar2!$<br>$!#HitSubMissile1!$",
                    "Kill the missile and create a specified number of sub missiles in a radius, per unit targeted in that radius"
                ],
                [
                    "21",
                    {
                        "id": "HitBattleCry",
                        "text": "HitBattleCry"
                    },
                    "",
                    "Kill the missile and apply the $!skills#auratargetstate!$ state on the target unit, defined in the linked skill "
                ],
                [
                    "22",
                    {
                        "id": "srv-HitFistOfHeavensDelay",
                        "text": "HitFistOfHeavensDelay (Server)"
                    },
                    "$!#sHitPar1!$<br>$!#sHitPar2!$<br>$!#HitSubMissile1!$",
                    "Kill the missile and create a specified number of sub missiles in a defined radius, per filtered unit targeted in that radius"
                ],
                [
                    "23",
                    {
                        "id": "HitMissileSkill",
                        "text": "HitMissileSkill"
                    },
                    "$!#sHitPar1!$",
                    "Kill the missile and do a function from the $!skills#srvdofunc!$ field in the $!skills!$ file, where the $!#sHitPar1!$ field controls the function ID to use"
                ],
                [
                    "24",
                    {
                        "id": "RadialMissileDamage",
                        "text": "RadialMissileDamage"
                    },
                    "$!#sHitPar1!$",
                    "Kill the missile and damage in an area controlled by a defined radius"
                ],
                [
                    "25",
                    {
                        "id": "srv-HitMonsterRancidGasPotion",
                        "text": "HitMonsterRancidGasPotion (Server)"
                    },
                    "$!#sHitPar1!$<br>$!#HitSubMissile1!$",
                    "Kill the missile and deal radial poison damage in an area by creating sub missiles in a defined radius for a specified number of loops"
                ],
                [
                    "26",
                    {
                        "id": "HitGrimWardStart",
                        "text": "HitGrimWardStart"
                    },
                    "$!#sHitPar1!$<br>$!#HitSubMissile1!$",
                    "Kill the missile and create a sub missile with a specified duration"
                ],
                [
                    "27",
                    {
                        "id": "HitKillMissile",
                        "text": "HitKillMissile"
                    },
                    "",
                    "Kill the missile"
                ],
                [
                    "28",
                    {
                        "id": "HitGrimWardScare",
                        "text": "HitGrimWardScare"
                    },
                    "",
                    "Kill the missile and apply the AiScare function to all monsters in a radius controlled by the $!skills#calc2!$ field from the linked skill with a distance and duration value controlled by the $!skills#Param5!$ and $!skills#Param6!$ values from the linked skill."
                ],
                [
                    "29",
                    {
                        "id": "srv-HitFrozenOrb",
                        "text": "HitFrozenOrb (Server)"
                    },
                    "$!#sHitPar1!$<br>$!#HitSubMissile1!$",
                    "Kill the missile and create specified number sub missiles in a circular outwards direction from that location"
                ],
                [
                    "30",
                    {
                        "id": "RadialStunDamage",
                        "text": "RadialStunDamage"
                    },
                    "$!#sHitPar1!$<br>$!#sHitPar2!$",
                    "Kill the missile and do stun damage in a defined radius with a defined stun length"
                ],
                [
                    "31",
                    {
                        "id": "srv-HitFirehead",
                        "text": "HitFirehead (Server)"
                    },
                    "",
                    "Kill the missile and deal elemental damage directly to the target unit's life, ignoring resistances"
                ],
                [
                    "32",
                    {
                        "id": "MissileHitCairnStones",
                        "text": "MissileHitCairnStones"
                    },
                    "$!#Param4!$",
                    "Create a portal linked to a specified level area ID"
                ],
                [
                    "33",
                    {
                        "id": "HitTowerChest",
                        "text": "HitTowerChest"
                    },
                    "",
                    "Set the dungeon room to untile"
                ],
                [
                    "34",
                    {
                        "id": "srv-HitSoaringStrike",
                        "text": "HitSoaringStrike (Server)"
                    },
                    "",
                    "Adjusts the missile for a boomerang effect. If the missile is \"going out\" it always pierces. Start the \"return trip\" back to the source if it reaches its lifetime or hits a wall. Cap the return trip path at 50 squares. If on the return trip, kill the missile if it reaches its lifetime or hits a wall. Reset next hit delays when starting the return trip by assigning a new cast id."
                ],
                [
                    "35",
                    {
                        "id": "OrbMistHit",
                        "text": "OrbMistHit"
                    },
                    "",
                    "Kill the missile. Set the missile's tracked object's dungeon room to untile and set that object's mode from Neutral to Operating."
                ],
                [
                    "36",
                    {
                        "id": "srv-HitCreateNextMissile",
                        "text": "HitCreateNextMissile (Server)"
                    },
                    "$!#HitSubMissile1!$",
                    "Kill the missile and create a sub missile with parameters copied over"
                ],
                [
                    "37",
                    {
                        "id": "HitBladeCreeper",
                        "text": "HitBladeCreeper"
                    },
                    "",
                    "If this hits a target unit then deal damage"
                ],
                [
                    "38",
                    {
                        "id": "srv-HitCatapultChargedBall",
                        "text": "HitCatapultChargedBall (Server)"
                    },
                    "$!#sHitPar1!$<br>$!#sHitPar2!$<br>$!#HitSubMissile1!$",
                    "Kill the missile and create a specified number of sub missiles in a ring"
                ],
                [
                    "39",
                    {
                        "id": "HitImpSpawnMonsters",
                        "text": "HitImpSpawnMonsters"
                    },
                    "",
                    "Kill the missile and spawn an appropriate monster, based on the allowed monsters in the area level"
                ],
                [
                    "40",
                    {
                        "id": "srv-HitCatapultSpikeBag",
                        "text": "HitCatapultSpikeBag (Server)"
                    },
                    "$!#sHitPar1!$<br>$!#sHitPar2!$<br>$!#HitSubMissile1!$",
                    "Kill the missile and create a specified number of sub missiles that are lobbed outwards in a radius"
                ],
                [
                    "41",
                    {
                        "id": "HitChainAndSpawn",
                        "text": "HitChainAndSpawn"
                    },
                    "$!#Param1!$<br>$!#HitSubMissile1!$",
                    "On hit, creates $!#HitSubMissile1!$ if it is provided. Then chains to nearby targets (same as $!#srv-HitChainLightning!$). If $!#Param1!$ is set, propogate target information to the created sub-missile."
                ],
                [
                    "42",
                    {
                        "id": "HitBladeDance",
                        "text": "HitBladeDance"
                    },
                    "",
                    "On hit, teleport the source to the hit location (only for normal missiles, does not apply to mirrored missiles). Respects the level's $!Levels#Teleport!$ setting. Then runs $!#RadialDamage!$."
                ],
                [
                    "43",
                    {
                        "id": "HitHealing",
                        "text": "HitHealing"
                    },
                    "",
                    "Use the linked skill's physical damage as the amount of healing done to the target unit. Determine whether to kill the missile or not, based on the $!#CollideKill!$ field"
                ],
                [
                    "44",
                    {
                        "id": "RadialDamage",
                        "text": "RadialDamage"
                    },
                    "$!#sHitPar1!$",
                    "Kill the missile and deal damage in a specified radius"
                ],
                [
                    "45",
                    {
                        "id": "srv-HitLightJav",
                        "text": "HitLightJav (Server)"
                    },
                    "$!#sHitPar1!$<br>$!#sHitPar2!$<br>$!#HitSubMissile1!$",
                    "Kill the missile and create a number of sub missiles in a disc. Determine whether these sub missiles created should use a random path or not."
                ],
                [
                    "46",
                    {
                        "id": "HitAndSplatter",
                        "text": "HitAndSplatter"
                    },
                    "$!#HitSubMissile1!$<br>$!#HitSubMissile2!$<br>$!#SrvCalc1!$<br>$!#Param1!$<br>$!#Param2!$<br>$!#Radius!$",
                    "On hit, creates $!#HitSubMissile1!$. Also, create $!#HitSubMissile2!$ (or $!#HitSubMissile1!$ if not provided) on $!#SrvCalc1!$ amount of enemies in $!#Radius!$. $!#Param1!$ controls if the current missile's target should be passed to the sub-missiles. $!#Param2!$ controls where to spawn the splatter sub-missiles: if 0, then on the target; if greater than 0, then from the hit location and traveling to the target."
                ],
                [
                    "47",
                    {
                        "id": "BoulderExplode",
                        "text": "BoulderExplode"
                    },
                    "$!#sHitPar1!$<br>$!#sHitPar2!$<br>$!#HitSubMissile1!$",
                    "Kill the missile and create an explosion with a defined radius and a ring of sub missiles with a defined count of missiles"
                ],
                [
                    "48",
                    {
                        "id": "srv-CreateRollingBoulder",
                        "text": "CreateRollingBoulder (Server)"
                    },
                    "$!#HitSubMissile1!$",
                    "Kill the missile and create a sub missile"
                ],
                [
                    "49",
                    {
                        "id": "HitSpawnHerald",
                        "text": "HitSpawnHerald"
                    },
                    "$!#SHitCalc1!$<br>$!#sHitPar3!$",
                    "Spawn a herald using one of two methods:<br>1. Queued method. This method is started by the terror zone system. If the missile is still in the region the herald was assigned to, attempt to spawn it. If it fails to spawn, re-queue the herald. Missiles spawned by the herald system have their collision mask set to \"nopath\", deactivate that before spawning.<br>2. Calc method. Use $!#SHitCalc1!$ as the $!monstats!$ index of the herald to spawn. Use $!#sHitPar3!$ as the herald's tier (starts at 1), falling back on the game's current tier if < 0. This method has no protections against failed spawns.<br>Heralds will not spawn if the zone has not been previously terrorized."
                ],
                [
                    "50",
                    {
                        "id": "HitPlagueVines",
                        "text": "HitPlagueVines"
                    },
                    "$!#sHitPar1!$",
                    "If the range of the missile minus the $!#sHitPar1!$ parameter is greater than the missile's current frame, then deal damage"
                ],
                [
                    "51",
                    {
                        "id": "srv-HitDebris",
                        "text": "HitDebris (Server)"
                    },
                    "$!#HitSubMissile1!$<br>$!#HitSubMissile2!$<br>$!#HitSubMissile3!$",
                    "Kill the missile and create the 3 sub missiles, if possible"
                ],
                [
                    "52",
                    {
                        "id": "srv-HitBladeFury",
                        "text": "HitBladeFury (Server)"
                    },
                    "$!#sHitPar1!$<br>$!#HitSubMissile1!$",
                    "Kill the missile and spawn sub missiles in multiple directions depending on the $!#sHitPar1!$ value"
                ],
                [
                    "53",
                    {
                        "id": "HitRabiesContagion",
                        "text": "HitRabiesContagion"
                    },
                    "",
                    "Get the elemental duration from the linked skill and compare that with the duration of the missile to determine to kill the missile or create a new one, depending on the target having the linked skill's $!skills#auratargetstate!$ state"
                ],
                [
                    "54",
                    {
                        "id": "HitBaalSpawnMonsters",
                        "text": "HitBaalSpawnMonsters"
                    },
                    "",
                    "Kill the missile and spawn a monster in Neutral mode"
                ],
                [
                    "55",
                    {
                        "id": "HitBaalInferno",
                        "text": "HitBaalInferno"
                    },
                    "$!#sHitPar1!$",
                    "Drain a percentage of the target's mana (from 0 to 100) and deal damage"
                ],
                [
                    "56",
                    {
                        "id": "HitArmageddon",
                        "text": "HitArmageddon"
                    },
                    "$!#sHitPar1!$<br>$!#HitSubMissile1!$",
                    "Kill the missile, deal damage in an area with a defined radius, and create a sub missile"
                ],
                [
                    "57",
                    {
                        "id": "MissileHitBaalDeathControl",
                        "text": "MissileHitBaalDeathControl"
                    },
                    "",
                    "Create the Tyrael unit"
                ],
                [
                    "58",
                    {
                        "id": "srv-HitBaalRandomBolts",
                        "text": "HitBaalRandomBolts (Server)"
                    },
                    "$!#sHitPar1!$<br>$!#HitSubMissile1!$",
                    "Kill the missile and create a sub missile targeting a random randomized location range controlled by $!#sHitPar1!$"
                ],
                [
                    "59",
                    {
                        "id": "srv-HitBaalTauntPoison",
                        "text": "HitBaalTauntPoison (Server)"
                    },
                    "$!#sHitPar1!$<br>$!#HitSubMissile1!$<br>$!#Param1!$<br>$!#Param2!$",
                    "Kill the missile and create an inner and outer disc of sub missiles with a specified count (using $!#sHitPar1!$) of missiles and with incremental specified velocities (the sub missile will use its $!#Param1!$ and $!#Param2!$ fields)"
                ],
                [
                    "60",
                    {
                        "id": "HitAxeChargedDiscDamage",
                        "text": "HitAxeChargedDiscDamage"
                    },
                    "",
                    "Run $!#srv-HitCatapultChargedBall!$. This missile always deals damage."
                ]
            ]
        },
        {
            "name": "pSrvDmgFunc",
            "description": "Uses an ID value to select a specialized function that gets called before damaging a unit on the server side",
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
                    "0<br>(or empty)",
                    "",
                    "",
                    "Default"
                ],
                [
                    "1",
                    {
                        "id": "DamageFireArrow",
                        "text": "DamageFireArrow"
                    },
                    "$!#DmgCalc1!$",
                    "Converts a percentage of physical damage to elemental damage per level"
                ],
                [
                    "2",
                    {
                        "id": "DamageIceArrow",
                        "text": "DamageIceArrow"
                    },
                    "$!#dParam1!$",
                    "Converts the Cold Length value to Freeze Length. Uses the parameter value as a percentage increase the Freeze Length"
                ],
                [
                    "3",
                    {
                        "id": "DamageFireWall",
                        "text": "DamageFireWall"
                    },
                    "$!#dParam1!$",
                    "Uses the parameter as a random chance to use an $!enums#Result Flags!$ Soft Hit flag"
                ],
                [
                    "4",
                    {
                        "id": "DamageIceBlast",
                        "text": "DamageIceBlast"
                    },
                    "",
                    "Converts the Cold Length value to the Freeze Length value"
                ],
                [
                    "5",
                    {
                        "id": "DamageBlessedHammerNew",
                        "text": "DamageBlessedHammerNew"
                    },
                    "$!#dParam1!$<br>$!#dParam2!$",
                    "Uses $!#dParam1!$ as a damage percent multiplier against Undead type monsters. Uses $!#dParam2!$ as a damage percent multiplier against Demon type monsters."
                ],
                [
                    "6",
                    {
                        "id": "DamageNoItem",
                        "text": "DamageNoItem"
                    },
                    "",
                    "If the source unit is not a Mercenary, then set the target unit to be unable to drop items when it dies."
                ],
                [
                    "7",
                    {
                        "id": "DamageWarCry",
                        "text": "DamageWarCry"
                    },
                    "$!#dParam1!$",
                    "Uses the parameter as the Stun Length. If the parameter equals 0, then use the source unit's related skill's $!skills#calc4!$ field as the Stun Length value. If the skill is null, then use the missile's default skill's $!skills#Param1!$ & $!skills#Param2!$ values."
                ],
                [
                    "8",
                    {
                        "id": "DamageEruption",
                        "text": "DamageEruption"
                    },
                    "$!#ProgOverlay!$",
                    "Create an overlay on the target"
                ],
                [
                    "9",
                    {
                        "id": "DamageTwister",
                        "text": "DamageTwister"
                    },
                    "$!#dParam1!$",
                    "Uses the parameter as the Stun Length, and sets the damage Hit Class layer to Stun Layer. If the parameter equals 0, then use the source unit's related skill's $!skills#calc2!$ field as the Stun Length."
                ],
                [
                    "10",
                    {
                        "id": "DamageFreeze",
                        "text": "DamageFreeze"
                    },
                    "",
                    "Checks that the missile has stats and then sets the Freeze Length value to equal the Cold Length value."
                ],
                [
                    "11",
                    {
                        "id": "DoRabiesDamage",
                        "text": "DoRabiesDamage"
                    },
                    "",
                    "Checks the remaining poison duration on the target unit and if it is less than 10, it will use the linked skill's Elemental damage and duration length calculation (See $!skills!$) to apply a new poison."
                ],
                [
                    "12",
                    {
                        "id": "DamageLightningJavelin",
                        "text": "DamageLightningJavelin"
                    },
                    "$!#DmgCalc1!$",
                    "Converts a $!#DmgCalc1!$ percentage of physical damage to elemental damage per level, clearing all damage except for that element."
                ],
                [
                    "13",
                    {
                        "id": "DamageBlessedHammerOld",
                        "text": "DamageBlessedHammerOld"
                    },
                    "$!#dParam1!$<br>$!#dParam2!$",
                    "Uses the source units physical damage percent stat as a percentage modifier for the missile's damage, and then calls the $!#DamageBlessedHammerNew!$ function (See function code 5)"
                ],
                [
                    "14",
                    {
                        "id": "DamageMoltenBoulder",
                        "text": "DamageMoltenBoulder"
                    },
                    "$!#dParam1!$<br>$!#dParam2!$",
                    "Uses $!#dParam2!$ as the percent chance to knockback the target unit. Uses $!#dParam1!$ to control how this percent chance is modified. Also relies on the $!monstats2#small!$ and $!monstats2#large!$ fields.<br>\u00b7 If the target unit is a player and $!#dParam1!$ is greater than or equal to 1, then set the knockback chance to $!#dParam2!$<br>\u00b7 If $!#dParam1!$ is less than 1 and the monster is a small size, then set the knockback chance to $!#dParam2!$<br>\u00b7 If $!#dParam1!$ equals 1 and the monster is a small size, then set the knockback chance to $!#dParam2!$ * 2<br>\u00b7 If $!#dParam1!$ equals 1 and the monster is a large size, then set the knockback chance to $!#dParam2!$<br>\u00b7 If $!#dParam1!$ is greater than 1 and the monster is a small size, then set the knockback chance to $!#dParam2!$ * 3<br>\u00b7 If $!#dParam1!$ is greater than 1 and the monster is a large size, then set the knockback chance to $!#dParam2!$ * 2<br>\u00b7 If $!#dParam1!$ is greater than 1 and the monster is not a small or large size, then set the knockback chance to $!#dParam2!$"
                ],
                [
                    "15",
                    {
                        "id": "DamageHolyBolt",
                        "text": "DamageHolyBolt"
                    },
                    "$!#sHitPar2!$<br>$!#dParam1!$",
                    "Uses $!#dParam1!$ as a percent damage multiplier for the total elemental damage, depending on the use case of $!#sHitPar2!$<br>\u00b7 If the target unit is a monster<br>o If $!#sHitPar2!$ equals 0, then do not modify the damage<br>o If $!#sHitPar2!$ equals 1, then only modify the damage if the monster is an Undead type<br>o If $!#sHitPar2!$ equals 2, then only modify the damage if the monster is a Demon type<br>o If $!#sHitPar2!$ equals 3, then only modify the damage if the monster is an Undead or Demon type<br>\u00b7 If the target unit is a player<br>o If $!#sHitPar2!$ equals 0, then modify the damage<br>o If $!#sHitPar2!$ equals 0, then do not modify the damage"
                ],
                [
                    "16",
                    {
                        "id": "DamageSoaringStrike",
                        "text": "DamageSoaringStrike"
                    },
                    "$!#DmgCalc1!$<br>$!#dParam1!$",
                    "Add $!#ResultFlags!$ and $!#HitFlags!$ to the damage. Trigger the \"hextrigger\" event, only once for the lifetime of the missile. If $!#dParam1!$ is true, update weapon durability if the missile isn't a mirror created by $!skills#srv-WarDoMirroredBlades!$ and it is the first time this missile deals damage. If the missile is in the return trip marked by $!#srv-HitSoaringStrike!$, optionally applies a pull based on $!#DmgCalc1!$ random chance."
                ],
                [
                    "17",
                    {
                        "id": "DamageRingOfFire",
                        "text": "DamageRingOfFire"
                    },
                    "$!#DmgCalc1!$",
                    "On hit, applies $!#DmgCalc1!$ as a damage multiplier to all damage types."
                ]
            ]
        },
        {
            "name": "SrvCalc1",
            "description": "Numeric calculation field. Used as a parameter for the $!#pSrvDoFunc!$ field.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Missile scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "Param#",
            "altNames": [
                "Param1",
                "Param2",
                "Param3",
                "Param4",
                "Param5"
            ],
            "description": "Integer field. Used as a parameter for the $!#pSrvDoFunc!$ field.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "CltCalc1",
            "description": "Numeric calculation field. Used as a parameter for the $!#pCltDoFunc!$ field.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Missile scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "CltParam#",
            "altNames": [
                "CltParam1",
                "CltParam2",
                "CltParam3",
                "CltParam4",
                "CltParam5"
            ],
            "description": "Integer field. Used as a parameter for the $!#pCltDoFunc!$ field.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "SHitCalc1",
            "description": "Numeric calculation field. Used as a parameter for the $!#pSrvHitFunc!$ field.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Missile scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "sHitPar#",
            "description": "Integer field. Used as a parameter for the $!#pSrvHitFunc!$ field.",
            "altNames": [
                "sHitPar1",
                "sHitPar2",
                "sHitPar3"
            ],
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "CHitCalc1",
            "description": "Numeric calculation field. Used as a parameter for the $!#pCltHitFunc!$ field.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Missile scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "cHitPar#",
            "altNames": [
                "cHitPar1",
                "cHitPar2",
                "cHitPar3"
            ],
            "description": "Integer field. Used as a parameter for the $!#pCltHitFunc!$ field.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "DmgCalc1",
            "description": "Numeric calculation field. Used as a parameter for the $!#pSrvDmgFunc!$ field.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Missile scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "dParam#",
            "altNames": [
                "dParam1",
                "dParam2"
            ],
            "description": "Integer field. Used as a parameter for the $!#pSrvDmgFunc!$ field.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Vel",
            "description": "The baseline velocity of the missile, which is the speed at which the missile moves in the game world. This is measured by distance in pixels traveled per frame.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "MaxVel",
            "description": "The maximum velocity of the missile. If the missile's current velocity increases (based on other fields), then this field controls how high the velocity is allowed to go.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "VelLev",
            "description": "Adds extra velocity based on the caster unit's level. Each level gained beyond level 1 will add this value to the baseline $!#Vel!$ field.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Accel",
            "description": "Controls the acceleration of the missile's movement. A positive value will increase the missile's velocity per frame. A negative value will decrease the missile's velocity per frame. The bigger positive or negative values will cause the velocity to change faster per frame.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "Range",
            "description": "Controls the duration that the missile will exist for after it is created. This is measured in frames where 25 Frames = 1 second. Note that there are some instances where a skill function will overwrite this.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Missile scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "Radius",
            "description": "Specify the radius of the missile. This is different from its size. The radius is used for missile function searches and for vfx rendering. The size is used for collision and overlap checks.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Missile scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "Light",
            "description": "Controls the missile's Light Radius size (measured in grid sub-tiles)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Flicker",
            "description": "If greater than 0, then every 4th frame while the missile is active, the Light Radius will randomly change in size between base size to its base size plus this value (measured in grid sub-tiles)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Red",
            "description": "Controls the red color value of the missile's Light Radius (Uses a value from 0 to 255)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Green",
            "description": "Controls the green color value of the monster's Light Radius (Uses a value from 0 to 255)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Blue",
            "description": "Controls the blue color value of the monster's Light Radius (Uses a value from 0 to 255)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "InitSteps",
            "description": "The number of frames the missile needs to be alive until it becomes visible on the game client. If the missile's current duration in frame count is less than this value, then the missile will appear invisible.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Activate",
            "description": "The number of frames the missile needs to be alive until it becomes active. If the missile's current duration in frame count is less than this value, then the missile will not collide.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "LoopAnim",
            "description": "Boolean Field. If equals 1, then the missile's animation will repeat once the previous animation finishes. If equals 0, then the missile's animation will only play once, which can cause the missile to appear invisible at the end of the animation, but it will still be alive.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "CelFile",
            "description": "Defines which DCC missile file to use for the visual graphics of the missile",
            "type": {
                "type": "text",
                "dataLength": 64,
                "memSize": 0
            }
        },
        {
            "name": "animrate",
            "description": "Controls the visual speed of the missile's animation graphics. The overall missile animation rate is calculated as the following: 256 * [$!#animrate!$] / 1024",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "AnimLen",
            "description": "Defines the length of the missile's animation in frames where 25 Frames = 1 second. This field can sometimes be used to calculate the missile animation rate, depending on the missile function used.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "AnimSpeed",
            "description": "Controls the visual speed of the missile's animation graphics on the client side (Measured in 16ths, where 16 equals 1 frame per second). This can be overridden by certain missile functions.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "RandStart",
            "description": "If this value is greater than 0, then the missile will start at a random frame between 0 and this value when it begins its animation.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "SubLoop",
            "description": "Boolean Field. If equals 1, then the missile will use a specific sequence of its animation while it is alive, depending on its creation. If equals 0, then the missile will not use a sequenced animation.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "SubStart",
            "description": "The starting frame of the sequence animation. This requires that the $!#SubLoop!$ field is enabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "SubStop",
            "description": "The ending frame of the sequence animation. After reaching this frame, then the sequenced animation will loop back to the $!#SubStart!$ frame. This requires that the $!#SubLoop!$ field is enabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "CollideType",
            "description": "Defines the missile's collision type, which controls what units, objects, or parts of the environment that the missile can impact",
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
                    "No collision"
                ],
                [
                    "1",
                    "Player unit collision"
                ],
                [
                    "2",
                    "Monster unit collision"
                ],
                [
                    "3",
                    "Player and Monster unit collision"
                ],
                [
                    "4",
                    "No collision"
                ],
                [
                    "5",
                    "Monster unit collision"
                ],
                [
                    "6",
                    "Barrier collision, such as doors"
                ],
                [
                    "7",
                    "Missile collision"
                ],
                [
                    "8",
                    "Player, Monster, Barrier, and Wall collision"
                ]
            ]
        },
        {
            "name": "CollideKill",
            "description": "Boolean Field. If equals 1, then the missile will be destroyed when it collides with something. If equals 0, then the missile will not be destroyed when it collides with something.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "CollideFriend",
            "description": "Boolean Field. If equals 1, then the missile can collide with friendly units, including the caster. If equals 0, then the missile will ignore friendly units.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "LastCollide",
            "description": "Boolean Field. If equals 1, then the missile will track the last unit that it collided with, which is useful for making sure the missile does not hit the same unit twice. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Collision",
            "description": "Boolean Field. If equals 1, then the missile will have a missile type path placement collision mask when it is initialized or moved. If equals 0, then the missile will have no placement collision mask when it is created or moved.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "ClientCol",
            "description": "Boolean Field. If equals 1, then the missile will check collision on the client, depending on the missile's $!#CollideType!$ field. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "CollisionOverlap",
            "description": "Boolean Field. If equals 1, then an overlap collision check is done on the current missile location before stepping the missile on its next path location.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ClientSend",
            "description": "Boolean Field. If equals 1, then the server will create the missile on the client. This can be used when reloading area levels or transitioning units between areas. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "NextHit",
            "description": "Boolean Field. If equals 1, then the missile will use the next delay. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "NextDelay",
            "description": "Controls the delay in frame length until this and any other missiles from the same skill cast are allowed to hit the same unit again. This field relies on the $!#NextHit!$ field being enabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "xoffset",
            "altNames": [
                "yoffset",
                "zoffset"
            ],
            "description": "Specifies the X, Y, and Z location coordinates (measured in pixels) to offset to visually draw the missile based on its actual location. This will only offset the visual graphics of the missile, not the missile itself. The Z axis controls the visual height of the missile.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "Size",
            "description": "Defines the diameter in sub-tiles (for both the X and Y axis) that the missile will occupy. This affects how the missile will collide with something or how the game will handle placement for the missile.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "SrcTown",
            "description": "Boolean Field. If equals 1, then the missile will be destroyed if the caster unit is located in an act town. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "CltSrcTown",
            "description": "If this value is greater than 0 and the $!#LoopAnim!$ field is disabled, then this field will control which frame to set the missile's animation when the player is in town. This value gets subtracted from the $!#AnimLen!$ value to determine the frame to set the missile's animation.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "CanDestroy",
            "description": "Boolean Field. If equals 1, then the missile can be attacked and destroyed. If equals 0, then the missile cannot be attacked.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ToHit",
            "description": "Boolean Field. If equals 1, then this missile will use the caster's Attack Rating stat to determine if the missile should hit its target. If equals 0, then the missile will always hit its target.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "AlwaysExplode",
            "description": "Boolean Field. If equals 1, then the missile will always process an explosion when it is killed, which can use a server hit function (See $!#pSrvHitFunc!$) and can use the $!#HitSound!$ and $!#ExplosionMissile!$ fields on the client side. If equals 0, then the missile will only rely on proper collision hits to process an explosion.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Explosion",
            "description": "Boolean Field. If equals 1, then the missile will be classified as an explosion which will make it use different handlers for finding nearby units and dealing damage. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Town",
            "description": "Boolean Field. If equals 1, then the missile is allowed to be alive when in a town area. If equals 0, then the missile will be immediately destroyed when located within a town area.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "NoUniqueMod",
            "description": "Boolean Field. If equals 1, then the missile will not receive bonuses from Unique monster modifiers. If equals 0, then the missile will receive bonuses from Unique monster modifiers.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "NoMultiShot",
            "description": "Boolean Field. If equals 1, then the missile will not be affected by the Multi-Shot monster modifier. If equals 0, then the missile will be affected by the Multi-Shot monster modifier.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Holy",
            "description": "Controls a bit field flag where each value is a code to allow the missile to damage a certain type of monster. Leave blank to damage all units.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "bittable": [
                "Only damage Undead",
                "Only damage Demons",
                "Only damage Beasts"
            ]
        },
        {
            "name": "CanSlow",
            "description": "Boolean Field. If equals 1, then the missile can be affected by the \"slowmissiles\" state (See $!states!$). If equals 0, then the missile will ignore the \"slowmissiles\" state.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ReturnFire",
            "description": "Boolean Field. If equals 1, then missile can trigger the Sorceress Chilling Armor event function. If equals 0, then this missile will not trigger that function.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "GetHit",
            "description": "Boolean Field. If equals 1, then the missile will cause the target unit to enter the Get Hit mode (GH), which acts as the hit recovery mode. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SoftHit",
            "description": "Boolean Field. If equals 1, then the missile will cause a soft hit on the unit, which can trigger a blood splatter effect, hit flash, and/or a hit sound. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "KnockBack",
            "description": "Controls the percentage chance (out of 100) that the target unit will be knocked back when hit by the missile",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Trans",
            "description": "Controls the alpha mode for how the missile is displayed, which can affect transparency and blending",
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
                    "No Transparency"
                ],
                [
                    "1",
                    "Black Alpha Transparency"
                ],
                [
                    "2",
                    "White Alpha Transparency"
                ]
            ]
        },
        {
            "name": "Pierce",
            "description": "Boolean Field. If equals 1, then allow the Pierce modifier function to work with this missile. If equals 0, then do not allow Pierce to work with this missile.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "MissileSkill",
            "description": "Boolean Field. If equals 1, then the missile will look up the skill that created it and use that skill's damage instead of the missile damage. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Skill",
            "description": "This will look up the specified skill's damage and use it for the missile instead of using the missile's defined damage.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "skills",
                "field": "skill"
            }
        },
        {
            "name": "ResultFlags",
            "description": "Controls different flags that can affect how the target reacts after being hit by the missile. Uses an integer value to check against different bit fields by using the \"&\" operator. For example, if the value equals 5 (binary = 101) then that returns true for both the 4 (binary = 100) and 1 (binary = 1) bit field values.",
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
            "description": "Controls different flags that can affect the damage dealt when the target is hit by the missile. Uses an integer value to check against different bit fields by using the \"&\" operator. For example, if the value equals 6 (binary = 110) then that returns true for both the 4 (binary = 100) and 2 (binary = 10) bit field values.",
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
            "name": "HitShift",
            "description": "Controls the percentage modifier for the missile's damage. This value cannot be less than 0 or greater than 8. This is calculated in 256ths, where 8=256/256, 7=128/256, 6=64/256, 5=32/256, 4=16/256, 3=8/256, 2=4/256, 1=2/256, and 0=1/256.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "ApplyMastery",
            "description": "Boolean Field. If equals 1, then apply the caster's elemental mastery bonus modifiers to the missile's elemental damage. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SrcDamage",
            "description": "Controls how much of the source unit's damage should be added to the missile's damage. This is calculated in 128ths and acts as a percentage modifier for the source unit's damage that added to the missile. If equals -1 or 0, then the source damage is not included.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Half2HSrc",
            "description": "Boolean Field. If equals 1 and the source unit is currently wielding a 2-Handed weapon, then the source damage (see $!#SrcDamage!$) is reduced by 50%. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SrcMissDmg",
            "description": "If the missile was created by another missile, then this controls how much of the source missile's damage should be added to this missile's damage. This is calculated in 128ths and acts as a percentage modifier for the source missile's damage that added to this missile. If equals 0, then the source damage is not included.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "MinDamage",
            "description": "Minimum baseline physical damage dealt by the missile",
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
            "description": "Controls the additional minimum physical damage dealt by the missile, calculated using the leveling formula between 5 level thresholds of the missile's current level. The level thresholds are levels 2-8, 9-16, 17-22, 23-28, 29 and beyond. These 5 level thresholds correlate to each field.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "MaxDamage",
            "description": "Maximum baseline physical damage dealt by the missile",
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
            "description": "Controls the additional maximum physical damage dealt by the missile, calculated using the leveling formula between 5 level thresholds of the missile's current level. The level thresholds are levels 2-8, 9-16, 17-22, 23-28, 29 and beyond. These 5 level thresholds correlate to each field.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "DmgSymPerCalc",
            "description": "Calculation Field. Determines the percentage increase to the physical damage dealt by the missile based on specified skill levels.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Missile scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "EType",
            "description": "Defines the type of elemental damage dealt by the missile. If this field is empty, then the related elemental fields below will not be used. Any type that has length uses the $!#ELen!$ field.",
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
            "description": "Minimum baseline elemental damage dealt by the missile",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "MinELev#",
            "altNames": [
                "MinELev1",
                "MinELev2",
                "MinELev3",
                "MinELev4",
                "MinELev5"
            ],
            "description": "Controls the additional minimum elemental damage dealt by the missile, calculated using the leveling formula between 5 level thresholds of the missile's current level. The level thresholds are levels 2-8, 9-16, 17-22, 23-28, 29 and beyond. These 5 level thresholds correlate to each field number.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "EMax",
            "description": "Maximum baseline elemental damage dealt by the missile",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "MaxELev#",
            "altNames": [
                "MaxELev1",
                "MaxELev2",
                "MaxELev3",
                "MaxELev4",
                "MaxELev5"
            ],
            "description": "Controls the additional maximum elemental damage dealt by the missile, calculated using the leveling formula between 5 level thresholds of the missile's current level. The level thresholds are levels 2-8, 9-16, 17-22, 23-28, 29 and beyond. These 5 level thresholds correlate to each field.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "EDmgSymPerCalc",
            "description": "Calculation Field. Determines the percentage increase to the elemental damage dealt by the missile based on specified skill levels.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Missile scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "ELen",
            "description": "The baseline elemental duration dealt by the missile. This is calculated in frame lengths where 25 Frames = 1 second. These fields only apply to appropriate elemental types with a duration.",
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
            "description": "Controls the additional elemental duration added by the missile, calculated using the leveling formula between 3 level thresholds of the missile's current level. The level thresholds are levels 2-8, 9-16, 17 and beyond. These 3 level thresholds correlate to each field. These fields only apply to appropriate elemental types with a duration.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "HitClass",
            "description": "Defines the missil's own hit class into the damage routines, mainly used for determining hit sound effects and overlays. This field only handles the hit class layers, so values beyond these defined bits are ignored. Uses an integer value to check against different bit fields by using the \"&\" operator. For example, if the value equals 6 (binary = 110) then that returns true for both the 4 (binary = 100) and 2 (binary = 10) bit field values.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "appendField": {
                "file": "enums",
                "field": "Hit Class"
            }
        },
        {
            "name": "NumDirections",
            "description": "The number of directions allowed by the missile, based on the DCC file used (see $!#CelFile!$). This value should be within the power of 2, with a minimum value of 1 or up to a maximum value of 64.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "LocalBlood",
            "description": "Boolean Field. If equals 1, then change the color of blood missiles to green. If equals 0, then keep the blood missiles colored the default red.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "DamageRate",
            "description": "Controls the \"damage_framerate\" stat (Calculated in 1024ths), which acts as a percentage multiplier for the physical damage reduction and magic damage reduction stat modifiers, when performing damage resistance calculations. This is only enabled if the value is greater than 0.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "TravelSound",
            "description": "Used when the missile is created and while it is alive.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "HitSound",
            "description": "Used when the collides with a target.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "OnDiedSound",
            "description": "Optional sound to play when the missile dies.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "ProgSound",
            "description": "Used for a programmed special event based on the client function.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "ProgOverlay",
            "description": "Used for a programmed special event based on the server or client function.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Overlay",
                "field": "overlay"
            }
        },
        {
            "name": "ExplosionMissile",
            "description": "Used for the missile created on the client when this missile explodes.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Missiles",
                "field": "Missile"
            }
        },
        {
            "name": "SubMissile#",
            "altNames": [
                "SubMissile1",
                "SubMissile2",
                "SubMissile3"
            ],
            "description": "Used for creating a new missile based on the server function used.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Missiles",
                "field": "Missile"
            }
        },
        {
            "name": "HitSubMissile#",
            "altNames": [
                "HitSubMissile1",
                "HitSubMissile2",
                "HitSubMissile3",
                "HitSubMissile4"
            ],
            "description": " Used for a new missile after a collision, based on the server function used.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Missiles",
                "field": "Missile"
            }
        },
        {
            "name": "CltSubMissile#",
            "altNames": [
                "CltSubMissile1",
                "CltSubMissile2",
                "CltSubMissile3"
            ],
            "description": "Used for creating a new missile based on the client function used.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Missiles",
                "field": "Missile"
            }
        },
        {
            "name": "CltHitSubMissile#",
            "altNames": [
                "CltHitSubMissile1",
                "CltHitSubMissile2",
                "CltHitSubMissile3",
                "CltHitSubMissile4"
            ],
            "description": "Used for a new missile after a collision, based on the client function used.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Missiles",
                "field": "Missile"
            }
        },
        {
            "name": "MissileWeaponVFX",
            "description": "Boolean Field. If equals 1, then the missile is being represented by a weapon or a vfx based on a weapon.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}