import "dotenv/config.js"; //conexion a la base de datos
import '../../config/database.js'
//importamos el modelo
import Country from "../Country.js";

let countries = [
    { name: "Galactic Empire", climate: "Various", description: "Once a dominant authoritarian regime controlling most of the galaxy." },
    { name: "Republic of Naboo", climate: "Temperate", description: "A peaceful and prosperous monarchy known for its art and diplomacy." },
    { name: "Outer Rim Territories", climate: "Varies (mostly arid and harsh)", description: "A rough, often lawless region home to desert planets and isolated societies." },
    { name: "Confederacy of Independent Systems", climate: "Diverse", description: "A separatist alliance formed to oppose the Galactic Republic during the Clone Wars." },
    { name: "Core Worlds", climate: "Artificial/Temperate", description: "The wealthy and technologically advanced core of the galaxy, home to planets like Coruscant." },
    { name: "Mandalorian Sector", climate: "Inhospitable", description: "A warrior-based culture that values honor and strength, with a rich history of conflict." },
    { name: "Hutt Space", climate: "Hot/Varied", description: "A crime-riddled area controlled by the Hutt cartel, known for its illegal trade and ruthless rule." },
    { name: "Unknown Regions", climate: "Mysterious", description: "A largely unexplored part of the galaxy, filled with mysteries and dangers beyond charted space." }
];

  
Country.create(countries)