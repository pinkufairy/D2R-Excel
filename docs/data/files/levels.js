// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["Levels"] = {
    "title": "Levels.txt",
    "referenceFiles": [
        "enums"
    ],
    "overview": "This file controls how the game controls the area levels, including how the level is built, what rules are allowed on the level, and what monsters/objects can spawn on the level.",
    "fields": [
        {
            "name": "Name",
            "description": "Defines the unique name pointer for the area level, which is used in other files",
            "type": {
                "type": "text",
                "dataLength": 47,
                "memSize": 16
            }
        },
        {
            "name": "Id",
            "description": "Defines the unique numeric ID for the area level, which is used in other files",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Pal",
            "description": "Defines which palette file to use for the area level. This uses index values from 0 to 4 to convey Act 1 to Act 5.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Act",
            "description": "Defines the Act number that the area level is a part of. This uses index values from 0 to 4 to convey Act 1 to Act 5.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "QuestFlag",
            "description": "Controls what quest record that the player needs to have completed before being allowed to enter this area level, while playing in Classic Mode. Each quest can have multiple quest records, and this field is looking for a specific quest record from a quest.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            },
            "appendField": {
                "file": "enums",
                "field": "Quest Flags"
            }
        },
        {
            "name": "QuestFlagEx",
            "description": "Controls what quest record that the player needs to have completed before being allowed to enter this area level, while playing in Expansion Mode. Each quest can have multiple quest records, and this field is looking for a specific quest record from a quest.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            },
            "appendField": {
                "file": "enums",
                "field": "Quest Flags"
            }
        },
        {
            "name": "Layer",
            "description": "Defines a unique numeric ID that is used to identify which Automap data belongs to which area level when saving and loading data from the character save.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "SizeX",
            "altNames": [
                "SizeX(N)",
                "SizeX(H)"
            ],
            "description": "Specifies the Length tile size values of an entire area level, which are used for determining how to build the level, for Normal, Nightmare, and Hell Difficulty, respectively.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "SizeY",
            "altNames": [
                "SizeY(N)",
                "SizeY(H)"
            ],
            "description": "Specifies the Width tile size values of an entire area level, which are used for determining how to build the level, for Normal, Nightmare, and Hell Difficulty, respectively.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "OffsetX",
            "description": "Specifies the location X offset coordinate (measured in tile size) for the origin point of the area level in the world.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "OffsetY",
            "description": "Specifies the location offset Y coordinate (measured in tile size) for the origin point of the area level in the world.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Depend",
            "description": "Assigns another level to be this area level's depended level, which controls this area level's position and how it starts building its tiles. Uses the $!#Id!$ field. If this equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Teleport",
            "description": "Controls the functionality of teleport skills like Sorceress Teleport and Assassin Dragon Flight on the area level",
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
                    "Teleport is disabled on the area level"
                ],
                [
                    "1",
                    "Teleport is enabled on the area level"
                ],
                [
                    "2",
                    "Teleport is enabled on the area level but adheres to the collision of the rooms"
                ]
            ]
        },
        {
            "name": "Rain",
            "description": "Boolean Field. If equals 1, then allow rain to play its effects on the area level. If the level is part of Act 5, then it will snow on the area level, instead of rain. If equals 0, then it will never rain on the area level.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Mud",
            "description": "Boolean Field. If equals 1, then random bubbles will animate on the tiles that are flagged as water tiles. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "NoPer",
            "description": "Boolean Field. If equals 1, then allow the use of display option of Perspective Mode while the player is in the level. If equals 0, then disable the option of Perspective Mode and force the player to use Orthographic Mode while the player is in the level.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "LOSDraw",
            "description": "Boolean field. If equals 1, then the level will check the player's line of sight before drawing monsters. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "FloorFilter",
            "description": "Boolean field. If equals 1 and if the floor's layer in the area level equals 1, then draw the floor tiles with a linear texture sampler. If equals 0, then draw the floor tiles with a nearest texture sampler.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "BlankScreen",
            "description": "Boolean field. If equals 1, then draw the area level screen. If equals 0, then do not draw the area level screen, meaning that the level will be a blank screen.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "DrawEdges",
            "description": "Boolean field. If equals 1, then draw the areas in levels that are not covered by floor tiles. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "DrlgType",
            "description": "Determines the type of Dynamic Random Level Generation used for building and handling different elements of the area level. Uses a numeric code to handle which type of DRLG is used.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
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
                    "Maze"
                ],
                [
                    "2",
                    "Preset"
                ],
                [
                    "3",
                    "Outdoor"
                ]
            ]
        },
        {
            "name": "LevelType",
            "description": "Defines the Level Type used for this area level. Uses $!LvlTypes#Id!$, which is determined by what order it is defined in the $!LvlTypes!$ file.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "SubType",
            "description": "Controls the group of tile substitutions for the area level (see $!LvlSub!$). There are defined sub types to choose from.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "-1",
                    "None"
                ],
                [
                    "0",
                    "Border Cliffs"
                ],
                [
                    "1",
                    "Border Middle"
                ],
                [
                    "2",
                    "Border Corner"
                ],
                [
                    "3",
                    "Border General"
                ],
                [
                    "4",
                    "Border Wild Waypoint"
                ],
                [
                    "5",
                    "Border Wild Shrine"
                ],
                [
                    "6",
                    "Border Wild Themes"
                ],
                [
                    "7",
                    "Border Desert Waypoint"
                ],
                [
                    "8",
                    "Border Desert Shrine"
                ],
                [
                    "9",
                    "Border Desert Themes"
                ],
                [
                    "10",
                    "Siege Dirt"
                ],
                [
                    "11",
                    "Siege Snow"
                ],
                [
                    "12",
                    "Barricade"
                ],
                [
                    "13",
                    "Broken Barricade"
                ]
            ]
        },
        {
            "name": "SubTheme",
            "description": "Controls which theme number to use in a Level Substitution (See $!LvlSub!$). The allowed values are 0 to 4, which convey which $!LvlSub#Prob#!$, $!LvlSub#Trials#!$, and $!LvlSub#Max#!$ field to use. If this equals -1, then there is no sub theme for the area level.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "SubWaypoint",
            "description": "Controls the level substitutions for adding waypoints in the area level (see $!LvlSub!$). This uses a defined sub type to choose from (See $!#SubType!$). This will depend on the room having a waypoint tile.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "SubShrine",
            "description": "Controls the level substitutions for adding shrines in the area level (see $!LvlSub!$). This uses a defined sub type to choose from (See $!#SubType!$). This will depend on the room allowing for a shrine to spawn.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Vis#",
            "altNames": [
                "Vis0",
                "Vis1",
                "Vis2",
                "Vis3",
                "Vis4",
                "Vis5",
                "Vis6",
                "Vis7"
            ],
            "description": "Defines the visibility of other area levels involved with this area level, allowing for travel functionalities between levels. This uses the $!#Id!$ field of another defined area level to link with this area level. If this equals 0, then no area level is specified.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Warp#",
            "altNames": [
                "Warp0",
                "Warp1",
                "Warp2",
                "Warp3",
                "Warp4",
                "Warp5",
                "Warp6",
                "Warp7"
            ],
            "description": "Uses the $!LvlWarp#Id!$ field, which defines which Level Warp to use when exiting the area level. This is connected with the definition of the related $!#Vis#!$ field. If this equals -1, then no Level Warp is specified which should also mean that the related $!#Vis#!$ field is not defined.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Intensity",
            "description": "Controls the intensity value of the area level's ambient colors. This affects brightness of the room's RGB colors. Uses a value between 0 and 128. If all these related fields equal 0, then the game ignores setting the area level's ambient colors.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Red",
            "description": "Controls the red value of the area level's ambient colors. Uses a value between 0 and 255.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Green",
            "description": "Controls the green value of the area level's ambient colors. Uses a value between 0 and 255.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Blue",
            "description": "Controls the blue value of the area level's ambient colors. Uses a value between 0 and 255.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Portal",
            "description": "Boolean Field. If equals 1, then this area level will be flagged as a portal level, which is saved in the player's information and can be used for keeping track of the player's portal functionalities. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Position",
            "description": "Boolean Field. If equals 1, then enable special casing for positioning the player on the area level. This can mean that the player could spawn on a different location on the area level, depending on the level room's position type. An example can be when the player spawns in a town when loading the game, or using a waypoint, or using a town portal. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "SaveMonsters",
            "description": "Boolean Field. If equals 1, then the game will save the monsters in the area level, such as when all players leave the area level. If equals 0, then monsters will not be saved and will be removed. This is usually disabled for areas where monsters do not spawn.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Quest",
            "description": "Controls what quest record is attached to monsters that spawn in this area level. This is used for specific quests handling lists of monsters in the area level.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "appendField": {
                "file": "enums",
                "field": "Quests"
            }
        },
        {
            "name": "WarpDist",
            "description": "Defines the minimum pixel distance from a Level Warp that a monster is allowed to spawn near. Tile distance values are converted to game pixel distance values by multiplying the tile distance value by 160 / 32, where 160 is the width of pixels of a tile.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "MonLvl",
            "altNames": [
                "MonLvl(N)",
                "MonLvl(H)"
            ],
            "description": "Controls the overall monster level for the area level for Normal, Nightmare, and Hell Difficulty, respectively. This is for Classic mode only. This can affect the highest item level allowed to drop in this area level.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "MonLvlEx",
            "altNames": [
                "MonLvlEx(N)",
                "MonLvlEx(H)"
            ],
            "description": "Controls the overall monster level for the area level for Normal, Nightmare, and Hell Difficulty, respectively. This is for Expansion mode only. This can affect the highest item level allowed to drop in this area level.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "MonDen",
            "altNames": [
                "MonDen(N)",
                "MonDen(H)"
            ],
            "description": "Controls the monster density on the area level for Normal, Nightmare, and Hell Difficulty, respectively. This is a random value out of 100000, which will determine whether to spawn or not spawn a monster pack in the room of the area level. If this value equals 0, then no random monsters will populate on the area level.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "MonUMin",
            "altNames": [
                "MonUMin(N)",
                "MonUMin(H)"
            ],
            "description": "Defines the minimum number of Unique Monsters that can spawn in the area level for Normal, Nightmare, and Hell Difficulty, respectively. This field depends on the related $!#MonDen!$ field being defined.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "MonUMax",
            "altNames": [
                "MonUMax(N)",
                "MonUMax(H)"
            ],
            "description": "Defines the maximum number of Unique Monsters that can spawn in the area level for Normal, Nightmare, and Hell Difficulty, respectively. This field depends on the related $!#MonDen!$ field being defined. Each room in the area level will attempt to spawn a Unique Monster with a 5/100 random chance, and this field's value will cap the number of successful attempts for the entire area level.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "MonWndr",
            "description": "Boolean Field. If equals 1, then allow Wandering Monsters to spawn on this area level (see $!wanderingmon!$). This field depends on the related $!#MonDen!$ field being defined. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "MonSpcWalk",
            "description": "Defines a distance value, used to handle monster pathing AI when the level has certain pathing blockers, such as jail bars or rivers. In these cases, monsters will walk randomly until a player is located within this distance value or when the monsters find a possible path to target the player. If this equals 0, then ignore this field.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "NumMon",
            "description": "Controls the number of different monsters randomly spawn in the area level. The maximum value is 13. This controls the number of random selections from the 25 related $!#mon#!$ and $!#umon#!$ fields or $!#nmon#!$ fields, depending on the game difficulty.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "mon#",
            "altNames": [
                "mon1",
                "mon2",
                "mon3",
                "mon4",
                "mon5",
                "mon6",
                "mon7",
                "mon8",
                "mon9",
                "mon10",
                "mon11",
                "mon12",
                "mon13",
                "mon14",
                "mon15",
                "mon16",
                "mon17",
                "mon18",
                "mon19",
                "mon20",
                "mon21",
                "mon22",
                "mon23",
                "mon24",
                "mon25"
            ],
            "description": "Defines which monsters can spawn on the area level for Normal Difficulty.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "monstats",
                "field": "Id"
            }
        },
        {
            "name": "rangedspawn",
            "description": "Boolean Field. If equals 1, then for the first monster, try to pick a ranged type. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "nmon#",
            "altNames": [
                "nmon1",
                "nmon2",
                "nmon3",
                "nmon4",
                "nmon5",
                "nmon6",
                "nmon7",
                "nmon8",
                "nmon9",
                "nmon10",
                "nmon11",
                "nmon12",
                "nmon13",
                "nmon14",
                "nmon15",
                "nmon16",
                "nmon17",
                "nmon18",
                "nmon19",
                "nmon20",
                "nmon21",
                "nmon22",
                "nmon23",
                "nmon24",
                "nmon25"
            ],
            "description": "Defines which monsters can spawn on the area level for Nightmare Difficulty and Hell Difficulty.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "monstats",
                "field": "Id"
            }
        },
        {
            "name": "umon#",
            "altNames": [
                "umon1",
                "umon2",
                "umon3",
                "umon4",
                "umon5",
                "umon6",
                "umon7",
                "umon8",
                "umon9",
                "umon10",
                "umon11",
                "umon12",
                "umon13",
                "umon14",
                "umon15",
                "umon16",
                "umon17",
                "umon18",
                "umon19",
                "umon20",
                "umon21",
                "umon22",
                "umon23",
                "umon24",
                "umon25"
            ],
            "description": "Defines which monsters can spawn as Unique monsters on this area level for Normal Difficulty.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "monstats",
                "field": "Id"
            }
        },
        {
            "name": "cmon#",
            "altNames": [
                "cmon1",
                "cmon2",
                "cmon3",
                "cmon4"
            ],
            "description": "Defines which Critter monsters can spawn on the area level. Critter monsters are determined by the $!monstats2#critter!$ field.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "monstats",
                "field": "Id"
            }
        },
        {
            "name": "cpct#",
            "altNames": [
                "cpct1",
                "cpct2",
                "cpct3",
                "cpct4"
            ],
            "description": "Controls the percent chance (out of 100) to spawn a Critter monster on the area level.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "camt#",
            "altNames": [
                "camt1",
                "camt2",
                "camt3",
                "camt4"
            ],
            "description": "Controls the amount of Critter monsters to spawn on the area level after they succeeded their random spawn chance from the related $!#cpct#!$ field.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "Themes",
            "description": "Controls the type of theme when building a level room. This value is a summation of possible values to build a bit mask for determining which themes to use when building a level room. For example, a value of 60 means that the area level can have the following themes: 32, 16, 8, 4.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            },
            "bittable": [
                "Object Empty Theme (no objects spawn)",
                "Barrel Theme (create random barrel objects)",
                "Shrine Theme",
                "Treasure Theme (create random items)",
                "Armor Stand Theme",
                "Weapon Rack Theme"
            ]
        },
        {
            "name": "SoundEnv",
            "description": "Uses the index of an entry from $!SoundEnviron!$, which controls what music is played while the player is in the area level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Waypoint",
            "description": "Defines the unique numeric ID for the Waypoint in the area level. If this value is greater than or equal to 255, then ignore this field.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "LevelName",
            "description": "String Field. Used for displaying the name of the area level, such as when in the UI when the Automap is being viewed.",
            "type": {
                "type": "text",
                "dataLength": 39,
                "memSize": 0
            }
        },
        {
            "name": "LevelWarp",
            "description": "String Field. Used displaying the entrance name of the area level on Level Warp tiles that link to this area level. For example, when the player mouse hovers over a tile to warp to the area level, then this string is displayed.",
            "type": {
                "type": "text",
                "dataLength": 39,
                "memSize": 0
            }
        },
        {
            "name": "LevelEntry",
            "description": "String Field. Used for displaying the UI popup title string when the player enters the area level.",
            "type": {
                "type": "text",
                "dataLength": 39,
                "memSize": 0
            }
        },
        {
            "name": "ObjGrp#",
            "altNames": [
                "ObjGrp0",
                "ObjGrp1",
                "ObjGrp2",
                "ObjGrp3",
                "ObjGrp4",
                "ObjGrp5",
                "ObjGrp6",
                "ObjGrp7"
            ],
            "description": "Uses a numeric ID to define which possible Object Groups to spawn in this area level (See $!objgroup!$). The game will go through each of these fields, so there can be more than 1 Object Group used in an area level. If this value equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "ObjPrb#",
            "altNames": [
                "ObjPrb0",
                "ObjPrb1",
                "ObjPrb2",
                "ObjPrb3",
                "ObjPrb4",
                "ObjPrb5",
                "ObjPrb6",
                "ObjPrb7"
            ],
            "description": "Determines the random chance (out of 100) for each Object Group to spawn in the area level. This field depends on the related $!#ObjGrp#!$ field being defined.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "LevelGroup",
            "description": "Defines what group this level belongs to. Used for condensing level names in desecrated (terror) zones messaging.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "LevelGroups",
                "field": "LevelGroupId"
            }
        },
        {
            "name": "PreventTownPortal",
            "description": "Boolean Field. If equals 1, then prevent town portals from being opened while in this level. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        }
    ]
}