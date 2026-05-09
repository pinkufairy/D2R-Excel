// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["books"] = {
    "title": "books.txt",
    "referenceFiles": [
        "misc"
    ],
    "overview": "This file controls functionalities of book items (also called Tomes). This includes how they interact with their related scroll items.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Name",
            "description": "This is a reference field to define the book.",
            "type": {
                "type": "string",
                "dataLength": 255,
                "memSize": 16
            }
        },
        {
            "name": "ScrollSpellCode",
            "description": "Uses an item's code to define as the scroll item for the book.",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            }
        },
        {
            "name": "BookSpellCode",
            "description": "Uses an item's code to define as the book item.",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            }
        },
        {
            "name": "pSpell",
            "description": "Defines the item spell function to use when using the book. See $!misc#pSpell!$ for possible values.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            },
            "appendField": {
                "file": "misc",
                "field": "pSpell"
            }
        },
        {
            "name": "SpellIcon",
            "description": "Controls which DC6 file to display for the mouse cursor when using the scroll or book (Uses numeric indices to pick the DC6 file. Example: When using Identify, use icon 1 or buysell.DC6).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "ScrollSkill",
            "description": "Defines which Skill to use for the scroll item.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "skills",
                "field": "skill"
            }
        },
        {
            "name": "BookSkill",
            "description": "Defines which Skill to use for the book item.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "skills",
                "field": "skill"
            }
        },
        {
            "name": "BaseCost",
            "description": "The starting gold cost to buy the book from an NPC.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "CostPerCharge",
            "description": "The additional gold cost added with the book's $!#BaseCost!$ value, based on how many charges the book has.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        }
    ]
}