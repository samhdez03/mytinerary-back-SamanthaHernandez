import { Schema, model } from "mongoose";  

// 1. definimos la coleccion
let collection = 'itineraries'

// 2. definimos un esquema, recibe un objeto

let schema = new Schema({
    guide: {type:String, required:true},
    img: {type:String, required:true},
    price: {type:Number, required:true},
    duration: {type:String, required:true},
    likes: {type:Number},
    hashtags: {type:String, required:true},
    city: {type: Schema.Types.ObjectId, ref:'cities', required:true},
    comments: {type:String}
}, {
timestamps: true, //es un dato que guarda la fecha de creacion o update
})


//creamos el modelo y lo exportamos
let Itinerary = model(collection, schema)

export default Itinerary