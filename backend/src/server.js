import dotenv from 'dotenv'
import express from 'express'
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import path from 'path'
dotenv.config()
const app=express()
const __dirname=path.resolve()

app.use('/api/auth',authRoutes)
app.use('/api/messages',messageRoutes)

//make ready for deployment 
if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend/dist/index.html"))
    })
}
app.listen(process.env.PORT || 5000,()=>{console.log("Server is running on port " + (process.env.PORT || "failed to start"))})

 
