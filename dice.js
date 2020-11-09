var dicelist = [
"Cocktail",
"Animal",
"Pop Culture Property",
"Animal Crossing Resident",
"Pok&eacute;mon",
"D&D Class",
"Homestuck Troll Romance",
"Hollow Knight Character",
"Neopet Color"
];

var list_of_lists = [
cocktails,
animals,
pop_culture_properties,
animal_crossing_villagers,
pokemon,
dnd_classes,
homestuck_troll_romances,
hollow_knight_characters,
neopet_colors
];





var pokemon = [
"Bulbasaur",
"Ivysaur",
"Venusaur",
"Charmander",
"Charmeleon",
"Charizard",
"Squirtle",
"Wartortle",
"Blastoise",
"Caterpie",
"Metapod",
"Butterfree",
"Weedle",
"Kakuna",
"Beedrill",
"Pidgey",
"Pidgeotto",
"Pidgeot",
"Rattata",
"Raticate",
"Spearow",
"Fearow",
"Ekans",
"Arbok",
"Pikachu",
"Raichu",
"Sandshrew",
"Sandslash",
"Nidoran♀",
"Nidorina",
"Nidoqueen",
"Nidoran♂",
"Nidorino",
"Nidoking",
"Clefairy",
"Clefable",
"Vulpix",
"Ninetales",
"Jigglypuff",
"Wigglytuff",
"Zubat",
"Golbat",
"Oddish",
"Gloom",
"Vileplume",
"Paras",
"Parasect",
"Venonat",
"Venomoth",
"Diglett",
"Dugtrio",
"Meowth",
"Persian",
"Psyduck",
"Golduck",
"Mankey",
"Primeape",
"Growlithe",
"Arcanine",
"Poliwag",
"Poliwhirl",
"Poliwrath",
"Abra",
"Kadabra",
"Alakazam",
"Machop",
"Machoke",
"Machamp",
"Bellsprout",
"Weepinbell",
"Victreebel",
"Tentacool",
"Tentacruel",
"Geodude",
"Graveler",
"Golem",
"Ponyta",
"Rapidash",
"Slowpoke",
"Slowbro",
"Magnemite",
"Magneton",
"Farfetch’d",
"Doduo",
"Dodrio",
"Seel",
"Dewgong",
"Grimer",
"Muk",
"Shellder",
"Cloyster",
"Gastly",
"Haunter",
"Gengar",
"Onix",
"Drowzee",
"Hypno",
"Krabby",
"Kingler",
"Voltorb",
"Electrode",
"Exeggcute",
"Exeggutor",
"Cubone",
"Marowak",
"Hitmonlee",
"Hitmonchan",
"Lickitung",
"Koffing",
"Weezing",
"Rhyhorn",
"Rhydon",
"Chansey",
"Tangela",
"Kangaskhan",
"Horsea",
"Seadra",
"Goldeen",
"Seaking",
"Staryu",
"Starmie",
"Mr. Mime",
"Scyther",
"Jynx",
"Electabuzz",
"Magmar",
"Pinsir",
"Tauros",
"Magikarp",
"Gyarados",
"Lapras",
"Ditto",
"Eevee",
"Vaporeon",
"Jolteon",
"Flareon",
"Porygon",
"Omanyte",
"Omastar",
"Kabuto",
"Kabutops",
"Aerodactyl",
"Snorlax",
"Articuno",
"Zapdos",
"Moltres",
"Dratini",
"Dragonair",
"Dragonite",
"Mewtwo",
"Mew",
"Chikorita",
"Bayleef",
"Meganium",
"Cyndaquil",
"Quilava",
"Typhlosion",
"Totodile",
"Croconaw",
"Feraligatr",
"Sentret",
"Furret",
"Hoothoot",
"Noctowl",
"Ledyba",
"Ledian",
"Spinarak",
"Ariados",
"Crobat",
"Chinchou",
"Lanturn",
"Pichu",
"Cleffa",
"Igglybuff",
"Togepi",
"Togetic",
"Natu",
"Xatu",
"Mareep",
"Flaaffy",
"Ampharos",
"Bellossom",
"Marill",
"Azumarill",
"Sudowoodo",
"Politoed",
"Hoppip",
"Skiploom",
"Jumpluff",
"Aipom",
"Sunkern",
"Sunflora",
"Yanma",
"Wooper",
"Quagsire",
"Espeon",
"Umbreon",
"Murkrow",
"Slowking",
"Misdreavus",
"Unown",
"Wobbuffet",
"Girafarig",
"Pineco",
"Forretress",
"Dunsparce",
"Gligar",
"Steelix",
"Snubbull",
"Granbull",
"Qwilfish",
"Scizor",
"Shuckle",
"Heracross",
"Sneasel",
"Teddiursa",
"Ursaring",
"Slugma",
"Magcargo",
"Swinub",
"Piloswine",
"Corsola",
"Remoraid",
"Octillery",
"Delibird",
"Mantine",
"Skarmory",
"Houndour",
"Houndoom",
"Kingdra",
"Phanpy",
"Donphan",
"Porygon2",
"Stantler",
"Smeargle",
"Tyrogue",
"Hitmontop",
"Smoochum",
"Elekid",
"Magby",
"Miltank",
"Blissey",
"Raikou",
"Entei",
"Suicune",
"Larvitar",
"Pupitar",
"Tyranitar",
"Lugia",
"Ho-Oh",
"Celebi",
"Treecko",
"Grovyle",
"Sceptile",
"Torchic",
"Combusken",
"Blaziken",
"Mudkip",
"Marshtomp",
"Swampert",
"Poochyena",
"Mightyena",
"Zigzagoon",
"Linoone",
"Wurmple",
"Silcoon",
"Beautifly",
"Cascoon",
"Dustox",
"Lotad",
"Lombre",
"Ludicolo",
"Seedot",
"Nuzleaf",
"Shiftry",
"Taillow",
"Swellow",
"Wingull",
"Pelipper",
"Ralts",
"Kirlia",
"Gardevoir",
"Surskit",
"Masquerain",
"Shroomish",
"Breloom",
"Slakoth",
"Vigoroth",
"Slaking",
"Nincada",
"Ninjask",
"Shedinja",
"Whismur",
"Loudred",
"Exploud",
"Makuhita",
"Hariyama",
"Azurill",
"Nosepass",
"Skitty",
"Delcatty",
"Sableye",
"Mawile",
"Aron",
"Lairon",
"Aggron",
"Meditite",
"Medicham",
"Electrike",
"Manectric",
"Plusle",
"Minun",
"Volbeat",
"Illumise",
"Roselia",
"Gulpin",
"Swalot",
"Carvanha",
"Sharpedo",
"Wailmer",
"Wailord",
"Numel",
"Camerupt",
"Torkoal",
"Spoink",
"Grumpig",
"Spinda",
"Trapinch",
"Vibrava",
"Flygon",
"Cacnea",
"Cacturne",
"Swablu",
"Altaria",
"Zangoose",
"Seviper",
"Lunatone",
"Solrock",
"Barboach",
"Whiscash",
"Corphish",
"Crawdaunt",
"Baltoy",
"Claydol",
"Lileep",
"Cradily",
"Anorith",
"Armaldo",
"Feebas",
"Milotic",
"Castform",
"Kecleon",
"Shuppet",
"Banette",
"Duskull",
"Dusclops",
"Tropius",
"Chimecho",
"Absol",
"Wynaut",
"Snorunt",
"Glalie",
"Spheal",
"Sealeo",
"Walrein",
"Clamperl",
"Huntail",
"Gorebyss",
"Relicanth",
"Luvdisc",
"Bagon",
"Shelgon",
"Salamence",
"Beldum",
"Metang",
"Metagross",
"Regirock",
"Regice",
"Registeel",
"Latias",
"Latios",
"Kyogre",
"Groudon",
"Rayquaza",
"Jirachi",
"Deoxys",
"Turtwig",
"Grotle",
"Torterra",
"Chimchar",
"Monferno",
"Infernape",
"Piplup",
"Prinplup",
"Empoleon",
"Starly",
"Staravia",
"Staraptor",
"Bidoof",
"Bibarel",
"Kricketot",
"Kricketune",
"Shinx",
"Luxio",
"Luxray",
"Budew",
"Roserade",
"Cranidos",
"Rampardos",
"Shieldon",
"Bastiodon",
"Burmy",
"Wormadam",
"Mothim",
"Combee",
"Vespiquen",
"Pachirisu",
"Buizel",
"Floatzel",
"Cherubi",
"Cherrim",
"Shellos",
"Gastrodon",
"Ambipom",
"Drifloon",
"Drifblim",
"Buneary",
"Lopunny",
"Mismagius",
"Honchkrow",
"Glameow",
"Purugly",
"Chingling",
"Stunky",
"Skuntank",
"Bronzor",
"Bronzong",
"Bonsly",
"Mime Jr.",
"Happiny",
"Chatot",
"Spiritomb",
"Gible",
"Gabite",
"Garchomp",
"Munchlax",
"Riolu",
"Lucario",
"Hippopotas",
"Hippowdon",
"Skorupi",
"Drapion",
"Croagunk",
"Toxicroak",
"Carnivine",
"Finneon",
"Lumineon",
"Mantyke",
"Snover",
"Abomasnow",
"Weavile",
"Magnezone",
"Lickilicky",
"Rhyperior",
"Tangrowth",
"Electivire",
"Magmortar",
"Togekiss",
"Yanmega",
"Leafeon",
"Glaceon",
"Gliscor",
"Mamoswine",
"Porygon-Z",
"Gallade",
"Probopass",
"Dusknoir",
"Froslass",
"Rotom",
"Uxie",
"Mesprit",
"Azelf",
"Dialga",
"Palkia",
"Heatran",
"Regigigas",
"Giratina",
"Cresselia",
"Phione",
"Manaphy",
"Darkrai",
"Shaymin",
"Arceus",
"Victini",
"Snivy",
"Servine",
"Serperior",
"Tepig",
"Pignite",
"Emboar",
"Oshawott",
"Dewott",
"Samurott",
"Patrat",
"Watchog",
"Lillipup",
"Herdier",
"Stoutland",
"Purrloin",
"Liepard",
"Pansage",
"Simisage",
"Pansear",
"Simisear",
"Panpour",
"Simipour",
"Munna",
"Musharna",
"Pidove",
"Tranquill",
"Unfezant",
"Blitzle",
"Zebstrika",
"Roggenrola",
"Boldore",
"Gigalith",
"Woobat",
"Swoobat",
"Drilbur",
"Excadrill",
"Audino",
"Timburr",
"Gurdurr",
"Conkeldurr",
"Tympole",
"Palpitoad",
"Seismitoad",
"Throh",
"Sawk",
"Sewaddle",
"Swadloon",
"Leavanny",
"Venipede",
"Whirlipede",
"Scolipede",
"Cottonee",
"Whimsicott",
"Petilil",
"Lilligant",
"Basculin",
"Sandile",
"Krokorok",
"Krookodile",
"Darumaka",
"Darmanitan",
"Maractus",
"Dwebble",
"Crustle",
"Scraggy",
"Scrafty",
"Sigilyph",
"Yamask",
"Cofagrigus",
"Tirtouga",
"Carracosta",
"Archen",
"Archeops",
"Trubbish",
"Garbodor",
"Zorua",
"Zoroark",
"Minccino",
"Cinccino",
"Gothita",
"Gothorita",
"Gothitelle",
"Solosis",
"Duosion",
"Reuniclus",
"Ducklett",
"Swanna",
"Vanillite",
"Vanillish",
"Vanilluxe",
"Deerling",
"Sawsbuck",
"Emolga",
"Karrablast",
"Escavalier",
"Foongus",
"Amoonguss",
"Frillish",
"Jellicent",
"Alomomola",
"Joltik",
"Galvantula",
"Ferroseed",
"Ferrothorn",
"Klink",
"Klang",
"Klinklang",
"Tynamo",
"Eelektrik",
"Eelektross",
"Elgyem",
"Beheeyem",
"Litwick",
"Lampent",
"Chandelure",
"Axew",
"Fraxure",
"Haxorus",
"Cubchoo",
"Beartic",
"Cryogonal",
"Shelmet",
"Accelgor",
"Stunfisk",
"Mienfoo",
"Mienshao",
"Druddigon",
"Golett",
"Golurk",
"Pawniard",
"Bisharp",
"Bouffalant",
"Rufflet",
"Braviary",
"Vullaby",
"Mandibuzz",
"Heatmor",
"Durant",
"Deino",
"Zweilous",
"Hydreigon",
"Larvesta",
"Volcarona",
"Cobalion",
"Terrakion",
"Virizion",
"Tornadus",
"Thundurus",
"Reshiram",
"Zekrom",
"Landorus",
"Kyurem",
"Keldeo",
"Meloetta",
"Genesect",
"Chespin",
"Quilladin",
"Chesnaught",
"Fennekin",
"Braixen",
"Delphox",
"Froakie",
"Frogadier",
"Greninja",
"Bunnelby",
"Diggersby",
"Fletchling",
"Fletchinder",
"Talonflame",
"Scatterbug",
"Spewpa",
"Vivillon",
"Litleo",
"Pyroar",
"Flabébé",
"Floette",
"Florges",
"Skiddo",
"Gogoat",
"Pancham",
"Pangoro",
"Furfrou",
"Espurr",
"Meowstic",
"Honedge",
"Doublade",
"Aegislash",
"Spritzee",
"Aromatisse",
"Swirlix",
"Slurpuff",
"Inkay",
"Malamar",
"Binacle",
"Barbaracle",
"Skrelp",
"Dragalge",
"Clauncher",
"Clawitzer",
"Helioptile",
"Heliolisk",
"Tyrunt",
"Tyrantrum",
"Amaura",
"Aurorus",
"Sylveon",
"Hawlucha",
"Dedenne",
"Carbink",
"Goomy",
"Sliggoo",
"Goodra",
"Klefki",
"Phantump",
"Trevenant",
"Pumpkaboo",
"Gourgeist",
"Bergmite",
"Avalugg",
"Noibat",
"Noivern",
"Xerneas",
"Yveltal",
"Zygarde",
"Diancie",
"Hoopa",
"Volcanion",
"Rowlet",
"Dartrix",
"Decidueye",
"Litten",
"Torracat",
"Incineroar",
"Popplio",
"Brionne",
"Primarina",
"Pikipek",
"Trumbeak",
"Toucannon",
"Yungoos",
"Gumshoos",
"Grubbin",
"Charjabug",
"Vikavolt",
"Crabrawler",
"Crabominable",
"Oricorio",
"Cutiefly",
"Ribombee",
"Rockruff",
"Lycanroc",
"Wishiwashi",
"Mareanie",
"Toxapex",
"Mudbray",
"Mudsdale",
"Dewpider",
"Araquanid",
"Fomantis",
"Lurantis",
"Morelull",
"Shiinotic",
"Salandit",
"Salazzle",
"Stufful",
"Bewear",
"Bounsweet",
"Steenee",
"Tsareena",
"Comfey",
"Oranguru",
"Passimian",
"Wimpod",
"Golisopod",
"Sandygast",
"Palossand",
"Pyukumuku",
"Type: Null",
"Silvally",
"Minior",
"Komala",
"Turtonator",
"Togedemaru",
"Mimikyu",
"Bruxish",
"Drampa",
"Dhelmise",
"Jangmo-o",
"Hakamo-o",
"Kommo-o",
"Tapu Koko",
"Tapu Lele",
"Tapu Bulu",
"Tapu Fini",
"Cosmog",
"Cosmoem",
"Solgaleo",
"Lunala",
"Nihilego",
"Buzzwole",
"Pheromosa",
"Xurkitree",
"Celesteela",
"Kartana",
"Guzzlord",
"Necrozma",
"Magearna",
"Marshadow",
"Poipole",
"Naganadel",
"Stakataka",
"Blacephalon",
"Zeraora",
"Meltan",
"Melmetal",
"Grookey",
"Thwackey",
"Rillaboom",
"Scorbunny",
"Raboot",
"Cinderace",
"Sobble",
"Drizzile",
"Inteleon",
"Skwovet",
"Greedent",
"Rookidee",
"Corvisquire",
"Corviknight",
"Blipbug",
"Dottler",
"Orbeetle",
"Nickit",
"Thievul",
"Gossifleur",
"Eldegoss",
"Wooloo",
"Dubwool",
"Chewtle",
"Drednaw",
"Yamper",
"Boltund",
"Rolycoly",
"Carkol",
"Coalossal",
"Applin",
"Flapple",
"Appletun",
"Silicobra",
"Sandaconda",
"Cramorant",
"Arrokuda",
"Barraskewda",
"Toxel",
"Toxtricity",
"Sizzlipede",
"Centiskorch",
"Clobbopus",
"Grapploct",
"Sinistea",
"Polteageist",
"Hatenna",
"Hattrem",
"Hatterene",
"Impidimp",
"Morgrem",
"Grimmsnarl",
"Obstagoon",
"Perrserker",
"Cursola",
"Sirfetch’d",
"Mr. Rime",
"Runerigus",
"Milcery",
"Alcremie",
"Falinks",
"Pincurchin",
"Snom",
"Frosmoth",
"Stonjourner",
"Eiscue",
"Indeedee",
"Morpeko",
"Cufant",
"Copperajah",
"Dracozolt",
"Arctozolt",
"Dracovish",
"Arctovish",
"Duraludon",
"Dreepy",
"Drakloak",
"Dragapult",
"Zacian",
"Zamazenta",
"Eternatus",
"Kubfu",
"Urshifu",
"Zarude"
]



