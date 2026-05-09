// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["sounds"] = {
    "title": "sounds.txt",
    "overview": "This file controls settings for all sounds in the game.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Sound",
            "description": "Defines the unique name ID for the sound, which is how other files can reference the sound",
            "type": {
                "type": "text",
                "dataLength": 47,
                "memSize": 16
            }
        },
        {
            "name": "Redirect",
            "description": "Points the sound so the index of another sound in the data file. If this field is not empty, the game will use the redirected sound instead of this sound. This can be used when playing the game in the new graphics mode.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 32,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "Channel",
            "description": "Declares which channel the sound is initialized in. This can affect how different volume or sound settings handle this sound.",
            "type": {
                "type": "text",
                "dataLength": 99,
                "memSize": 0
            }
        },
        {
            "name": "FileName",
            "description": "Defines the file path and name of the sound file to play",
            "type": {
                "type": "text",
                "dataLength": 99,
                "memSize": 0
            }
        },
        {
            "name": "IsLocal",
            "description": "Boolean Field. If equals 1, then this sound is considered a localized sound and will change based on the game's localization setting. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "IsMusic",
            "description": "Boolean Field. If equals 1, then the sound is flagged as a music sound, which affects how music related settings handle this sound. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "IsAmbientScene",
            "description": "Boolean Field. If equals 1, then the sound is flagged as an ambient scene sound, which affects how the game handles the sound when the player transitions between areas. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "IsAmbientEvent",
            "description": "Boolean Field. If equals 1, then the sound is flagged as an ambient event sound, which affects how the game treats the sound when the player transitions between areas. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "IsUI",
            "description": "Boolean Field. If equals 1, then the sound is flagged as a UI sound, which affects how UI related settings handle this sound. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Volume Min",
            "description": "Controls the minimum volume of the sound. Uses a range of 0 to 255.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Volume Max",
            "description": "Controls the maximum volume of the sound. If both $!#Volume Min!$ and $!#Volume Max!$ fields differ in value, then the sound will randomly select a volume value in between these values when it is played. Uses a range of 0 to 255.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Pitch Min",
            "description": "Controls the minimum pitch percentage of the sound.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "Pitch Max",
            "description": "Controls the maximum pitch percentage of the sound. If both $!#Pitch Min!$ and $!#Pitch Max!$ fields differ in value, then the sound will randomly select a pitch value in between these values when it is played.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "Group Size",
            "description": "Defines a sound Group by declaring a size value. When the sound has this value greater than 0, then this sound is declared as the group's base sound. Any link to use a sound should use the base sound, to signify that the game should use this group of sounds. This field's value controls the number of sounds indexed after base sound that should be added to the group. For example, if the sound has a $!#Group Size!$ value equal to 5, then this sound is declared as the group's base sound, and the next 4 sounds indexed after this base sound will be added to the group.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Group Weight",
            "description": "Controls the chance to pick the sound when it is part of a group with other sounds. If all sounds in the group do not have a $!#Group Weight!$ value, then the group sounds will play in historical order. This value controls a weighted random chance, meaning that all related sounds have their weights added together for a total chance and each sound's weight value is rolled against that total value to determine if the sound is successfully picked. The higher this value, the more likely the sound will be picked. This is only used when the sound is part of a group (See $!#Group Size!$).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Loop",
            "description": "Boolean Field. If equals 1, then the sound will replay itself after it finishes playing. If equals 0, then the sound will only play once.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Fade In",
            "description": "Controls how long to gradually increase the sound's volume starting from 0 when the sound starts playing. Measured in audio game ticks, where 1 game frame is 40 audio ticks, and the game runs at 25 frames per second.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Fade Out",
            "description": "Controls how long to gradually decrease the sound's volume to 0 when the sound stops playing. Measured in audio game ticks, where 1 game frame is 40 audio ticks, and the game runs at 25 frames per second.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Defer Inst",
            "description": "Boolean Field. If equals 1, then when a duplicate instance of this sound plays the game will stop that request. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Stop Inst",
            "description": "Boolean Field. If equals 1, then when a duplicate instance of this sound plays the previous instance of the sound will stop and the new instance of the sound will play. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Duration",
            "description": "Controls the length of time to play the sound. When the sound has been playing for this length of time, then the sound will stop. If this equals 0, then ignore this functionality.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "Compound",
            "description": "Controls the game tick time limit for when a sound can join in playing based on the previous sound played in the Group. If equals 0, then the sound will not be compounded.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "Falloff",
            "description": "Defines the range of falloff for hearing the sound, based on distance. Uses a code to determine the range value presets.",
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
                    "Short - falloff range is 60 to 400 pixels"
                ],
                [
                    "1",
                    "Medium - falloff range is 60 to 700 pixels"
                ],
                [
                    "2",
                    "Large - falloff range is 200 to 1000 pixels"
                ],
                [
                    "3",
                    "Ambient - falloff range is 400 to 1500 pixels"
                ],
                [
                    "4",
                    "Voice - falloff range is 2000 pixels (no falloff)"
                ]
            ]
        },
        {
            "name": "LFEMix",
            "description": "Controls the percentage (out of 100) of the sound's Low-Frequency Effects channel.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "3dSpread",
            "description": "Controls the 3D spread angle of the sound. This only works if the sound is considered a 3D sound (See $!#Is2D!$).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "Priority",
            "description": "Controls which if the sound should play before other sounds when too many sounds are playing at once. This value is compared to the priority value of other sounds, and the sound that has the higher priority will play first. Sounds belonging to the player will get an increased priority value of 80.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Stream",
            "description": "Boolean Field. If equals 1, then the sound will be file streamed into the game when called to play. If equals 0, then the entire sound will be loaded into the game before playing.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Is2D",
            "description": "Boolean Field. If equals 1, then the sound is considered a 2D sound and will not have 3D spread settings. If equals 0, then the sound is considered a 3D sound and will use the 3D spread settings.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Tracking",
            "description": "Boolean Field. If equals 1, then the sound will track a unit and will update its position to follow that unit. If equals 0, then the sound will not move and will be stationary.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Solo",
            "description": "Boolean Field. If equals 1, then reduce the volume of other sounds while this sound is playing. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Music Vol",
            "description": "Boolean Field. If equals 1, then the sound's volume will be affected by the music volume in the game options menu. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Block #",
            "altNames": [
                "Block 1",
                "Block 2",
                "Block 3"
            ],
            "description": "Defines an offset time value in the sound. If this sound is used in a Sound Environment (See $!SoundEnviron!$) then these fields control when to periodically update the current song sound to an offset. If this sound is not used in a Sound Environment and if only $!#Block 1!$ is used and the $!#Loop!$ field is enabled, then use this block value as the time in the sound when to start looping. If this equals -1, then the field is ignored.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "HDOptOut",
            "description": "Boolean Field. If equals 1, then the sound will not play in the new graphics mode. If equals 0, then the sound will play in the new graphics mode.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Delay",
            "description": "Adds a delay to the starting tick of the sound when the sound starts playing. Measured in audio game ticks, where 1 game frame is 40 audio ticks, and the game runs at 25 frames per second.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Magic Number",
            "description": "The magic number in the last column is the index of the last SD sound. Laboratory reads this for its sound tool.",
            "type": {
                "type": "comment",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}