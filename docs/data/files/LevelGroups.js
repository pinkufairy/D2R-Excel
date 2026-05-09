// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["LevelGroups"] = {
    "title": "LevelGroups.txt",
    "overview": "This file controls how the game groups levels together. This is mainly used for condensing level names in desecrated (terror) zone messaging",
    "fields": [
        {
            "name": "LevelGroupId",
            "description": "Defines the unique name pointer for the level group, which is used in other files",
            "type": {
                "type": "text",
                "dataLength": 47,
                "memSize": 32
            }
        },
        {
            "name": "ParentLevelGroupId",
            "description": "Defines a parent for this level group. If the parent group is completed then this level group will not be displayed.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "LevelGroups",
                "field": "LevelGroupId"
            }
        },
        {
            "name": "CompleteThreshold",
            "description": "Percent amount of the level group to satisfy before it is marked as completed.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Effect",
            "description": "Controls what effect to play for this level group when it is completed.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            },
            "table": [
                [
                    "Code",
                    "Name",
                    "Description"
                ],
                [
                    "0",
                    "",
                    "Do nothing"
                ],
                [
                    "1",
                    "Cows",
                    "Play a random cow attack, hit, or death sound"
                ]
            ]
        },
        {
            "name": "NameString",
            "description": "String Field. Used for displaying the name of the level group, such as when all levels in a group have been desecrated.",
            "type": {
                "type": "string",
                "dataLength": 255,
                "memSize": 16
            }
        }
    ]
}