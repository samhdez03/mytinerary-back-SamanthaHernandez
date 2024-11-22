import { Schema, model } from "mongoose"

// 1. definimos la coleccion
let collection = 'countries'

// 2. definimos un esquema, recibe un objeto

let schema = new Schema({
    name: {type:String, required:true},
    climate: {type:String, required:true},
    description: {type:String, required:true},
    
}, {
timestamps: true, //es un dato que guarda la fecha de creacion o update
})


//creamos el modelo y lo exportamos
let Country = model(collection, schema)

export default Country