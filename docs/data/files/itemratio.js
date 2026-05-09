// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["itemratio"] = {
    "title": "itemratio.txt",
    "overview": "This file determines the quality of items when being spawned. After the game determines what Item Type should spawn, it then uses this file to calculate the quality of that item. These Item Quality checks are used for most item drops in the game such as monster drops and chest drops.<br>For a writeup on how these fields are used, see <a href=\"../docs/itemratio-calc.html\" target=\"_blank\" class=\"reference-link\">Item Ratio Calculations</a>.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Function",
            "description": "This is a reference field to define the item ratio name",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Version",
            "description": "Defines which game version to use this item ratio (0 = Classic mode | 100 = Expansion mode)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "Uber",
            "description": "Boolean Field. If equals 1, then the item ratio will apply to items with Exceptional or Elite Quality. If equals 0, then the item ratio will apply to Normal Quality items (This is determined by the $!armor#normcode!$, $!armor#ubercode!$, and $!armor#ultracode!$ fields in $!weapons!$ / $!armor!$)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Class Specific",
            "description": "Boolean Field. If equals 1, then the item ratio will apply to class-based items (This will compare to the $!ItemTypes#Class!$ field to determine if the item is class specific)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Rarity",
            "altNames": [
                "Unique",
                "Set",
                "Rare",
                "Magic",
                "HiQuality",
                "Normal"
            ],
            "description": "Base value for calculating the specific Quality chance. Higher value means rarer chance. (Calculation order is Unique -> Set -> Rare -> Magic -> HiQuality -> Normal)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Divisor",
            "altNames": [
                "UniqueDivisor",
                "SetDivisor",
                "RareDivisor",
                "MagicDivisor",
                "HiQualityDivisor",
                "NormalDivisor"
            ],
            "description": "Modifier for changing the specific Quality chance, based on the difference between the Monster Level and the Item's base level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Min",
            "altNames": [
                "UniqueMin",
                "SetMin",
                "RareMin",
                "MagicMin"
            ],
            "description": "The minimum value of the probability denominator for specific Quality. This is compared to the calculated specific Quality value after Magic Find calculations and is chosen if it is greater than that value. (Calculated in 128ths)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        }
    ]
}