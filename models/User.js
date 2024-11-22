
import { Schema, model } from "mongoose"  
import bcryptjs from 'bcryptjs' 

// 1. definimos la coleccion
let collection = 'users'
// 2. definimos un esquema, recibe un objeto
let schema = new Schema({
    name: {type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    photo:{type:String, required:true},
    country:{type:String, required:true},
    online: {type:Boolean, required:true}

}, {
    timestamps: true, //es un dato que guarda la fecha de creacion o update
})

schema.pre('save',async function(next) {
    this.password = await bcryptjs.hash(this.password, 12)
    next()
  })

let User = model(collection, schema)

export default User