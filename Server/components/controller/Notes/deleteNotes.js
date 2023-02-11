

import Notes from "../model/NotesModel.js"



export const deleteNotes=(req,res,next)=>{
    Notes.findByIdAndRemove(req.body.Id)
    .then( ()=>{
        res.json({message:"Note deleted"})
    }
    ).catch((err)=>{
       res.json({message:err})
    })
}

