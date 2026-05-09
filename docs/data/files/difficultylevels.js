// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["difficultylevels"] = {
    "title": "difficultylevels.txt",
    "overview": "This file controls global parameters for game rules and how they work between each difficulty mode. Users cannot add new difficulty modes from this file.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Name",
            "description": "This is a reference field to define the difficulty mode",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ResistPenalty",
            "description": "Defines the baseline starting point for a player character's resistances for Expansion mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "ResistPenaltyNonExpansion",
            "description": "Defines the baseline starting point for a player character's resistances for Non-Expansion mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "DeathExpPenalty",
            "description": "Modifies the percentage of current level experience lost when a player character dies",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "MonsterSkillBonus",
            "description": "Adds additional skill levels to skills used by monsters (defined from $!monstats!$)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "MonsterFreezeDivisor",
            "description": "Divisor that affects all Freeze Length values on monsters. The attempted Freeze Length value is divided by this divisor to determine the actual Freeze Length.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "MonsterColdDivisor",
            "description": "Divisor that affects all Cold Length values on monsters. The attempted Cold Length value is divided by this divisor to determine the actual Cold Length.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "AiCurseDivisor",
            "description": "Divisor that affects all durations of Curses on monsters. The attempted Curse duration is divided by this divisor to determine the actual Curse duration.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "LifeStealDivisor",
            "description": "Divisor that affects the amount of Life Steal that player characters gain. The attempted Life Steal value is divided by this divisor to determine the actual Life Steal.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "ManaStealDivisor",
            "description": "Divisor that affects the amount of Mana Steal that player characters gain. The attempted Mana Steal value is divided by this divisor to determine the actual Mana Steal.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "UniqueDamageBonus",
            "description": "Percentage modifier for a Unique monster's overall Damage and Attack Rating. This is applied after calculating the monster's other modifications.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "ChampionDamageBonus",
            "description": "Percentage modifier for a Champion monster's overall Damage and Attack Rating. This is applied after calculating the monster's other modifications.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "PlayerDamagePercentVSPlayer",
            "description": "Percentage modifier for the total damage a player deals to another player",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "PlayerDamagePercentVSMercenary",
            "description": "Percentage modifier for the total damage a player deals to another player's mercenary",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "PlayerDamagePercentVSPrimeEvil",
            "description": "Percentage modifier for the total damage a player deals to a Prime Evil boss",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "PlayerHitReactBufferVSPlayer",
            "description": "The frame length for the amount of time a player cannot be placed into another hit react from a player (25 frames = 1 second).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "PlayerHitReactBufferVSMonster",
            "description": "The frame length for the amount of time a player cannot be placed into another hit react from a monster (25 frames = 1 second).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "MercenaryDamagePercentVSPlayer",
            "description": "Percentage modifier for the total damage a player's mercenary deals to another player",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "MercenaryDamagePercentVSMercenary",
            "description": "Percentage modifier for the total damage a player's mercenary deals to another player's mercenary",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "MercenaryDamagePercentVSBoss",
            "description": "Percentage modifier for the total damage a player's mercenary deals to a boss monster",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "MercenaryMaxStunLength",
            "description": "The frame length for the maximum stun length allowed on a player's mercenary (25 Frames = 1 second)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "PrimeEvilDamagePercentVSPlayer",
            "description": "Percentage modifier applied to the total damage a Prime Evil boss deals to a player",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "PrimeEvilDamagePercentVSMercenary",
            "description": "Percentage modifier for the total damage a Prime Evil boss deals to a player's mercenary",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "PrimeEvilDamagePercentVSPet",
            "description": "Percentage modifier for the total damage a Prime Evil boss deals to a player's pet",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "PetDamagePercentVSPlayer",
            "description": "Percentage modifier for the total damage a player's pet deals to another player",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "MonsterCEDamagePercent",
            "description": "Percentage modifier that affects how much damage is dealt to a player by a Monster's version of Corpse Explosion. For example, when certain monsters die and explode on death.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "MonsterFireEnchantExplosionDamagePercent",
            "description": "Percentage modifier that affects how much damage is dealt to a player by a Monster's Fire Enchant explosion. The Fire Enchant death explosion uses the same Corpse Explosion functionality and this value is applied after the $!#MonsterCEDamagePercent!$ value.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "StaticFieldMin",
            "description": "Percentage modifier for capping the amount of current Life damage dealt to monsters by the Sorceress Static Field skill. This field only affects games in Expansion mode.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "GambleRare",
            "description": "The odds to obtain a Rare item from gambling. The game rolls a random number between 0 to 100000. If that rolled number is less than this value, then the gambled item will be a Rare item.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "GambleSet",
            "description": "The odds to obtain a Set item from gambling. The game rolls a random number between 0 to 100000. If that rolled number is less than this value, then the gambled item will be a Set item.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "GambleUnique",
            "description": "The odds to obtain a Unique item from gambling. The game rolls a random number between 0 to 100000. If that rolled number is less than this value, then the gambled item will be a Unique item.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "GambleUber",
            "description": "The odds to make the gambled item be an Exceptional Quality item. The game rolls a random number between 0 to 10000. This rolled number is then compared to the following formula:<br>([Item Level] - [Base Item Level]) * [GambleUber] + 1<br>If the rolled number is less than this value, then the item becomes an Exceptional Quality item, and the game will roll for upgrading it to Elite Quality (See $!#GambleUltra!$).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "GambleUltra",
            "description": "The odds to make the gambled item be an Elite Quality item. The game rolls a random number between 0 to 10000. This rolled number is then compared to the following formula:<br>([Item Level] - [Base Item Level]) * [GambleUltra] + 1<br>If the rolled number is less than this value, then the item is upgraded to an Elite Quality item. This only happens if the item successfully rolled for Exceptional Quality.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "ResistFloor",
            "description": "This field is currently disabled and does nothing. Sets minimum resistance a unit can have. This defaults to -100",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        }
    ]
}