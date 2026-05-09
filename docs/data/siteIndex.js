// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
const siteIndex = [
    {
        "name": "Home",
        "path": "/index.html"
    },
    {
        "name": "About",
        "path": "/about.html"
    },
    {
        "name": "Changelog",
        "path": "/changelog.html"
    },
    {
        "name": "Files",
        "children": [
            {
                "name": "actinfo.txt",
                "path": "/files/actinfo.html"
            },
            {
                "name": "armor.txt",
                "path": "/files/armor.html"
            },
            {
                "name": "automagic.txt",
                "path": "/files/automagic.html"
            },
            {
                "name": "AutoMap.txt",
                "path": "/files/AutoMap.html"
            },
            {
                "name": "belts.txt",
                "path": "/files/belts.html"
            },
            {
                "name": "books.txt",
                "path": "/files/books.html"
            },
            {
                "name": "charstats.txt",
                "path": "/files/charstats.html"
            },
            {
                "name": "cubemain.txt",
                "path": "/files/cubemain.html"
            },
            {
                "name": "desecratedzones",
                "path": "/files/desecratedzones.html"
            },
            {
                "name": "difficultylevels.txt",
                "path": "/files/difficultylevels.html"
            },
            {
                "name": "experience.txt",
                "path": "/files/experience.html"
            },
            {
                "name": "gamble.txt",
                "path": "/files/gamble.html"
            },
            {
                "name": "gems.txt",
                "path": "/files/gems.html"
            },
            {
                "name": "hireling.txt",
                "path": "/files/hireling.html"
            },
            {
                "name": "inventory.txt",
                "path": "/files/inventory.html"
            },
            {
                "name": "itemratio.txt",
                "path": "/files/itemratio.html"
            },
            {
                "name": "ItemStatCost.txt",
                "path": "/files/ItemStatCost.html"
            },
            {
                "name": "ItemTypes.txt",
                "path": "/files/ItemTypes.html"
            },
            {
                "name": "ItemUICategories.txt",
                "path": "/files/ItemUICategories.html"
            },
            {
                "name": "LevelGroups.txt",
                "path": "/files/LevelGroups.html"
            },
            {
                "name": "Levels.txt",
                "path": "/files/Levels.html"
            },
            {
                "name": "LvlMaze.txt",
                "path": "/files/LvlMaze.html"
            },
            {
                "name": "LvlPrest.txt",
                "path": "/files/LvlPrest.html"
            },
            {
                "name": "LvlSub.txt",
                "path": "/files/LvlSub.html"
            },
            {
                "name": "LvlTypes.txt",
                "path": "/files/LvlTypes.html"
            },
            {
                "name": "LvlWarp.txt",
                "path": "/files/LvlWarp.html"
            },
            {
                "name": "MagicPrefix.txt",
                "path": "/files/MagicPrefix.html"
            },
            {
                "name": "MagicSuffix.txt",
                "path": "/files/MagicSuffix.html"
            },
            {
                "name": "misc.txt",
                "path": "/files/misc.html"
            },
            {
                "name": "Missiles.txt",
                "path": "/files/Missiles.html"
            },
            {
                "name": "monequip.txt",
                "path": "/files/monequip.html"
            },
            {
                "name": "MonLvl.txt",
                "path": "/files/MonLvl.html"
            },
            {
                "name": "MonPet.txt",
                "path": "/files/MonPet.html"
            },
            {
                "name": "MonPreset.txt",
                "path": "/files/MonPreset.html"
            },
            {
                "name": "MonProp.txt",
                "path": "/files/MonProp.html"
            },
            {
                "name": "monseq.txt",
                "path": "/files/monseq.html"
            },
            {
                "name": "monsounds.txt",
                "path": "/files/monsounds.html"
            },
            {
                "name": "monstats.txt",
                "path": "/files/monstats.html"
            },
            {
                "name": "monstats2.txt",
                "path": "/files/monstats2.html"
            },
            {
                "name": "MonType.txt",
                "path": "/files/MonType.html"
            },
            {
                "name": "monumod.txt",
                "path": "/files/monumod.html"
            },
            {
                "name": "npc.txt",
                "path": "/files/npc.html"
            },
            {
                "name": "objects.txt",
                "path": "/files/objects.html"
            },
            {
                "name": "objgroup.txt",
                "path": "/files/objgroup.html"
            },
            {
                "name": "objpreset.txt",
                "path": "/files/objpreset.html"
            },
            {
                "name": "Overlay.txt",
                "path": "/files/Overlay.html"
            },
            {
                "name": "pettype.txt",
                "path": "/files/pettype.html"
            },
            {
                "name": "Properties.txt",
                "path": "/files/Properties.html"
            },
            {
                "name": "PropertyGroups.txt",
                "path": "/files/PropertyGroups.html"
            },
            {
                "name": "qualityitems.txt",
                "path": "/files/qualityitems.html"
            },
            {
                "name": "RarePrefix.txt",
                "path": "/files/RarePrefix.html"
            },
            {
                "name": "RareSuffix.txt",
                "path": "/files/RareSuffix.html"
            },
            {
                "name": "Runes.txt",
                "path": "/files/Runes.html"
            },
            {
                "name": "RunewordUICategories.txt",
                "path": "/files/RunewordUICategories.html"
            },
            {
                "name": "SetItems.txt",
                "path": "/files/SetItems.html"
            },
            {
                "name": "Sets.txt",
                "path": "/files/Sets.html"
            },
            {
                "name": "shrines.txt",
                "path": "/files/shrines.html"
            },
            {
                "name": "skilldesc.txt",
                "path": "/files/skilldesc.html"
            },
            {
                "name": "skills.txt",
                "path": "/files/skills.html"
            },
            {
                "name": "SoundEnviron.txt",
                "path": "/files/SoundEnviron.html"
            },
            {
                "name": "sounds.txt",
                "path": "/files/sounds.html"
            },
            {
                "name": "states.txt",
                "path": "/files/states.html"
            },
            {
                "name": "SuperUniques.txt",
                "path": "/files/SuperUniques.html"
            },
            {
                "name": "TreasureClassEx.txt",
                "path": "/files/TreasureClassEx.html"
            },
            {
                "name": "UniqueAppellation.txt",
                "path": "/files/UniqueAppellation.html"
            },
            {
                "name": "UniqueItems.txt",
                "path": "/files/UniqueItems.html"
            },
            {
                "name": "UniquePrefix.txt",
                "path": "/files/UniquePrefix.html"
            },
            {
                "name": "UniqueSuffix.txt",
                "path": "/files/UniqueSuffix.html"
            },
            {
                "name": "wanderingmon.txt",
                "path": "/files/wanderingmon.html"
            },
            {
                "name": "weapons.txt",
                "path": "/files/weapons.html"
            },
            {
                "name": "Reference Files",
                "children": [
                    {
                        "name": "ArmType.txt",
                        "path": "/files/ArmType.html"
                    },
                    {
                        "name": "bodylocs.txt",
                        "path": "/files/bodylocs.html"
                    },
                    {
                        "name": "colors.txt",
                        "path": "/files/colors.html"
                    },
                    {
                        "name": "compcode.txt",
                        "path": "/files/compcode.html"
                    },
                    {
                        "name": "Composit.txt",
                        "path": "/files/Composit.html"
                    },
                    {
                        "name": "cubemod.txt",
                        "path": "/files/cubemod.html"
                    },
                    {
                        "name": "ElemTypes.txt",
                        "path": "/files/ElemTypes.html"
                    },
                    {
                        "name": "events.txt",
                        "path": "/files/events.html"
                    },
                    {
                        "name": "HitClass.txt",
                        "path": "/files/HitClass.html"
                    },
                    {
                        "name": "lowqualityitems.txt",
                        "path": "/files/lowqualityitems.html"
                    },
                    {
                        "name": "misscalc.txt",
                        "path": "/files/misscalc.html"
                    },
                    {
                        "name": "monai.txt",
                        "path": "/files/monai.html"
                    },
                    {
                        "name": "MonMode.txt",
                        "path": "/files/MonMode.html"
                    },
                    {
                        "name": "MonPlace.txt",
                        "path": "/files/MonPlace.html"
                    },
                    {
                        "name": "ObjMode.txt",
                        "path": "/files/ObjMode.html"
                    },
                    {
                        "name": "PlayerClass.txt",
                        "path": "/files/PlayerClass.html"
                    },
                    {
                        "name": "PlrMode.txt",
                        "path": "/files/PlrMode.html"
                    },
                    {
                        "name": "PlrType.txt",
                        "path": "/files/PlrType.html"
                    },
                    {
                        "name": "skillcalc.txt",
                        "path": "/files/skillcalc.html"
                    },
                    {
                        "name": "StorePage.txt",
                        "path": "/files/StorePage.html"
                    }
                ]
            },
            {
                "name": "Resources",
                "children": [
                    {
                        "name": "enums",
                        "path": "/files/enums.html"
                    }
                ]
            }
        ]
    },
    {
        "name": "Docs",
        "children": [
            {
                "name": "Game Mode Split",
                "path": "/docs/game-mode-split.html"
            },
            {
                "name": "Generic Pet AI",
                "path": "/docs/genericpetai.html"
            },
            {
                "name": "BBE/Calc Fields",
                "path": "/docs/bbe-calc.html"
            },
            {
                "name": "Item Ratio Calculations",
                "path": "/docs/itemratio-calc.html"
            }
        ]
    }
]