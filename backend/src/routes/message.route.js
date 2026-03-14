import express from 'express'
const router =express.Router()
router.get('/sendmessage',(req,res)=>{
    res.send("send message endpoint")
})

export default router 