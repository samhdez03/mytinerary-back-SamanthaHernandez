import City from "../../models/City.js"

//para borrar el primero en que coincida el nombre
let deleteOne = async (req, res, next) => {
    try {
        let deleteCity = await City.deleteOne({
            name: req.body.name,
        })
        return res.status(200).json({
            response: deleteCity})

    } catch(error) {
        next(error)

    }
}

//para borrar todos donde coincida el nombre
let deleteMany = async (req, res, next) => {
    try {
        let deleteCities = await City.deleteMany({
            name: req.body.name,
        })
        return res.status(200).json({
            response: deleteCities})

    } catch(error) {
        next(error)

    }
}

//para borrar por ID
let deleteById = async (req, res, next) => {
    try {
        let deleteCity = await City.findByIdAndDelete(
            req.params.id)
        return res.status(200).json({
            response: deleteCity})

    } catch(error) {
        next(error)

    }
}

export {deleteOne, deleteMany, deleteById}