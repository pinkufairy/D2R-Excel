// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["StorePage"] = {
    "title": "StorePage.txt",
    "overview": "Reference file that defines npc store pages.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Store Page",
            "description": "This is a comment field that names the store page",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Code",
            "description": "4 letter code referencing the page",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "armo",
                    "Armor Page"
                ],
                [
                    "weap",
                    "Weapons Page"
                ],
                [
                    "mag",
                    "Magic Page"
                ],
                [
                    "misc",
                    "Misc Page"
                ]
            ]
        }
    ]
}