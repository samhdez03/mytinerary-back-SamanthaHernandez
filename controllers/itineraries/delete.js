import Itinerary from "../../models/Itinerary.js";

//para borrar el primero en que coincida el nombre
let deleteOne = async (req, res, next) => {
    try {
        let deleteItinerary = await Itinerary.deleteOne({
            guide: req.body.guide,
        })
        return res.status(200).json({
            response: deleteItinerary})

    } catch(error) {
        next(error)

    }
}

//para borrar todos donde coincida el nombre
let deleteMany = async (req, res, next) => {
    try {
        let deleteItineraries = await Itinerary.deleteMany({
            guide: req.body.guide,
        })
        return res.status(200).json({
            response: deleteItineraries})

    } catch(error) {
        next(error)

    }
}

//para borrar por ID
let deleteById = async (req, res, next) => {
    try {
        let deleteItineraries = await Itinerary.findByIdAndDelete(
            req.params.id)
        return res.status(200).json({
            response: deleteItineraries})

    } catch(error) {
        next(error)

    }
}

export {deleteOne, deleteMany, deleteById}