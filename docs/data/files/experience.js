// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["experience"] = {
    "title": "experience.txt",
    "overview": "This file controls the experience required for each level by each class.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Level",
            "description": "This is a reference field to define the level",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Amazon",
            "description": "Controls the experience required for each level with the Amazon class",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Sorceress",
            "description": "Controls the experience required for each level with the Sorceress class",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Necromancer",
            "description": "Controls the experience required for each level with the Necromancer class",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Paladin",
            "description": "Controls the experience required for each level with the Paladin class",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Barbarian",
            "description": "Controls the experience required for each level with the Barbarian class",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Druid",
            "description": "Controls the experience required for each level with the Druid class",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Assassin",
            "description": "Controls the experience required for each level with the Assassin class",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Warlock",
            "description": "Controls the experience required for each level with the Warlock class",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "ExpRatio",
            "description": "This multiplier affects the percentage of experienced earned, based on the level (Calculated in 1024ths by default, but this can be changed by updating the \"10\" value in the \"Maxlvl\" row)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        }
    ]
}