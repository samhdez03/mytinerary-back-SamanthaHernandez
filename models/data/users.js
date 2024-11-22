import "dotenv/config.js" //conexion a la base de datos
import '../../config/database.js'
//importamos el modelo
import User from "../User.js"

const users = [
    {
      name: "Luke",
      lastName: "Skywalker",
      email: "luke.skywalker@rebellion.sw",
      password: "Force123!",
      photo: "https://lumiere-a.akamaihd.net/v1/images/luke-skywalkers-lightsaber-main-b_b94c2eb9.jpeg?region=0%2C0%2C1280%2C720",
      country: "Tatooine",
      online: false
    },
    {
      name: "Leia",
      lastName: "Organa",
      email: "leia.organa@rebellion.sw",
      password: "RebelLeader!",
      photo: "https://lumiere-a.akamaihd.net/v1/images/leia-organa-main_9af6ff81.jpeg?region=187%2C157%2C1400%2C786",
      country: "Alderaan",
      online: false
    },
    {
      name: "Han",
      lastName: "Solo",
      email: "han.solo@rebellion.sw",
      password: "Smuggler75!",
      photo: "https://lumiere-a.akamaihd.net/v1/images/han-solo-main_a4c8ff79.jpeg?region=0%2C0%2C1920%2C1080",
      country: "Corellia",
      online: false
    },
    {
      name: "Obi-Wan",
      lastName: "Kenobi",
      email: "obi-wan.kenobi@jedi.sw",
      password: "HelloThere!",
      photo: "https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_3286c63c.jpeg?region=0%2C0%2C1280%2C721",
      country: "Stewjon",
      online: false
    },
    {
      name: "Yoda",
      lastName: "Unknown",
      email: "yoda@jedi.sw",
      password: "ForceMaster@900",
      photo: "https://lumiere-a.akamaihd.net/v1/images/Yoda-Retina_2a7ecc26.jpeg?region=0%2C0%2C1536%2C864",
      country: "Dagobah",
      online: false
    },
    {
      name: "Anakin",
      lastName: "Skywalker",
      email: "anakin.skywalker@jedi.sw",
      password: "ChosenOne12",
      photo: "https://lumiere-a.akamaihd.net/v1/images/anakin-skywalker-main_23e5105b.jpeg?region=387%2C27%2C1350%2C760",
      country: "Tatooine",
      online: false
    },
    {
      name: "Mace",
      lastName: "Windu",
      email: "mace.windu@jedi.sw",
      password: "PurpleSaber!",
      photo: "https://lumiere-a.akamaihd.net/v1/images/Mace-Windu_b35242e5.jpeg?region=0%2C0%2C1637%2C921",
      country: "Haruun Kal",
      online: false
    },
    {
      name: "Padmé",
      lastName: "Amidala",
      email: "padme.amidala@naboo.sw",
      password: "Queen@Naboo",
      photo: "https://lumiere-a.akamaihd.net/v1/images/Padme-Amidala_05d50c8a.jpeg?region=0%2C0%2C1536%2C864",
      country: "Naboo",
      online: false
    },
    {
      name: "Boba",
      lastName: "Fett",
      email: "boba.fett@bounty.sw",
      password: "Mandalorian@1",
      photo: "https://lumiere-a.akamaihd.net/v1/images/boba-fett-main_a8fade4d.jpeg?region=203%2C34%2C1077%2C606",
      country: "Kamino",
      online: false
    },
    {
      name: "Ahsoka",
      lastName: "Tano",
      email: "ahsoka.tano@rebellion.sw",
      password: "Togruta77",
      photo: "https://lumiere-a.akamaihd.net/v1/images/ahsoka-main_88c206d7.jpeg?region=420%2C60%2C1500%2C843",
      country: "Shili",
      online: false
    }
  ]
  
User.create(users)