// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["objects"] = {
    "title": "objects.txt",
    "referenceFiles": [
        "ObjMode"
    ],
    "overview": "This file controls the functionalities of all objects found in area levels. The order of each object defined in this file will convey what ID value it has, and thus should not be changed.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Class",
            "description": "Defines the unique type class of the object which is used to reference this object.",
            "type": {
                "type": "text",
                "dataLength": 63,
                "memSize": 16
            }
        },
        {
            "name": "Name",
            "description": "String key. Used as the display name of the object when being highlighted by the player.",
            "type": {
                "type": "text",
                "dataLength": 31,
                "memSize": 0
            }
        },
        {
            "name": "Token",
            "description": "Determines what files to use to display the graphics of the object.",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            }
        },
        {
            "name": "Selectable#",
            "altNames": [
                "Selectable0",
                "Selectable1",
                "Selectable2",
                "Selectable3",
                "Selectable4",
                "Selectable5",
                "Selectable6",
                "Selectable7"
            ],
            "description": "Boolean Field. If equals 1, then the object can be selected by the player and highlighted when hovered on by the mouse cursor. If equals 0, then the object cannot be selected and will not highlight when the player hovers the mouse over it. Each field is numbered, correlating to 1 of 8 Object Modes that the object uses (See $!ObjMode#Token!$).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "appendField": {
                "file": "ObjMode",
                "field": "Token"
            }
        },
        {
            "name": "SizeX",
            "altNames": [
                "SizeY"
            ],
            "description": "Controls the amount of sub tiles that the object occupies using X and Y coordinates. This is generally used for measuring the object's size when trying to spawn objects in rooms and controlling their distances apart.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "FrameCnt#",
            "altNames": [
                "FrameCnt0",
                "FrameCnt1",
                "FrameCnt2",
                "FrameCnt3",
                "FrameCnt4",
                "FrameCnt5",
                "FrameCnt6",
                "FrameCnt7"
            ],
            "description": "Controls the frame length of the object's mode. If this equals 0, then that mode will be skipped. Each field is numbered, correlating to 1 of 8 Object Modes that the object uses (See $!ObjMode#Token!$).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            },
            "appendField": {
                "file": "ObjMode",
                "field": "Token"
            }
        },
        {
            "name": "FrameDelta#",
            "altNames": [
                "FrameDelta0",
                "FrameDelta1",
                "FrameDelta2",
                "FrameDelta3",
                "FrameDelta4",
                "FrameDelta5",
                "FrameDelta6",
                "FrameDelta7"
            ],
            "description": "Controls the animation frame rate of how many frames to update per delta (Measured in 256ths). Each field is numbered, correlating to 1 of 8 Object Modes that the object uses (See $!ObjMode#Token!$).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            },
            "appendField": {
                "file": "ObjMode",
                "field": "Token"
            }
        },
        {
            "name": "CycleAnim#",
            "altNames": [
                "CycleAnim0",
                "CycleAnim1",
                "CycleAnim2",
                "CycleAnim3",
                "CycleAnim4",
                "CycleAnim5",
                "CycleAnim6",
                "CycleAnim7"
            ],
            "description": "Boolean Field. If equals 1, then the object's current animation will loop back to play again when it finishes. If equals 0, then the object will generally play the Opened mode after playing the Operating mode. Each field is numbered, correlating to 1 of 8 Object Modes that the object uses (See $!ObjMode#Token!$).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "appendField": {
                "file": "ObjMode",
                "field": "Token"
            }
        },
        {
            "name": "Lit#",
            "altNames": [
                "Lit0",
                "Lit1",
                "Lit2",
                "Lit3",
                "Lit4",
                "Lit5",
                "Lit6",
                "Lit7"
            ],
            "description": "Controls the Light Radius distance value for the object. Each field is numbered, correlating to 1 of 8 Object Modes that the object uses (See $!ObjMode#Token!$).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "appendField": {
                "file": "ObjMode",
                "field": "Token"
            }
        },
        {
            "name": "BlocksLight#",
            "altNames": [
                "BlocksLight0",
                "BlocksLight1",
                "BlocksLight2",
                "BlocksLight3",
                "BlocksLight4",
                "BlocksLight5",
                "BlocksLight6",
                "BlocksLight7"
            ],
            "description": "Boolean Field. If equals 1, then the object will draw a shadow. If equals 0, then the object will not draw a shadow. Each field is numbered, correlating to 1 of 8 Object Modes that the object uses (See $!ObjMode#Token!$).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "appendField": {
                "file": "ObjMode",
                "field": "Token"
            }
        },
        {
            "name": "HasCollision#",
            "altNames": [
                "HasCollision0",
                "HasCollision1",
                "HasCollision2",
                "HasCollision3",
                "HasCollision4",
                "HasCollision5",
                "HasCollision6",
                "HasCollision7"
            ],
            "description": "Boolean Field. If equals 1, then the object will have collision. If equals 0, then the object will not have collision, and units can walk through it. Each field is numbered, correlating to 1 of 8 Object Modes that the object uses (See $!ObjMode#Token!$).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "appendField": {
                "file": "ObjMode",
                "field": "Token"
            }
        },
        {
            "name": "IsAttackable0",
            "description": "Boolean Field. If equals 1, then the player can target this object to be attacked, and the player will use the Kick skill when operating the object. If the object has the Class equal to \"CompellingOrb\" or \"SoulStoneForge\", then instead of using the Kick skill, players will use the Attack skill when operating the object. If equals 0, then ignore this, and the player will not use a skill or animation when operating the object.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Start#",
            "altNames": [
                "Start0",
                "Start1",
                "Start2",
                "Start3",
                "Start4",
                "Start5",
                "Start6",
                "Start7"
            ],
            "description": "Controls the frame for where the object will start playing the next animation.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "appendField": {
                "file": "ObjMode",
                "field": "Token"
            }
        },
        {
            "name": "EnvEffect",
            "description": "Boolean Field. If equals 1, then enable the object to update its mode based on the game's time of day. This can mean that when the object is spawned, and it is current day time and the object is in Opened or Operating mode, then it will reset back to Neutral mode. Also, if the current time is dusk, night, or dawn and the object is in Neutral mode, then it will change to Operating mode. If equals 0, then the object will not update its mode based on the time of day.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "IsDoor",
            "description": "Boolean Field. If equals 1, then the object will be treated as a door when the game handles its collision, animation properties, tooltips, and commands. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "BlocksVis",
            "description": "Boolean Field. If equals 1, then the object will block the player's line of sight to see anything beyond the object. If equals 0, then ignore this. This field relies on the $!#IsDoor!$ field being enabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Orientation",
            "description": "Determines the object's orientation type, which can affect mouse selection priority of the object when a unit is being rendered in front of or behind the object (such as a door object covering a unit and how the mouse selection should handle that). This also affects the randomization of the coordinates when spawning the object near the edge of a room.",
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
                    "0 (or other #)",
                    "Center"
                ],
                [
                    "1",
                    "Right"
                ],
                [
                    "2",
                    "Left"
                ]
            ]
        },
        {
            "name": "OrderFlag#",
            "altNames": [
                "OrderFlag0",
                "OrderFlag1",
                "OrderFlag2",
                "OrderFlag3",
                "OrderFlag4",
                "OrderFlag5",
                "OrderFlag6",
                "OrderFlag7"
            ],
            "description": "Controls how the object's sprite is drawn, which can affect how it is displayed in Perspective game camera mode. Each field is numbered, correlating to 1 of 8 Object Modes that the object uses (See $!ObjMode#Token!$).",
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
                    "Do nothing"
                ],
                [
                    "1",
                    "Flat floor"
                ],
                [
                    "2",
                    "Wall"
                ]
            ],
            "appendField": {
                "file": "ObjMode",
                "field": "Token"
            }
        },
        {
            "name": "PreOperate",
            "description": "Boolean Field. If equals 1, then enable a random chance that the object will spawn in already in Opened mode. The game will choose a 1/14 chance that this can happen when the object is spawned. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Mode#",
            "altNames": [
                "Mode0",
                "Mode1",
                "Mode2",
                "Mode3",
                "Mode4",
                "Mode5",
                "Mode6",
                "Mode7"
            ],
            "description": "Boolean Field. If equals 1, then confirm that this object has the correlating mode. If equals 0, then this object will not have the correlating mode. This flag can affect how the object functions work. Each field is numbered, correlating to 1 of 8 Object Modes that the object uses (See $!ObjMode#Token!$).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "appendField": {
                "file": "ObjMode",
                "field": "Token"
            }
        },
        {
            "name": "Xoffset",
            "altNames": [
                "Yoffset"
            ],
            "description": "Controls the offset values in the X and Y directions for the object's visual graphics. This is measured in game pixels.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Draw",
            "description": "Boolean Field. If equals 1, then draw the object's shadows. If equal's 0, then do not draw the object's shadows.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Red",
            "description": "Controls the Red color gradient of the object's Light Radius. This field depends on the $!#Lit#!$ field having a value greater than 0.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Green",
            "description": "Controls the Green color gradient of the object's Light Radius. This field depends on the $!#Lit#!$ field having a value greater than 0.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Blue",
            "description": "Controls the Blue color gradient of the object's Light Radius. This field depends on the $!#Lit#!$ field having a value greater than 0.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
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
            "description": "Boolean Field. If equals 1, then the object will be flagged to have a specific composite piece, and the game will use the component system to handle the object's mouse selection collision box. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "table": [
                [
                    "Field",
                    "Description"
                ],
                [
                    "HD",
                    "Head"
                ],
                [
                    "TR",
                    "Torso"
                ],
                [
                    "LG",
                    "Legs"
                ],
                [
                    "RA",
                    "Right Arm"
                ],
                [
                    "LA",
                    "Left Arm"
                ],
                [
                    "RH",
                    "Right Hand"
                ],
                [
                    "LH",
                    "Left Hand"
                ],
                [
                    "SH",
                    "Shield"
                ],
                [
                    "S1 to S8",
                    "Special 1 to Special 8"
                ]
            ]
        },
        {
            "name": "TotalPieces",
            "description": "Defines the total amount of composite pieces. If this value is greater than 1, then the game will treat the object with the multiple composite piece system, and the player can hover the mouse over and select the object's different components.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "SubClass",
            "description": "Determines the object's class type by declaring a specific value. This is used by the various functions ($!#InitFn!$, $!#OperateFn!$, $!#PopulateFn!$) for knowing how to handle specific types of objects.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "bittable": [
                "Shrine",
                "Obelisk",
                "Portal (with a source & destination",
                "Trappable",
                "Fixed portal",
                "Well",
                "Waypoint",
                "Hidden"
            ]
        },
        {
            "name": "Xspace",
            "altNames": [
                "Yspace"
            ],
            "description": "Controls the X and Y distance delta values between adjacent objects when they are being populated together. This field is only used by the Populate Function ($!#PopulateFn!$) values 3 and 4, for the Add Barrels and Add Crates functions.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "NameOffset",
            "description": "Controls the vertical offset of the name tooltip's position above the object when the object is being selected. This is measured in pixels.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "MonsterOK",
            "description": "Boolean Field. If equals 1, then if a monster operates the object, then the object will run its operate function. If equals 0, then then if a monster operates the object, then the object will not run its operate function.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "ShrineFunction",
            "description": "Controls what shrine function to use (See the $!shrines#Code!$ field) when the object is told to do its Skill command.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Restore",
            "description": "Boolean Field. If equals 1, the game will restore the object in an inactive state when the area level repopulates after a player loads back into it. If equals 0, then the game will not restore the object.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Parm#",
            "altNames": [
                "Parm0",
                "Parm1",
                "Parm2",
                "Parm3",
                "Parm4"
            ],
            "description": "Used as possible parameters for various functions for the object",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Lockable",
            "description": "Boolean Field. If equals 1, then the object will have a random chance to spawn with the locked attribute and have a display tooltip name with the \"lockedchest\" string key. This only works when the object has the Init Function ($!#InitFn!$) value equal to 3. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Gore",
            "description": "Controls if an object should call its Populate function ($!#PopulateFn!$) when it is chosen as an object that can spawn in a room. Objects with a gore value greater than 2 will not be populated in rooms.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Sync",
            "description": "Boolean Field. If equals 1, then the object's animation rate will always match the $!#FrameDelta#!$ field (depending on the object's mode) which means the client and server will have synced animations. If equals 0, then the animation rate will have random visual variation.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Damage",
            "description": "Controls the amount of damage dealt by the object when it performs an Operate Function ($!#OperateFn!$) that deals damage such as triggering a pulse trap or an explosion.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Overlay",
            "description": "Boolean Field. If equals 1, then add and remove an overlay on the object based on its current mode. If equals 0, then ignore this. This field will only work with specific object Classes and will use specific Overlays for those objects.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "table": [
                [
                    "Object Class",
                    "Overlay"
                ],
                [
                    "SpecialChest100<br>KhalimHeartChest<br>KhalimEyeChest<br>KhalimBrainChest<br>HoradricCubeChest<br>HoradricScrollChest<br>StaffOfKingsChest<br>ConsolationChest",
                    "multigleam"
                ],
                [
                    "SevenTombsReceptacle",
                    "horadric_light"
                ],
                [
                    "TaintedSunShrine",
                    "horadric_light"
                ]
            ]
        },
        {
            "name": "CollisionSubst",
            "description": "Boolean Field. If equals 1, then the game will handle the bounding box around the object for mouse selection. The game will use the object's pixel size and $!#Left!$, $!#Top!$, $!#Width!$, $!#Height!$ field values to determine the collision size. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Left",
            "description": "Controls the starting X position offset value for drawing the bounding collision box around the object for mouse selection. This field depends on the $!#CollisionSubst!$ field being enabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Top",
            "description": "Controls the starting Y position offset value for drawing the bounding collision box around the object for mouse selection. This field depends on the $!#CollisionSubst!$ field being enabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Width",
            "description": "Controls the ending X position offset value for drawing the bounding collision box around the object for mouse selection. This field depends on the $!#CollisionSubst!$ field being enabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Height",
            "description": "Controls the ending Y position offset value for drawing the bounding collision box around the object for mouse selection. This field depends on the $!#CollisionSubst!$ field being enabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "OperateFn",
            "description": "Defines a function that the game will use when the player clicks on the object",
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
                    "Do nothing"
                ],
                [
                    "1",
                    "Spawn Item And Maybe Monster",
                    "General function to operate an object, spawn items. Also can randomly spawn a monster and/or trigger a trap."
                ],
                [
                    "2",
                    "Shrine",
                    "General function for Shrine objects. Uses fields from the $!shrines!$ file for determining specific Shrine functions."
                ],
                [
                    "3",
                    "Spawn Item Sometimes",
                    "General function to operate the object and spawn random items. Has a 20% chance to spawn a random item. Can also randomly trigger a trap."
                ],
                [
                    "4",
                    "Chest Operate",
                    "General function for opening chest objects and spawning random items. Handles key interaction functionality if the chest object is locked"
                ],
                [
                    "5",
                    "Barrel Operate",
                    "General function for breaking barrel objects and randomly spawning items or possibly a monster"
                ],
                [
                    "6",
                    "Quest Tome Operate",
                    "Handles updating The Forgotten Tower quest progress"
                ],
                [
                    "7",
                    "Barrel Exploding Operate",
                    "Explode the object and also explode adjacent Exploding Barrel object Classes"
                ],
                [
                    "8",
                    "Door Operate",
                    "General function for opening and closing door objects"
                ],
                [
                    "9",
                    "Quest Cairn Stone Operate",
                    "Handle operating the 5 Cairn Stone objects based on the player's progress for the Search for Cain quest and if the player has the deciphered Scroll of Inifuss item. Also removes the Scroll of Inifuss item once successfully operated."
                ],
                [
                    "10",
                    "Quest Gibbet Operate",
                    "Handle operating the object and updating the player's progress for the Search for Cain quest. This is used for the cage object that Deckard Cain is trapped in."
                ],
                [
                    "11",
                    "",
                    "Return null"
                ],
                [
                    "12",
                    "Quest Inifuss Operate",
                    "Handle dropping the Bark Scroll item, based on the player's progress for the Search for Cain quest"
                ],
                [
                    "13",
                    "",
                    "Return null"
                ],
                [
                    "14",
                    "Spawn Item",
                    "General function to operate an object and have it spawn random items. Can also remove the object's collision and randomly trigger a trap."
                ],
                [
                    "15",
                    "Town Portal Operate",
                    "Controls the Town Portal functionalities, including how to teleport players back to town or to the current level, and handling how players interact with other player Town Portals"
                ],
                [
                    "16",
                    "Trap Door Operate",
                    "Open a door type object and then control its level warp capabilities"
                ],
                [
                    "17",
                    "",
                    "Return null"
                ],
                [
                    "18",
                    "Secret Door Operate",
                    "Handle operating an object and removing its collision"
                ],
                [
                    "19",
                    "Armor Rack Operate",
                    "Activate the object to spawn a random armor item"
                ],
                [
                    "20",
                    "Weapon Rack Operate",
                    "Activate the object to spawn a random weapon item"
                ],
                [
                    "21",
                    "Quest Malus Operate",
                    "Handle dropping the Horadric Malus item, based on the player's progress for the Tools of the Trade quest"
                ],
                [
                    "22",
                    "Well Operate",
                    "Handle healing the player and keeping track of the charges and regeneration of charges for the well object"
                ],
                [
                    "23",
                    "Waypoint Operate",
                    "Handle activating a waypoint object and using the Waypoint UI when clicking on an activated waypoint object"
                ],
                [
                    "24",
                    "Quest Tainted Sun Altar Operate",
                    "Create the Amulet of the Viper item and other treasure items based on The Horadric Staff quest progress and the number of players in the game. Also update the progress for the Tainted Sun quest."
                ],
                [
                    "25",
                    "Quest Seven Tombs Receptacle Operate",
                    "Handle using the Horadric Staff item with the transaction UI to operate the object"
                ],
                [
                    "26",
                    "Bookshelf Operate",
                    "Randomly create either tomes or scrolls of Identify or Town Portal"
                ],
                [
                    "27",
                    "Teleport Pad Operate",
                    "Teleport the player to another part of the room"
                ],
                [
                    "28",
                    "Quest Lam Esens Tome Operate",
                    "Handle dropping the Lam Esen's Tome item, based on the player's progress for the Lam Esen's Tome quest"
                ],
                [
                    "29",
                    "Breakable Operate",
                    "Animate the object and remove its collision"
                ],
                [
                    "30",
                    "Exploding",
                    "Create an explosion around the object"
                ],
                [
                    "31",
                    "Quest Gidbinn Operate",
                    "Handle dropping the Decoy Gidbinn item, based on the player's progress for the Blade of the Old Religion quest"
                ],
                [
                    "32",
                    "Player Bank Operate",
                    "Control accessing the Stash UI while in town for the Bank object Class"
                ],
                [
                    "33",
                    "Wirt Spurt",
                    "Create the Wirt's leg item and animate the object"
                ],
                [
                    "34",
                    "Arcane Portal",
                    "Control how the warp object transitions the player from the Palace Cellar Level 3 to the Arcane Sanctuary"
                ],
                [
                    "35",
                    "",
                    "Return null"
                ],
                [
                    "36",
                    "",
                    "Return null"
                ],
                [
                    "37",
                    "",
                    "Return null"
                ],
                [
                    "38",
                    "",
                    "Return null"
                ],
                [
                    "39",
                    "Quest Horadric Cube Chest Operate",
                    "Create the Horadric Cube item and other treasure items based on The Horadric Staff quest progress and the number of players in the game"
                ],
                [
                    "40",
                    "Quest Horadric Scroll Chest Operate",
                    "Create the Horadric Scroll item and other treasure items based on The Horadric Staff quest progress and the number of players in the game"
                ],
                [
                    "41",
                    "Quest Staff of Kings Chest Operate",
                    "Create the Staff of Kings item and other treasure items based on The Horadric Staff quest progress and the number of players in the game"
                ],
                [
                    "42",
                    "Quest Arcane Tome Operate",
                    "Handles updating The Arcane Sanctuary quest progress"
                ],
                [
                    "43",
                    "One Way Portal Operate",
                    "Controls the functionalities of the \"DurielPortal\" one way warp object"
                ],
                [
                    "44",
                    "Quest Beneath The City Stairs Operate",
                    "Handles warp object operates based on the Khalim's Flail quest progress"
                ],
                [
                    "45",
                    "Quest Beneath The City Lever Operate",
                    "Handles operating an object based on the Khalim's Flail quest progress"
                ],
                [
                    "46",
                    "Hell Gate Operate",
                    "Handles how to transition the player to Act 4 based on The Guardian quest progress"
                ],
                [
                    "47",
                    "Stairs Operate",
                    "Handles how the stairs object opens or warp the player to another level"
                ],
                [
                    "48",
                    "Jack In The Box Operate",
                    "Handles the operating the object and having it spawn items and set its mode to Special 2."
                ],
                [
                    "49",
                    "Quest Soulstone Forge Operate",
                    "Handle operating the object based on The Hellforge quest progress and how it spawns items. Also remove the Hellforge Hammer weapon from the player."
                ],
                [
                    "50",
                    "Quest Mephisto Door Operate",
                    "Handles how the stairs object opens or warp the player to another level"
                ],
                [
                    "51",
                    "Delay Spawn Operate",
                    "Waits until the object is done operating before updating events"
                ],
                [
                    "52",
                    "Quest Diablo Seal Operate",
                    "Handle operating a Diablo Seal object while also tracking the progress on the other related Diablo Seal objects (5 in total)."
                ],
                [
                    "53",
                    "Quest Compelling Orb Operate",
                    "Handle operating the object based on the Khalim's Flail quest progress and The Blackened Temple progress. Also remove the Khalim's Flail weapon from the player."
                ],
                [
                    "54",
                    "Quest Diablo Seal 1 Operate",
                    "Handle operating a Diablo Seal object Class and getting a spawn point for monsters. Also calls function 52."
                ],
                [
                    "55",
                    "Quest Diablo Seal 3 Operate",
                    "Handle operating a Diablo Seal object Class and getting a spawn point for monsters. Also calls function 52."
                ],
                [
                    "56",
                    "Quest Diablo Seal 5 Operate",
                    "Handle operating a Diablo Seal object Class and getting a spawn point for monsters. Also calls function 52."
                ],
                [
                    "57",
                    "Quest Khalim Heart Chest Operate",
                    "Create the Khalim's Heart item and other treasure items based on the Khalim's Flail quest progress and the number of players in the game"
                ],
                [
                    "58",
                    "Quest Khalim Eye Chest Operate",
                    "Create the Khalim's Eye item and other treasure items based on the Khalim's Flail quest progress and the number of players in the game"
                ],
                [
                    "59",
                    "Quest Khalim Brain Chest Operate",
                    "Create the Khalim's Brain item and other treasure items based on the Khalim's Flail quest progress and the number of players in the game"
                ],
                [
                    "60",
                    "",
                    "Return null"
                ],
                [
                    "61",
                    "Town Gate",
                    "Handles how the gate object opens and closes"
                ],
                [
                    "62",
                    "",
                    "Return null"
                ],
                [
                    "63",
                    "",
                    "Return null"
                ],
                [
                    "64",
                    "",
                    "Return null"
                ],
                [
                    "65",
                    "Quest Ancient Altar Operate",
                    "Handle displaying quest text and disabling the player's town portals, based on the player's progress of the Rite of Passage quest."
                ],
                [
                    "66",
                    "Quest Ancient Gateway Operate",
                    "Handle opening the door object based on the player's progress of the Rite of Passage quest."
                ],
                [
                    "67",
                    "Quest Frozen Anya Operate",
                    "Handles the object displaying quest text or validating that the player has the Malah's Potion item and updating the Prison of Ice quest"
                ],
                [
                    "68",
                    "Evil Urn",
                    "Handle triggering a trap from the object"
                ],
                [
                    "69",
                    "Quest Ancient Invisible Operate",
                    "Handle displaying the A5Q6InitAncients string conversation text based on the player's progress of the Rite of Passage quest."
                ],
                [
                    "70",
                    "Quest Last Exit Operate",
                    "Handle transitioning the player to the from the Throne of Destruction level to the Worldstone Chamber level"
                ],
                [
                    "71",
                    "Quest Summit Door Operate",
                    "Handle opening the door object based on the player's progress of the Rite of Passage quest."
                ],
                [
                    "72",
                    "Quest Player Last Portal Operate",
                    "Handle transitioning the player to completing the game after completing the Destruction's End quest"
                ],
                [
                    "73",
                    "Quest Tyrael Portal To Expansion Operate",
                    "Handle transitioning the player to Act 5 after completing the Act 4 Terror's End quest"
                ],
                [
                    "74",
                    "Colossal Altar Operate",
                    "Handle setting data for and starting up the Colossal Ancients fight."
                ]
            ]
        },
        {
            "name": "PopulateFn",
            "description": "Defines a function that the game will use to spawn this object",
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
                    "Do not spawn the object"
                ],
                [
                    "1",
                    "Add Clumped Group",
                    "Handles creating multiple of these objects randomly in a room, based on the object's size and Class. This function only handles specific object classes such as caskets, urns, and baskets."
                ],
                [
                    "2",
                    "Add Single Shrine",
                    "Handles the creation of a shrine object"
                ],
                [
                    "3",
                    "Add Simple Objects",
                    "Handles randomly spawning the object in a room, based on the object's size."
                ],
                [
                    "4",
                    "Add Barrels",
                    "Handle creating multiple barrel or exploding barrel Class objects in a room."
                ],
                [
                    "5",
                    "Add Crates",
                    "Handle creating multiple crate or urn Class objects in a room."
                ],
                [
                    "6",
                    "Add Corpse",
                    "Use function 3 to handle spawning the object. Also call a random chance to spawn the \"Flies\" object class on top of the objects that spawn."
                ],
                [
                    "7",
                    "Add Staked Corpses",
                    "Handles how to specifically spawn the \"RogueCorpse1\" and \"RogueCorpse2\" objects, based on their sizes and the locations in the room. Also call a random chance to spawn the \"Flies\" object class on top of the objects that spawn."
                ],
                [
                    "8",
                    "Add Well",
                    "Handles the creation of one of these objects randomly in a room based on the object's size. A level can have a maximum of 4 these objects that spawn."
                ],
                [
                    "9",
                    "Add One",
                    "Handles the creation of one of these objects randomly in a room based on the object's size."
                ]
            ]
        },
        {
            "name": "InitFn",
            "description": "Defines a function to control how the object works while active and when initially activated by a player",
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
                    "Do nothing"
                ],
                [
                    "1",
                    "ObjectInitShrine",
                    "General function for determining which type of Shrine function to pick for the Shrine object. (See $!shrines!$ file for a list of shrine types)<br><br>This also uses the $!#Parm0!$ field to define the Shrine Type<br>\u00b7 If equals 0, default to health shrine<br>\u00b7 If equals 1, then use Health Shrine<br>\u00b7 If equals 2, then use Mana Shrine<br>\u00b7 If equals 3, then pick a random stats shrine with a 10% chance to spawn a surprise shrine"
                ],
                [
                    "2",
                    "ObjectInitTrappable",
                    "Handle a random chance to give the object 1 of the 9 random traps. This random chance depends on the area level's monster level."
                ],
                [
                    "3",
                    "ObjectInitChest",
                    "Run function 1, and also determine if the object should be Locked or not. The random chance to make the object Locked depends on the area level's monster level."
                ],
                [
                    "4",
                    "QuestObjectTowerTomeInit",
                    "If The Forgotten Tower quest is active, then set the object to run in Special 0 Mode."
                ],
                [
                    "5",
                    "",
                    "Do nothing"
                ],
                [
                    "6",
                    "QuestObjectStoneInit",
                    "Sets the object's mode to be Opened or Neutral, depending on the progress with the Portal to Tristram for the Search for Cain quest."
                ],
                [
                    "7",
                    "QuestObjectGibbetInit",
                    "Sets the object's mode, depending on the progress with Cain's Cage for the Search for Cain quest."
                ],
                [
                    "8",
                    "ObjectInitDungeonTorch",
                    "Sets the object's mode to Opened"
                ],
                [
                    "9",
                    "Quest Object Inifuss Init",
                    "Sets the object's mode, depending on the progress with the Tree for the Search for Cain quest."
                ],
                [
                    "10",
                    "ObjectInitBonfire",
                    "If the current level is Act 1 Rogue Encampment, then tell the object to do a periodic skill, otherwise set the object mode to Opened."
                ],
                [
                    "11",
                    "ObjectInitTownPortal",
                    "Initializes the object's mode and adds the level ID as an attribute to keep track of."
                ],
                [
                    "12",
                    "ObjectInitPermanentPortal",
                    "Handles specific level transitions for permanent portals found throughout the game"
                ],
                [
                    "13",
                    "QuestObjectStoneSoundInit",
                    "Attaches the object to the Search for Cain quest functions"
                ],
                [
                    "14",
                    "ObjectInitDungeonTorch2",
                    "Sets the object's mode to Operating"
                ],
                [
                    "15",
                    "QuestObjectMalusInit",
                    "Attaches the object to the Tools of the Trade quest functions"
                ],
                [
                    "16",
                    "ObjectInitWell",
                    "Sets the object's attributes for a well including amount of charges<br><br>This also uses the $!#Parm2!$ field to define the amount of Life healed"
                ],
                [
                    "17",
                    "ObjectInitWaypoint",
                    "Handles setting up the waypoint mechanic to the object for the current area level"
                ],
                [
                    "18",
                    "QuestObjectJerhyn1Init",
                    "Handle where to place Jerhyn (near the palace entrance) based on Arcane Sanctuary quest progress"
                ],
                [
                    "19",
                    "QuestObjectJerhyn2Init",
                    "Handle where to place Jerhyn (inside the palace) based on The Seven Tombs quest progress"
                ],
                [
                    "20",
                    "QuestObjectTaintedSunAltarInit",
                    "Attaches the object to the Tainted Sun quest functions"
                ],
                [
                    "21",
                    "QuestObjectSevenTombsReceptacleInit",
                    "Setup the object to be a receptacle for the Horadric Staff, based on The Seven Tombs quest progress"
                ],
                [
                    "22",
                    "ObjectInitFire",
                    "Setup the object to act as fire"
                ],
                [
                    "23",
                    "QuestObjectLamEsensTomeInit",
                    "Attaches the object to the Lam Esen's Tome quest functions"
                ],
                [
                    "24",
                    "ObjectInitTrap1",
                    "Handle setting up the object frame count and making sure it has full stats"
                ],
                [
                    "25",
                    "QuestObjectGidbinnInit",
                    "Attaches the object to the Blade of the Old Religion quest functions"
                ],
                [
                    "26",
                    "TestObjectInit",
                    "Sets the object's mode to Operating"
                ],
                [
                    "27",
                    "ObjectInitTrappablePoison",
                    "Sets up the random chance of 333/1000 for the object to have a trap that creates a poison nova"
                ],
                [
                    "28",
                    "ObjectInitGold",
                    "Create a random amount of gold piles (between 1 to 10) in random locations around the object"
                ],
                [
                    "29",
                    "QuestObjectInitArcanePortal",
                    "Setup the object to link area levels between the Palace Cellar Level 3 and the Arcane Sanctuary"
                ],
                [
                    "30",
                    "QuestObjectHaremBlockerInit",
                    "Setup the object's collision based on the Arcane Sanctuary quest progress"
                ],
                [
                    "31",
                    "QuestObjectHoradricCubeChestInit",
                    "Sets up information about the object"
                ],
                [
                    "32",
                    "QuestObjectHoradricScrollChestInit",
                    "Sets up information about the object"
                ],
                [
                    "33",
                    "QuestObjectStaffOfKingsChestInit",
                    "Sets up information about the object"
                ],
                [
                    "34",
                    "ObjectInitHellTorch",
                    "Randomly set the object's mode to Operating"
                ],
                [
                    "35",
                    "",
                    "Return null"
                ],
                [
                    "36",
                    "",
                    "Return null"
                ],
                [
                    "37",
                    "QuestObjectDurielPassagewayInit",
                    "Decide between setting the object's mode to Opened or Neutral, based on the progress of the The Seven Tombs quest"
                ],
                [
                    "38",
                    "QuestObjectTyraelDoorInit",
                    "Decide between setting the object's mode to Opened or Neutral, based on the progress of the The Seven Tombs quest"
                ],
                [
                    "39",
                    "QuestObjectGidbinnTownAltarInit",
                    "Decide between setting the object's mode to Opened or Neutral, based on the progress of the The Blade of the Old Religion quest"
                ],
                [
                    "40",
                    "",
                    "Return null"
                ],
                [
                    "41",
                    "QuestObjectBeneathTheCityStairsInit",
                    "Decide between setting the object's mode to Opened or Neutral, based on the progress of the Khalim's Flail quest"
                ],
                [
                    "42",
                    "QuestObjectBeneathTheCityLeverInit",
                    "If the Khalim's Flail quest is complete, then set the object's mode to Opened"
                ],
                [
                    "43",
                    "QuestObjectDarkWandererInit",
                    "Create the \"darkwanderer\" monster and order to walk to the object's location. This depends on the players character save from having witnessed this event before."
                ],
                [
                    "44",
                    "QuestObjectInitHellGate",
                    "Decide between setting the object's mode to Opened or Neutral, based on the progress of the The Guardian quest"
                ],
                [
                    "45",
                    "QuestObjectMephistoBridgeInit",
                    "Decide between setting the object's mode to Opened or Neutral, based on the progress of the The Guardian quest. If the object is not Opened, then also tell it to do its unique event."
                ],
                [
                    "46",
                    "ObjectTrappedSoulInit",
                    "Determine where to spawn the \"trappedsoul1\" and \"trappedsoul2\" monster classes in the area level."
                ],
                [
                    "47",
                    "QuestObjectForgottenTowerChestInit",
                    "Decide between setting up the chest object, relying on the Forgotten Tower quest being in progress"
                ],
                [
                    "48",
                    "QuestObjectSoulstoneForgeInit",
                    "Decide between setting the object's mode to Opened or Neutral, based on the progress of the Hell's Forge quest"
                ],
                [
                    "49",
                    "QuestObjectHratliStartInit",
                    "Handle placing Hratli near the starting point of Act 3, based on the player's Act 3 prologue progress"
                ],
                [
                    "50",
                    "QuestObjectHratliEndInit",
                    "Handle placing Hratli near his forge, if the player has progressed past the Act 3 prologue"
                ],
                [
                    "51",
                    "ObjectJackInTheBoxInit",
                    "If the object is in Opened or Opening mode, then tell the object to do a periodic item skill event"
                ],
                [
                    "52",
                    "QuestObjectNatalyaInit",
                    "Handle placing Natalya at her location based on the player's progress of The Guardian quest"
                ],
                [
                    "53",
                    "QuestObjectMephistoDoorInit",
                    "Handle setting the object to Opened mode based on the player's progress of destroying the orb for The Blackened Temple quest"
                ],
                [
                    "54",
                    "QuestObjectCainStartInit",
                    "Handle creating the Cain unit in the Rogue Encampment based on the player's progress of The Search for Cain quest"
                ],
                [
                    "55",
                    "QuestObjectDiabloStartInit",
                    "Handle the spawning event of Diablo based on the player's progress of activating the seal objects in the Chaos Sanctuary"
                ],
                [
                    "56",
                    "QuestObjectDiabloSealInit",
                    "Do nothing"
                ],
                [
                    "57",
                    "ObjectInitBetterChest",
                    "Initialize the chest object, and give it the special magical property"
                ],
                [
                    "58",
                    "ObjectInitFissure",
                    "Tell the object to do a periodic skill event at random times"
                ],
                [
                    "59",
                    "ObjectVileDoggieInit",
                    "If the object is in Neutral mode, then set the object to Operating mode and tell it to do a unique event"
                ],
                [
                    "60",
                    "QuestObjectCompellingOrbInit",
                    "Set the object to Opened based on the progress of The Blackened Temple quest"
                ],
                [
                    "61",
                    "QuestObjectCainPortalInit",
                    "Set the object to Operating mode and tell it to do a unique event"
                ],
                [
                    "62",
                    "QuestCagedWussie1Init",
                    "Spawn the \"act5pow\" units based on the player's progress of the Rescue on Mount Arreat quest"
                ],
                [
                    "63",
                    "QuestMoeInit",
                    "Setup the Korlic statue object with quest data based on the Right of Passage quest progress"
                ],
                [
                    "64",
                    "QuestLarryInit",
                    "Setup the Madawc statue object with quest data based on the Right of Passage quest progress"
                ],
                [
                    "65",
                    "QuestCurlyInit",
                    "Setup the Talic statue object with quest data based on the Right of Passage quest progress"
                ],
                [
                    "66",
                    "QuestAnyaInsideTownInit",
                    "Handle for creating the Anya NPC in town, based on the progress of the Prison of Ice quest"
                ],
                [
                    "67",
                    "QuestAnyaOutsideTownInit",
                    "Handle this object during the progress of the Prison of Ice quest and tell it to do its unique event"
                ],
                [
                    "68",
                    "QuestNihlathakInsideTownInit",
                    "Create the Nihlathak NPC in town, based on the progress of the Prison of Ice quest"
                ],
                [
                    "69",
                    "QuestNihlathakOutsideTownInit",
                    "Create the \"Nihlathak Boss\" super unique monster, based on the progress of the Prison of Ice quest"
                ],
                [
                    "70",
                    "QuestLarzukStartInit",
                    "Do nothing"
                ],
                [
                    "71",
                    "QuestLarzukEndInit",
                    "Object placeholder to create the \"Larzuk\" NPC in town"
                ],
                [
                    "72",
                    "QuestAncientTomeInit",
                    "Set the tome object mode to Opened or Neutral based on the progress of The Rite of Passage quest"
                ],
                [
                    "73",
                    "QuestAncientGatewayInit",
                    "Set the door object mode to Opened or Neutral based on the progress of The Rite of Passage quest"
                ],
                [
                    "74",
                    "QuestFrozenAnyaInit",
                    "Handle this object during the progress of the Prison of Ice quest and tell it to do its unique event"
                ],
                [
                    "75",
                    "QuestLastExitInit",
                    "Set the Throne of Destruction exit object mode to Operating or Opened based on the progress of the Eve of Destruction quest"
                ],
                [
                    "76",
                    "QuestSummitDoorInit",
                    "Set this door object mode to Operating or Opened based on the progress of the Rite of Passage quest"
                ],
                [
                    "77",
                    "QuestPlayerLastPortalInit",
                    "Set the last portal object mode to Operating or Opened based on the progress of the Eve of Destruction quest"
                ],
                [
                    "78",
                    "QuestTyraelPortalToExpansionInit",
                    "Set this object mode to Operating or Opened based on the progress of the Terror's End quest"
                ],
                [
                    "79",
                    "QuestZooInit",
                    "Attempt a random chance based on successfully selecting a \"zoo\" type monster from the entire list of possible monsters (See $!monstats!$). If selected, then send the quest update command to all players, based on the Eve of Destruction quest."
                ]
            ]
        },
        {
            "name": "ClientFn",
            "description": "Defines a function that runs on the object from the game's client side.",
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
                    "Do nothing"
                ],
                [
                    "1",
                    "Ambient Sound",
                    "Always return true"
                ],
                [
                    "2",
                    "Ripple",
                    "Tells the object to randomly play between its Operating animation and loop back to its Neutral animation"
                ],
                [
                    "3",
                    "Hell Fire",
                    "Same as function 2, except sound will also be processed"
                ],
                [
                    "4",
                    "Drinker",
                    "Tells the object to randomly play between its Special 0 animation and loop back to its Neutral animation. Also processes sound."
                ],
                [
                    "5",
                    "Gesturer",
                    "Tells the object to randomly play between its Special 0 / Special 1 animation and loop back to its Neutral animation. Also processes sound."
                ],
                [
                    "6",
                    "Turner",
                    "Tells the object to randomly play between its Special 0 animation and loop back to its Neutral animation. Uses different tick counts than function 4. Also processes sound."
                ],
                [
                    "7",
                    "Skeleton",
                    "Tells the object to randomly play between its Operating animation and loop back to its Neutral animation."
                ],
                [
                    "8",
                    "Duriel Entrance",
                    "If the object is not in Neutral mode then preload the Duriel monster"
                ],
                [
                    "9",
                    "Client Smoke",
                    "Controls how the object can be removed from the client based on distance to a player and if the object has a specific tick count."
                ],
                [
                    "10",
                    "Bubbles",
                    "Tells the object to randomly play between its Operating animation and loop back to its Neutral animation. Uses different tick counts than function 7."
                ],
                [
                    "11",
                    "Floaters",
                    "Always return true"
                ],
                [
                    "12",
                    "Altar",
                    "If the object is not in Neutral mode then preload the Ancients statues"
                ],
                [
                    "13",
                    "Invisible Ancient",
                    "If the object is in its Neutral mode and the player operating the object has not completed the Rite of Passage quest, then handle the control of operating the object"
                ],
                [
                    "14",
                    "Bonfire",
                    "Updates the object's animation modes based on the time of day"
                ],
                [
                    "15",
                    "Frozen Anya",
                    "If the object is in Neutral mode then play the \"npcalert\" overlay."
                ],
                [
                    "16",
                    "Last Exit",
                    "If the object is in its Operating mode, then modify the animation frames"
                ],
                [
                    "17",
                    "Zoo",
                    "Handle the creation of monsters if monsters need to be created"
                ],
                [
                    "18",
                    "Keeper",
                    "Randomly play the \"barbarian_grunt_small_1\" sound"
                ]
            ]
        },
        {
            "name": "RestoreVirgins",
            "description": "Boolean Field. If equals 1, then when the object has been used, the game will not restore the object in an inactive state when the area level repopulates after a player loads back into it. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "BlockMissile",
            "description": "Boolean Field. If equals 1, then missiles can collide with this object. If equals 0, then missiles will ignore and fly through this object.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "DrawUnder",
            "description": "Controls the targeting priority of the object",
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
                    "The object will not change its targeting priority"
                ],
                [
                    "1",
                    "The object's target priority will equal a corpse only when the object is opened"
                ],
                [
                    "2",
                    "The object's target priority always equals a corpse"
                ]
            ]
        },
        {
            "name": "OpenWarp",
            "description": "Boolean Field. If equals 1, then this object will be classified as an object that can be opened to warp to another area, and the UI will be notified to display a tooltip for opening or entering, based on the object's mode. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "AutoMap",
            "description": "Used to display a tile in the Automap to represent the object. Defines which cell number to use in the tile list for the Automap. If this value equals 0, then this object will not display on the Automap. (See $!AutoMap!$)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        }
    ]
}