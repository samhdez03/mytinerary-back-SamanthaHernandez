// 1. 
import "dotenv/config.js"; //conexion a la base de datos
// 2. configuracion para la conexion a la BD
import '../../config/database.js'

// 3. importamos el modelo de la base de datos
import Itinerary from "../Itinerary.js";

let itineraries = [
    { guide:"Admiral Ackbar", img:"https://lumiere-a.akamaihd.net/v1/images/databank_ackbar_01_169_55137220.jpeg?region=0%2C0%2C1560%2C878", price: 15000, duration:"4 parsecs", likes:"0", hashtags:"#It’sATrap #RebelAlliance #MonCalamari", city:"67184c575c5cddedc86d9f33", comments:"" },
    { guide:"Bail Organa", img:"https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-story-gallery-part-1-09_7d0d1480.jpeg?region=36%2C0%2C951%2C536", price: 20000, duration:"5 missions", likes:"0", hashtags:"#Alderaan #Senate #HeroOfTheRebellion", city:"67184c575c5cddedc86d9f33", comments:"" },
    { guide:"Breha Organa", img:"https://lumiere-a.akamaihd.net/v1/images/breha-organa-main_d3e4f1eb.jpeg?region=133%2C0%2C949%2C533", price: 18000, duration:"3 diplomatic negotiations", likes:"0", hashtags:"#QueenOfAlderaan #Royalty #ResistanceLeader", city:"67184c575c5cddedc86d9f33", comments:"" },
    { guide:"Jar Jar Binks", img:"https://lumiere-a.akamaihd.net/v1/images/databank_jarjarbinks_01_169_c70767ab.jpeg?region=0%2C0%2C1560%2C878", price: 5000, duration:"2 clumsy adventures", likes:"0", hashtags:"#MesaGungan #ComedyRelief #PhantomMenace", city:"67184c575c5cddedc86d9f34", comments:"" },
    { guide:"Supreme Chancellor Valorum", img:"https://lumiere-a.akamaihd.net/v1/images/valorum_a31904f4.jpeg?region=200%2C0%2C1698%2C955", price: 12000, duration:"6 Senate sessions", likes:"0", hashtags:"#GalacticSenate #PoliticalIntrigue #Chancellor", city:"67184c575c5cddedc86d9f34", comments:"" },
    { guide:"Bo-Katan Kryze", img:"https://lumiere-a.akamaihd.net/v1/images/bo-katan-main_45a1c0c4.jpeg?region=0%2C43%2C1920%2C1083", price: 25000, duration:"8 Mandalorian missions", likes:"0", hashtags:"#Mandalore #Darksaber #Warrior", city:"67184c575c5cddedc86d9f37", comments:"" },
    { guide:"BB-8", img:"https://lumiere-a.akamaihd.net/v1/images/bb-8-main_72775463.jpeg?region=187%2C40%2C882%2C496", price: 10000, duration:"7 droid escapades", likes:"0", hashtags:"#ResistanceDroid #BB8 #Astromech", city:"67184c575c5cddedc86d9f37", comments:"" },
    { guide:"Babu Frik", img:"https://lumiere-a.akamaihd.net/v1/images/babu-frik-main_4da7f430.jpeg?region=0%2C0%2C1281%2C720", price: 7500, duration:"3 repair jobs", likes:"0", hashtags:"#DroidSmith #TinyTech #RiseOfSkywalker", city:"67184c575c5cddedc86d9f37", comments:"" },
    { guide:"Pre Vizsla", img:"https://lumiere-a.akamaihd.net/v1/images/databank_previzsla_01_169_3e74112a.jpeg?region=0%2C0%2C1560%2C878", price: 22000, duration:"4 battles", likes:"0", hashtags:"#MandalorianLeader #DeathWatch #Darksaber", city:"67184c575c5cddedc86d9f37", comments:"" },
    { guide:"Din Djarin", img:"https://lumiere-a.akamaihd.net/v1/images/din-djarin-the-mandalorian-main_38344f24.jpeg?region=0%2C100%2C1920%2C1080", price: 30000, duration:"10 bounties", likes:"0", hashtags:"#Mandalorian #ThisIsTheWay #BountyHunter", city:"67184c575c5cddedc86d9f37", comments:"" },
    { guide:"Jango Fett", img:"https://lumiere-a.akamaihd.net/v1/images/databank_jangofett_01_169_884cefab.jpeg?region=0%2C0%2C1560%2C878", price: 28000, duration:"5 bounty missions", likes:"0", hashtags:"#CloneTemplate #Mandalorian #BountyHunter", city:"67184c575c5cddedc86d9f3b", comments:"" },
    { guide:"C-3PO", img:"https://lumiere-a.akamaihd.net/v1/images/c-3po-main_d6850e28.jpeg?region=176%2C0%2C951%2C536", price: 8000, duration:"12 translations", likes:"0", hashtags:"#ProtocolDroid #TranslationService #GoldenRod", city:"67184c575c5cddedc86d9f36", comments:"" },
    { guide:"Watto", img:"https://lumiere-a.akamaihd.net/v1/images/databank_watto_01_169_ecd563f1.jpeg?region=0%2C0%2C1560%2C878", price: 6000, duration:"3 shady deals", likes:"0", hashtags:"#Podracing #JunkDealer #Tatooine", city:"67184c575c5cddedc86d9f36", comments:"" },
    { guide:"Chewbacca", img:"https://lumiere-a.akamaihd.net/v1/images/chewie-main_e1968a8a.jpeg?region=131%2C0%2C951%2C536", price: 20000, duration:"10 years of friendship", likes:"0", hashtags:"#Wookiee #RebelAlly #Chewie", city:"67184c575c5cddedc86d9f38", comments:"" },
    { guide:"Tarfful", img:"https://lumiere-a.akamaihd.net/v1/images/tarrful_f20d3412.jpeg?region=359%2C0%2C1136%2C639", price: 15000, duration:"4 Kashyyyk missions", likes:"0", hashtags:"#WookieeWarrior #Kashyyyk #Rebellion", city:"67184c575c5cddedc86d9f38", comments:"" },
    { guide:"Padmé Amidala", img:"https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-1fzb3ur_4d645f37_943122ef.jpeg?region=0,0,1200,675", price: 35000, duration:"5 diplomatic missions", likes:"0", hashtags:"#Queen #Senator #Bravery", city:"67184c575c5cddedc86d9f35", comments:"" },
    { guide:"R2-D2", img:"https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=273%2C0%2C951%2C536", price: 12000, duration:"15 adventures", likes:"0", hashtags:"#Astromech #R2D2 #Hero", city:"67184c575c5cddedc86d9f35", comments:"" },
    { guide:"Mace Windu", img:"https://lumiere-a.akamaihd.net/v1/images/Mace-Windu_b35242e5.jpeg?region=0%2C0%2C1637%2C921", price: 25000, duration:"10 Jedi missions", likes:"0", hashtags:"#JediMaster #PurpleLightsaber #SithHunter", city:"67184c575c5cddedc86d9f35", comments:"" },
    { guide:"Ki-Adi-Mundi", img:"https://lumiere-a.akamaihd.net/v1/images/databank_kiadimundi_01_169_0a8842d3.jpeg?region=0%2C0%2C1560%2C878", price: 20000, duration:"5 battles", likes:"0", hashtags:"#JediCouncil #Togruta #CloneWars", city:"67184c575c5cddedc86d9f35", comments:"" },
    { guide:"Boss Nass", img:"https://lumiere-a.akamaihd.net/v1/images/databank_bossnass_01_169_ef11c0db.jpeg?region=0%2C0%2C1560%2C878", price: 5000, duration:"1 Gungan gathering", likes:"0", hashtags:"#GunganLeader #Naboo #ThePhantomMenace", city:"67184c575c5cddedc86d9f35", comments:"" },
    { guide:"Vaneé", img:"https://lumiere-a.akamaihd.net/v1/images/vanee-main_2cb89446.jpeg?region=0%2C0%2C1200%2C675", price: 10000, duration:"2 dark ceremonies", likes:"0", hashtags:"#Sith #DarkSide #TheEmperor", city:"67184c575c5cddedc86d9f3a", comments:"" },
    { guide:"Darth Vader", img:"https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg?region=0%2C67%2C1280%2C720", price: 50000, duration:"10 Sith missions", likes:"0", hashtags:"#DarkLord #Sith #ImperialEnforcer", city:"67184c575c5cddedc86d9f42", comments:"" },
    { guide:"Darth Sidious", img:"https://lumiere-a.akamaihd.net/v1/images/emperor-palpatine_9a0e992d.jpeg?region=0%2C25%2C1280%2C718", price: 50000, duration:"10 schemes", likes:"0", hashtags:"#SithLord #GalacticEmpire #Manipulation", city:"67184c575c5cddedc86d9f42", comments:"" },
    { guide:"Sebulba", img:"https://lumiere-a.akamaihd.net/v1/images/sebulba_1f3fe180.jpeg?region=0%2C0%2C2453%2C1380", price: 8000, duration:"3 podraces", likes:"0", hashtags:"#Podracer #Tatooine #Dug", city:"67184c575c5cddedc86d9f40", comments:"" },
    { guide:"General Veers", img:"https://lumiere-a.akamaihd.net/v1/images/databank_generalveers_01_169_ed056bbf.jpeg?region=0%2C0%2C1560%2C878", price: 15000, duration:"5 battle strategies", likes:"0", hashtags:"#ImperialGeneral #AT-AT #Hoth", city:"67184c575c5cddedc86d9f39", comments:"" },
    { guide:"Porg Nao", img:"https://lumiere-a.akamaihd.net/v1/images/porg-main_16933d3b.jpeg?region=0%2C0%2C1560%2C878", price: 2000, duration:"1 playful encounter", likes:"0", hashtags:"#Porgs #Adorable #TheLastJedi", city:"67184c575c5cddedc86d9f3c", comments:"" },
    { guide:"Rey", img:"https://lumiere-a.akamaihd.net/v1/images/rey-main_ca4bb0d7.jpeg?region=180%2C0%2C951%2C536", price: 30000, duration:"10 Jedi training sessions", likes:"0", hashtags:"#Jedi #ForceAwakens #Scavenger", city:"67184c575c5cddedc86d9f3c", comments:"" },
    { guide:"Alcida-Auka", img:"https://lumiere-a.akamaihd.net/v1/images/last-jedi-databank-alcida-auka-main-image_c1b59357.jpeg?region=0%2C0%2C1280%2C720", price: 12000, duration:"4 survival missions", likes:"0", hashtags:"#LastJedi #Resistance #Hero", city:"67184c575c5cddedc86d9f3c", comments:"" },
    { guide:"King Manchucho", img:"https://lumiere-a.akamaihd.net/v1/images/acw_ia_77554_37f39ba8.jpeg?region=57%2C0%2C1429%2C804", price: 10000, duration:"3 royal gatherings", likes:"0", hashtags:"#King #Aleen #Noble", city:"67184c575c5cddedc86d9f3d", comments:"" },
    { guide:"Ratts Tyerell", img:"https://lumiere-a.akamaihd.net/v1/images/databank_rattstyerell_01_169_031aea6d.jpeg?region=0%2C0%2C1560%2C878", price: 6000, duration:"2 podraces", likes:"0", hashtags:"#Podracer #Aleen #Racer", city:"67184c575c5cddedc86d9f3d", comments:"" },
    { guide:"Orphne", img:"https://lumiere-a.akamaihd.net/v1/images/screen_shot_2015-05-26_at_5_5b990416.png?region=0%2C0%2C566%2C319", price: 10000, duration:"3 rebel missions", likes:"0", hashtags:"#Rebellion #Jedi #StarWars", city:"67184c575c5cddedc86d9f3d", comments:"" },
    { guide:"Kindalo", img:"https://lumiere-a.akamaihd.net/v1/images/kindalo_82e6cad4.jpeg?region=0%2C0%2C1408%2C792", price: 9000, duration:"2 trade negotiations", likes:"0", hashtags:"#TradeFederation #Negotiator #StarWars", city:"67184c575c5cddedc86d9f3d", comments:"" },
    { guide:"Poggle the Lesser", img:"https://lumiere-a.akamaihd.net/v1/images/databank_pogglethelesser_01_169_7095ae3c.jpeg?region=0%2C0%2C1560%2C878", price: 12000, duration:"3 Separatist plans", likes:"0", hashtags:"#Geonosian #Separatist #CloneWars", city:"67184c575c5cddedc86d9f3e", comments:"" },
    { guide:"Queen Karina the Great", img:"https://lumiere-a.akamaihd.net/v1/images/acw_ia_36328_f1be4447.jpeg?region=241%2C0%2C1438%2C809", price: 15000, duration:"5 royal decrees", likes:"0", hashtags:"#GeonosianQueen #Power #StarWars", city:"67184c575c5cddedc86d9f3e", comments:"" }
]

//ejecutamos la funcion de mongoose de insert many
Itinerary.insertMany(itineraries)