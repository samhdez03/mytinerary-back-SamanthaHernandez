import Country from "../../models/Country.js"

const all = async (req,res,next) => {
    try {
        let all = await Country.find()
        return res.status(200).json({
            response: all,
        })

    } catch (error){
        next(error)
    }

}
const names = async (req,res,next) => {
    try {
        let all = await Country.find()
        let names = all.map(item => item.name)
        return res.status(200).json({
            response: names,
        })

    } catch (error){
        next(error)
    }

}

export {all, names}