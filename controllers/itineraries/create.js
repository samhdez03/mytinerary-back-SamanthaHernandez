import Itinerary from "../../models/Itinerary.js"

let create = async (req, res, next) => {
    try {
        let itinerary = req.body
        let all = await Itinerary.create(itinerary)
        return res.status(201).json({
            response:all
        })

    } catch(error){
        next(error)

    }
}

let createMany = async (req, res, next) => {
    try {
        let itineraries = req.body

        // Validar que req.body sea un arreglo
        if (!Array.isArray(itineraries)) {
            next(error)
        }

        let all = await Itinerary.insertMany(itineraries)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export {create,createMany}