import dotenv from 'dotenv'
import express from 'express'
import authRoutes from './routes/auth.routes.js'
dotenv.config()
const app=express()
app.use(express.json())
process.env.PORT
app.listen(process.env.PORT || 3000,()=>{console.log("Server is running on port " + (process.env.PORT || 3000))})
app.use('/api/auth',authRoutes)