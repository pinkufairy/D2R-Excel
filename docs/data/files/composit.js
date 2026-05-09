// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["Composit"] = {
    "title": "Composit.txt",
    "overview": "Reference file that defines composite pieces.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Name",
            "description": "Name of the composite pieces.",
            "type": {
                "type": "text",
                "dataLength": 31,
                "memSize": 0
            }
        },
        {
            "name": "Token",
            "description": "2 letter token for the composite pieces.",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            }
        }
    ]
}