var cocktails = [
	"Alexander",
	"Americano",
	"Angel Face",
	"Aviation",
	"Bellini",
	"Between the Sheets",
	"Black Russian",
	"Bloody Mary",
	"Boulevardier",
	"Brandy Crusta",
	"Caipirinha",
	"Casino",
	"Champagne Cocktail",
	"Clover Club",
	"Corpse Reviver",
	"Cosmopolitan",
	"Cuba Libre",
	"Daiquiri",
	"Dry Martini",
	"French 75",
	"French Connection",
	"Gin Fizz",
	"Golden Dream",
	"Grasshopper",
	"Hanky Panky",
	"Hemingway Special",
	"Horse's Neck",
	"Irish Coffee",
	"John Collins",
	"Kir",
	"Last Word",
	"Long Island Iced Tea",
	"Mai Tai",
	"Manhattan",
	"Margarita",
	"Martinez",
	"Mary Pickford",
	"Mimosa",
	"Mint Julep",
	"Mojito",
	"Monkey Gland",
	"Moscow Mule",
	"Negroni",
	"Old Fashioned",
	"Paradise",
	"Pi&ntilde;a Colada",
	"Pisco Sour",
	"Planter's Punch",
	"Porto Flips",
	"Ramos Fizz",
	"Rusty Nail",
	"Sazerac",
	"Sea Breeze",
	"Sex on the Beach",
	"Sidecar",
	"Singapore Sling",
	"Stinger",
	"Tequila Sunrise",
	"Tuxedo",
	"Vesper",
	"Vieux Carr&eacute;",
	"Whiskey Sour",
	"White Lady",
	"Zombie"
]


