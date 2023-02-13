import Users from "../../model/UserModel.js"
import express from "express";
const router = express.Router()

 router.post ('/updateUser',async (req,res,next)=>{
    const userId= req.body.Id
    console.log(userId)
    const updateUser= {
        Name:req.body.Name
    }
    await Users.findByIdAndUpdate(userId,{$set:updateUser})
    .then(()=>{
        res.json({message:"Name Updated"})
    })
    .catch((err)=>{
        res.json({message:{err}})
    })
})

export {router as updateUser}