import Notes from "../../model/NotesModel.js"
import express from 'express'
import { auth } from "../User/Auth/Auth.js";
const router = express.Router()

router.post('/addNotes',auth ,async (req,res,next)=>{
    if(req.body.userId){
        const newNote= new Notes({
            Title:req.body.Title,
            note:req.body.note,
            Date:req.body.date,
            userId:req.body.userId
        })
        await newNote.save()
        .then(()=>{
            res.json({message:"note saved"})
        })
        .catch((err)=>{
            res.json(err)
        })
    }
})

export {router as addNotes}