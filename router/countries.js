import { Router } from "express"
import {all, names} from "../controllers/countries/read.js"

const router = Router()

router.get("/all", all)
router.get("/name", names)

export default router