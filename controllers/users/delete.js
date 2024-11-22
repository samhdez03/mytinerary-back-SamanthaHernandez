import User from "../../models/User.js";

//para borrar el primero en que coincida el name
let deleteOne = async (req, res, next) => {
    try {
        let deleteUser = await User.deleteOne({
            name: req.body.name,
        })
        return res.status(200).json({
            response: deleteUser})

    } catch(error) {
        next(error)

    }
}

//para borrar todos donde coincida el name
let deleteMany = async (req, res, next) => {
    try {
        let deleteUser = await User.deleteMany({
            name: req.body.name,
        })
        return res.status(200).json({
            response: deleteUser})

    } catch(error) {
        next(error)

    }
}

//para borrar por ID
let deleteByID = async (req, res, next) => {
    try {
        let deleteUser = await User.findByIdAndDelete(
            req.params.id)
        return res.status(200).json({
            response: deleteUser})

    } catch(error) {
        next(error)

    }
}

export {deleteOne, deleteMany, deleteByID}