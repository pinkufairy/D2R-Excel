// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["PlrMode"] = {
    "title": "PlrMode.txt",
    "overview": "Reference file that defines the modes that player units can use.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Name",
            "description": "Reference name for the mode",
            "type": {
                "type": "text",
                "dataLength": 31,
                "memSize": 0
            },
            "table": [
                [
                    "ID",
                    "Token (graphics)",
                    "code (data)",
                    "Description"
                ],
                [
                    "0",
                    "DT",
                    "DT",
                    "Death"
                ],
                [
                    "1",
                    "NU",
                    "NU",
                    "Neutral"
                ],
                [
                    "2",
                    "WL",
                    "WL",
                    "Walk"
                ],
                [
                    "3",
                    "RN",
                    "RN",
                    "Run"
                ],
                [
                    "4",
                    "GH",
                    "GH",
                    "Get Hit"
                ],
                [
                    "5",
                    "TN",
                    "TN",
                    "Town Neutral"
                ],
                [
                    "6",
                    "TW",
                    "TW",
                    "Town Walk"
                ],
                [
                    "7",
                    "A1",
                    "A1",
                    "Attack 1"
                ],
                [
                    "8",
                    "A2",
                    "A2",
                    "Attack 2"
                ],
                [
                    "9",
                    "BL",
                    "BL",
                    "Block"
                ],
                [
                    "10",
                    "SC",
                    "SC",
                    "Cast"
                ],
                [
                    "11",
                    "TH",
                    "TH",
                    "Throw"
                ],
                [
                    "12",
                    "KK",
                    "KK",
                    "Kick"
                ],
                [
                    "13",
                    "S1",
                    "S1",
                    "Skill 1"
                ],
                [
                    "14",
                    "S2",
                    "S2",
                    "Skill 2"
                ],
                [
                    "15",
                    "S3",
                    "S3",
                    "Skill 3"
                ],
                [
                    "16",
                    "S4",
                    "S4",
                    "Skill 4"
                ],
                [
                    "17",
                    "DD",
                    "DD",
                    "Dead"
                ],
                [
                    "18",
                    "GH",
                    "SQ",
                    "Sequence"
                ],
                [
                    "19",
                    "GH",
                    "KB",
                    "Knockback"
                ]
            ]
        },
        {
            "name": "Token",
            "description": "2 letter abbreviation of the mode. Used by graphics.",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            }
        },
        {
            "name": "Code",
            "description": "2 letter abbreviation of the mode. Used by other data tables.",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            }
        }
    ]
}