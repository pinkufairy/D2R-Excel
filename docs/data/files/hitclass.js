// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["HitClass"] = {
    "title": "HitClass.txt",
    "overview": "Defines hit classes for weapons.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Hit Class",
            "description": "Name of the hit class.",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Code",
            "description": "4 letter code describing the hit class.",
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
                    "",
                    "None"
                ],
                [
                    "1",
                    "hth",
                    "Hand To Hand"
                ],
                [
                    "2",
                    "1hss",
                    "One Hand Swing vs. Small"
                ],
                [
                    "3",
                    "1hsl",
                    "One Hand Swing vs. Large"
                ],
                [
                    "4",
                    "2hss",
                    "Two Hand Swing vs. Small"
                ],
                [
                    "5",
                    "2hsl",
                    "Two Hand Swing vs. Large"
                ],
                [
                    "6",
                    "1ht",
                    "One Hand Thrust"
                ],
                [
                    "7",
                    "2ht",
                    "Two Hand Thrust"
                ],
                [
                    "8",
                    "club",
                    "Club"
                ],
                [
                    "9",
                    "staf",
                    "Staff"
                ],
                [
                    "10",
                    "bow",
                    "Bow"
                ],
                [
                    "11",
                    "xbow",
                    "Crossbow"
                ],
                [
                    "12",
                    "claw",
                    "Claw"
                ],
                [
                    "13",
                    "over",
                    "Overlay"
                ]
            ]
        }
    ]
}