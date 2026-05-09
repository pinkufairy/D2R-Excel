// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["SharedItems"] = {
    "title": "Shared Items",
    "referenceFiles": [
        "enums"
    ],
    "notSearchable": true,
    "noHtml": true,
    "guideOnly": true,
    "codeDependency": "armor",
    "overview": "The items files are loaded together and share most fields. These are the shared fields.",
    "fields": [
        {
            "name": "name",
            "description": "Reference field to define the item.",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "version",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            },
            "description": "Defines which game version to create this item (0 = Classic mode | 100 = Expansion mode)."
        },
        {
            "name": "compactsave",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "description": "Boolean Field. If equals 1, then only the item's base stats will be stored in the character save, but not any modifiers or additional stats. If equals 0, then all of the items stats will be saved."
        },
        {
            "name": "rarity",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "description": "Determines the chance that the item will randomly spawn (1/#). The higher the value then the rarer the item will be. This field depends on the $!#spawnable!$ field being enabled, the $!#quest!$ field being disabled, and the item level being less than or equal to the area level. This value is also affected by the relative Act number that the item is dropping in, where the higher the Act number, then the more common the item will drop."
        },
        {
            "name": "spawnable",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "description": "Boolean Field. If equals 1, then this item can be randomly spawned. If equals 0, then this item will never randomly spawn."
        },
        {
            "name": "DropConditionCalc",
            "description": "If the evaluated result of this condition is 0, then prevent the item from being randomly dropped in treasure classes.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Treasure Class scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "speed",
            "description": "If the item type is an armor, then this will affect the Walk/Run Speed reduction when wearing the armor. If the item type is a weapon, then this will affect the Attack Speed reduction when wearing the weapon.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "reqstr",
            "description": "Defines the amount of the Strength attribute needed to use the item.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "reqdex",
            "description": "Defines the amount of the Dexterity attribute needed to use the item.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "durability",
            "description": "Defines the base durability amount that the item will spawn with.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "nodurability",
            "description": "Boolean Field. If equals 1, then the item will not have durability. If equals 0, then the item will have durability.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "level",
            "description": "Controls the base item level. This is used for determining when the item is allowed to drop, such as making sure that the item level is not greater than the monster's level or the area level.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "ShowLevel",
            "description": "Boolean Field. If equals 1, then display the item level next to the item name. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "levelreq",
            "description": "Controls the player level requirement for being able to use the item.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "cost",
            "description": "Defines the base gold cost of the item when being sold by an NPC. This can be affected by item modifiers and the rarity of the item.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "gamble cost",
            "description": "Defines the gambling gold cost of the item on the Gambling UI.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "code",
            "description": "Defines a unique 3 letter/number code for the item. This is used as an identifier to reference the item.",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            }
        },
        {
            "name": "namestr",
            "description": "String Key that is used for the base item name.",
            "type": {
                "type": "string",
                "dataLength": 255,
                "memSize": 16
            }
        },
        {
            "name": "magic lvl",
            "description": "Defines the magic level of the item, which can affect how magical item modifiers that can appear on the item (See $!automagic!$).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "auto prefix",
            "description": "Automatically picks an item affix name from a designated $!automagic#group!$ value, instead of using random prefixes. This is only used when the item is Magical quality.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "alternategfx",
            "description": "Uses a unique 3 letter/number code similar to the defined $!#code!$ fields to determine what in-game graphics to display on the player character when the item is equipped.",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            }
        },
        {
            "name": "normcode",
            "description": "Links to a $!#code!$ field to determine the normal version of the item",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            }
        },
        {
            "name": "ubercode",
            "description": "Links to a $!#code!$ field to determine the Exceptional version of the item",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            }
        },
        {
            "name": "ultracode",
            "description": "Links to a $!#code!$ field to determine the Elite version of the item",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            }
        },
        {
            "name": "component",
            "description": "Determines the layer of player animation when the item is equipped. This uses a code referenced from the $!Composit!$ file.",
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "0",
                    "Head"
                ],
                [
                    "1",
                    "Torso"
                ],
                [
                    "2",
                    "Legs"
                ],
                [
                    "3",
                    "Right Arm"
                ],
                [
                    "4",
                    "Left Arm"
                ],
                [
                    "5",
                    "Right Hand"
                ],
                [
                    "6",
                    "Left Hand"
                ],
                [
                    "7",
                    "Shield"
                ],
                [
                    "8",
                    "Special 1"
                ],
                [
                    "9",
                    "Special 2"
                ],
                [
                    "10",
                    "Special 3"
                ],
                [
                    "11",
                    "Special 4"
                ],
                [
                    "12",
                    "Special 5"
                ],
                [
                    "13",
                    "Special 6"
                ],
                [
                    "14",
                    "Special 7"
                ],
                [
                    "15",
                    "Special 8"
                ],
                [
                    "16",
                    "Do not display anything"
                ]
            ],
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "invwidth",
            "description": "Defines the width of grid cells that the item occupies in the player inventory.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "invheight",
            "description": "Defines the height of grid cells that the item occupies in the player inventory.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "hasinv",
            "description": "Boolean Field. If equals 1, then the item will have its own inventory allowing for the capability to socket gems, runes, or jewels. If equals 0, then the item cannot have sockets.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "gemsockets",
            "description": "Controls the maximum number of sockets allowed on this item. This is limited by the item's size based on the $!#invwidth!$ and $!#invheight!$ fields. This also compares with $!ItemTypes#MaxSockets#!$.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "gemapplytype",
            "description": "Determines which affect from a gem or rune will be applied when it is socketed into this item (See $!gems!$).",
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "0",
                    "Weapon"
                ],
                [
                    "1",
                    "Weapon or Helmet"
                ],
                [
                    "2",
                    "Shield"
                ]
            ],
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "flippyfile",
            "description": "Controls which DC6 file to use for displaying the item in the game world when it is dropped on the ground (uses the file name as the input).",
            "type": {
                "type": "text",
                "dataLength": 31,
                "memSize": 0
            }
        },
        {
            "name": "invfile",
            "description": "Controls which DC6 file to use for displaying the item graphics in the inventory (uses the file name as the input).",
            "type": {
                "type": "text",
                "dataLength": 31,
                "memSize": 0
            }
        },
        {
            "name": "uniqueinvfile",
            "description": "Controls which DC6 file to use for displaying the item graphics in the inventory when it is a Unique quality item (uses the file name as the input).",
            "type": {
                "type": "text",
                "dataLength": 31,
                "memSize": 0
            }
        },
        {
            "name": "setinvfile",
            "description": "Controls which DC6 file to use for displaying the item graphics in the inventory when it is a Set quality item (uses the file name as the input).",
            "type": {
                "type": "text",
                "dataLength": 31,
                "memSize": 0
            }
        },
        {
            "name": "useable",
            "description": "Boolean Field. If equals 1, then the item can be used with the right-click mouse button command (this only works with specific belt items or quest items). If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "stackable",
            "description": "Boolean Field. If equals 1, then the item will use a quantity field and handle stacking functionality. This can depend on if the item type is throwable, is a type of ammunition, or is some other kind of miscellaneous item. If equals 0, then the item cannot be stacked.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "minstack",
            "description": "Controls the minimum stack count or quantity that is allowed on the item. This field depends on the $!#stackable!$ field being enabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "maxstack",
            "description": "Controls the maximum stack count or quantity that is allowed on the item. This field depends on the $!#stackable!$ field being enabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "spawnstack",
            "description": "Controls the stack count or quantity that the item can spawn with. This field depends on the $!#stackable!$ field being enabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Transmogrify",
            "description": "Boolean Field. If equals 1, then the item will use the transmogrify function. If equals 0, then ignore this. This field depends on the $!#useable!$ field being enabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "TMogType",
            "description": "Links to a $!#code!$ field to determine which item is chosen to transmogrify this item to.",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            }
        },
        {
            "name": "TMogMin",
            "description": "Controls the minimum quantity that the transmogrify item will have. This depends on what item was chosen in the $!#TMogType!$ field, and that the transmogrify item has quantity.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "TMogMax",
            "description": "Controls the maximum quantity that the transmogrify item will have. This depends on what item was chosen in the $!#TMogType!$ field, and that the transmogrify item has quantity.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "type",
            "description": "This is the item's type, which controls how the item functions.",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 16,
                "file": "ItemTypes",
                "field": "Code"
            }
        },
        {
            "name": "type2",
            "description": "Secondary item type. This is optional but can add more functionalities and possibilities with the item.",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 16,
                "file": "ItemTypes",
                "field": "Code"
            }
        },
        {
            "name": "dropsound",
            "description": "Sound used when the item is dropped on the ground.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "dropsfxframe",
            "description": "Defines which frame in the $!#flippyfile!$ animation to play the $!#dropsound!$ sound when the item is dropped on the ground.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "usesound",
            "description": "Sound used when the item is moved in the inventory or used.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "unique",
            "description": "Boolean Field. If equals 1, then the item can only spawn as a Unique quality type. If equals 0, then the item can spawn as other quality types.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "transparent",
            "description": "Boolean Field. If equals 1, then the item will be drawn transparent on the player model (similar to ethereal models). If equals 0, then the item will appear solid on the player model.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "transtbl",
            "description": "Controls what type of transparency to use, based on the $!#transparent!$ field being enabled. Corresponds to a $!enums#ETRANSTYPE!$.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "appendField": {
                "file": "enums",
                "field": "ETRANSTYPE"
            }
        },
        {
            "name": "lightradius",
            "description": "Controls the value of the light radius that this item can apply on the monster. This only affects monsters with this item equipped, not other types of units. This is ignored if the item's component on the monster is \"lit\", \"med\", or \"hvy\".",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "belt",
            "description": "Controls which belt type to use for belt items only. This field determines what index entry in the $!belts!$ file to use.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "quest",
            "description": "Controls what quest class is tied to the item which can enable certain item functionalities for a specific quest. Any value greater than 0 will also mean the item is flagged as a quest item, which can affect how it is displayed in tooltips, how it is traded with other players, its item rarity, and how it cannot be sold to an NPC. If equals 0, then the item will not be flagged as a quest item.",
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "0",
                    "Not a quest item"
                ],
                [
                    "1",
                    "Act 1 Prologue"
                ],
                [
                    "2",
                    "Den of Evil"
                ],
                [
                    "3",
                    "Sisters' Burial Grounds"
                ],
                [
                    "4",
                    "Tools of the Trade"
                ],
                [
                    "5",
                    "The Search for Cain"
                ],
                [
                    "6",
                    "The Forgotten Tower"
                ],
                [
                    "7",
                    "Sisters to the Slaughter"
                ],
                [
                    "8",
                    "Act 2 Prologue"
                ],
                [
                    "9",
                    "Radament's Lair"
                ],
                [
                    "10",
                    "The Horadric Staff"
                ],
                [
                    "11",
                    "The Tainted Sun"
                ],
                [
                    "12",
                    "The Arcane Sanctuary"
                ],
                [
                    "13",
                    "The Summoner"
                ],
                [
                    "14",
                    "The Seven Tombs"
                ],
                [
                    "15",
                    "Act 2 Traversed"
                ],
                [
                    "16",
                    "Lam Esen's Tome"
                ],
                [
                    "17",
                    "Khalim's Will"
                ],
                [
                    "18",
                    "Blade of the Old Religion"
                ],
                [
                    "19",
                    "The Golden Bird"
                ],
                [
                    "20",
                    "The Blackened Temple"
                ],
                [
                    "21",
                    "The Guardian"
                ],
                [
                    "22",
                    "Act 4 Prologue"
                ],
                [
                    "23",
                    "The Fallen Angel"
                ],
                [
                    "24",
                    "Terror's End"
                ],
                [
                    "25",
                    "The Hellforge"
                ],
                [
                    "26",
                    "Rogue Warning"
                ],
                [
                    "27",
                    "Guard in Town Warning"
                ],
                [
                    "28",
                    "Guard in Desert Warning"
                ],
                [
                    "29",
                    "Dark Wanderer Seen"
                ],
                [
                    "30",
                    "Angel Warning"
                ],
                [
                    "31",
                    "Respec from Akara Complete, Act 5 Prologue"
                ],
                [
                    "32",
                    "Siege on Harrogath"
                ],
                [
                    "33",
                    "Rescue on Mount Arreat"
                ],
                [
                    "34",
                    "Prison of Ice"
                ],
                [
                    "35",
                    "Betrayal of Harrogath"
                ],
                [
                    "36",
                    "Rite of Passage"
                ],
                [
                    "37",
                    "Eve of Destruction"
                ]
            ],
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "questdiffcheck",
            "description": "Boolean Field. If equals 1 and the $!#quest!$ field is enabled, then the game will check the current difficulty setting and will tie that difficulty setting to the quest item. This means that the player can have more than 1 of the same quest item as long each they are obtained per difficulty mode (Normal / Nightmare / Hell). If equals 0 and the $!#quest!$ field is enabled, then the player can only have 1 count of the quest item in the inventory, regardless of difficulty.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "missiletype",
            "description": "Points to an entry's index in $!Missiles!$, which determines what type of missile is used when using the throwing weapons",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "durwarning",
            "description": "Controls the threshold value for durability to display the low durability warning UI. This is only used if the item has durability.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "qntwarning",
            "description": "Controls the threshold value for quantity to display the low quantity warning UI. This is only used if the item has stacks.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "mindam",
            "description": "The minimum physical damage provided by the item.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "maxdam",
            "description": "The maximum physical damage provided by the item.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "StrBonus",
            "description": "The percentage multiplier that gets multiplied the player's current Strength attribute value to modify the bonus damage percent from the equipped item. If this equals 1, then default the value to 100.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "DexBonus",
            "description": "The percentage multiplier that gets multiplied the player's current Dexterity attribute value to modify the bonus damage percent from the equipped item. If this equals 1, then default the value to 100.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "gemoffset",
            "description": "Determines the starting index offset for reading the $!gems!$ file when determining what effects gems or runes will have the item based on the $!#gemapplytype!$ field. For example, if this value equals 9, then the game will start with index 9 (\"Chipped Emerald\") and ignore the previously defined gems in the gems.txt file, which can mean that those ignored gems will not apply modifiers when socketed into the item.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "bitfield1",
            "description": "Controls different flags that can affect the item. Uses an integer value to check against different bit fields by using the \"&\" operator. For example, if the value equals 5 (binary = 101) then that returns true for both the 4 (binary = 100) and 1 (binary = 1) bit field values.",
            "bittable": [
                "Allow the item to be capable of having Magic quality",
                "The item is classified as metal",
                "The item is classified as a spellcaster item (currently does nothing)",
                "The item is classified as a skill based item (currently does nothing)"
            ],
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "NPCMin",
            "altNames": [
                "CharsiMin",
                "GheedMin",
                "AkaraMin",
                "FaraMin",
                "LysanderMin",
                "DrognanMin",
                "HratliMin",
                "AlkorMin",
                "OrmusMin",
                "ElzixMin",
                "AshearaMin",
                "CainMin",
                "HalbuMin",
                "JamellaMin",
                "LarzukMin",
                "MalahMin",
                "AnyaMin"
            ],
            "description": "Minimum amount of this item type in Normal rarity that the NPC can sell at once.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "NPCMax",
            "altNames": [
                "CharsiMax",
                "GheedMax",
                "AkaraMax",
                "FaraMax",
                "LysanderMax",
                "DrognanMax",
                "HratliMax",
                "AlkorMax",
                "OrmusMax",
                "ElzixMax",
                "AshearaMax",
                "CainMax",
                "HalbuMax",
                "JamellaMax",
                "LarzukMax",
                "MalahMax",
                "AnyaMax"
            ],
            "description": "Maximum amount of this item type in Normal rarity that the NPC can sell at once. This must be equal to or greater than the minimum amount.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "NPCMagicMin",
            "altNames": [
                "CharsiMagicMin",
                "GheedMagicMin",
                "AkaraMagicMin",
                "FaraMagicMin",
                "LysanderMagicMin",
                "DrognanMagicMin",
                "HratliMagicMin",
                "AlkorMagicMin",
                "OrmusMagicMin",
                "ElzixMagicMin",
                "AshearaMagicMin",
                "CainMagicMin",
                "HalbuMagicMin",
                "JamellaMagicMin",
                "LarzukMagicMin",
                "MalahMagicMin",
                "AnyaMagicMin"
            ],
            "description": "Minimum amount of this item type in Magical rarity that the NPC can sell at once",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "NPCMagicMax",
            "altNames": [
                "CharsiMagicMax",
                "GheedMagicMax",
                "AkaraMagicMax",
                "FaraMagicMax",
                "LysanderMagicMax",
                "DrognanMagicMax",
                "HratliMagicMax",
                "AlkorMagicMax",
                "OrmusMagicMax",
                "ElzixMagicMax",
                "AshearaMagicMax",
                "CainMagicMax",
                "HalbuMagicMax",
                "JamellaMagicMax",
                "LarzukMagicMax",
                "MalahMagicMax",
                "AnyaMagicMax"
            ],
            "description": "Maximum amount of this item type in Magical rarity that the NPC can sell at once. This must be equal to or greater than the minimum amount.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "NPCMagicLvl",
            "altNames": [
                "CharsiMagicLvl",
                "GheedMagicLvl",
                "AkaraMagicLvl",
                "FaraMagicLvl",
                "LysanderMagicLvl",
                "DrognanMagicLvl",
                "HratliMagicLvl",
                "AlkorMagicLvl",
                "OrmusMagicLvl",
                "ElzixMagicLvl",
                "AshearaMagicLvl",
                "CainMagicLvl",
                "HalbuMagicLvl",
                "JamellaMagicLvl",
                "LarzukMagicLvl",
                "MalahMagicLvl",
                "AnyaMagicLvl"
            ],
            "description": "Maximum magic level allowed for this item type in Magical rarity.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Transform",
            "description": "Controls the color palette change of the item for the character model graphics. Corresponds to a $!enums#EITRANSFORMCLASS!$.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "appendField": {
                "file": "enums",
                "field": "EITRANSFORMCLASS"
            }
        },
        {
            "name": "InvTrans",
            "description": "Controls the color palette change of the item for the inventory graphics. Corresponds to a $!enums#EITRANSFORMCLASS!$.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "appendField": {
                "file": "enums",
                "field": "EITRANSFORMCLASS"
            }
        },
        {
            "name": "SkipName",
            "description": "Boolean Field. If equals 1 and the item is Unique rarity, then skip adding the item's base name in its title. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "NightmareUpgrade",
            "description": "Links to another item's $!#code!$ field. Used to determine which item will replace this item when being generated in the NPC's store while the game is playing in Nightmare difficulty. If this field's $!#code!$ equals \"xxx\", then this item will not change in this difficulty.",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            }
        },
        {
            "name": "HellUpgrade",
            "description": "Links to another item's $!#code!$ field. Used to determine which item will replace this item when being generated in the NPC's store while the game is playing in Hell difficulty. If this field's $!#code!$ equals \"xxx\", then this item will not change in this difficulty.",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            }
        },
        {
            "name": "Nameable",
            "description": "Boolean Field. If equals 1, then the item's name can be personalized by Anya for the Act 5 Betrayal of Harrogath quest reward. If equals 0, then the item cannot be used for the personalized name reward.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "PermStoreItem",
            "description": "Boolean Field. If equals 1, then this item will always appear on the NPC's store. If equals 0, then the item will randomly appear on the NPC's store when appropriate.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "EventItem",
            "description": "Boolean Field. If equals 1, then this item will have its named colored with the $!enums#FONTCOLOR!$ \"EventItemsColor\".",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "UICatOverride",
            "description": "Allows this item to override what UI Category it should use (for loot filter and chronicle uniques page). If there's no override, this item will belong to the category that its type1 field uses. If Null, this item will be excluded from lootfilter / chronicle. If a valid UI Category, this item will belong to that UI category instead of the one its type would usually put it in.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 8,
                "file": "ItemUICategories",
                "field": "Name"
            }
        },
        {
            "name": "diablocloneweight",
            "description": "The amount of weight added to the diablo clone progress when this item is sold. When offline, selling this item will instead immediately spawn diablo clone.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
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
        "autobelt",
        "BetterGem",
        "multibuy",
        "spellicon",
        "pSpell",
        "state",
        "cstate1",
        "cstate2",
        "len",
        "stat1",
        "stat2",
        "stat3",
        "calc1",
        "calc2",
        "calc3",
        "spelldesc",
        "spelldescstr",
        "spelldescstr2",
        "spelldesccalc",
        "spelldesccolor",
        "AdvancedStashStackable",
        "UsageConditionCalc",
        "missile",
        "subtype"
    ]
}