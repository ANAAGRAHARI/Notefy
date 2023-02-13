import Notes from "../../model/NotesModel.js"
import express from "express";
import { auth } from "../User/Auth/Auth.js";
const router = express.Router()

router.get('/getNotes',auth , async (req,res,next)=>{
    await Notes.find({userId:req.body.userId})
    .then((data)=>{
        res.json(data)
    })
})

export {router as getNotes}