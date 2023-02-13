import Notes from "../../model/NotesModel.js"
import express from "express";
const router = express.Router()


router.post('/deleteNotes', async(req,res,next)=>{
    await Notes.findByIdAndRemove(req.body.Id)
    .then( ()=>{
        res.json({message:"Note deleted"})
    }
    ).catch((err)=>{
    res.json({message:err})
    })
})

export {router as deleteNotes }

