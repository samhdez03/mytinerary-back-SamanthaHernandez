import { Router } from "express"
import {all, userByID} from "../controllers/users/read.js"
import {deleteOne, deleteMany, deleteByID} from "../controllers/users/delete.js"
import {updateOne, updateMany, updateByID} from "../controllers/users/update.js"
import create from "../controllers/users/create.js"
import passport from "../middlewares/passport.js"
import accountExists from "../middlewares/accountExists.js"
import generateToken from "../middlewares/generateToken.js"
import validatorBody from "../middlewares/validatorBody.js"
import validatorParams from "../middlewares/validatorParams.js"
import validatorQuery from "../middlewares/validatorQuery.js"
import schemaCreate from "../schemas/users/create.js"
import { schemaName, schemaID } from "../schemas/users/delete.js"
import { schemaNameUpdate, schemaBody } from "../schemas/users/update.js"
import schemaRead from "../schemas/users/read.js"

const router = Router()

router.get("/all",passport.authenticate('jwt',{session:false}),  validatorQuery(schemaRead), all)
router.get("/userByID/:id", passport.authenticate('jwt',{session:false}), validatorParams(schemaID), userByID)
router.delete("/deleteOne", passport.authenticate('jwt',{session:false}), validatorBody(schemaName), deleteOne) //se borra por nombre en el body
router.delete("/deleteByID/:id", passport.authenticate('jwt',{session:false}), validatorParams(schemaID), deleteByID)
router.delete("/deleteMany", passport.authenticate('jwt',{session:false}), validatorBody(schemaName), deleteMany) //se borra por nombre en el body
router.put("/updateOne/:name", passport.authenticate('jwt',{session:false}), validatorParams(schemaNameUpdate), validatorBody(schemaBody), updateOne ) //Condiciones para la búsqueda por params se pueden modificar varios campos
router.put("/updateMany/:name", passport.authenticate('jwt',{session:false}), validatorParams(schemaNameUpdate), validatorBody(schemaBody), updateMany ) // Condiciones para la búsqueda (nombre)
router.put("/updateByID/:id", passport.authenticate('jwt',{session:false}), validatorParams(schemaID), validatorBody(schemaBody), updateByID )
router.post("/signUp",validatorBody(schemaCreate),accountExists, generateToken, create)

export default router