import mongoose from "mongoose";

const schema = mongoose.Schema

const notesSchema = new schema({
    Title:{
        type:"string"
    },
    note:{
        type:"string"    
    },
    Date:{
        type:"string"
    },
    userId:{
        type:"string"
    }
},{timestamps:true})

const Notes =mongoose.model("Notes",notesSchema,"notes")

export default Notes