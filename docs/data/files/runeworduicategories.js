// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["RunewordUICategories"] = {
    "title": "RunewordUICategories.txt",
    "overview": "This file defines the list of valid runeword categories, to be used in the Chronicle runeword tab for runeword filtering. The categories are used in $!ItemTypes#RunewordCategory#!$",
    "fields": [
        {
            "name": "Name",
            "description": "The identifier used to define a category of Runeword for use in the Chronicle. This category is assigned to an item type in $!ItemTypes#RunewordCategory#!$",
            "type": {
                "type": "text",
                "dataLength": 5,
                "memSize": 16
            }
        }
    ]
}