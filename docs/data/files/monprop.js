// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["MonProp"] = {
    "title": "MonProp.txt",
    "overview": "This file controls special properties that can be added to a monster, based on the game difficulty.<br>The \"(N)\" text in field names signifies to use that specific value for games in Nightmare difficulty. The \"(H)\" text in field names signifies to use that specific value for games in Hell difficulty.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Id",
            "description": "Defines the monster property that is reference by other data files.",
            "type": {
                "type": "text",
                "dataLength": 47,
                "memSize": 32
            }
        },
        {
            "name": "prop#",
            "altNames": [
                "prop1",
                "prop2",
                "prop3",
                "prop4",
                "prop5",
                "prop6",
                "prop1 (N)",
                "prop2 (N)",
                "prop3 (N)",
                "prop4 (N)",
                "prop5 (N)",
                "prop6 (N)",
                "prop1 (H)",
                "prop2 (H)",
                "prop3 (H)",
                "prop4 (H)",
                "prop5 (H)",
                "prop6 (H)"
            ],
            "description": "Defines which Property to apply to the monster",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Reference of $!Properties#code!$ or $!PropertyGroups#code!$"
            }
        },
        {
            "name": "chance#",
            "altNames": [
                "chance1",
                "chance2",
                "chance3",
                "chance4",
                "chance5",
                "chance6",
                "chance1 (N)",
                "chance2 (N)",
                "chance3 (N)",
                "chance4 (N)",
                "chance5 (N)",
                "chance6 (N)",
                "chance1 (H)",
                "chance2 (H)",
                "chance3 (H)",
                "chance4 (H)",
                "chance5 (H)",
                "chance6 (H)"
            ],
            "description": "The percent chance that the related $!#prop#!$ will be assigned. If this value equals 0, then the Property will always be applied.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "par#",
            "altNames": [
                "par1",
                "par2",
                "par3",
                "par4",
                "par5",
                "par6",
                "par1 (N)",
                "par2 (N)",
                "par3 (N)",
                "par4 (N)",
                "par5 (N)",
                "par6 (N)",
                "par1 (H)",
                "par2 (H)",
                "par3 (H)",
                "par4 (H)",
                "par5 (H)",
                "par6 (H)"
            ],
            "description": "The \"parameter\" value associated with the related $!#prop#!$. Usage depends on the property function (See $!Properties#func#!$)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "min#",
            "altNames": [
                "min1",
                "min2",
                "min3",
                "min4",
                "min5",
                "min6",
                "min1 (N)",
                "min2 (N)",
                "min3 (N)",
                "min4 (N)",
                "min5 (N)",
                "min6 (N)",
                "min1 (H)",
                "min2 (H)",
                "min3 (H)",
                "min4 (H)",
                "min5 (H)",
                "min6 (H)"
            ],
            "description": "The \"min\" value to assign to the related $!#prop#!$. Usage depends on the property function (See $!Properties#func#!$)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "max#",
            "altNames": [
                "max1",
                "max2",
                "max3",
                "max4",
                "max5",
                "max6",
                "max1 (N)",
                "max2 (N)",
                "max3 (N)",
                "max4 (N)",
                "max5 (N)",
                "max6 (N)",
                "max1 (H)",
                "max2 (H)",
                "max3 (H)",
                "max4 (H)",
                "max5 (H)",
                "max6 (H)"
            ],
            "description": "The \"max\" value to assign to the related $!#prop#!$. Usage depends on the property function (See $!Properties#func#!$)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        }
    ]
}