import { Router } from "express";
import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

const router=Router();

router.post('/register', async (req, res)=>{

    const {email,password,firstName,lastName} = req.body;

    const userExists=await User.findOne({email});
    if(userExists) {
        res.status(406).json({message:"User Already Exists."});
        console.log("from here");
        return;
    }

    const saltRounds=10;
    const salt=await bcrypt.genSaltSync(saltRounds);
    const hashedPassword=await bcrypt.hashSync(password,salt);
    const user = await User({email,password:hashedPassword,firstName,lastName});
    await user.save();
    res.status(201).json({'message':"User is created"})
})

router.post('/login',async (req, res) => {
    const {email,password}=req.body;

    const user=await User.findOne({email});
    if(!user) {
        res.status(406).json({message:"Credentials not found"});
        return;
    }

    const matched=await bcrypt.compare(password,user.password);
    if(!matched) {
        res.status(406).json({message:"Credentials not found"});
        return;
    }


    const payload={
        username:email,
        _id:user._id,
    };
    const token=jwt.sign(payload,"secret");
    res.json({message:"Successfully logged in.",token});
})

export default router;