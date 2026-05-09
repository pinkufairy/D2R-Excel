// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["monequip"] = {
    "title": "monequip.txt",
    "referenceFiles": [
        "bodylocs",
        "enums"
    ],
    "overview": "This file controls how a monster may be created with specific type of inventory equipment items. These equipment items are randomly generated on the monster, based on the specified parameters in this file. This data relies on the $!monstats#inventory!$ field being enabled for the listed monster.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "monster",
            "description": "Defines the monster that should be equipped. If the monster has multiple defined equipment possibilities, then they should always be grouped together. The game will go through the list in order to match what is best to use for the monster.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "monstats",
                "field": "Id"
            }
        },
        {
            "name": "oninit",
            "description": "Defines if the monster equipment is added on initialization during the monster's creation, depending how the monster is spawned. Monsters created by a skill have this value set to 0. Monsters created by a level have this value set to 1.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "level",
            "description": "Defines the level requirement for the monster in order to gain this equipment. The game will prefer the highest level allowed, so the order of these equipment should be from highest level to lowest level.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "item#",
            "altNames": [
                "item1",
                "item2",
                "item3"
            ],
            "description": "Item that the be equipped on the monster (Uses an item code)",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            }
        },
        {
            "name": "loc#",
            "altNames": [
                "loc1",
                "loc2",
                "loc3"
            ],
            "description": "Specifies the inventory slot where the item will be equipped. Once an item is equipped on that body location, then the game will skip any duplicate calls to equipping the same body location. This is another reason why the equipment should be ordered from highest level to lowest level.",
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
            "name": "mod#",
            "altNames": [
                "mod1",
                "mod2",
                "mod3"
            ],
            "description": "Controls the quality level of the related item. Anything after \"Crafted\" is not allowed.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "appendField": {
                "file": "enums",
                "field": "EITEMMODTYPE"
            }
        }
    ]
}