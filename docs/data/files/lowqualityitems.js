// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["lowqualityitems"] = {
    "title": "lowqualityitems.txt",
    "overview": "Reference file that defines low quality item types.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Name",
            "description": "Localized string key for the low quality item type.",
            "type": {
                "type": "text",
                "dataLength": 31,
                "memSize": 0
            }
        }
    ]
}