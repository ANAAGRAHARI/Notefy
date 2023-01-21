import mongoose from "mongoose";

const schema = mongoose.Schema

const User = new schema({
        Name:{
            type:"string",
        },   
        UserName:{
            type:"string",
            unique:true
        },
        Email:{
            type:"string",
        },
        Password:{
            type:"string",
        },
        Avatar:{
            type:"string"
        },
        NoteId:{
            type:"string"
        }
},{timestamps:true})

const Users = mongoose.model("Users",User)

export default Users