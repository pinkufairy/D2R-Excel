// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["SoundEnviron"] = {
    "title": "SoundEnviron.txt",
    "overview": "This file controls the music and ambient sounds that are played while the player is in the area level.The order of each Sound Environment defined in this file will convey what ID value it has.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Handle",
            "description": "A reference field to define the name of the Sound Environment",
            "type": {
                "type": "text",
                "dataLength": 47,
                "memSize": 16
            }
        },
        {
            "name": "Song",
            "description": "Play this sound as the background music while the player is in an area level.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "Day Ambience",
            "description": "Play this sound as an ambient sound while it is currently daytime in the game.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "HD Day Ambience",
            "description": "Play this sound as an ambient sound while it is currently daytime in the game while playing in the new graphics mode.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "Night Ambience",
            "description": "Play this sound as an ambient sound while it is currently nighttime in the game.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "HD Night Ambience",
            "description": "Play this sound as an ambient sound while it is currently nighttime in the game while playing in the new graphics mode.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "Day Event",
            "description": " Play this sound at a random range and variance in the background when it is currently daytime in the game.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "HD Day Event",
            "description": "Play this sound at a random range and variance in the background when it is currently daytime in the game while playing in the new graphics mode.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "Night Event",
            "description": "Play this sound at a random range and variance in the background when it is currently nighttime in the game.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "HD Night Event",
            "description": "Play this sound at a random range and variance in the background when it is currently nighttime in the game while playing in the new graphics mode.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "Event Delay",
            "description": "Controls the baseline number of frames to wait before playing the $!#Day Event!$ or $!#Night Event!$ sound, depending on the time of day. This only applies when the game is being played in SD mode. This value is used in the following calculation to get a random time to play the next event sound: [$!#Event Delay!$] - [$!#Event Delay!$] / 3 + RANDOM(0, ([$!#Event Delay!$] / 3 * 2 + 1))",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "HD Event Delay",
            "description": "Controls the baseline number of frames to wait before playing the $!#HD Day Event!$ or $!#HD Night Event!$ sound, depending on the time of day. This only applies when the game is being played in the new graphics mode. This value is used in the following calculation to get a random time to play the next event sound: [$!#Event Delay!$] - [$!#Event Delay!$] / 3 + RANDOM(0, ([$!#Event Delay!$] / 3 * 2 + 1))",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Indoors",
            "description": "Boolean Field. If equals 1 then, if the current sound being played in the area level with this Sound Environment is \"event_thunder_1\", then the sound will be obstructed. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Material #",
            "altNames": [
                "Material 1",
                "Material 2"
            ],
            "description": "Controls the material of the Sound Environment, which affects which footstep sounds are played. Uses a code to define a specific material.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "0",
                    "None"
                ],
                [
                    "1",
                    "Dirt"
                ],
                [
                    "2",
                    "Indoor Stone"
                ],
                [
                    "3",
                    "Outdoor Stone"
                ],
                [
                    "4",
                    "Sand"
                ],
                [
                    "5",
                    "Snow"
                ],
                [
                    "6",
                    "Wood"
                ]
            ]
        },
        {
            "name": "HD Material #",
            "altNames": [
                "HD Material 1",
                "HD Material 2"
            ],
            "description": "Controls the material of the Sound Environment, which affects which footstep sounds are played. Uses a code to define a specific material. This only applies when the game is being played in the new graphics mode. See $!#Material #!$ for values.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            },
            "appendField": {
                "file": "SoundEnviron",
                "field": "Material #"
            }
        },
        {
            "name": "SFX EAX Environ",
            "description": "Determines an environment preset for default special effects (SFX) sound reverberation settings.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "0",
                    "Generic"
                ],
                [
                    "1",
                    "Padded Cell"
                ],
                [
                    "2",
                    "Room"
                ],
                [
                    "3",
                    "Bathroom"
                ],
                [
                    "4",
                    "Livingroom"
                ],
                [
                    "5",
                    "Stone Room"
                ],
                [
                    "6",
                    "Auditorium"
                ],
                [
                    "7",
                    "Concert Hall"
                ],
                [
                    "8",
                    "Cave"
                ],
                [
                    "9",
                    "Arena"
                ],
                [
                    "10",
                    "Hanger"
                ],
                [
                    "11",
                    "Carpeted Hallway"
                ],
                [
                    "12",
                    "Hallway"
                ],
                [
                    "13",
                    "Stone Corridor"
                ],
                [
                    "14",
                    "Alley"
                ],
                [
                    "15",
                    "Forest"
                ],
                [
                    "16",
                    "City"
                ],
                [
                    "17",
                    "Mountains"
                ],
                [
                    "18",
                    "Quarry"
                ],
                [
                    "19",
                    "Plain"
                ],
                [
                    "20",
                    "Parking Lot"
                ],
                [
                    "21",
                    "Sewer Pipe"
                ],
                [
                    "22",
                    "Underwater"
                ],
                [
                    "23",
                    "Drugged"
                ],
                [
                    "24",
                    "Dizzy"
                ],
                [
                    "25",
                    "Psychotic"
                ],
                [
                    "26",
                    "Programmer Test (A long distant echo)"
                ]
            ]
        },
        {
            "name": "SFX EAX Room Vol",
            "description": "Room effect level at mid frequencies for SFX.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "SFX EAX Room HF",
            "description": "Relative room effect level at high frequencies for SFX.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "SFX EAX Decay Time",
            "description": "Reverberation decay time at mid frequencies for SFX.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "SFX EAX Decay HF",
            "description": "High-frequency to mid-frequency decay time ratio for SFX.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "SFX EAX Reflect",
            "description": "Early reflections level relative to room effect for SFX.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "SFX EAX Reflect Delay",
            "description": "Initial reflection delay time for SFX.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "SFX EAX Reverb",
            "description": "Late reverberation level relative to room effect for SFX.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "SFX EAX Rev Delay",
            "description": "Late reverberation delay time relative to initial reflection for SFX.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "VOX EAX Environ",
            "description": "Determines an environment preset for default Voice (VOX) sound reverberation settings. See $!#SFX EAX Environ!$ for values.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            },
            "appendField": {
                "file": "SoundEnviron",
                "field": "SFX EAX Environ"
            }
        },
        {
            "name": "VOX EAX Room Vol",
            "description": "Room effect level at mid frequencies for Voice.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "VOX EAX Room HF",
            "description": "Relative room effect level at high frequencies for Voice.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "VOX EAX Decay Time",
            "description": "Reverberation decay time at mid frequencies for Voice.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "VOX EAX Decay HF",
            "description": "High-frequency to mid-frequency decay time ratio for Voice.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "VOX EAX Reflect",
            "description": "Early reflections level relative to room effect for Voice.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "VOX EAX Reflect Delay",
            "description": "Initial reflection delay time for Voice.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "VOX EAX Reverb",
            "description": "Late reverberation level relative to room effect for Voice.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "VOX EAX Rev Delay",
            "description": "Late reverberation delay time relative to initial reflection for Voice.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "InheritEnvrionment",
            "description": "Boolean field. If equals 1, then this sound environment will inherit certain values from the existing environment and overwrite other values with its own.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            },
            "table": [
                [
                    "Overwritten values"
                ],
                [
                    "Song"
                ],
                [
                    "Day Ambience"
                ],
                [
                    "HD Day Ambience"
                ],
                [
                    "Night Ambience"
                ],
                [
                    "HD Night Ambience"
                ],
                [
                    "Day Event"
                ],
                [
                    "HD Day Event"
                ],
                [
                    "Night Event"
                ],
                [
                    "HD Night Event"
                ],
                [
                    "Event Delay"
                ],
                [
                    "HD Event Delay"
                ]
            ]
        }
    ]
}