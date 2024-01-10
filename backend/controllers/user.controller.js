import User from "../models/user.model.js"
import { errorHandler } from "../utilis/error.js"
import brcyptjs from 'bcryptjs'
export const test = (req, res)=>{
    res.json({
        message:'hi luaisss'
    })
}

export const updateUser = async (req, res, next)=>{
    if(req.user.id !== req.params.id) return next(errorHandler(401, 'You can not update the account you are not authorized'))
    try {
        if(req.body.password){
            req.body.password = brcyptjs.hashSync(req.body.password, 10)
        }
        const upadatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: {
               username: req.body.username,
               email: req.body.email,
               password: req.body.password,
               avatar: req.body.avatar,
            }
        }, {new:true})
        const {password, ...rest} =  upadatedUser._doc
        res.status(200).json(rest)
    } catch (error) {
        next(error)
    }
}