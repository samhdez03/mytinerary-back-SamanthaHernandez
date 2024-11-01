import Itinerary from "../../models/Itinerary.js";

//dejamos que se puedan modificar los campos que se quieran y la busqueda se realiza por guia
let updateOne = async (req, res, next) => {
    try {
        let upd = await Itinerary.updateOne(
            { guide: req.params.guide }, // Condiciones para la búsqueda (por guia)
            req.body,                  // Modificaciones a realizar
            { new: true }              // Retorna el documento modificado
        )
        return res.status(200).json({ response: 'updated', upd })

    } catch (error) {
        next(error)
    }
}

//dejamos que se puedan modificar los campos que se quieran y la busqueda se realiza por guia
let updateMany = async (req, res, next) => {
    try {
        let upd = await Itinerary.updateMany(
            { guide: req.params.guide }, // Condiciones para la búsqueda
            req.body,                  // Modificaciones a realizar
            { new: true }              // Retorna el documento modificado
        )
        return res.status(200).json({ response: 'updated', upd })

    } catch (error) {
        next(error)
    }
}

//dejamos que se puedan modificar los campos que se quieran y la busqueda se realiza por ID
let updateByID = async (req, res, next) => {
    try {
        let upd = await Itinerary.findByIdAndUpdate(
            req.params.id
                /* name: req.body.name */, // Condiciones para la búsqueda
            req.body,                  // Modificaciones a realizar
            { new: true }              // Retorna el documento modificado
        )
        return res.status(200).json({ response: 'updated', upd })

    } catch (error) {
        next(error)
    }
}



export { updateOne, updateMany, updateByID }