var animals = [
	"aardvark",
	"alligator",
	"anteater",
	"axolotl",
	"bear",
	"bull",
	"camel",
	"cassowary",
	"cat",
	"cow",
	"dinosaur",
	"dog",
	"elephant",
	"emu",
	"fennec",
	"fox",
	"frog",
	"gnu",
	"hyena",
	"lion",
	"marmoset",
	"panda",
	"pigeon",
	"platypus",
	"rabbit",
	"raptor",
	"sloth",
	"snake",
	"spider",
	"tarantula",
	"tiger",
	"unicorn",
	"whale"
]

var pop_culture_properties = [
	"Aladdin",
	"Avatar the Last Airbender",
	"Batman",
	"Breaking Bad",
	"Captain America",
	"Codename: Kids Next Door",
	"Daria",
	"Deadpool",
	"Digimon",
	"Doctor Who",
	"Eraserhead",
	"Final Fantasy",
	"Harry Potter",
	"He-Man",
	"Hello Kitty",
	"Homestuck",
	"Iron Man",
	"The Legend of Zelda",
	"Lilo and Stitch",
	"The Lion King",
	"Lord of the Rings",
	"Mob Psycho 100",
	"My Hero Academia",
	"Peanuts",
	"Pok&eacute;mon",	
	"Powerpuff Girls",
	"Rick and Morty",
	"Rugrats",
	"Sesame Street",
	"The Simpsons",
	"Skyrim",
	"Space Jam",
	"Spiderman",
	"Star Wars",
	"Super Mario Bros.",
	"Teenage Mutant Ninja Turtles",
	"Thundercats"
]



