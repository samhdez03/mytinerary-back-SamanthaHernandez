import User from "../models/User.js"

export default async (req,res,next) => {
    try {
        let account = await User.findOne({email: req.body.email})
        if (account) {
            req.user ={
                name: account.name,
                lastName: account.lastName,
                email : account.email,
                password: account.password,
                photo: account.photo,
                country: account.country
            }
            return next()
        }
        return res.status(400).json({
            success: false,
            message: "User doesn't exists"
        })      
    } catch (error) {
        next(error)
    }
}