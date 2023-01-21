import mongoose from "mongoose";

const schema = mongoose.Schema

const notesSchema = new schema({
    note:{
        type:"array"    
    },
    userId:{
        type:"string"
    }
},{timestamps:true})

const Notes =mongoose.model("Notes",notesSchema,"notes")

export default Notes