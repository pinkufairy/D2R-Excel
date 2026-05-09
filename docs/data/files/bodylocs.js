// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["bodylocs"] = {
    "title": "bodylocs.txt",
    "overview": "Reference file that defines body locations.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Body Location",
            "description": "Name of the body location.",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Code",
            "description": "4 letter code associated with the body location.",
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
                    "Inventory grid"
                ],
                [
                    "head",
                    "Head"
                ],
                [
                    "neck",
                    "Neck"
                ],
                [
                    "tors",
                    "Torso"
                ],
                [
                    "rarm",
                    "Right Arm"
                ],
                [
                    "larm",
                    "Left Arm"
                ],
                [
                    "rrin",
                    "Right Ring"
                ],
                [
                    "lrin",
                    "Left Ring"
                ],
                [
                    "belt",
                    "Belt"
                ],
                [
                    "feet",
                    "Feet"
                ],
                [
                    "glov",
                    "Gloves"
                ]
            ]
        }
    ]
}