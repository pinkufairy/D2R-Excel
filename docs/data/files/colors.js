// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["colors"] = {
    "title": "colors.txt",
    "overview": "Reference file that defines colors.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Transform Color",
            "description": "Name of the color.",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Code",
            "description": "4 letter code for the color.",
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
                    "whit",
                    "White"
                ],
                [
                    "1",
                    "lgry",
                    "Light Gray"
                ],
                [
                    "2",
                    "dgry",
                    "Dark Grey"
                ],
                [
                    "3",
                    "blac",
                    "Black"
                ],
                [
                    "4",
                    "lblu",
                    "Light Blue"
                ],
                [
                    "5",
                    "dblue",
                    "Dark Blue"
                ],
                [
                    "6",
                    "cblu",
                    "Crystal Blue"
                ],
                [
                    "7",
                    "lred",
                    "Light Red"
                ],
                [
                    "8",
                    "dred",
                    "Dark Red"
                ],
                [
                    "9",
                    "cred",
                    "Crystal Red"
                ],
                [
                    "10",
                    "lgrn",
                    "Light Green"
                ],
                [
                    "11",
                    "dgrn",
                    "Dark Green"
                ],
                [
                    "12",
                    "cgrn",
                    "Crystal Green"
                ],
                [
                    "13",
                    "lyel",
                    "Light Yellow"
                ],
                [
                    "14",
                    "dyel",
                    "Dark Yellow"
                ],
                [
                    "15",
                    "lgld",
                    "Light Gold"
                ],
                [
                    "16",
                    "dgld",
                    "Dark Gold"
                ],
                [
                    "17",
                    "lpur",
                    "Light Purple"
                ],
                [
                    "18",
                    "dpur",
                    "Dark Purple"
                ],
                [
                    "19",
                    "oran",
                    "Orange"
                ],
                [
                    "20",
                    "bwht",
                    "Bright White"
                ]
            ]
        }
    ]
}