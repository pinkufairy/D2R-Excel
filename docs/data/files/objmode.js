// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["ObjMode"] = {
    "title": "ObjMode.txt",
    "overview": "Reference file that defines the modes that object units can use.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Name",
            "description": "Reference name for the mode",
            "type": {
                "type": "text",
                "dataLength": 31,
                "memSize": 0
            }
        },
        {
            "name": "Token",
            "description": "2 letter abbreviation of the mode. Used by other data tables.",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            },
            "table": [
                [
                    "Index",
                    "Object Mode",
                    "Token"
                ],
                [
                    "0",
                    "Neutral",
                    "NU"
                ],
                [
                    "1",
                    "Operating",
                    "OP"
                ],
                [
                    "2",
                    "Opened",
                    "ON"
                ],
                [
                    "3",
                    "Special 1",
                    "S1"
                ],
                [
                    "4",
                    "Special 2",
                    "S2"
                ],
                [
                    "5",
                    "Special 3",
                    "S3"
                ],
                [
                    "6",
                    "Special 4",
                    "S4"
                ],
                [
                    "7",
                    "Special 5",
                    "S5"
                ]
            ]
        }
    ]
}