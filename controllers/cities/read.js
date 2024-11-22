import City from "../../models/City.js"


//importamos la funcion que tenemos dentro del router y lo guardamos en una funcion
let allCities = async (req, res, next) => { //peticion tipo request
    try {
        let {name, img} = req.query
        let query = {}
        if (name){
            query.name = {$regex:'^'+name, $options:'i'} 
        }
        let all = await City.find(query)   //usamos nuestro modelo
        return res.status(200).json({
            response: all
        })
    }
    catch (error) {
        next(error)
    }
}

let cityByID = async (req, res, next) => { //peticion tipo request
    try {
        let cityID = req.params.id
        let city = await City.findById(cityID)   //usamos nuestro modelo
        if (!city) {
            return res.status(404).json({ message: "City not found" }) // Manejar caso en que no se encuentre el empleado
        }
        return res.status(200).json({
            response: city
        })
    }
    catch (error) {
        next(error)
    }
}

export {allCities, cityByID}