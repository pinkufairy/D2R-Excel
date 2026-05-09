// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["MonPreset"] = {
    "title": "MonPreset.txt",
    "overview": "This file controls which monsters are preloaded in a preset, based on the Act number.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Act",
            "description": "Defines the Act number used for each Monster Preset. Uses values between 1 to 5.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Place",
            "description": "This defines the Monster Preset which is used for preloading, such as during level transitions",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Reference of a $!SuperUniques#Superunique!$, $!monstats#Id!$, or $!MonPlace#code!$"
            }
        }
    ]
}