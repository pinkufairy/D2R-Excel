// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["ItemTypes"] = {
    "title": "ItemTypes.txt",
    "referenceFiles": [
        "bodylocs",
        "PlayerClass",
        "StorePage"
    ],
    "overview": "This file controls the general statistics for each type of item, which is then used for the item type fields in other files.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "ItemType",
            "description": "This is a reference field to define the Item Type name",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Code",
            "description": "Defines the unique pointer for this Item Type, which is used by other data files",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            }
        },
        {
            "name": "Equiv#",
            "altNames": [
                "Equiv1",
                "Equiv2"
            ],
            "description": "Points to the index of another Item Type to reference as a parent. This is used to create a hierarchy for Item Types where the parents will have more universal settings shared across the related children",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 16,
                "file": "ItemTypes",
                "field": "Code"
            }
        },
        {
            "name": "Repair",
            "description": "Boolean Field. If equals 1, then the item can be repaired by an NPC in the shop UI. If equals 0, then the item cannot be repaired.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Body",
            "description": "Boolean Field. If equals 1, then the item can be equipped by a character (also will require the $!#BodyLoc#!$ fields as parameters). If equals 0, then the item can only be carried in the inventory, stash, or Horadric Cube.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "BodyLoc#",
            "altNames": [
                "BodyLoc1",
                "BodyLoc2"
            ],
            "description": "These are required parameters if the $!#Body!$ field is enabled. These fields specify the inventory slots where the item can be equipped.",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 8,
                "file": "bodylocs",
                "field": "Code"
            },
            "appendField": {
                "file": "bodylocs",
                "field": "Code"
            }
        },
        {
            "name": "Shoots",
            "description": "Points to the index of another Item Type as the required equipped Item Type to be used as ammo",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 16,
                "file": "ItemTypes",
                "field": "Code"
            }
        },
        {
            "name": "Quiver",
            "description": "Points to the index of another Item Type as the required equipped Item Type to be used as this ammos weapon",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 16,
                "file": "ItemTypes",
                "field": "Code"
            }
        },
        {
            "name": "Throwable",
            "description": "Boolean Field. If equals 1, then it determines that this item is a throwing weapon. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Reload",
            "description": "Boolean Field. If equals 1, then the item (considered ammo in this case) will be automatically transferred from the inventory to the required $!#BodyLoc#!$ when another item runs out of that specific ammo. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "ReEquip",
            "description": "Boolean Field. If equals 1, then the item in the inventory will replace a matching equipped item if that equipped item was destroyed. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "AutoStack",
            "description": "Boolean Field. If equals 1, then if the player picks up a matching Item Type, then they will try to automatically stack together. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Magic",
            "description": "Boolean Field. If equals 1, then this item will always have the Magic quality (unless it is a Quest item). If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Rare",
            "description": "Boolean Field. If equals 1, then this item can spawn as a Rare quality. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Normal",
            "description": "Boolean Field. If equals 1, then this item will always have the Normal quality. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Beltable",
            "description": "Boolean Field. If equals 1, then this item can be placed in the character's belt slots. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "MaxSockets#",
            "altNames": [
                "MaxSockets1",
                "MaxSockets2",
                "MaxSockets3"
            ],
            "description": "Determines the maximum possible number of sockets that can be spawned on the item when the item level is greater than or equal to 1 and less than or equal to the $!#MaxSocketsLevelThreshold#!$ value. The number of sockets is capped by the $!armor#gemsockets!$, $!weapons#gemsockets!$, $!misc#gemsockets!$ value.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "MaxSocketsLevelThreshold#",
            "altNames": [
                "MaxSocketsLevelThreshold1",
                "MaxSocketsLevelThreshold2"
            ],
            "description": "Defines the item level threshold between successive $!#MaxSockets#!$ fields. Ex: If $!#MaxSocketsLevelThreshold1!$ is met, use $!#MaxSockets2!$. If $!#MaxSocketsLevelThreshold2!$ is met, use $!#MaxSockets3!$.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "TreasureClass",
            "description": "Boolean Field. If equals 1, then allow this Item Type to be used in default treasure classes. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Rarity",
            "description": "Determines the chance for the item to spawn with stats, when created as a random Weapon/Armor/Misc item. Used in the following formula: IF RANDOM(0, ([$!#Rarity!$] - [Current Act Level])) > 0, THEN spawn stats",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "StaffMods",
            "description": "Determines if the Item Type should have class specific item skill modifiers",
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
            "name": "Class",
            "description": "Determines if this item should be useable only by a specific class",
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
            "name": "VarInvGfx",
            "description": "Tracks the number of inventory graphics used for this item type. This number much match the number of $!#InvGfx#!$ fields used.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "InvGfx#",
            "altNames": [
                "InvGfx1",
                "InvGfx2",
                "InvGfx3",
                "InvGfx4",
                "InvGfx5",
                "InvGfx6"
            ],
            "description": "Defines a DC6 file to use for the item's inventory graphics. The amount of this fields used should match the value used in $!#VarInvGfx!$",
            "type": {
                "type": "text",
                "dataLength": 31,
                "memSize": 0
            }
        },
        {
            "name": "StorePage",
            "description": "Uses a code to determine which UI tab page on the NPC shop UI to display this Item Type, such as after it is sold to the NPC.",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 8,
                "file": "StorePage",
                "field": "Code"
            },
            "appendField": {
                "file": "StorePage",
                "field": "Code"
            }
        },
        {
            "name": "UICategory",
            "description": "Determines what UI Category this item type will be displayed in (used for loot filter and chronicle uniques page). All items that have this type as their type1 will display in the loot filter under this category, unless the item overrides it in misc/armor/weapon files",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 8,
                "file": "ItemUICategories",
                "field": "Name"
            }
        },
        {
            "name": "RunewordCategory#",
            "altNames": [
                "RunewordCategory1",
                "RunewordCategory2"
            ],
            "description": "Determines what Runeword UI Category this item type will be displayed in (used the chronicle runewords page). Different item types have different runeword UI categories assigned to them. This is then used in the Chronicle runewords page, where it checks each runeword's $!Runes#itype#!$, and then the associated $!#RunewordCategory#!$ for each valid itype to decide which runewords should be filtered on each category",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 8,
                "file": "RunewordUICategories",
                "field": "Name"
            }
        },
        {
            "name": "Restricted",
            "description": "Boolean Field. If equals 1, this item type is now restricted. Only one item of a given restricted type may be present across all equipped + socketed items. Multiple different restricted types are allowed.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        }
    ]
}