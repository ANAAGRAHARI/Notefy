import Users from "../model/UserModel.js"
import Notes from "../model/NotesModel.js"
import bcrypt from "bcrypt"

export const getUser=(req,res,next)=>{
    Users.find()
    .then((response)=>{
        res.json(response)
    })
    .catch((error)=>{
        res.json({error})
    })
}
export const showUser=(req,res,next)=>{
    Users.findById(req.body.Id)
    .then((user)=>{
        res.json({data:user})
    })
}
export const signup=(req,res,next)=>{
    const Username = req.body.UserName
    const email = req.body.Email
    Users.findOne({UserName:Username})
    .then((user)=>{
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
                            res.json({message:"User added successfuly"})
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
}
export const login=(req,res,next)=>{
    const username = req.body.UserName
    Users.findOne({UserName:username})
    .then((data)=>{
        if(data){
            console.log(data)
            bcrypt.compare(req.body.Password,data.Password,
                function(err,result){
                if(err){
                    res.json({message:err})
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
export const updateUser=(req,res,next)=>{
    const userId= req.body.Id
    console.log(userId)
    const updateUser= {
        Name:req.body.Name
    }
    Users.findByIdAndUpdate(userId,{$set:updateUser})
    .then(()=>{
        res.json({message:"Name Updated"})
    })
    .catch((err)=>{
        res.json({message:{err}})
    })
}
export const deleteUser=(req,res,next)=>{
    const userId = req.body.Id
    console.log(userId)
    Users.findByIdAndRemove(userId)
    .then(()=>{
        res.json({message:"user removed"})
    })
    .catch((err)=>{
        res.json({message: `something went wrong${err}`})
    })
}

export const getNotes =(req,res,next)=>{

}

export const addNotes =(req,res,next)=>{

}
export const updateNotes=(req,res,next)=>{
    
}

export const deleteNotes=(req,res,next)=>{

}

