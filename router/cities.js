import { Router } from "express"
import { allCities, cityByID } from "../controllers/cities/read.js"
import { create, createMany } from "../controllers/cities/create.js"
import { deleteById, deleteMany, deleteOne } from "../controllers/cities/delete.js"
import { updateByID, updateMany, updateOne } from "../controllers/cities/update.js"
const router = Router()

router.get("/all", allCities)
router.get("/ID/:id", cityByID)
router.post("/create", create)
router.post("/createMany", createMany)
router.put("/updateOne/:name", updateOne)
router.put("/updateMany/:name", updateMany)
router.put("/updateByID/:id", updateByID)
router.delete("/deleteOne", deleteOne)
router.delete("/deleteMany", deleteMany)
router.delete("/deleteByID/:id", deleteById)

export default router