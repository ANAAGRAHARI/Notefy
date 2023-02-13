import Users from "../../model/UserModel.js"
import express from "express";
const router = express.Router()

router.post('/deleteUser', async (req,res,next)=>{
    const userId = req.body.Id
    console.log(userId)
    await Users.findByIdAndRemove(userId)
    .then(()=>{
        res.json({message:"user removed"})
    })
    .catch((err)=>{
        res.json({message: `something went wrong${err}`})
    })
})

export {router as deleteUser}