// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["ElemTypes"] = {
    "title": "ElemTypes.txt",
    "overview": "Reference file that defines elemental types.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Elemental Type",
            "description": "Name of the elemental type",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Code",
            "description": "4 letter code for the elemental type",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "(empty)",
                    "None"
                ],
                [
                    "fire",
                    "Fire"
                ],
                [
                    "ltng",
                    "Lightning"
                ],
                [
                    "mag",
                    "Magic"
                ],
                [
                    "cold",
                    "Cold (has length)"
                ],
                [
                    "pois",
                    "Poison (has length)"
                ],
                [
                    "life",
                    "Life Drain"
                ],
                [
                    "mana",
                    "Mana Drain"
                ],
                [
                    "stam",
                    "Stamina Drain"
                ],
                [
                    "stun",
                    "Stun (has length)"
                ],
                [
                    "rand",
                    "Randomly select between Fire, Lightning, Magic, Cold, or Poison"
                ],
                [
                    "burn",
                    "Burning (has length) (not fully implemented)"
                ],
                [
                    "frze",
                    "Freeze (has length)"
                ]
            ]
        }
    ]
}