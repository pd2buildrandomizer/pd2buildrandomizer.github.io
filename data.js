const data = {
    equipements: {
        perks: [
            "Crew Chief",
            "Muscle",
            "Armorer",
            "Rogue",
            "Crook",
            "Hitman",
            "Burglar",
            "Infiltrator",
            "Sociopath",
            "Gambler",
            "Grinder",
            "Yakuza",
            "Ex-President",
            "Maniac",
            "Anarchist",
            "Biker",
            "Kingpin",
            "Sicario",
            "Stoic",
            "Tag Team",
            "Hacker"
        ],
        weapons: {
            primary: [
                "AMCAR",
                "AK",
                "CAR-4",
                "UAR",
                "AK.762",
                "JP36",
                "Galant",
                "M308",
                "AK5",
                "AMR-16",
                "Tempest-21",
                "Union 5.56",
                "Commando 553",
                "Eagle Heavy",
                "KETCHNOV Byk-1",
                "Cavity 9mm",
                "AK17",
                "Bootleg",
                "Queen's Wrath",
                "Clarion",
                "Lion's Roar",
                "Valkyria",
                "Gecko 7.62",
                "Little Friend 7.62",
                "Falcon",
                "Gewehr 3",
                "KS12 Urban",
                "Golden AK.762",
                "KSP 58",
                "RPK",
                "M60",
                "KSP",
                "Buzzsaw 42",
                "Brenner 21",
                "Reinfeld 880",
                "IZHMA 12G",
                "Mosconi 12G",
                "Breaker 12G",
                "Mosconi 12G Tactical",
                "M1014",
                "Raven",
                "Reinfeld 88",
                "Steakout 12G",
                "Predator 12G",
                "Joceline O/U 12G",
                "Platypus 70",
                "Rattlesnake",
                "R700",
                "Bernetti Rangehitter",
                "Káng Arms X1",
                "Lebensauger .308",
                "Desertfox",
                "Contractor .308",
                "R93",
                "Repeater 1874",
                "Grom",
                "Nagant",
                "Thanatos .50 cal",
                "Baby Deagle",
                "Bernetti 9",
                "Bronco .44",
                "Broomstick",
                "Chimano 88",
                "Chimano Compact",
                "Chimano Custom",
                "Crosskill",
                "Deagle",
                "Gruber Kurz",
                "Interceptor 45",
                "LEO",
                "Matever .357",
                "Parabellum",
                "Signature .40",
                "STRYK 18c",
                "White Streak",
                "Castigo .44",
                "Crosskill Guard",
                "M13 9mm",
                "Crosskill Chunky Compact",
                "Contractor",
                "Frenchman Model 87",
                "Bernetti Auto",
                "Czech 92",
                "Igor Automatik",
                "HOLT 9mm",
                "Káng Arms Model 54",
                "Goliath 12G",
                "Judge",
                "Brothers Grimm 12G",
                "Blaster 9mm",
                "Chicago Typewriter",
                "CMP",
                "Cobra",
                "Compact-5",
                "CR 805B",
                "Heather",
                "Jackal",
                "Jacket's Piece",
                "Kobus 90",
                "Krinkov",
                "Kross Vertex",
                "Mark 10",
                "Micro Uzi",
                "MP40",
                "Para",
                "Patchett L2A1",
                "Signature",
                "SpecOps",
                "Swedish K",
                "Tatonka",
                "Uzi",
                "AK Gen 21 Tactical",
                "Miyaka 10",
                "OVE9000",
                "XL 5.56 Microgun",
                "DECA Technologies Compound Bow",
                "Airbow",
                "Plainsrider Bow",
                "Light Crossbow",
                "English Longbow",
                "Heavy Crossbow",
                "Vulcan Minigun",
                "Piglet",
                "Flamethrower Mk.1",
                "GL40"
            ],
            secondary: [
                "Chimano 88",
                "Crosskill",
                "Bernetti 9",
                "Bronco .44",
                "White Streak",
                "Parabellum",
                "Castigo .44",
                "Crosskill Guard",
                "STRYK 18c",
                "Deagle",
                "M13 9mm",
                "Gruber Kurz",
                "Signature .40",
                "Crosskill Chunky Compact",
                "Baby Deagle",
                "Broomstick",
                "Contractor",
                "Frenchman Model 87",
                "LEO",
                "Bernetti Auto",
                "Czech 92",
                "Igor Automatik",
                "HOLT 9mm",
                "Peacemaker .45",
                "Matever .357",
                "Káng Arms Model 54",
                "RUS-12 Angry Tiger",
                "Interceptor .45",
                "Chimano Custom",
                "5/7 AP",
                "Chimano Compact",
                "Locomotive 12G",
                "Goliath 12G",
                "Grimm 12G",
                "Claire 12G",
                "GSPS 12G",
                "Street Sweeper",
                "The Judge",
                "Mark 10",
                "Compact-5",
                "CMP",
                "Para",
                "Heather",
                "MP40",
                "Krinkov",
                "Kobus 90",
                "Signature",
                "Swedish K",
                "SpecOps",
                "CR 805B",
                "AK Gen 21 Tactical",
                "Miyaka 10 Special",
                "Cobra",
                "Micro Uzi",
                "Jackal",
                "Blaster 9mm",
                "Kross Vertex",
                "Tatonka",
                "Patchett L2A1",
                "Uzi",
                "Chicago Typewriter",
                "Jacket’s Piece",
                "OVE9000",
                "Compact 40mm",
                "MA-17 Flamethrower",
                "Arbiter",
                "Pistol Crossbow",
                "HRL-7",
                "China Puff 40mm",
                "Commando 101"
            ],
            melee: [
                "Weapon Butt",
                "Fists",
                "Bolt Cutters",
                "Utility Knife",
                "Electrical Brass Knuckles",
                "Specialist Knives",
                "El Verdugo",
                "Push Daggers",
                "Leather Sap",
                "Hackaton",
                "Kento's Tanto",
                "El Ritmo",
                "Alabama Razor",
                "URSA Knife",
                "Swagger Stick",
                "Pounder Nail Gun",
                "The Motherforker",
                "Spatula",
                "K.L.A.S. Shovel",
                "Empty Palm Kata",
                "Shawn's Shears",
                "Microphone",
                "Selfie-stick",
                "Bayonet Knife",
                "Machete",
                "Chain Whip",
                "Ice Pick",
                "Rezkoye",
                "Telescopic Baton",
                "Jackpot",
                "Two Handed Great Ruler",
                "Baseball Bat",
                "Classic Baton",
                "Hockey Stick",
                "Diving Knife",
                "Krieger Blade",
                "Buckler Shield",
                "You're Mine",
                "Metal Detector",
                "Croupier's Rake",
                "Compact Hatchet",
                "Kazaguruma",
                "Lumber Lite L2",
                "Hotline 8000X",
                "Potato Masher",
                "Scalper Tomahawk",
                "Switchblade",
                "Dragan's Cleaver",
                "Shinsakuto Katana",
                "Okinawan Style Sai",
                "Pitchfork",
                "Arkansas Toothpick",
                "Microphone Stand",
                "X-46 Knife",
                "Talons",
                "Bearded Axe",
                "Hook",
                "Cleaver Knife",
                "Buzzer",
                "Gold Fever",
                "Wing",
                "Clover's Shillelagh",
                "Shepherd's Cane",
                "Scout Knife",
                "Berger Combat Knife",
                "Trench Knife",
                "Survival Tomahawk",
                "Morning Star",
                "Poker",
                "Great Sword",
                "The Spear of Freedom",
                "Tenderizer",
                "Ding Dong Breaching Tool",
                "Machete Knife",
                "Kunai Knife",
                "Utility Machete",
                "Trautman Knife",
                "Fire Axe",
                "350K Brass Knuckles",
                "Ursa Tanto Knife",
                "Nova's Shank",
                "Money Bundle",
                "OVERKILL Boxing Gloves",
                "Knuckle Daggers",
                "Psycho Knife",
                "Lucille Baseball Bat",
                "Rivertown Glen Bottle",
                "50 Blessings Briefcase",
                "Carpenter’s Delight",
                "The Pen",
                "Comically Large Spoon",
                "Comically Large Spoon of Gold"
            ]
        },
        armors: [
            "Two-Piece Suit",
            "Ballistic Vest",
            "Lightweight Ballistic Vest",
            "Heavy Ballistic Vest",
            "Flak Jacket",
            "Combined Tactical Vest",
            "Improved Combined Tactical Vest"
        ],
        throwables: [
            "Concussion Grenade",
            "HEF Grenade",
            "Ace of Spades",
            "Incendiary Grenade",
            "Matryoshka Grenade",
            "Frag Grenade",
            "Molotov Cocktail",
            "Dynamite",
            "Shuriken",
            "Javelin",
            "Throwing Axe",
            "Throwing Knife",
            "X1-ZAPper"
        ],
        deployables: [
            "Ammo Bag",
            "Armor Bag",
            "Body Bag Case",
            "Doctor Bag",
            "ECM Jammer",
            "First Aid Kit",
            "Sentry Gun",
            "Trip Mine"
        ],
    },
    contractors: [
        {
            name: "Bain",
            maps: [
                {
                    name: "The Alesso Heist",
                    url: "https://static.wikia.nocookie.net/payday/images/e/e0/The_Alesso_Heist_FBI_Files.png"
                },
                {
                    name: "Art Gallery",
                    url: "https://static.wikia.nocookie.net/payday/images/d/d5/Art_Gallery_FBI_Files.png"
                },
                {
                    name: "Bank Heist",
                    url: "https://static.wikia.nocookie.net/payday/images/b/b3/Bank_Heist_FBI_Files.png"
                },
                {
                    name: "Cook Off",
                    url: "https://static.wikia.nocookie.net/payday/images/b/b6/Rats_FBI_Files.png"
                },
                {
                    name: "Diamond Store",
                    url: "https://static.wikia.nocookie.net/payday/images/c/c8/Diamond_Store_FBI_Files.png"
                },
                {
                    name: "GO Bank",
                    url: "https://static.wikia.nocookie.net/payday/images/c/c4/Go_Bank_FBI_Files.png"
                },
                {
                    name: "Jewelry Store",
                    url: "https://static.wikia.nocookie.net/payday/images/7/7b/Jewelry_Store_FBI_Files.png"
                },
                {
                    name: "Reservoir Dogs Heist",
                    url: "https://static.wikia.nocookie.net/payday/images/2/25/ReservoirDogsHeist.jpg"
                },
                {
                    name: "Transport: Train Heist",
                    url: "https://static.wikia.nocookie.net/payday/images/f/f5/Train_bridge.jpg"
                }
            ]
        },
        {
            name: "Hector",
            maps: [
                {
                    name: "Watchdogs",
                    url: "https://static.wikia.nocookie.net/payday/images/3/35/Watchdogs_FBI_Files.png"
                },
                {
                    name: "Firestarter",
                    url: "https://static.wikia.nocookie.net/payday/images/2/22/Firestarter_FBI_Files.png"
                },
                {
                    name: "Rats",
                    url: "https://static.wikia.nocookie.net/payday/images/b/b6/Rats_FBI_Files.png"
                }
            ]
        },
        {
            name: "The Butcher",
            maps: [
                {
                    name: "The Bomb: Dockyard",
                    url: "https://static.wikia.nocookie.net/payday/images/9/9d/The_Bomb_Dockyard_FBI_Files.png"
                },
                {
                    name: "The Bomb: Forest",
                    url: "https://static.wikia.nocookie.net/payday/images/c/c3/The_Bomb_Forest_FBI_Files.png"
                },
                {
                    name: "Scarface Mansion",
                    url: "https://static.wikia.nocookie.net/payday/images/b/b8/Friend.png"
                }
            ]
        },
        {
            name: "The Elephant",
            maps: [
                {
                    name: "Election Day",
                    url: "https://static.wikia.nocookie.net/payday/images/4/43/Election_Day_FBI_Files.png"
                },
                {
                    name: "Big Oil",
                    url: "https://static.wikia.nocookie.net/payday/images/8/88/FBI_Files_Big_Oil_Day_2.png"
                },
                {
                    name: "Framing Frame",
                    url: "https://static.wikia.nocookie.net/payday/images/1/15/Framing_Frame_FBI_Files.png"
                },
                {
                    name: "The Biker Heist",
                    url: "https://static.wikia.nocookie.net/payday/images/9/97/The_Biker_Heist_FBI_Files.png"
                }
            ]
        },
        {
            name: "The Dentist",
            maps: [
                {
                    name: "The Big Bank",
                    url: "https://static.wikia.nocookie.net/payday/images/f/fa/The_Big_Bank_FBI_Files.png"
                },
                {
                    name: "Hoxton Breakout",
                    url: "https://static.wikia.nocookie.net/payday/images/a/af/Hoxton_Breakout_FBI_Files.png"
                },
                {
                    name: "The Diamond",
                    url: "https://static.wikia.nocookie.net/payday/images/d/d1/The_Diamond_FBI_Files.png"
                },
                {
                    name: "Golden Grin Casino",
                    url: "https://static.wikia.nocookie.net/payday/images/a/ac/Golden_Grin_Casino_FBI_Files.png"
                },
                {
                    name: "Hotline Miami",
                    url: "https://static.wikia.nocookie.net/payday/images/a/ad/Hotline_Miami_FBI_Files.png"
                },
                {
                    name: "Hoxton Revenge",
                    url: "https://static.wikia.nocookie.net/payday/images/e/ea/FBI_Hoxton_Revenge.png"
                }
            ]
        },
        {
            name: "Jimmy",
            maps: [
                {
                    name: "Boiling Point",
                    url: "https://static.wikia.nocookie.net/payday/images/8/88/Boiling_Point_FBI_Files.png"
                }
            ]
        },
        {
            name: "Locke",
            maps: [
                {
                    name: "Beneath the Mountain",
                    url: "https://static.wikia.nocookie.net/payday/images/f/f1/Beneath_the_Mountain_FBI_Files.png"
                },
                {
                    name: "Birth of Sky",
                    url: "https://static.wikia.nocookie.net/payday/images/4/43/Birth_of_Sky_FBI_Files.png"
                },
                {
                    name: "Alaskan Deal",
                    url: "https://static.wikia.nocookie.net/payday/images/b/b3/AlaskanDeal.jpg"
                },
                {
                    name: "Brooklyn Bank",
                    url: "https://static.wikia.nocookie.net/payday/images/3/34/BrooklynBank.jpg"
                },
                {
                    name: "Henry's Rock",
                    url: "https://static.wikia.nocookie.net/payday/images/d/db/Des.jpg"
                },
                {
                    name: "Shacklethorne Auction",
                    url: "https://static.wikia.nocookie.net/payday/images/c/c4/Shacklethorne_Auction.jpg"
                },
                {
                    name: "Hell's Island",
                    url: "https://static.wikia.nocookie.net/payday/images/a/ac/Hell%27s_Island.jpg"
                },
                {
                    name: "The White House",
                    url: "https://static.wikia.nocookie.net/payday/images/a/aa/The_White_House.jpg"
                },
                {
                    name: "Border Crossing",
                    url: "https://static.wikia.nocookie.net/payday/images/7/78/Border_Crossing.jpg"
                },
                {
                    name: "Border Crystals",
                    url: "https://static.wikia.nocookie.net/payday/images/1/12/Border_Crystals.jpg"
                },
                {
                    name: "Breakfast in Tijuana",
                    url: "https://static.wikia.nocookie.net/payday/images/d/dd/Breakfast_in_Tijuana.jpg"
                }
            ]
        },
        {
            name: "Vlad",
            maps: [
                {
                    name: "Aftershock",
                    url: "https://static.wikia.nocookie.net/payday/images/3/32/Aftershock.png"
                },
                {
                    name: "Buluc's Mansion",
                    url: "https://static.wikia.nocookie.net/payday/images/e/e7/Job_fex_01_df.png"
                },
                {
                    name: "Four Stores",
                    url: "https://static.wikia.nocookie.net/payday/images/6/62/Four_Stores_FBI_Files.png"
                },
                {
                    name: "Goat Simulator",
                    url: "https://static.wikia.nocookie.net/payday/images/d/d0/Goat_Simulator_FBI_Files.png"
                },
                {
                    name: "Mallcrasher",
                    url: "https://static.wikia.nocookie.net/payday/images/6/68/Mallcrasher_FBI_Files.png"
                },
                {
                    name: "Meltdown",
                    url: "https://static.wikia.nocookie.net/payday/images/0/04/Meltdown_FBI_Files.png"
                },
                {
                    name: "Nightclub",
                    url: "https://static.wikia.nocookie.net/payday/images/a/a6/Nightclub_FBI_Files.png"
                },
                {
                    name: "San Martín Bank",
                    url: "https://static.wikia.nocookie.net/payday/images/1/16/San_Mart%C3%ADn_Bank.jpg"
                },
                {
                    name: "Santa's Workshop",
                    url: "https://static.wikia.nocookie.net/payday/images/8/8c/Santa%27s_Workshop_FBI_Files.png"
                },
                {
                    name: "Stealing Xmas",
                    url: "https://static.wikia.nocookie.net/payday/images/c/c9/Stealing_Xmas_FBI_Files.png"
                },
                {
                    name: "Ukrainian Job",
                    url: "https://static.wikia.nocookie.net/payday/images/c/c5/Ukranian_Job_FBI_Files.png"
                },
                {
                    name: "White Xmas",
                    url: "https://static.wikia.nocookie.net/payday/images/3/3d/White_Xmas_FBI_Files.png"
                },
            ]
        },
        {
            name: "Classic",
            maps: [
                {
                    name: "First World Bank",
                    url: "https://static.wikia.nocookie.net/payday/images/7/7f/FirstWorldBank_poster.jpg"
                },
                {
                    name: "Heat Street",
                    url: "https://static.wikia.nocookie.net/payday/images/d/d7/HeatStreet_poster.jpg"
                },
                {
                    name: "Panic Room",
                    url: "https://static.wikia.nocookie.net/payday/images/1/1f/PanicRoom_poster.jpg"
                },
                {
                    name: "Green Bridge",
                    url: "https://static.wikia.nocookie.net/payday/images/b/b2/GreenBridge_poster.jpg"
                },
                {
                    name: "Diamond Heist",
                    url: "https://static.wikia.nocookie.net/payday/images/2/28/DiamondHeist_poster.jpg"
                },
                {
                    name: "Slaughterhouse",
                    url: "https://static.wikia.nocookie.net/payday/images/9/99/Slaughterhouse_poster.jpg"
                },
                {
                    name: "Undercover",
                    url: "https://static.wikia.nocookie.net/payday/images/c/cf/Undercover_poster.jpg"
                },
                {
                    name: "Counterfeit",
                    url: "https://static.wikia.nocookie.net/payday/images/2/29/Counterfeit_poster.jpg"
                },
                {
                    name: "No Mercy",
                    url: "https://static.wikia.nocookie.net/payday/images/f/f2/No_Mercy_poster.jpg"
                }
            ]
        }
    ]
}