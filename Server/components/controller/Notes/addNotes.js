
import Notes from "../model/NotesModel.js"


export const addNotes =(req,res,next)=>{
    if(req.body.userId){
        const newNote=new Notes({
            Title:req.body.Title,
            note:req.body.note,
            Date:req.body.date,
            userId:req.body.userId
        })
        newNote.save()
        .then(()=>{
            res.json({message:"note saved"})
        })
        .catch((err)=>{
            res.json(err)
        })
    }
}