var dnd_classes = [
	"barbarian",
	"bard",
	"cleric",
	"druid",
	"fighter",
	"monk",
	"paladin",
	"ranger",
	"rogue",
	"sorcerer",
	"warlock",
	"wizard",
	"artificier",
	"blood hunter"
]

var homestuck_troll_romances=[
	"kismesism",
	"moirallegience",
	"auspisticism",
	"matespritship"
]

var animal_crossing_villagers=[
	"Admiral",
	"Agent S",
	"Agnes",
	"Al",
	"Alfonso",
	"Alice",
	"Alli",
	"Amelia",
	"Anabelle",
	"Anchovy",
	"Angus",
	"Anicotti",
	"Ankha",
	"Annalisa",
	"Annalise",
	"Antonio",
	"Apollo",
	"Apple",
	"Astrid",
	"Audie",
	"Aurora",
	"Ava",
	"Avery",
	"Axel",
	"Baabara",
	"Bam",
	"Bangle",
	"Barold",
	"Bea",
	"Beardo",
	"Beau",
	"Becky",
	"Bella",
	"Benedict",
	"Benjamin",
	"Bertha",
	"Bettina",
	"Bianca",
	"Biff",
	"Big Top",
	"Bill",
	"Billy",
	"Biskit",
	"Bitty",
	"Blaire",
	"Blanche",
	"Bluebear",
	"Bob",
	"Bonbon",
	"Bones",
	"Boomer",
	"Boone",
	"Boots",
	"Boris",
	"Boyd",
	"Bree"
]

