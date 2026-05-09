// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["UniquePrefix"] = {
    "title": "UniquePrefix.txt",
    "overview": "This file controls the list of strings that are randomly selected to be used as the prefix when generating unique monster names. This is always added to every unique monster name.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Name",
            "description": "A string key, which is used as a potential selection for generating a unique monster's name",
            "type": {
                "type": "string",
                "dataLength": 255,
                "memSize": 16
            }
        }
    ]
}