// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["skillcalc"] = {
    "title": "skillcalc.txt",
    "overview": "Reference file that defines identifiers for skill scope BBE functions. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "code",
            "description": "4 letter abbreviation for the identifier.",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            }
        }
    ]
}