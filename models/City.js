import { Schema, model } from "mongoose"  

// 1. definimos la coleccion
let collection = 'cities'

// 2. definimos un esquema, recibe un objeto

let schema = new Schema({
    name: {type:String, required:true},
    img: {type:String, required:true},
    appearances: {type:String, required:true},
    affiliations: {type:String},
    climate: {type:String, required:true},
    locations: {type:String},
    terrain: {type:String, required:true},
    species: {type:String},
    creature: {type:String},
    vehicles: {type:String}
}, {
timestamps: true, //es un dato que guarda la fecha de creacion o update
})


//creamos el modelo y lo exportamos
let City = model(collection, schema)

export default City