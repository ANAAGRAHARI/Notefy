

import Notes from "../model/NotesModel.js"


export const updateNotes=(req,res,next)=>{
    const NoteId= req.body.Id
    let updatednote= {
        note:req.body.note
    }

    Notes.findByIdAndUpdate(NoteId,{$set:updatednote})
    .then(()=>{
        res.json({message:"Note Updated"})
    })
    .catch((err)=>{
        res.json(err)
    })
}