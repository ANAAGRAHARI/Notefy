import Users from "../../model/UserModel.js"
import bcrypt from "bcrypt"
import express from "express";
const router = express.Router()

router.get('/getUser' ,getUser=(req,res,next)=>{
    Users.find()
    .then((response)=>{
        res.json(response)
    })
    .catch((error)=>{
        res.json({error})
    })
})

router.get('/getuserbyid',getuserbyid=(req,res,next)=>{
    Users.findById(req.body.Id)
    .then((user)=>{
        res.json({data:user})
    })
})

export {router as getUser}
export{router as getuserbyid}