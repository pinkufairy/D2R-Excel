// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["PropertyGroups"] = {
    "title": "PropertyGroups.txt",
    "overview": "This file defines groups of properties to be used when spawning items. (See: $!Properties!$)",
    "fields": [
        {
            "name": "code",
            "description": "Defines the property group ID. Used as a reference in other data files.",
            "type": {
                "type": "text",
                "dataLength": 47,
                "memSize": 32
            }
        },
        {
            "name": "pickmode",
            "description": "Code to select how to select multiple properties from the group.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "table": [
                [
                    "Code",
                    "Name",
                    "Description"
                ],
                [
                    "0",
                    "All",
                    "Select all properties (probability is simply ignored)."
                ],
                [
                    "1",
                    "Pick a card",
                    "Select properties by picking a card from a deck. The probability of each remaining item increases across successive rolls."
                ],
                [
                    "2",
                    "Roll a dice",
                    "Select properties by rolling a dice. The probability of a pick stays the same across successive rolls."
                ]
            ]
        },
        {
            "name": "prop#",
            "description": "Name of the property to use for the pick.",
            "altNames": [
                "prop1",
                "prop2",
                "prop3",
                "prop4",
                "prop5",
                "prop6",
                "prop7",
                "prop8"
            ],
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Reference of $!Properties#code!$ or $!PropertyGroups#code!$"
            }
        },
        {
            "name": "parMin#",
            "description": "[Optional] Minimum parameter value for the property.",
            "altNames": [
                "parMin1",
                "parMin2",
                "parMin3",
                "parMin4",
                "parMin5",
                "parMin6",
                "parMin7",
                "parMin8"
            ],
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "A number"
            }
        },
        {
            "name": "parMax#",
            "description": "[Optional] Maximum parameter value for the property.",
            "altNames": [
                "parMax1",
                "parMax2",
                "parMax3",
                "parMax4",
                "parMax5",
                "parMax6",
                "parMax7",
                "parMax8"
            ],
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "A number"
            }
        },
        {
            "name": "modMin#",
            "description": "[Optional] Minimum mod value for the property.",
            "altNames": [
                "modMin1",
                "modMin2",
                "modMin3",
                "modMin4",
                "modMin5",
                "modMin6",
                "modMin7",
                "modMin8"
            ],
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "modMax#",
            "description": "[Optional] Maximum mod value for the property.",
            "altNames": [
                "modMax1",
                "modMax2",
                "modMax3",
                "modMax4",
                "modMax5",
                "modMax6",
                "modMax7",
                "modMax8"
            ],
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "chance#",
            "description": "Probability in number of tickets for the property to be chosen. All the probability numbers are added and selection is done via picking a ticket out of the raffle.",
            "altNames": [
                "chance1",
                "chance2",
                "chance3",
                "chance4",
                "chance5",
                "chance6",
                "chance7",
                "chance8"
            ],
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        }
    ]
}