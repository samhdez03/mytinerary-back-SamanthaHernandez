import City from "../../models/City.js"

let create = async (req, res, next) => {
    try {
        let city = req.body
        let all = await City.create(city)
        return res.status(201).json({
            response:all
        })

    } catch(error){
        next(error)

    }
}

let createMany = async (req, res, next) => {
    try {
        let cities = req.body

        // Validar que req.body sea un arreglo
        if (!Array.isArray(cities)) {
            next(error)
        }

        let all = await City.insertMany(cities)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export {create,createMany}