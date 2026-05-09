// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["gamble"] = {
    "title": "gamble.txt",
    "overview": "This file controls what Item Types will appear as possible items to purchase in the Gambling UI. Item Types can be added to this list as a potential option for the Gambling system.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "name",
            "description": "This is a reference field to describe the Item",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "code",
            "description": "This is a pointer to $!armor#code!$, $!weapons#code!$, or $!misc#code!$",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            }
        }
    ]
}