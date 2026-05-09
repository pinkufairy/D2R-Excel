// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["UniqueAppellation"] = {
    "title": "UniqueAppellation.txt",
    "overview": "This file controls the list of strings that are randomly selected to be used as an extra suffix when generating unique monster names<br>The game has a 50% chance to randomly use Unique Appellation when generating the Unique monster name.<br> \u00b7 If a Unique Appellation is not added, then the game will generate a unique monster name using the string called Monster1Format (ID: 1721)<br> \u00b7 If a Unique Appellation is added, then the game will generate a unique monster name using the string called Monster2Format (ID: 1722) ",
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