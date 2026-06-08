import express from "express"
const app= express()

const PORT= process.env.PORT || 3001


// start server 
app.listen((req,res)=>{
    console.log(`server started listening on port ${PORT}`)
})