import User from "../../models/User.js"

let all = async (req, res, next) => {
    try {
        let {name, lastName, email, country, online} = req.query
        let query = {}
        if (name) {
            query.name = {$regex: name, $options: 'i'}
        }
        if (lastName) {
            query.lastName = {$regex: lastName, $options: 'i'}
        }
        if(email) {
            query.email = {$regex: email, $options: 'i'}
        }
        if(country) {
            query.country = {$regex: country, $options: 'i'}
        }
        if(online !==undefined) {
            query.online = online === 'true'
        }
        let all = await User.find(query)
        return res.status(200).json({
            response: all,
        })

    } catch (error){
        next (error)
    }

}

let userByID =  async (req, res, next) => {
    try{
        let userID = req.params.id
        let user = await User.findById(userID)
        if(!user){
            return res.status(404).json({message: "User doesn't exists"})
        }
        return res.status(200).json({
            response: user
        })

    } catch (error){
        next(error)
    }
}

export {all, userByID}