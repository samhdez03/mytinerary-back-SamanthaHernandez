import User from "../../models/User.js"

export default async(req,res,next) => {
    try {
        await User.findOneAndUpdate(
            {email: req.body.email},
            {online: true}
        )        
        return res.status(200).json({
            success: true,
            message : "signed In",
            user:{
                name: req.user.name,
                lastName: req.user.lastName,
                email: req.user.email,
                country: req.user.country,
                photo: req.user.photo
            },
            token: req.token
        })

    } catch (error) {
       next(error) 
    }
}