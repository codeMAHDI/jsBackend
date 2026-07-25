import mongoose from "mongoose";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

// User registration
export const  registerUser = async(req, res, next)=>{
    try{
        const {name, email, password}= req.body;

        // Check if the email exist
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success: false,
                message: "An account has already been created with this email!"
            });
        }

        // Secure Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword= await bcrypt.hash(password, salt)

        const newUser= await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            success: true,
            message: "User Registration Successfull!",
            user:{
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role
            }
        })

    }catch(error){
        next(error);
    }
};