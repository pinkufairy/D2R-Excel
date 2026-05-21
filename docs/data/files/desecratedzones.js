// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["desecratedzones"] = {
    "title": "desecratedzones",
    "overview": "This file controls the configuration for the Terror Zones feature, known as Desecrated Zones internally. For online games this is a protobuf file. For offline games this is an xml file which is built into a json file. All file types share the same exact format.",
    "guideOnly": true,
    "fields": [
        {
            "name": "root (DesecratedZonesConfigs)",
            "description": "The root object for desecrated zones.",
            "type": {
                "type": "object",
                "dataLength": 0,
                "memSize": 0
            },
            "fields": [
                {
                    "name": "desecrated_zones",
                    "description": "List of all configs. Multiple configs can be defined with different start and end times to simulate events.",
                    "type": {
                        "type": "array",
                        "arrayType": {
                            "type": "object",
                            "dataLength": 0,
                            "memSize": 0
                        },
                        "dataLength": 0,
                        "memSize": 0
                    },
                    "fields": [
                        {
                            "name": "start_time_utc",
                            "description": "UTC start time of this config. YYYY-MM-DD HH:MM:SS.",
                            "type": {
                                "type": "text",
                                "dataLength": 0,
                                "memSize": 0
                            }
                        },
                        {
                            "name": "end_time_utc",
                            "description": "UTC end time of this config. Can be left blank for no end time. YYYY-MM-DD HH:MM:SS.",
                            "type": {
                                "type": "text",
                                "dataLength": 0,
                                "memSize": 0
                            }
                        },
                        {
                            "name": "seed",
                            "description": "Seed used to randomly generate scheduled zones. This is a UInt64, which has a max value of 18446744073709551615.",
                            "type": {
                                "type": "int",
                                "dataLength": 0,
                                "memSize": 64
                            }
                        },
                        {
                            "name": "zone_duration_minutes",
                            "description": "How long each desecrated zone lasts in minutes.",
                            "type": {
                                "type": "int",
                                "dataLength": 0,
                                "memSize": 32
                            }
                        },
                        {
                            "name": "break_duration_minutes",
                            "description": "How long the break between desecrated zones lasts in minutes.",
                            "type": {
                                "type": "int",
                                "dataLength": 0,
                                "memSize": 32
                            }
                        },
                        {
                            "name": "manual_deprioritize_threshold",
                            "description": "Percent of levels in a manual zone that are active from other zones before it is deprioritized in the choosing algorithm.",
                            "type": {
                                "type": "int",
                                "dataLength": 0,
                                "memSize": 32
                            }
                        },
                        {
                            "name": "manual_removal_threshold",
                            "description": "Percent of levels in a manual zone that are active from other zones before it is removed from the choosing algorithm.",
                            "type": {
                                "type": "int",
                                "dataLength": 0,
                                "memSize": 32
                            }
                        },
                        {
                            "name": "game_difficulties",
                            "description": "Game-level settings and default difficulty settings split by game version.",
                            "type": {
                                "type": "object",
                                "dataLength": 0,
                                "memSize": 0
                            },
                            "fields": [
                                {
                                    "name": "expansion",
                                    "id": "game-expansion",
                                    "description": "Game-level settings for the expansion game mode.",
                                    "type": {
                                        "type": "object",
                                        "dataLength": 0,
                                        "memSize": 0
                                    },
                                    "fields": [
                                        {
                                            "name": "normal",
                                            "id": "game-expansion-normal",
                                            "description": "Game-level settings for normal difficulty.",
                                            "type": {
                                                "type": "object",
                                                "dataLength": 0,
                                                "memSize": 0,
                                                "file": "desecratedzones",
                                                "field": "DesecratedGameDifficultyConfig"
                                            }
                                        },
                                        {
                                            "name": "nightmare",
                                            "id": "game-expansion-nightmare",
                                            "description": "Game-level settings for nightmare difficulty.",
                                            "type": {
                                                "type": "object",
                                                "dataLength": 0,
                                                "memSize": 0,
                                                "file": "desecratedzones",
                                                "field": "DesecratedGameDifficultyConfig"
                                            }
                                        },
                                        {
                                            "name": "hell",
                                            "id": "game-expansion-hell",
                                            "description": "Game-level settings for hell difficulty.",
                                            "type": {
                                                "type": "object",
                                                "dataLength": 0,
                                                "memSize": 0,
                                                "file": "desecratedzones",
                                                "field": "DesecratedGameDifficultyConfig"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "name": "rotw",
                                    "id": "game-rotw",
                                    "description": "Game-level settings for the reign of the warlock (rotw) game mode.",
                                    "type": {
                                        "type": "object",
                                        "dataLength": 0,
                                        "memSize": 0
                                    },
                                    "fields": [
                                        {
                                            "name": "normal",
                                            "id": "game-rotw-normal",
                                            "description": "Game-level settings for normal difficulty.",
                                            "type": {
                                                "type": "object",
                                                "dataLength": 0,
                                                "memSize": 0,
                                                "file": "desecratedzones",
                                                "field": "DesecratedGameDifficultyConfig"
                                            }
                                        },
                                        {
                                            "name": "nightmare",
                                            "id": "game-rotw-nightmare",
                                            "description": "Game-level settings for nightmare difficulty.",
                                            "type": {
                                                "type": "object",
                                                "dataLength": 0,
                                                "memSize": 0,
                                                "file": "desecratedzones",
                                                "field": "DesecratedGameDifficultyConfig"
                                            }
                                        },
                                        {
                                            "name": "hell",
                                            "id": "game-rotw-hell",
                                            "description": "Game-level settings for hell difficulty.",
                                            "type": {
                                                "type": "object",
                                                "dataLength": 0,
                                                "memSize": 0,
                                                "file": "desecratedzones",
                                                "field": "DesecratedGameDifficultyConfig"
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "warnings",
                            "description": "List of all warnings that will appear when a scheduled zone is about to end. Must have an entry for announce_time_minutes == 0.",
                            "type": {
                                "type": "array",
                                "arrayType": {
                                    "type": "object",
                                    "dataLength": 0,
                                    "memSize": 0
                                },
                                "dataLength": 0,
                                "memSize": 0
                            },
                            "fields": [
                                {
                                    "name": "announce_time_minutes",
                                    "description": "Amount of minutes left in the zone for this warning to appear.",
                                    "type": {
                                        "type": "int",
                                        "dataLength": 0,
                                        "memSize": 32
                                    }
                                },
                                {
                                    "name": "tier",
                                    "description": "Tier of warning. Code converts this to a string.",
                                    "type": {
                                        "type": "int",
                                        "dataLength": 0,
                                        "memSize": 32
                                    }
                                }
                            ]
                        },
                        {
                            "name": "manual_zones",
                            "description": "List of all manual zone groups. Each entry is a group of desecrated zones that can be referenced by an item's spell (see $!misc#SkillItemDesecrateZone!$).",
                            "type": {
                                "type": "array",
                                "arrayType": {
                                    "type": "object",
                                    "dataLength": 0,
                                    "memSize": 0
                                },
                                "dataLength": 0,
                                "memSize": 0
                            },
                            "fields": [
                                {
                                    "name": "group_id",
                                    "description": "Integer id for this zone group. Used by $!misc#SkillItemDesecrateZone!$ to reference this group.",
                                    "type": {
                                        "type": "int",
                                        "dataLength": 0,
                                        "memSize": 32
                                    }
                                },
                                {
                                    "name": "zones",
                                    "id": "manual_zones-zones",
                                    "description": "List of all zones in this group.",
                                    "type": {
                                        "type": "array",
                                        "arrayType": {
                                            "type": "object",
                                            "dataLength": 0,
                                            "memSize": 0,
                                            "file": "desecratedzones",
                                            "field": "DesecratedZone"
                                        },
                                        "dataLength": 0,
                                        "memSize": 0
                                    }
                                }
                            ]
                        },
                        {
                            "name": "zones",
                            "description": "List of all scheduled zones.",
                            "type": {
                                "type": "array",
                                "arrayType": {
                                    "type": "object",
                                    "dataLength": 0,
                                    "memSize": 0,
                                    "file": "desecratedzones",
                                    "field": "DesecratedZone"
                                },
                                "dataLength": 0,
                                "memSize": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "name": "DesecratedZone",
            "description": "A desecrated zone containing one or more levels.",
            "type": {
                "type": "object",
                "dataLength": 0,
                "memSize": 0
            },
            "fields": [
                {
                    "name": "id",
                    "description": "String id for this zone. Must be unique between all zones on this config.",
                    "type": {
                        "type": "text",
                        "dataLength": 0,
                        "memSize": 0
                    }
                },
                {
                    "name": "difficulties",
                    "id": "zone-difficulties",
                    "description": "Difficulty overrides for this zone. Falls back to the default if left blank. Individual fields also fall back if left blank.",
                    "type": {
                        "type": "object",
                        "dataLength": 0,
                        "memSize": 0,
                        "file": "desecratedzones",
                        "field": "DesecratedDifficultyConfigPerGameVersion"
                    }
                },
                {
                    "name": "levels",
                    "description": "List of all levels in this zone.",
                    "type": {
                        "type": "array",
                        "arrayType": {
                            "type": "object",
                            "dataLength": 0,
                            "memSize": 0,
                            "file": "desecratedzones",
                            "field": "DesecratedLevel"
                        },
                        "dataLength": 0,
                        "memSize": 0
                    }
                }
            ]
        },
        {
            "name": "DesecratedLevel",
            "description": "A level within a desecrated zone.",
            "type": {
                "type": "object",
                "dataLength": 0,
                "memSize": 0
            },
            "fields": [
                {
                    "name": "level_id",
                    "description": "Id of the level to desecrate. References a level's index in $!Levels!$.",
                    "type": {
                        "type": "int",
                        "dataLength": 0,
                        "memSize": 32
                    }
                },
                {
                    "name": "waypoint_level_id",
                    "description": "Id of the level to mark as desecrated in the waypoint menu. References a level's index in $!Levels!$.",
                    "type": {
                        "type": "int",
                        "dataLength": 0,
                        "memSize": 32
                    }
                },
                {
                    "name": "zone_data_id",
                    "description": "String id for this level's zone data. All levels with the same zone_data_id share the same zone data, like zone completion percentages.",
                    "type": {
                        "type": "text",
                        "dataLength": 0,
                        "memSize": 0
                    }
                },
                {
                    "name": "zone_completion_weight",
                    "description": "Weight for this level's contribution to the zone's overall completion percentage.",
                    "type": {
                        "type": "float",
                        "dataLength": 0,
                        "memSize": 32
                    }
                },
                {
                    "name": "difficulties",
                    "id": "level-difficulties",
                    "description": "Difficulty overrides for this level. Falls back to the zone's difficulties if left blank. Individual fields also fall back if left blank.",
                    "type": {
                        "type": "object",
                        "dataLength": 0,
                        "memSize": 0,
                        "file": "desecratedzones",
                        "field": "DesecratedDifficultyConfigPerGameVersion"
                    }
                }
            ]
        },
        {
            "name": "DesecratedDifficultyConfigPerGameVersion",
            "description": "Difficulty config split by game version (expansion/rotw).",
            "type": {
                "type": "object",
                "dataLength": 0,
                "memSize": 0
            },
            "fields": [
                {
                    "name": "expansion",
                    "description": "Difficulty settings for the expansion game mode.",
                    "type": {
                        "type": "object",
                        "dataLength": 0,
                        "memSize": 0
                    },
                    "fields": [
                        {
                            "name": "normal",
                            "id": "diff-expansion-normal",
                            "description": "Difficulty settings for normal difficulty.",
                            "type": {
                                "type": "object",
                                "dataLength": 0,
                                "memSize": 0,
                                "file": "desecratedzones",
                                "field": "DesecratedDifficultyConfig"
                            }
                        },
                        {
                            "name": "nightmare",
                            "id": "diff-expansion-nightmare",
                            "description": "Difficulty settings for nightmare difficulty.",
                            "type": {
                                "type": "object",
                                "dataLength": 0,
                                "memSize": 0,
                                "file": "desecratedzones",
                                "field": "DesecratedDifficultyConfig"
                            }
                        },
                        {
                            "name": "hell",
                            "id": "diff-expansion-hell",
                            "description": "Difficulty settings for hell difficulty.",
                            "type": {
                                "type": "object",
                                "dataLength": 0,
                                "memSize": 0,
                                "file": "desecratedzones",
                                "field": "DesecratedDifficultyConfig"
                            }
                        }
                    ]
                },
                {
                    "name": "rotw",
                    "description": "Difficulty settings for the reign of the warlock (rotw) game mode.",
                    "type": {
                        "type": "object",
                        "dataLength": 0,
                        "memSize": 0
                    },
                    "fields": [
                        {
                            "name": "normal",
                            "id": "diff-rotw-normal",
                            "description": "Difficulty settings for normal difficulty.",
                            "type": {
                                "type": "object",
                                "dataLength": 0,
                                "memSize": 0,
                                "file": "desecratedzones",
                                "field": "DesecratedDifficultyConfig"
                            }
                        },
                        {
                            "name": "nightmare",
                            "id": "diff-rotw-nightmare",
                            "description": "Difficulty settings for nightmare difficulty.",
                            "type": {
                                "type": "object",
                                "dataLength": 0,
                                "memSize": 0,
                                "file": "desecratedzones",
                                "field": "DesecratedDifficultyConfig"
                            }
                        },
                        {
                            "name": "hell",
                            "id": "diff-rotw-hell",
                            "description": "Difficulty settings for hell difficulty.",
                            "type": {
                                "type": "object",
                                "dataLength": 0,
                                "memSize": 0,
                                "file": "desecratedzones",
                                "field": "DesecratedDifficultyConfig"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "name": "DesecratedGameDifficultyConfig",
            "description": "Game-level settings and the default difficulty config for a single difficulty.",
            "type": {
                "type": "object",
                "dataLength": 0,
                "memSize": 0
            },
            "fields": [
                {
                    "name": "ladder_enabled",
                    "description": "Are desecrated zones available for ladder games.",
                    "type": {
                        "type": "boolean",
                        "dataLength": 0,
                        "memSize": 0
                    }
                },
                {
                    "name": "non_ladder_enabled",
                    "description": "Are desecrated zones available for non-ladder games.",
                    "type": {
                        "type": "boolean",
                        "dataLength": 0,
                        "memSize": 0
                    }
                },
                {
                    "name": "max_herald_tiers",
                    "description": "Max amount of tiers a herald can be. Affects power and reward scaling. Must be at least 1 to allow Heralds to spawn. Tier 1 is the base tier.",
                    "type": {
                        "type": "int",
                        "dataLength": 0,
                        "memSize": 32
                    }
                },
                {
                    "name": "always_unique_mod_pool",
                    "description": "Pool of unique mods that can be chosen to apply to all normal monsters.",
                    "type": {
                        "type": "array",
                        "arrayType": {
                            "type": "object",
                            "dataLength": 0,
                            "memSize": 0
                        },
                        "dataLength": 0,
                        "memSize": 0
                    },
                    "fields": [
                        {
                            "name": "unique_mod",
                            "id": "always-unique_mod",
                            "description": "Unique mod index from $!monumod!$. Can be none (0) to add a chance for no mod to be chosen.",
                            "type": {
                                "type": "int",
                                "dataLength": 0,
                                "memSize": 32
                            }
                        },
                        {
                            "name": "chance",
                            "id": "always-chance",
                            "description": "Chance that this unique mod will be chosen. Chances of all mods in the pool are added up, then whatever number is rolled is the result.",
                            "type": {
                                "type": "int",
                                "dataLength": 0,
                                "memSize": 32
                            }
                        }
                    ]
                },
                {
                    "name": "defaults",
                    "description": "Default difficulty settings. Can also be overridden on a per-zone or per-level basis.",
                    "type": {
                        "type": "object",
                        "dataLength": 0,
                        "memSize": 0,
                        "file": "desecratedzones",
                        "field": "DesecratedDifficultyConfig"
                    }
                }
            ]
        },
        {
            "name": "DesecratedDifficultyConfig",
            "description": "Difficulty configuration for desecrated monsters.",
            "type": {
                "type": "object",
                "dataLength": 0,
                "memSize": 0
            },
            "fields": [
                {
                    "name": "bound_incl_min",
                    "description": "Minimum monster level that a desecrated monster can be. Inclusive. If a monster's base level is higher than it will be used instead.",
                    "type": {
                        "type": "int",
                        "dataLength": 0,
                        "memSize": 32
                    }
                },
                {
                    "name": "bound_incl_max",
                    "description": "Maximum monster level that a desecrated monster can be. Inclusive. The unique monster bonus can go over this.",
                    "type": {
                        "type": "int",
                        "dataLength": 0,
                        "memSize": 32
                    }
                },
                {
                    "name": "boost_level",
                    "description": "How many levels to add to player level to get the desecrated monster level.",
                    "type": {
                        "type": "int",
                        "dataLength": 0,
                        "memSize": 32
                    }
                },
                {
                    "name": "difficulty_scale",
                    "description": "Adjust the difficulty scale for monsters. This is done by faking the amount of players in the game. AKA /players X.",
                    "type": {
                        "type": "int",
                        "dataLength": 0,
                        "memSize": 32
                    }
                },
                {
                    "name": "boost_experience_percent",
                    "description": "Bonus experience percentage applied to the monster's base experience in $!monstats#Exp!$.",
                    "type": {
                        "type": "int",
                        "dataLength": 0,
                        "memSize": 32
                    }
                },
                {
                    "name": "herald_base_chance_to_spawn",
                    "description": "Base chance for the herald to spawn. This is added to the calculated \"zone completion chance\".<br>Zone completion chance is based off of zone completion, which is a factor of how many rooms have been populated in each level in the zone and how many of the total monsters spawned in those rooms have been killed. Any levels that share a $!#zone_data_id!$ are considered to be in the same zone. After a herald spawns, the zone completion percentage is reset.<br>Zone completion is then fed into the following equation:<pre><code>            a\n y = ______________ + k\n          -m(x-x0)\n      1+e^\n</code></pre> where:<br>a = $!#zone_chance_asymptote!$<br>k = $!#zone_chance_vertical_shift!$<br>m = $!#zone_chance_slope!$<br>x0 = $!#zone_chance_midpoint!$<br>x = the zone completion percentage.<br><br>If the chance roll is successful, that herald is assigned to the level that triggered the roll. If the actual monster spawn fails (for example, cannot find a valid location to place a monster), the spawn is re-queued and will activate again when a player enters a different room in the same level.",
                    "type": {
                        "type": "float",
                        "dataLength": 0,
                        "memSize": 32
                    }
                },
                {
                    "name": "unique_mod_chance_boosts",
                    "id": "difficulty-unique_mod_chance_boosts",
                    "description": "List of unique mods to boost for all desecrated elite monsters.",
                    "type": {
                        "type": "array",
                        "arrayType": {
                            "type": "object",
                            "dataLength": 0,
                            "memSize": 0,
                            "file": "desecratedzones",
                            "field": "UniqueModChanceBoost"
                        },
                        "dataLength": 0,
                        "memSize": 0
                    }
                },
                {
                    "name": "herald_tiers",
                    "description": "List of settings for each Herald tier. The entry index corresponds to a tier. Keep in mind 0-indexing, so index 0 corresponds to Herald tier 1 which is the base Herald. It is valid to have less tier settings than max tiers, in this case we use the highest tier setting available. At least one tier setting must be defined.<br>The game keeps track of the current herald tier. Each time a herald is spawned, the tier increments by 1, up until the max.",
                    "type": {
                        "type": "array",
                        "arrayType": {
                            "type": "object",
                            "dataLength": 0,
                            "memSize": 0
                        },
                        "dataLength": 0,
                        "memSize": 0
                    },
                    "fields": [
                        {
                            "name": "zone_chance_slope",
                            "description": "Slope used in the zone chance equation. See $!#herald_base_chance_to_spawn!$.",
                            "type": {
                                "type": "float",
                                "dataLength": 0,
                                "memSize": 32
                            }
                        },
                        {
                            "name": "zone_chance_midpoint",
                            "description": "Midpoint used in the zone chance equation. See $!#herald_base_chance_to_spawn!$.",
                            "type": {
                                "type": "float",
                                "dataLength": 0,
                                "memSize": 32
                            }
                        },
                        {
                            "name": "zone_chance_asymptote",
                            "description": "Asymptote used in the zone chance equation. See $!#herald_base_chance_to_spawn!$.",
                            "type": {
                                "type": "float",
                                "dataLength": 0,
                                "memSize": 32
                            }
                        },
                        {
                            "name": "zone_chance_vertical_shift",
                            "description": "Vertical shift used in the zone chance equation. See $!#herald_base_chance_to_spawn!$.",
                            "type": {
                                "type": "float",
                                "dataLength": 0,
                                "memSize": 32
                            }
                        },
                        {
                            "name": "herald_health_boost_percent",
                            "description": "Percent boost to the health of a Herald. Applies after other health boosts, like the normal unique boost.",
                            "type": {
                                "type": "int",
                                "dataLength": 0,
                                "memSize": 32
                            }
                        },
                        {
                            "name": "herald_damage_boost_percent",
                            "description": "Percent boost to the damage of a Herald. Applies to all damage types via the \"damagepercent\" and elemental mastery stats.",
                            "type": {
                                "type": "int",
                                "dataLength": 0,
                                "memSize": 32
                            }
                        },
                        {
                            "name": "herald_treasure_class_level_boost",
                            "description": "Boost to the treasure class level of a Herald, $!TreasureClassEx#level!$. This is not a boost to the item level dropped.",
                            "type": {
                                "type": "int",
                                "dataLength": 0,
                                "memSize": 32
                            }
                        },
                        {
                            "name": "minion_health_boost_percent",
                            "description": "Percent boost to the health of a Herald's minion. Applies after other health boosts, like the normal unique boost.",
                            "type": {
                                "type": "int",
                                "dataLength": 0,
                                "memSize": 32
                            }
                        },
                        {
                            "name": "minion_damage_boost_percent",
                            "description": "Percent boost to the damage of a Herald's minion. Applies to all damage types via the \"damagepercent\" and elemental mastery stats.",
                            "type": {
                                "type": "int",
                                "dataLength": 0,
                                "memSize": 32
                            }
                        },
                        {
                            "name": "minion_treasure_class_level_boost",
                            "description": "Boost to the treasure class level of a Herald's minion, $!TreasureClassEx#level!$. This is not a boost to the item level dropped.",
                            "type": {
                                "type": "int",
                                "dataLength": 0,
                                "memSize": 32
                            }
                        },
                        {
                            "name": "minion_behavior",
                            "description": "The behavior for selecting minions to spawn.",
                            "type": {
                                "type": "int",
                                "dataLength": 0,
                                "memSize": 32
                            },
                            "table": [
                                [
                                    "Code",
                                    "Name",
                                    "Description"
                                ],
                                [
                                    "0",
                                    "Grab Bag",
                                    "Spawns between $!#min_minions!$ and $!#max_minions!$, choosing a new minion each time."
                                ],
                                [
                                    "1",
                                    "One Type",
                                    "Chooses one minion and spawns between its specific $!#min!$ and $!#max!$ ($!#min_minions!$ and $!#max_minions!$ are ignored)."
                                ],
                                [
                                    "2",
                                    "Mixed Types",
                                    "Spawns between $!#min_minions!$ and $!#max_minions!$, choosing one minion and spawning between its specific $!#min!$ and $!#max!$ before moving to another."
                                ]
                            ]
                        },
                        {
                            "name": "min_minions",
                            "description": "Minimum number of minions a Herald can have, if used by the selected $!#minion_behavior!$.",
                            "type": {
                                "type": "int",
                                "dataLength": 0,
                                "memSize": 32
                            }
                        },
                        {
                            "name": "max_minions",
                            "description": "Maximum number of minions a Herald can have, if used by the selected $!#minion_behavior!$.",
                            "type": {
                                "type": "int",
                                "dataLength": 0,
                                "memSize": 32
                            }
                        },
                        {
                            "name": "minions",
                            "description": "List of minion options that a Herald can spawn.",
                            "type": {
                                "type": "array",
                                "arrayType": {
                                    "type": "object",
                                    "dataLength": 0,
                                    "memSize": 0
                                },
                                "dataLength": 0,
                                "memSize": 0
                            },
                            "fields": [
                                {
                                    "name": "minion_type",
                                    "description": "What type of minion is this. HeraldMonstatsMinion uses the minion columns in monstats.txt, falling back on the Heralds class if none are defined.",
                                    "type": {
                                        "type": "int",
                                        "dataLength": 0,
                                        "memSize": 32
                                    },
                                    "table": [
                                        [
                                            "Code",
                                            "Name",
                                            "Description"
                                        ],
                                        [
                                            "0",
                                            "MonsterID",
                                            "Uses a specific monster defined in $!#monster!$."
                                        ],
                                        [
                                            "1",
                                            "HeraldMonstatsMinion",
                                            "Uses the $!monstats#minion#!$ fields, falling back on the Heralds monster class if none are defined."
                                        ],
                                        [
                                            "2",
                                            "HeraldsClass",
                                            "Uses the herald's monster class"
                                        ]
                                    ]
                                },
                                {
                                    "name": "monster",
                                    "description": "$!monstats!$ index of a monster. Used if $!#minion_type!$ is \"MonsterID\".",
                                    "type": {
                                        "type": "int",
                                        "dataLength": 0,
                                        "memSize": 32
                                    }
                                },
                                {
                                    "name": "always_include",
                                    "description": "Ensures the minion is always chosen.",
                                    "type": {
                                        "type": "boolean",
                                        "dataLength": 0,
                                        "memSize": 0
                                    }
                                },
                                {
                                    "name": "chance",
                                    "id": "minion-chance",
                                    "description": "Chance this minion is selected. Chances between all minions are added up and then rolled.",
                                    "type": {
                                        "type": "int",
                                        "dataLength": 0,
                                        "memSize": 32
                                    }
                                },
                                {
                                    "name": "min",
                                    "description": "Minimum amount of this minion that can be spawned. Used by the \"One Type\" and \"Mixed Types\" $!#minion_behavior!$.",
                                    "type": {
                                        "type": "int",
                                        "dataLength": 0,
                                        "memSize": 32
                                    }
                                },
                                {
                                    "name": "max",
                                    "description": "Maximum amount of this minion that can be spawned. After the max is reached this minion entry is skipped. For \"Grab Bag\" $!#minion_behavior!$ set to 0 for no limit. Required to be set to above 0 for \"One Type\" and \"Mixed Types\".",
                                    "type": {
                                        "type": "int",
                                        "dataLength": 0,
                                        "memSize": 32
                                    }
                                }
                            ]
                        },
                        {
                            "name": "min_unique_mods",
                            "description": "Minimum number of unique mods a Herald can have.",
                            "type": {
                                "type": "int",
                                "dataLength": 0,
                                "memSize": 32
                            }
                        },
                        {
                            "name": "max_unique_mods",
                            "description": "Maximum number of unique mods a Herald can have.",
                            "type": {
                                "type": "int",
                                "dataLength": 0,
                                "memSize": 32
                            }
                        },
                        {
                            "name": "unique_mod_chance_boosts",
                            "id": "herald-unique_mod_chance_boosts",
                            "description": "List of unique mods to boost for Heralds.",
                            "type": {
                                "type": "array",
                                "arrayType": {
                                    "type": "object",
                                    "dataLength": 0,
                                    "memSize": 0,
                                    "file": "desecratedzones",
                                    "field": "UniqueModChanceBoost"
                                },
                                "dataLength": 0,
                                "memSize": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "name": "UniqueModChanceBoost",
            "description": "A boost entry for a unique mod's selection chance.",
            "type": {
                "type": "object",
                "dataLength": 0,
                "memSize": 0
            },
            "fields": [
                {
                    "name": "unique_mod",
                    "id": "boost-unique_mod",
                    "description": "Unique mod to boost. References an index in $!monumod!$.",
                    "type": {
                        "type": "int",
                        "dataLength": 0,
                        "memSize": 32
                    }
                },
                {
                    "name": "boost",
                    "description": "Amount to boost the chance of choosing this mod. See chance columns in monumod.txt. Only used with the Add behavior.",
                    "type": {
                        "type": "int",
                        "dataLength": 0,
                        "memSize": 32
                    }
                },
                {
                    "name": "behavior",
                    "description": "What the behavior of this boost is. Add adds the boost to the chance in monumod.txt. Always Include and Always Exclude ensure the mod is always chosen or never chosen respectively.",
                    "type": {
                        "type": "int",
                        "dataLength": 0,
                        "memSize": 32
                    },
                    "table": [
                        [
                            "Code",
                            "Name",
                            "Description"
                        ],
                        [
                            "0",
                            "Add",
                            "Adds the $!#boost!$ to the corresponding pick chance $!monumod!$."
                        ],
                        [
                            "1",
                            "Always Include",
                            "Ensure the mod is always chosen."
                        ],
                        [
                            "2",
                            "Always Exclude",
                            "Ensure the mod is never chosen."
                        ]
                    ]
                }
            ]
        }
    ]
}