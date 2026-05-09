// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["ItemUICategories"] = {
    "title": "ItemUICategories.txt",
    "overview": "This file defines the item categories that are used in the loot filter and also the chronicle's unique page. ItemTypes.txt assigns its types to the corresponding categories, and item themselves in armor/weapon/misc files can also override their UI category",
    "fields": [
        {
            "name": "Name",
            "description": "The name acts as an ID for the category, its index correlates to the ItemUICategory enum. This name will be saved into the shareable loot filter profile jsons when a category is filtered. It is also used as a key in the string table to display localized names in game.",
            "type": {
                "type": "text",
                "dataLength": 5,
                "memSize": 16
            }
        },
        {
            "name": "isEquipment",
            "description": "Boolean field. If 1, this category is put into the 'equipment' panel. If 0, this category is put in the 'misc' panel",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "ParentCategory",
            "description": "The parent category of this category. Must match a previous entry's name. Null means this is a top-level category. NOTE: We only support a single level of parent-child relationship. A parent category cannot have a parent, its parent must be null",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 8,
                "file": "ItemUICategories",
                "field": "Name"
            }
        },
        {
            "name": "QualityFilter",
            "description": "Boolean field. If 1, the quality filter will apply to this category. If 0, the quality filter will not apply. Currently only applies to Equipment categories, misc categories will ignore this field",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "NumColumns",
            "description": "Define how many columns a category should display in. Min = 1, Max = 3. Ignored if category uses the quality filter, since we change the number of columns based on the qualities selected",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        }
    ]
}