// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["npc"] = {
    "title": "npc.txt",
    "referenceFiles": [
        "enums"
    ],
    "overview": "This file controls how each town NPC manipulates their store prices.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "npc",
            "description": "Points to the matching $!monstats#Id!$ value. This should not be changed.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "monstats",
                "field": "Id"
            }
        },
        {
            "name": "buy mult",
            "description": "Used to calculate the item's price when it is bought by the NPC from the player. This number is a fraction of 1024 in the following formula: [cost] * [$!#buy mult!$] / 1024",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "sell mult",
            "description": "Used to calculate the item's price when it is sold by the NPC to the player. This number is a fraction of 1024 in the following formula: [cost] * [$!#sell mult!$] / 1024",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "rep mult",
            "description": "Used to calculate the cost to repair an item. This number is a fraction of 1024 in the following formula: [cost] * [$!#rep mult!$] / 1024. This is then used to influence the repair cost based on the item durability and charges.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "questflag",
            "altNames": [
                "questflag A",
                "questflag B",
                "questflag C"
            ],
            "description": "If the player has this quest flag progress, then apply the relative additional price calculations",
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
            "name": "questbuymult",
            "altNames": [
                "questbuymult A",
                "questbuymult B",
                "questbuymult C"
            ],
            "description": "Same functionality as the $!#buy mult!$ field, except this relies on the $!#questflag!$ field and applies after the $!#buy mult!$ field calculation",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "questsellmult",
            "altNames": [
                "questsellmult A",
                "questsellmult B",
                "questsellmult C"
            ],
            "description": "Same functionality as the $!#sell mult!$ field, except this relies on the $!#questflag!$ field and applies after the $!#sell mult!$ field calculation",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "questrepmult",
            "altNames": [
                "questrepmult A",
                "questrepmult B",
                "questrepmult C"
            ],
            "description": "Same functionality as the $!#rep mult!$ field, except this relies on the $!#questflag!$ field and applies after the $!#rep mult!$ field calculation",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "max buy",
            "altNames": [
                "max buy (N)",
                "max buy (H)"
            ],
            "description": "Sets the maximum price that the NPC will pay, when the player sells an item in Normal Difficulty, Nightmare Difficulty, and Hell Difficulty, respectively",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        }
    ]
}