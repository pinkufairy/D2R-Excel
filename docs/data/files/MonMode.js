// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["MonMode"] = {
    "title": "MonMode.txt",
    "overview": "Reference file that defines the modes that monster units can use.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "name",
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
                    "Death / Reset"
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
                    "GH",
                    "GH",
                    "Get Hit"
                ],
                [
                    "4",
                    "A1",
                    "A1",
                    "Attack 1"
                ],
                [
                    "5",
                    "A2",
                    "A2",
                    "Attack 2"
                ],
                [
                    "6",
                    "BL",
                    "BL",
                    "Block"
                ],
                [
                    "7",
                    "SC",
                    "SC",
                    "Cast"
                ],
                [
                    "8",
                    "S1",
                    "S1",
                    "Skill 1"
                ],
                [
                    "9",
                    "S2",
                    "S2",
                    "Skill 2"
                ],
                [
                    "10",
                    "S3",
                    "S3",
                    "Skill 3"
                ],
                [
                    "11",
                    "S4",
                    "S4",
                    "Skill 4"
                ],
                [
                    "12",
                    "DD",
                    "DD",
                    "Dead"
                ],
                [
                    "13",
                    "GH",
                    "KB",
                    "Knockback"
                ],
                [
                    "14",
                    "xx",
                    "xx",
                    "Sequence"
                ],
                [
                    "15",
                    "RN",
                    "RN",
                    "Run"
                ]
            ]
        },
        {
            "name": "token",
            "description": "2 letter abbreviation of the mode. Used by graphics.",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            }
        },
        {
            "name": "code",
            "description": "2 letter abbreviation of the mode. Used by other data tables.",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            }
        }
    ]
}