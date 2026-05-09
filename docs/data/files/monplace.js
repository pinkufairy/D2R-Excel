// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["MonPlace"] = {
    "title": "MonPlace.txt",
    "overview": "Reference file that defines special case groups of units to be placed in a level.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "code",
            "description": "Name of the special case.",
            "type": {
                "type": "text",
                "dataLength": 47,
                "memSize": 16
            }
        }
    ]
}