import Users from "../../model/UserModel.js"
import bcrypt from "bcrypt"
import express from "express";
const router = express.Router()

router.get('/getUser' ,async (req,res,next)=>{
    await Users.find()
    .then((response)=>{
        res.json(response)
    })
    .catch((error)=>{
        res.json({error})
    })
})

router.get('/getuserbyid',async (req,res,next)=>{
    await Users.findById(req.body.Id)
    .then((user)=>{
        res.json({data:user})
    })
})

export {router as getUser}
export{router as getuserbyid}