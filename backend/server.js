import express from "express"
import leadRoutes from "./src/routes/lead.routes.js"
const app= express()

const PORT= process.env.PORT || 3001


// routes 
app.use("/api/leads",leadRoutes)


// start server 
app.listen((req,res)=>{
    console.log(`server started listening on port ${PORT}`)
})