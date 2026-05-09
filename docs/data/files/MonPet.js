// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["MonPet"] = {
    "title": "MonPet.txt",
    "overview": "Controls data associated with specific monsters when they become a player's pet.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "monster",
            "description": "What monster this MonPet entry connects to.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "References a $!monstats#Id!$ or a $!SuperUniques#Superunique!$"
            }
        },
        {
            "name": "hirelingAlternateVoice",
            "description": "Boolean field. If equals 1, then the hireling will use the alternate (feminine) voice type for voice lines. If equals 0, then it will use the masculine voice type.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "consumestat#",
            "altNames": [
                "consumestat1",
                "consumestat2",
                "consumestat3",
                "consumestat4",
                "consumestat5"
            ],
            "description": "Stat to add when this monster is consumed using $!skills#srv-WarStartConsume!$.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "ItemStatCost",
                "field": "Stat"
            }
        },
        {
            "name": "consumepar#",
            "altNames": [
                "consumepar1",
                "consumepar2",
                "consumepar3",
                "consumepar4",
                "consumepar5"
            ],
            "description": "Parameter for the associated $!#consumestat#!$.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "A number or references $!skills#skill!$, $!MonType#type!$, or $!states#state!$"
            }
        },
        {
            "name": "consumecalc#",
            "altNames": [
                "consumecalc1",
                "consumecalc2",
                "consumecalc3",
                "consumecalc4",
                "consumecalc5"
            ],
            "description": "The value for the associated $!#consumestat#!$.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Monster scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "numunderlingcalc",
            "description": "The maximum amount of underlings a monster can have. Underlings are currently restricted to monsters bound by $!skills#WarDoBindDemon!$.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Monster scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "bindchancecalc",
            "description": "The calculated chance a monster can be successfully bound when using $!skills#WarDoBindDemon!$.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Monster scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        }
    ]
}