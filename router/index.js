import { Router } from "express"
import citiesRouter from "./cities.js"
import itinerariesRouter from "./itineraries.js"
import routerAuth from "./auth.js"
import routerCountries from "./countries.js"
import routerUsers from "./user.js"
const router = Router();

router.use("/cities", citiesRouter)
router.use("/itineraries", itinerariesRouter)
router.use('/auth', routerAuth)
router.use('/users', routerUsers)
router.use("/countries", routerCountries)

export default router