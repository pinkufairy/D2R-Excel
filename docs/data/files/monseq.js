// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["monseq"] = {
    "title": "monseq.txt",
    "referenceFiles": [
        "MonMode"
    ],
    "overview": "This file controls the sequence table used for specifying events during certain animation frames, such as when using skills. A sequence is divided into multiple lines in this file to define each frame in the animation and to determine which event to use during a specific frame.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "sequence",
            "description": "Establishes the Monster Sequence index. An entire monster sequence can be composed of multiple sequence lines, which means that each line needs to have matching $!#sequence!$ fields and must be in contiguous order.",
            "type": {
                "type": "text",
                "dataLength": 47,
                "memSize": 16
            }
        },
        {
            "name": "mode",
            "description": "Defines which monster mode animation to use for the sequence. (Corresponds to $!MonMode#code!$)",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 8,
                "file": "MonMode",
                "field": "code"
            },
            "appendField": {
                "file": "MonMode",
                "field": "name"
            }
        },
        {
            "name": "frame",
            "description": "The in-game frame number for the animation. For the first line in the sequence, this value will establish where the starting frame for the animation. These values should be in contiguous order for the sequence.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "dir",
            "description": "Defines the numeric animation direction that the frame use. Most animations have between 8 to 64 maximum directions.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "event",
            "description": "Defines what type of event will be used when the frame triggers",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "0",
                    "No event, do nothing"
                ],
                [
                    "1",
                    "Do Melee attack"
                ],
                [
                    "2",
                    "Do Missile attack"
                ],
                [
                    "3",
                    "Play a sound"
                ],
                [
                    "4",
                    "Use a Skill"
                ]
            ]
        }
    ]
}