import User from "../models/user.model.js"
import bcrypt from "bcryptjs" 

export const signUp=async (req,res) => {
    try {
        let {firstName,lastName,userName,email,password} = req.body
        let existEmail = await User.findOne({email})
        if(existEmail){
            return res.status(400).json({message:"email already exist !"})
        }

        let existUserName = await User.findOne({userName})
        if(existUserName){
            return res.status(400).json({message:"email already exist !"})
        }

        let hassedPassword = await bcrypt.hash(password,10)

        const user = await User.create({
            firstName,
            lastName,
            userName,
            email,
            password:hassedPassword
        })


    } catch (error) {
        
    }
}