// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["MagicPrefix"] = {
    "title": "MagicPrefix.txt",
    "referenceFiles": [
        "SharedItemMods",
        "PlayerClass",
        "colors"
    ],
    "appendFiles": [
        "SharedItemMods"
    ],
    "overview": "This file controls what item affixes (groups of item modifiers) are applied as the prefix for an itemThese item affixes will appear at the start of an item's name.<br>This file is loaded together with other similar files in the following order: $!MagicSuffix!$, $!MagicPrefix!$, $!automagic!$. These combined files form the Item Mods structure.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": []
}