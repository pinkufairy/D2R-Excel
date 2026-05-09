// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["monsounds"] = {
    "title": "monsounds.txt",
    "referenceFiles": [
        "MonMode"
    ],
    "overview": "This file controls the sounds that play for each of a monster's actions.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Id",
            "description": "Defines the unique name ID for the monster sound",
            "type": {
                "type": "text",
                "dataLength": 47,
                "memSize": 16
            }
        },
        {
            "name": "Attack#",
            "altNames": [
                "Attack1",
                "Attack2"
            ],
            "description": "Play this sound when the monster performs Attack 1 and Attack 2, respectively.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "Weapon#",
            "altNames": [
                "Weapon1",
                "Weapon2"
            ],
            "description": "Play this sound when the monster performs Attack 1 and Attack 2, respectively. This acts as an extra sound that can play with the corresponding $!#Attack#!$ sounds.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "Att#Del",
            "altNames": [
                "Att1Del",
                "Att2Del"
            ],
            "description": "Controls the amount of game frames to delay playing the corresponding $!#Attack#!$ sounds.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Wea#Del",
            "altNames": [
                "Wea1Del",
                "Wea2Del"
            ],
            "description": "Controls the amount of game frames to delay playing the corresponding $!#Weapon#!$ sounds.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Att#Prb",
            "altNames": [
                "Att1Prb",
                "Att2Prb"
            ],
            "description": "Controls the percent chance (out of 100) to play the corresponding $!#Attack#!$ sounds.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Wea#Vol",
            "altNames": [
                "Wea1Vol",
                "Wea2Vol"
            ],
            "description": "Controls the volume of the corresponding $!#Weapon#!$ sounds. Uses a range between 0 to 255, where 255 is the maximum volume.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "HitSound",
            "description": "Play this sound when the monster gets hit or knocked back.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "DeathSound",
            "description": "Play this sound when the monster dies.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "HitDelay",
            "description": "Controls the amount of game frames to delay playing the $!#HitSound!$ sound",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "DeaDelay",
            "description": "Controls the amount of game frames to delay playing the $!#DeathSound!$ sound",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Skill#",
            "altNames": [
                "Skill1",
                "Skill2",
                "Skill3",
                "Skill4"
            ],
            "description": "Play this sound when the monster uses the skill linked in the related $!monstats#Skill#!$ field.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "Footstep",
            "description": "Play this sound while the monster is walking or running.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "FootstepLayer",
            "description": "Play this sound while the monster is walking or running. This acts as an extra sound that can play with the $!#Footstep!$ sound.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "FsCnt",
            "description": "Controls the footstep count which is used to determine how often to play the $!#Footstep!$ and $!#FootstepLayer!$ sound. A higher value would mean that the sounds would play more often.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "FsOff",
            "description": "Controls the footstep offset which is used for calculating when to play the next $!#Footstep!$ and $!#FootstepLayer!$ sound, based on the current animation frame and the animation rate. A higher value would mean that the sounds would play less often.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "FsPrb",
            "description": "Controls the probability to play the $!#Footstep!$ and $!#FootstepLayer!$ sound, with a random chance out of 100.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Neutral",
            "description": "Play this sound while the monster is in Neutral, Walk, or Run mode. Also play this sound when the $!monstats#Id!$ equals \"vulture1\" and while the monster is in Skill1 mode. Also play this sound when the $!monstats#Id!$ equals \"batdemon1\" and while the monster is in Skill4 mode.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "NeuTime",
            "description": "Controls the amount of game frames to delay between re-playing the $!#Neutral!$ sound after it finishes.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Init",
            "description": "Play this sound when the monster spawns and is not dead and is not playing its Neutral sound.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "Taunt",
            "description": "Play this sound when the server requests that the monster should play its Taunt. This is typically used for quest or story related moments.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "Flee",
            "description": "Play this sound when the monster is told to flee. This depends on when the monster AI is told to play this sound.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "CvtMo#",
            "altNames": [
                "CvtMo1",
                "CvtMo2",
                "CvtMo3"
            ],
            "description": "This is used to convert the mode for playing the sound. This field defines the original mode that the monster is using. Uses a $!MonMode#code!$.",
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
            "name": "CvtSk#",
            "altNames": [
                "CvtSk1",
                "CvtSk2",
                "CvtSk3"
            ],
            "description": "Defines the skill that the monster is using. If the monster uses a specific skill, then the game can change the monster's mode for sound functionalities to another mode to change how sounds are generally handled.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "skills",
                "field": "skill"
            }
        },
        {
            "name": "CvtTgt#",
            "altNames": [
                "CvtTgt1",
                "CvtTgt2",
                "CvtTgt3"
            ],
            "description": "Defines the mode to convert the sound to when the monster is using the relative skill from the $!#CvtSk#!$ field. This does not actually change the monster's actual mode but only what mode that sounds think the monster is using. Uses a $!MonMode#code!$.",
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
        }
    ]
}