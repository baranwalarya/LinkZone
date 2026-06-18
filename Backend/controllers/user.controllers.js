import User from "../models/user.model.js"
import uploadOnCloudinary from '../config/cloudinary.js'

export const getCurrentUser = async (req,res) => {
    try {
        let id=req.userId
        const user = await User.findById(id).select("-password")
        if(!user){
            return res.status(400).json({message:"user does not found"})
        }

        return res.status(200).json(user)
    } catch (error) {
        console.log(error)
        return res.status(400).json({message:"get current user error"})
    }
}


export const updateProfile= async (req,res) => {
    try {
        let {firstName,lastName,userName,headline,location,gender,skills,education,experience} = req.body

        let profileImage;
        let coverImage;

        console.log(req.files)
        if(req.files.profileImage){
            uploadOnCloudinary
        }

    } catch (error) {
        
    }
}