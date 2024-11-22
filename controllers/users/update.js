import User from "../../models/User.js"

//dejamos que se puedan modificar los campos que se quieran y la busqueda se realiza por name
let updateOne = async (req, res, next) => {
    try {
        let upd = await User.updateOne(
            { name: req.params.name }, // Condiciones para la búsqueda (name)
            req.body,                  // Modificaciones a realizar
            { new: true }              // Retorna el documento modificado
        )
        return res.status(200).json({ response: 'updated', upd })

    } catch (error) {
        next(error)
    }
}

//dejamos que se puedan modificar los campos que se quieran y la busqueda se realiza por name
let updateMany = async (req, res, next) => {
    try {
        let upd = await User.updateMany(
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
        let upd = await User.findByIdAndUpdate(
            req.params.id,
            req.body,                  // Modificaciones a realizar
            { new: true }              // Retorna el documento modificado
        )
        return res.status(200).json({ response: 'updated', upd })

    } catch (error) {
        next(error)
    }
}



export { updateOne, updateMany, updateByID }