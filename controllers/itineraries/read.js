import Itinerary from "../../models/Itinerary.js"
import "../../models/City.js"

//importamos la funcion que tenemos dentro del router y lo guardamos en una funcion
let allItineraries = async (req, res, next) => { //peticion tipo request
    try {
        let {name, img} = req.query
        let query = {}
        if (name){
            query.name = {$regex:'^'+name, $options:'i'} 
        }
        let all = await Itinerary.find(query).populate('city', 'name img appearances climate terrain').exec()   //usamos nuestro modelo
        return res.status(200).json({
            response: all
        })
    }
    catch (error) {
        next(error)
    }
}

let itineraryByID = async (req, res, next) => { //peticion tipo request
    try {
        let itineraryID = req.params.id
        let itinerary = await Itinerary.findById(itineraryID).populate('city', 'name img appearances climate terrain').exec()   //usamos nuestro modelo
        if (!itinerary) {
            return res.status(404).json({ message: "Itinerary not found" }) // Manejar caso en que no se encuentre el empleado
        }
        return res.status(200).json({
            response: itinerary
        })
    }
    catch (error) {
        next(error)
    }
}

let itineraryByCityID = async (req, res, next) => { //peticion tipo request
    try {
        let itineraryID = req.params.id
        let itinerary = await Itinerary.find({city:itineraryID}).populate('city', 'name img appearances climate terrain').exec()   //usamos nuestro modelo
        if (!itinerary) {
            return res.status(404).json({ message: "Itinerary not found" }) // Manejar caso en que no se encuentre el empleado
        }
        return res.status(200).json({
            response: itinerary
        })
    }
    catch (error) {
        next(error)
    }
}

export {allItineraries, itineraryByID, itineraryByCityID}