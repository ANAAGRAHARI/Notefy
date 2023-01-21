import mongoose from "mongoose";

const schema = mongoose.Schema

const notesSchema = new schema({
    note:{
        type:"string"    
    },
    userId:{
        type:"string"
    }
},{timestamps:true})

const Notes =mongoose.model("Notes",notesSchema)

export default Notes