var hollow_knight_characters = [
	"Broken Vessel",
	"Brooding Mawlek",
	"Oro",
	"Mato",
	"The Collector",
	"Crystal Guardian",
	"Dung Defender",
	"False Knight",
	"Flukemarm",
	"God Tamer",
	"Great Nailsage Sly",
	"Gruz Mother",
	"Hive Knight",
	"The Hollow Knight",
	"Hornet",
	"The Mantis Lords",
	"Massive Moss Charger",
	"Nosk",
	"Oblobble",
	"Paintmaster Sheo",
	"Radiance",
	"Soul Master",
	"Soul Warrior",
	"Traitor Lord",
	"Uumuu",
	"Vengefly King",
	"Watcher Knights",
	"Zote the Mighty",
	"Elder Hu",
	"Galien",
	"Gorb",
	"Markoth",
	"Marmu",
	"No Eyes",
	"Xero",
	"Absolute Radiance",
	"Enraged Guardian",
	"Failed Champion",
	"Grey Prince Zote",
	"Lost Kin",
	"Nightmare King",
	"Pure Vessel",
	"Sisters of Battle",
	"Soul Tyrant",
	"White Defender",
	"Winged Nosk",
	"The Hunter",
	"Tiso",
	"Grubfather",
	"Menderbug",
	"Myla",
	"Grimm",
	"Dreamers",
	"Bretta",
	"The Traitors' Child",
	"Gravedigger",
	"Blue Child Joni",
	"Revek",
	"Millybug",
	"Caspian",
	"Dr. Chagax",
	"Atra",
	"Garro",
	"Kcin",
	"Grohac",
	"Hex",
	"Hundred Nail Warrior",
	"Karina",
	"Perpetos Noo",
	"Molten",
	"Magnus Strong",
	"Waldie",
	"Wayner",
	"Wyatt",
	"Thistlewind",
	"Boss",
	"Poggy Thorax",
	"Marissa",
	"Hive Queen Vespa",
	"Caelif and Fera Orthop",
	"Cloth",
	"Bardoon",
	"Brumm",
	"Divine",
	"Leg Eater",
	"Boon",
	"Tuk",
	"Ellina",
	"Cornifer",
	"Iselda",
	"Elderbug",
	"Grey Mourner",
	"Emilitia",
	"Grimmsteed",
	"Godseeker",
	"Fluke Hermit",
	"Jiji",
	"Jinn",
	"The Last Stag",
	"Midwife",
	"Herrah",
	"Monomon",
	"Lurien",
	"Nymm",
	"The Nightmare's Heart",
	"Lord Fool",
	"Lemm",
	"Little Fool",
	"Unn",
	"White Lady",
	"Mask Maker",
	"Nailsmith",
	"Moss Prophet",
	"Mister Mushroom",
	"Salubra",
	"Quirrel",
	"Pale King",
	"Snail Shaman",
	"Seer",
	"Tuk",
	"Willoh"
]

