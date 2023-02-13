import Users from "../../model/UserModel.js"
import bcrypt from "bcrypt"
import express from 'express'

const router = express.Router()

router.post('/signup' , async (req,res,next)=>{
    const {Username,email}= req.body
    await Users.findOne({UserName:Username})
    .then((user)=>{
        console.log(user)
        if(user){
            res.json({message:"username already taken"})
        }else{
            Users.findOne({Email:email}) 
            .then((user)=>{
                if(user){
                    res.json({message:"User already registered"})
                }else{
                    bcrypt.hash(req.body.Password,10,function(err,hashed){
                        if(err){
                            res.json({message:`bcrypt-${err}`})
                        }else{
                        const NewUser =new Users({
                            Name:req.body.Name,
                            UserName:req.body.UserName,
                            Email:req.body.Email,
                            Password:hashed
                        })
                        NewUser.save()
                        .then((response)=>{
                            return res.status(created).send({
                                status: "Success",
                                adminData: adminData,
                                message: "Documents Added Successfully!",
                            });
                        })
                        .catch((err)=>{
                            res.json({error:err})
                        })
                    }
                    })
                }
            })
        }
    })
})

export {router as adduser}