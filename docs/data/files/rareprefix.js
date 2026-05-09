// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["RarePrefix"] = {
    "title": "RarePrefix.txt",
    "overview": "This file controls the list of strings that are randomly selected to be used as the prefix part of the name when generating Rare items. Rare Prefixes are chosen at random from the list define in the data file. These item affixes will appear at the start of a Rare item's name.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "name",
            "description": "Uses a string key to define the Rare Prefix name",
            "type": {
                "type": "text",
                "dataLength": 31,
                "memSize": 0
            }
        },
        {
            "name": "version",
            "description": "Defines which game version to use this Set bonus (0 = Classic mode | 100 = Expansion mode)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "itype#",
            "altNames": [
                "itype1",
                "itype2",
                "itype3",
                "itype4",
                "itype5",
                "itype6",
                "itype7"
            ],
            "description": "Controls what item types are allowed for this Rare Prefix to spawn on.",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 16,
                "file": "ItemTypes",
                "field": "Code"
            }
        },
        {
            "name": "etype#",
            "altNames": [
                "etype1",
                "etype2",
                "etype3",
                "etype4"
            ],
            "description": "Controls what item types are excluded for this Rare Prefix to spawn on.",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 16,
                "file": "ItemTypes",
                "field": "Code"
            }
        }
    ]
}