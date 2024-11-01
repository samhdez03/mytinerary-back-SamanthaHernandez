import { Router } from "express"
import { allItineraries, itineraryByCityID, itineraryByID } from "../controllers/itineraries/read.js"
import { create, createMany } from "../controllers/itineraries/create.js"
import { deleteById, deleteMany, deleteOne } from "../controllers/itineraries/delete.js"
import { updateByID, updateMany, updateOne } from "../controllers/itineraries/update.js"
const router = Router()

router.get("/all", allItineraries)
router.get("/ID/:id", itineraryByID)
router.get("/cityID/:id", itineraryByCityID)
router.post("/create", create)
router.post("/createMany", createMany)
router.put("/updateOne/:guide", updateOne)
router.put("/updateMany/:guide", updateMany)
router.put("/updateByID/:id", updateByID)
router.delete("/deleteOne", deleteOne)
router.delete("/deleteMany", deleteMany)
router.delete("/deleteByID/:id", deleteById)

export default router