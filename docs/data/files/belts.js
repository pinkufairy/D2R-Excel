// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["belts"] = {
    "title": "belts.txt",
    "overview": "This file controls the statistics for how belts and their various item slots work. This file relies on the $!armor#belt!$ field. Each belt entry in this file defines a belt type that controls how many slots the belt item provides. Each of these belt types are a possible value that items the $!armor#belt!$ can use. The game uses the 3rd entry is defined as the \"default\" belt, meaning that the player has no belt equipped, and the game will use this entry's stats to determine how to handle the belt slots.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "name",
            "description": "This is a reference field to define the belt type.",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "numboxes",
            "description": "This integer field defines the number of item slots in the belt. This is used when inserting items into the belt and also for handling the removal of items when the belt item is unequipped.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "box#left",
            "altNames": [
                "box1left",
                "box2left",
                "box3left",
                "box4left",
                "box5left",
                "box6left",
                "box7left",
                "box8left",
                "box9left",
                "box10left",
                "box11left",
                "box12left",
                "box13left",
                "box14left",
                "box15left",
                "box16left"
            ],
            "description": "Specifies the belt slot left side coordinates. This is use for Server verification purposes and does not affect the local box UI in the client.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "box#right",
            "altNames": [
                "box1right",
                "box2right",
                "box3right",
                "box4right",
                "box5right",
                "box6right",
                "box7right",
                "box8right",
                "box9right",
                "box10right",
                "box11right",
                "box12right",
                "box13right",
                "box14right",
                "box15right",
                "box16right"
            ],
            "description": "Specifies the belt slot right side coordinates. This is use for Server verification purposes and does not affect the local box UI in the client.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "box#top",
            "altNames": [
                "box1top",
                "box2top",
                "box3top",
                "box4top",
                "box5top",
                "box6top",
                "box7top",
                "box8top",
                "box9top",
                "box10top",
                "box11top",
                "box12top",
                "box13top",
                "box14top",
                "box15top",
                "box16top"
            ],
            "description": "Specifies the belt slot left top coordinates. This is use for Server verification purposes and does not affect the local box UI in the client.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "box#bottom",
            "altNames": [
                "box1bottom",
                "box2bottom",
                "box3bottom",
                "box4bottom",
                "box5bottom",
                "box6bottom",
                "box7bottom",
                "box8bottom",
                "box9bottom",
                "box10bottom",
                "box11bottom",
                "box12bottom",
                "box13bottom",
                "box14bottom",
                "box15bottom",
                "box16bottom"
            ],
            "description": "Specifies the belt slot bottom side coordinates. This is use for Server verification purposes and does not affect the local box UI in the client.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "defaultItemTypeCol#",
            "altNames": [
                "defaultItemTypeCol1",
                "defaultItemTypeCol2",
                "defaultItemTypeCol3",
                "defaultItemTypeCol4"
            ],
            "description": "Specifies the default item type used for the populate belt and auto-use functionality on controller.",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 16,
                "file": "ItemTypes",
                "field": "Code"
            }
        },
        {
            "name": "defaultItemCodeCol#",
            "altNames": [
                "defaultItemCodeCol1",
                "defaultItemCodeCol2",
                "defaultItemCodeCol3",
                "defaultItemCodeCol4"
            ],
            "description": "Specifies the default item code used for the populate belt and auto-use functionality on controller. Leaving this blank uses no code and instead relies entirely on the item type.",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            }
        }
    ]
}