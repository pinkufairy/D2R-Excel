// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["MonLvl"] = {
    "title": "MonLvl.txt",
    "overview": "This file controls how monster statistics increase per level based on the current game type and difficulty.<br>The \"(N\" text in field names signifies to use that specific value for games in Nightmare difficulty. The \"(H)\" text in field names signifies to use that specific value for games in Hell difficulty.<br>\"L-\" signifies the field is used for Ladder Battle.net game types, otherwise its used for Non-Ladder Battle.net / Singleplay / Open Battle.net / TCP.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Level",
            "description": "An integer value to determine how to scale the monster's statistics when at a specific level",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "AC",
            "altNames": [
                "AC(N)",
                "AC(H)",
                "L-AC",
                "L-AC(N)",
                "L-AC(H)"
            ],
            "description": "Percentage multiplier for increasing the Monster's Defense (multiplies with the $!monstats#AC!$).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "TH",
            "altNames": [
                "TH(N)",
                "TH(H)",
                "L-TH",
                "L-TH(N)",
                "L-TH(H)"
            ],
            "description": "Percentage multiplier for increasing the Monster's Attack Rating (multiplies with the $!monstats#A1TH!$ and $!monstats#A2TH!$ fields)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "HP",
            "altNames": [
                "HP(N)",
                "HP(H)",
                "L-HP",
                "L-HP(N)",
                "L-HP(H)"
            ],
            "description": "Percentage multiplier for increasing the Monster's Life (multiplies with the $!monstats#minHP!$ and $!monstats#maxHP!$ fields)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "DM",
            "altNames": [
                "DM(N)",
                "DM(H)",
                "L-DM",
                "L-DM(N)",
                "L-DM(H)"
            ],
            "description": "Percentage multiplier for increasing the Monster's Damage (multiplies with the $!monstats#A1MinD!$, $!monstats#A2MinD!$, $!monstats#S1MinD!$ and $!monstats#A1MaxD!$, $!monstats#A2MaxD!$, $!monstats#S1MaxD!$ fields)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "XP",
            "altNames": [
                "XP(N)",
                "XP(H)",
                "L-XP",
                "L-XP(N)",
                "L-XP(H)"
            ],
            "description": "Percentage multiplier for increasing the Experience provided to the player when killing the Monster (multiplies with the $!monstats#Exp!$ fields)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        }
    ]
}