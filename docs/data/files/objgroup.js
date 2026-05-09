// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["objgroup"] = {
    "title": "objgroup.txt",
    "overview": "This file controls what group of possible Objects to spawn in a part of an area level. The order of each Object Group defined in this file will convey what ID value it has, which is referenced by the $!Levels!$ file. The order of these Object Groups should not be changed.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "GroupName",
            "description": "This is a comment field that names the Object Group",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "*ID",
            "description": "This is a comment field that names the index of the Object Group",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ID#",
            "altNames": [
                "ID0",
                "ID1",
                "ID2",
                "ID3",
                "ID4",
                "ID5",
                "ID6",
                "ID7"
            ],
            "description": "Uses references the index of an object from %!objects!%, which assigns an Object to this Object Group",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "DENSITY#",
            "altNames": [
                "DENSITY0",
                "DENSITY1",
                "DENSITY2",
                "DENSITY3",
                "DENSITY4",
                "DENSITY5",
                "DENSITY6",
                "DENSITY7"
            ],
            "description": "Controls the number of Objects to spawn in the area level. This is also affected by the Object's populate function defined by the %!objects#PopulateFn!$ field. The maximum value allowed is 128.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "PROB#",
            "altNames": [
                "PROB0",
                "PROB1",
                "PROB2",
                "PROB3",
                "PROB4",
                "PROB5",
                "PROB6",
                "PROB7"
            ],
            "description": "Controls the probability that the Object will spawn in the area level. This is calculated in order so the first probability that is successful will be chosen. This also means that these field values should add up to exactly 100 in total to guarantee that one of the objects spawn.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        }
    ]
}