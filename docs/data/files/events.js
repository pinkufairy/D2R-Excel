// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["events"] = {
    "title": "events.txt",
    "overview": "Reference file that defines events that are triggered during gameplay.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "event",
            "description": "String that defines the event",
            "type": {
                "type": "text",
                "dataLength": 47,
                "memSize": 16
            },
            "table": [
                [
                    "Event",
                    "Description"
                ],
                [
                    "hitbymissile",
                    "Unit is hit by a missile"
                ],
                [
                    "damagedinmelee",
                    "Unit takes damage from a melee attack"
                ],
                [
                    "damagedbymissile",
                    "Unit takes damage from a missile"
                ],
                [
                    "attackedinmelee",
                    "Unit is attacked by a melee attack"
                ],
                [
                    "doactive",
                    "Unit used a skill"
                ],
                [
                    "domeleedamage",
                    "Unit dealt damage with a melee attack"
                ],
                [
                    "domissiledamage",
                    "Unit dealt damage with a missile"
                ],
                [
                    "domeleeattack",
                    "Unit used a melee attack"
                ],
                [
                    "domissileattack",
                    "Unit used a missile attack"
                ],
                [
                    "kill",
                    "Unit killed another Unit"
                ],
                [
                    "killed",
                    "Unit dies"
                ],
                [
                    "absorbdamage",
                    "Unit takes damage"
                ],
                [
                    "levelup",
                    "Unit gained a Level"
                ],
                [
                    "death",
                    "Monster dies"
                ],
                [
                    "install",
                    "The event is installed"
                ],
                [
                    "hextrigger",
                    "Special event to trigger hexes"
                ],
                [
                    "absorbresisteddamage",
                    "Unit takes damage which has been resisted"
                ]
            ]
        }
    ]
}