// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["monai"] = {
    "title": "monai.txt",
    "overview": "Reference file that defines AI behaviors that monsters can use.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "AI",
            "description": "Name of the AI behavior",
            "type": {
                "type": "text",
                "dataLength": 47,
                "memSize": 16
            }
        }
    ]
}