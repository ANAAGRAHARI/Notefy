import Notes from "../../model/NotesModel.js"
import express from 'express'
const router = express.Router()


router.post('/updateNotes', async (req,res,next)=>{
    const NoteId= req.body.Id
    let updatednote= {
        note:req.body.note
    }

    await Notes.findByIdAndUpdate(NoteId,{$set:updatednote})
    .then(()=>{
        res.json({message:"Note Updated"})
    })
    .catch((err)=>{
        res.json(err)
    })
})

export {router as  updateNotes}