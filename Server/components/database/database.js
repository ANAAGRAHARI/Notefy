import mongoose from "mongoose";


const DBconnect=()=>{
const Url = 'mongodb+srv://notefy:268562ana@cluster0.h9iv97k.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(Url,
{useNewUrlParser:true,useUnifiedTopology:true})
const db = mongoose.connection

db.on('error',(error)=>{console.log(error)})
db.once('open',()=>{console.log('DB connected')})

}

export default DBconnect