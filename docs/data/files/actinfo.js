// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["actinfo"] = {
    "title": "actinfo.txt",
    "overview": "This file controls global Act functionalities including item levels, monster behaviors, and waypoints. This file uses the $!wanderingmon!$ file for a modular list of potential wandering units to spawn.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "act",
            "description": "Defines the ID for the Act",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            }
        },
        {
            "name": "town",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "Levels",
                "field": "Name"
            },
            "description": "The Act's town area"
        },
        {
            "name": "start",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "Levels",
                "field": "Name"
            },
            "description": "Where the player starts in the Act"
        },
        {
            "name": "maxnpcitemlevel",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            },
            "description": "Controls the maximum item level for items sold by the NPC in the Act"
        },
        {
            "name": "classlevelrangestart",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Levels",
                "field": "Name"
            },
            "description": "Uses a level's $!Levels#MonLvl!$ values as a global Act minimum monster level. For example, this is used to determine chest levels in an Act."
        },
        {
            "name": "classlevelrangeend",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Levels",
                "field": "Name"
            },
            "description": "Uses a level's $!Levels#MonLvl!$ values as a global Act maximum monster level. For example, this is used to determine chest levels in an Act"
        },
        {
            "name": "wanderingnpcstart",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            },
            "description": "Uses an index to determine which wandering monster class to use when populating areas (See $!wanderingmon!$ for a list of possible monsters to spawn)"
        },
        {
            "name": "wanderingnpcrange",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            },
            "description": "This is a modifier that gets added to the $!#wanderingnpcstart!$ value to randomly select an index"
        },
        {
            "name": "commonactcof",
            "type": {
                "type": "text",
                "dataLength": 63,
                "memSize": 0
            },
            "description": "Specifies which \".D2\" file to use as for the common Act COF file. This is used to establish the seed when initializing the Act."
        },
        {
            "name": "waypoint#",
            "altNames": [
                "waypoint1",
                "waypoint2",
                "waypoint3",
                "waypoint4",
                "waypoint5",
                "waypoint6",
                "waypoint7",
                "waypoint8",
                "waypoint9"
            ],
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "Levels",
                "field": "Name"
            },
            "description": "The designated waypoint selection in the Waypoint UI"
        },
        {
            "name": "wanderingMonsterPopulateChance",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            },
            "description": "The percent chance (from 0 to 100) to spawn a wandering monster (See $!wanderingmon!$ for a list of possible monsters to spawn)"
        },
        {
            "name": "wanderingMonsterRegionTotal",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            },
            "description": "The maximum number of wandering monsters allowed at once"
        },
        {
            "name": "wanderingPopulateRandomChance",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            },
            "description": "A secondary percent chance (from 0 to #) to determine whether to attempt populating with monsters. Only fails if random chance selects 0."
        }
    ]
}