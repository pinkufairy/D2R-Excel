// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["monstats2"] = {
    "title": "monstats2.txt",
    "referenceFiles": [
        "enums",
        "HitClass",
        "MonMode"
    ],
    "overview": "This file controls additional functionalities and statistics for every monster in the game.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Id",
            "description": "Controls the unique name ID to define the monstats2 entry.",
            "type": {
                "type": "text",
                "dataLength": 47,
                "memSize": 16
            }
        },
        {
            "name": "Height",
            "description": "Determines the height of the monster. This has 2 purposes. The first purpose is to act as an index value for selecting which icebreak missile to use when the monster dies while frozen. The second purpose is to select a code which affects what attack animation the player characters will use when attacking the monster (Attack1 and or Attack2). See each code description types below.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "table": [
                [
                    "Code",
                    "Description",
                    "Code",
                    "Description"
                ],
                [
                    "1",
                    "icebreaksmall",
                    "1",
                    "Low Height"
                ],
                [
                    "2",
                    "icebreakmedium",
                    "2",
                    "High Height"
                ],
                [
                    "3",
                    "icebreaklarge",
                    "3",
                    "Both types of Heights"
                ],
                [
                    "4",
                    "icebreaksmoke",
                    "",
                    ""
                ]
            ]
        },
        {
            "name": "OverlayHeight",
            "description": "Determines the height value of overlays (See $!Overlay!$) for the monster",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "pixHeight",
            "description": "Determines the pixel height value for the damage bar when the monster is selected",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "SizeX",
            "altNames": [
                "SizeY"
            ],
            "description": "Determines the tile grid size of the monster which is use for handling placement when the monster spawns or uses movement skills",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "spawnCol",
            "description": "Controls the method for spawning the monster based on the collisions in the environment",
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
                    "Normal - Basic Monster Pathing"
                ],
                [
                    "1",
                    "Water - Handle water terrain where units cannot normally walk, but can fly over"
                ],
                [
                    "2",
                    "Preset - Placement handler which considers walls, no pathable areas, objects, doors, items, and other monsters"
                ],
                [
                    "3",
                    "Force - Override any collision"
                ]
            ]
        },
        {
            "name": "MeleeRng",
            "description": "Controls the range of the monster's melee attack, which can affect also affect certain AI pathing. If this value equals 255, then refer to the monster's weapon class ($!#BaseW!$).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "BaseW",
            "description": "Defines the monster's base weapon class, which can affect how the monster attacks. Uses a $!enums#EWEAPONCLASS!$",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            },
            "appendField": {
                "file": "enums",
                "field": "EWEAPONCLASS"
            }
        },
        {
            "name": "HitClass",
            "description": "Defines the specific class of an attack when the monster successfully hits with an attack. This can affect the sound and overlay display of the attack hit. Uses an integer index.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "appendField": {
                "file": "HitClass",
                "field": "Code"
            }
        },
        {
            "name": "COMPv",
            "altNames": [
                "HDv",
                "TRv",
                "LGv",
                "RAv",
                "LAv",
                "RHv",
                "LHv",
                "SHv",
                "S1v",
                "S2v",
                "S3v",
                "S4v",
                "S5v",
                "S6v",
                "S7v",
                "S8v"
            ],
            "description": "Formula fields that define the types of visual graphics to use for the specific component field. Users can add input parameters by adding a comma \",\" to the input and using a code.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Comma \",\" separated inputs. For a list of possible component inputs, see the $!compcode!$ file."
            },
            "table": [
                [
                    "Field",
                    "Description"
                ],
                [
                    "HDv",
                    "Head visual"
                ],
                [
                    "TRv",
                    "Torso visual"
                ],
                [
                    "LGv",
                    "Legs visual"
                ],
                [
                    "RAv",
                    "Right Arm visual"
                ],
                [
                    "LAv",
                    "Left Arm visual"
                ],
                [
                    "RHv",
                    "Right Hand visual"
                ],
                [
                    "LHv",
                    "Left Hand visual"
                ],
                [
                    "SHv",
                    "Shield visual"
                ],
                [
                    "S1v to S8v",
                    "Special 1 to Special 8 visual"
                ]
            ]
        },
        {
            "name": "COMP",
            "altNames": [
                "HD",
                "TR",
                "LG",
                "RA",
                "LA",
                "RH",
                "LH",
                "SH",
                "S1",
                "S2",
                "S3",
                "S4",
                "S5",
                "S6",
                "S7",
                "S8"
            ],
            "description": "Boolean fields, which control which specific component piece is enabled for the monster. If equals 1, then the component is enabled. If equals 0, then the monster does not have that component. Corresponds to the matching $!#COMPv!$",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "TotalPieces",
            "description": "Defines the total amount of component pieces that the monster uses. This value should match the number of enabled Boolean fields listed in $!#COMP!$.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "mDT",
            "description": "Boolean Field. If equals 1, then enable the Death Mode for the monster. If equals 0, then this mode is disabled.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mNU",
            "description": "Boolean Field. If equals 1, then enable the Neutral Mode for the monster. If equals 0, then this mode is disabled.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mWL",
            "description": "Boolean Field. If equals 1, then enable the Walk Mode for the monster. If equals 0, then this mode is disabled.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mGH",
            "description": "Boolean Field. If equals 1, then enable the Get Hit Mode for the monster. If equals 0, then this mode is disabled.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mA1",
            "description": "Boolean Field. If equals 1, then enable the Attack 1 Mode for the monster. If equals 0, then this mode is disabled.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mA2",
            "description": "Boolean Field. If equals 1, then enable the Attack 2 Mode for the monster. If equals 0, then this mode is disabled.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mBL",
            "description": "Boolean Field. If equals 1, then enable the Block Mode for the monster. If equals 0, then this mode is disabled.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mSC",
            "description": "Boolean Field. If equals 1, then enable the Cast Mode for the monster. If equals 0, then this mode is disabled.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mS#",
            "altNames": [
                "mS1",
                "mS2",
                "mS3",
                "mS4"
            ],
            "description": "Boolean Field. If equals 1, then enable the corresponding Skill Mode for the monster. If equals 0, then this mode is disabled.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mDD",
            "description": "Boolean Field. If equals 1, then enable the Dead Mode for the monster. If equals 0, then this mode is disabled.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mKB",
            "description": "Boolean Field. If equals 1, then enable the Knockback Mode for the monster. If equals 0, then this mode is disabled.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mSQ",
            "description": "Boolean Field. If equals 1, then enable the Sequence Mode for the monster. If equals 0, then this mode is disabled.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mRN",
            "description": "Boolean Field. If equals 1, then enable the Run Mode for the monster. If equals 0, then this mode is disabled.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "dDT",
            "description": "Defines the number of directions that the monster can face during Death Mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "dNU",
            "description": "Defines the number of directions that the monster can face during Neutral Mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "dWL",
            "description": "Defines the number of directions that the monster can face during Walk Mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "dGH",
            "description": "Defines the number of directions that the monster can face during Get Hit Mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "dA1",
            "description": "Defines the number of directions that the monster can face during Attack 1 Mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "dA2",
            "description": "Defines the number of directions that the monster can face during Attack 2 Mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "dBL",
            "description": "Defines the number of directions that the monster can face during Block Mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "dSC",
            "description": "Defines the number of directions that the monster can face during Cast Mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "dS#",
            "altNames": [
                "dS1",
                "dS2",
                "dS3",
                "dS4"
            ],
            "description": "Defines the number of directions that the monster can face during the corresponding Skill Mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "dDD",
            "description": "Defines the number of directions that the monster can face during Dead Mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "dKB",
            "description": "Defines the number of directions that the monster can face during Knockback Mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "dSQ",
            "description": "Defines the number of directions that the monster can face during Sequence Mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "dRN",
            "description": "Defines the number of directions that the monster can face during Run Mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "A1mv",
            "description": "Boolean Field. If equals 1, then enable the Attack 1 Mode while the monster is moving with the Walk mode or Run mode. If equals 0, then this mode is disabled while the monster is moving.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "A2mv",
            "description": "Boolean Field. If equals 1, then enable the Attack 2 Mode while the monster is moving with the Walk mode or Run mode. If equals 0, then this mode is disabled while the monster is moving.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SCmv",
            "description": "Boolean Field. If equals 1, then enable the Cast Mode while the monster is moving with the Walk mode or Run mode. If equals 0, then this mode is disabled while the monster is moving.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "S#mv",
            "altNames": [
                "S1mv",
                "S2mv",
                "S3mv",
                "S4mv"
            ],
            "description": "Boolean Field. If equals 1, then enable the corresponding Skill Mode while the monster is moving with the Walk mode or Run mode. If equals 0, then this mode is disabled while the monster is moving.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "noGfxHitTest",
            "description": " Boolean Field. If equals 1, then enable the mouse selection bounding box functionality around the monster. If equals 0, then the monster cannot be selected by the mouse.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "htTop",
            "description": "Define the pixel top offset around the monster for the mouse selection bounding box functionality. This field relies on the $!#noGfxHitTest!$ field being enabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "htLeft",
            "description": "Define the pixel left offset around the monster for the mouse selection bounding box functionality. This field relies on the $!#noGfxHitTest!$ field being enabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "htWidth",
            "description": "Define the pixel right offset around the monster for the mouse selection bounding box functionality. This field relies on the $!#noGfxHitTest!$ field being enabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "htHeight",
            "description": "Define the pixel bottom offset around the monster for the mouse selection bounding box functionality. This field relies on the $!#noGfxHitTest!$ field being enabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "restore",
            "description": "Determines if the monster should be placed on the inactive list, to be saved when the level unloads. If equals 0, then do not save the monster. If equals 1, then rely on other checks to determine to save the monster. If equals 2, then force save the monster.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "automapCel",
            "description": "Controls what index of the Automap tiles to use to display this monster on the Automap. This field relies on the $!#noMap!$ field being disabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "noMap",
            "description": "Boolean Field. If equals 1, then the monster will not appear on the Automap. If equals 0, then the monster will normally appear on the Automap.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "noOvly",
            "description": "Boolean Field. If equals 1, then no looping overlays will be drawn on the monster. If equals 0, then overlays will be drawn on the monster. (See $!Overlay!$)",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "isSel",
            "description": "Boolean Field. If equals 1, then the monster is selectable and can be targeted. If equals 0, then the monster cannot be selected.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "alSel",
            "description": "Boolean Field. If equals 1, then the player can always select the monster, regardless of being an ally or enemy. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "noSel",
            "description": "Boolean Field. If equals 1, then the player can never select the monster. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "shiftSel",
            "description": "Boolean Field. If equals 1, then the player can target this monster when holding the Shift key and clicking to use a skill. If equals 0, then the monster cannot be targeted while the player is holding the Shift key.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "corpseSel",
            "description": "Boolean Field. If equals 1, then the monster's corpse can be with the mouse cursor. If equals 0, then the monster's corpse cannot be selected with the mouse cursor.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "isAtt",
            "description": "Boolean Field. If equals 1, then the monster can be attacked. If equals 0, then the monster cannot be attacked.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "revive",
            "description": "Boolean Field. If equals 1, then the monster is allowed to be revived by the Necromancer Revive skill. If equals 0, then the monster cannot be revived by the Necromancer Revive skill.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "limitCorpses",
            "description": "Boolean Field. If equals 1, then the monster's corpse will be placed into a pool with all other corpses with this field checked. Once that pool reaches the max (50), the corpses at the beginning of the pool start getting removed.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "critter",
            "description": "Boolean Field. If equals 1, then the monster will be flagged as a critter, which gives some special case handling such as not creating impact sounds and differently handling its spawn placement in presets. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "small",
            "description": "Boolean Field. If equals 1, then the monster will be classified as a small type, which can affect what types of missiles can be used on the monster (Example: Barbarian Grim Ward size) or how the monster is knocked back. If equals 0, then ignore this. If this field is enabled, then the $!#large!$ field should be disabled, to avoid confusion.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "large",
            "description": "Boolean Field. If equals 1, then the monster will be classified as a large type, which can affect what types of missiles can be used on the monster (Example: Barbarian Grim Ward size) or how the monster is knocked back. If equals 0, then ignore this. If this field is enabled, then the $!#small!$ field should be disabled, to avoid confusion.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "soft",
            "description": "Boolean Field. If equals 1, then the monster's corpse is classified as soft bodied, meaning that its corpse can be used by certain corpse skills such as Barbarian Find Potion, Find Item, or Grim Ward. If equals 0, then the monster's corpse cannot be used for these skills.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "inert",
            "description": "Boolean Field. If equals 1, then the monster will never attack its enemies. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "objCol",
            "description": "Boolean Field. If equals 1 and the monster class is \"barricadedoor\", \"barricadedoor2\", or \"evilhut\", then the monster will place an invisible object with collision. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "deadCol",
            "description": "Boolean Field. If equals 1, then the monster's corpse will have collision with other units. If equals 0, then the monster's corpse will not have collision.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "unflatDead",
            "description": "Boolean Field. If equals 1, then ignore the corpse draw order for rendering the sprite on top of others, while the monster is dead. If equals 0, then the monster's corpse will have a normal corpse draw order.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Shadow",
            "description": "Boolean Field. If equals 1, then the monster will project a shadow on the ground. If equals 0, then the monster will not project a shadow.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "noUniqueShift",
            "description": "Boolean Field. If equals 1 and the monster is a Unique monster, then the monster will not have random color palette transform shifts.  If equals 0, then the non-Unique monster will have random color palette transform shifts.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "compositeDeath",
            "description": "Boolean Field. If equals 1, then the monster's Death Mode and Dead mode will make use of its component system. If equals 0, then the monster will default to using the Hand-To-Hand weapon class and no component system.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "localBlood",
            "description": "Controls the color of the monster's blood based on the region locale. If equals 0, then do not change the blood to green and keep it red. If equals 1, then change the monster's special components to use the green blood locale. If equals 2, then change the blood to green.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Bleed",
            "description": "Controls if the monster will create blood missiles. If equals 0, then the monster will never bleed. If equals 1, then the monster will randomly create the \"blood1\" or \"blood2\" missiles when hit. If equals 2, then the monster will randomly create the \"blood1\", \"blood2\", \"bigblood1\", or \"bigblood2\" missiles when hit.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Light",
            "description": "Controls the monster's minimum Light Radius size (measured in grid sub-tiles)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "light-r",
            "description": "Controls the red color value of the monster's Light Radius (Uses a value from 0 to 255)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "light-g",
            "description": "Controls the green color value of the monster's Light Radius (Uses a value from 0 to 255)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "light-b",
            "description": "Controls the blue color value of the monster's Light Radius (Uses a value from 0 to 255)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Utrans",
            "altNames": [
                "Utrans(N)",
                "Utrans(H)"
            ],
            "description": "Modifies the color palette transform for the monster respectively in Normal, Nightmare, and Hell difficulty.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "appendField": {
                "file": "enums",
                "field": "EMTRANSFORM"
            }
        },
        {
            "name": "InfernoLen",
            "description": "The frame length to hold the channel cast time of the inferno skill. This is used for when the monster has the \"inferno\" state, or for Diablo when he is using the \"DiabLight\" skill.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "InfernoAnim",
            "description": "The exact frame in the channel animation to loop back and start at again",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "InfernoRollback",
            "description": "The exact frame in the channel animation to determine when to roll back to the $!#InfernoAnim!$ frame",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "ResurrectMode",
            "description": "Controls which monster mode to set on the monster when it is resurrected. Uses a $!MonMode#code!$",
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
            "name": "ResurrectSkill",
            "description": "Controls what skill should the monster use when it is resurrected.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "skills",
                "field": "skill"
            }
        },
        {
            "name": "SpawnUniqueMod",
            "description": "Controls what unique modifier the monster should always spawn with.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "monumod",
                "field": "uniquemod"
            }
        }
    ]
}