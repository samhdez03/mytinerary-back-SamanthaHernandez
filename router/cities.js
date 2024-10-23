import { Router } from "express"
import { allCities, cityByID } from "../controllers/cities/read.js"
import { create, createMany } from "../controllers/cities/create.js"
const router = Router()

router.get("/all", allCities)
router.get("/ID/:id", cityByID)
router.post("/create", create)
router.post("/createMany", createMany)

export default router