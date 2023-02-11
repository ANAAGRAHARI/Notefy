import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import * as dotenv from 'dotenv'
import router from './components/router/router.js'
import DBconnect from './components/database/database.js'
dotenv.config()
const port =  3001;
// process.env.PORT ||

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/upload',express.static('uploads'))
app.use(morgan('dev'))
app.use(cors())
app.use("/api/",router)
DBconnect()

app.listen(port,()=>{
    console.log(`server is listening at ${port}`)
})