var neopet_colors = [
"Biscuit",
"Burlap",
"Candy",
"Chocolate",
"Darigan",
"Dimensional",
"Electric",
"Elderly",
"Eventide",
"Floral",
"Ice",
"Jelly",
"Maractite",
"Marble",
"Mosaic",
"Mutant",
"Oil Paint",
"Origami",
"Pastel",
"Porcelain",
"Relic",
"Robot",
"Royal",
"Skunk",
"Snot",
"Snow",
"Starry",
"Stealthy",
"Steampunk",
"Swamp Gas",
"Toy",
"Transparent",
"Water",
"Wicker",
"Woodland",
"Wraith",
"Zombie"
];


































































var number_of_dice = dicelist.length;

$( document ).ready(function() {
    var dice = $("#dice")[0];
	for (i = 1; i <= number_of_dice; i++){
		dice.innerHTML = dice.innerHTML + `
<div class="container p-3">
<div class="text-center border" id="`+ i +`">
&nbsp;
</div>
<a class="btn btn-fluid btn-primary btn-block" onclick="roll(`+ i + "," + i +`);">`+ dicelist[i-1] +`
</a>
</div>
`;
dice.innerHTML = dice.innerHTML + "</div>";
	}
});


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function roll_all(){
		 for (i = 1; i <= number_of_dice; i++) {
			 roll(list_of_lists[i-1],i);
		 }
}

function roll(pickedlist,x){
	var result = "";
	result = pickedlist[getRndInteger(0,pickedlist.length - 1)];
	document.getElementById(x).innerHTML = result;
}
