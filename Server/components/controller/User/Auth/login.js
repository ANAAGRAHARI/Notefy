
import Users from "../../../model/UserModel.js"
import bcrypt from "bcrypt"
import express from 'express'
import dotenv from 'dotenv'
import {generateTokens} from "../../../../JWT/JWT.js"
import jwt from "jsonwebtoken"
import { auth } from "./Auth.js"
dotenv.config()
const router = express.Router()

const accessSecret = process.env.ACCESS_TOKEN_SECRET 
const refreshSecret = process.env.REFRESH_TOKEN_SECRET
const accessExpiry = process.env.ACCESS_TOKEN_EXPIRY
const refreshExpiry = process.env.REFRESH_TOKEN_EXPIRY

router.post('/login', async (req,res,next)=>{
    const username = req.body.UserName
    await Users.findOne({UserName:username})
    .then( (data)=>{
        if(data){
            console.log(data)
            bcrypt.compare(req.body.Password,data.Password,
                async function(err,result){
                if(err){
                    res.json({message:err,text:"somethng"})
                }
                if(result){
                    const user = {
                        id:data.id,
                        username:data.UserName
                    }
                    let { accessToken,refreshToken}= await generateTokens(user)
                    res.json({message:"Logged in",is_login:true,userId:data._id,Token:accessToken})
                }else{
                    res.json({message:"incorrect password",login:false})
                }
            })
        }
        else{res.json({"message":"user not found"})}
    })
})

export {router as  login}