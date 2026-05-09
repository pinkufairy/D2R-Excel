// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["automagic"] = {
    "title": "automagic.txt",
    "referenceFiles": [
        "SharedItemMods",
        "PlayerClass",
        "colors"
    ],
    "appendFiles": [
        "SharedItemMods"
    ],
    "overview": "This file controls what item affixes (groups of item modifiers) are automatically applied to items, regardless of their quality type. These item affixes will not change the quality of the item. An example can be class based items like a paladin shield that can be Normal Quality but still have Paladin skill bonuses without changing the item's name.<br>This file is loaded together with other similar files in the following order: $!MagicSuffix!$, $!MagicPrefix!$, $!automagic!$. These combined files form the Item Mods structure.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": []
}