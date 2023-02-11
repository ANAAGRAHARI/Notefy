


import Notes from "../model/NotesModel.js"

export const getNotes =(req,res,next)=>{
    Notes.find({userId:req.body.userId})
    .then((data)=>{
        res.json(data)
    })
}