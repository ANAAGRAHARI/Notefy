
import Users from "../model/UserModel.js"
import bcrypt from "bcrypt"

export const login=(req,res,next)=>{
    const username = req.body.UserName
    Users.findOne({UserName:username})
    .then((data)=>{
        if(data){
            console.log(data)
            bcrypt.compare(req.body.Password,data.Password,
                function(err,result){
                if(err){
                    res.json({message:err,text:"somethng"})
                }
                if(result){
                    res.json({message:"Logged in",login:true,userId:data._id})
                }else{
                    res.json({message:"incorrect password",login:false})
                }
            })
        }
        else{res.json({"message":"user not found"})}
    })
}