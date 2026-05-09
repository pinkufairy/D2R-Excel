// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["PlayerClass"] = {
    "title": "PlayerClass.txt",
    "overview": "Reference file that defines player classes.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Player Class",
            "description": "Reference field to define the player class.",
            "type": {
                "type": "text",
                "dataLength": 47,
                "memSize": 0
            }
        },
        {
            "name": "Code",
            "description": "Three letter abbreviation of the player class name.",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            },
            "table": [
                [
                    "Index",
                    "Code",
                    "Description"
                ],
                [
                    "0",
                    "ama",
                    "Amazon"
                ],
                [
                    "1",
                    "bar",
                    "Barbarian"
                ],
                [
                    "2",
                    "pal",
                    "Paladin"
                ],
                [
                    "3",
                    "nec",
                    "Necromancer"
                ],
                [
                    "4",
                    "sor",
                    "Sorceress"
                ],
                [
                    "5",
                    "dru",
                    "Druid"
                ],
                [
                    "6",
                    "ass",
                    "Assassin"
                ],
                [
                    "7",
                    "war",
                    "Warlock"
                ]
            ]
        }
    ]
}