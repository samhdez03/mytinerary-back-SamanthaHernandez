import City from "../../models/City.js";

//dejamos que se puedan modificar los campos que se quieran y la busqueda se realiza por nombre
let updateOne = async (req, res, next) => {
    try {
        let upd = await City.updateOne(
            { name: req.params.name }, // Condiciones para la búsqueda (nombre)
            req.body,                  // Modificaciones a realizar
            { new: true }              // Retorna el documento modificado
        )
        return res.status(200).json({ response: 'updated', upd })

    } catch (error) {
        next(error)
    }
}

//dejamos que se puedan modificar los campos que se quieran y la busqueda se realiza por nombre
let updateMany = async (req, res, next) => {
    try {
        let upd = await City.updateMany(
            { name: req.params.name }, // Condiciones para la búsqueda
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
        let upd = await City.findByIdAndUpdate(
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