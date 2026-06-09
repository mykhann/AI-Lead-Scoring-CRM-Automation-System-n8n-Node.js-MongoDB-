import express from "express"
import leadRoutes from "./src/routes/lead.routes.js"
import { connectDB } from "../../ai-support-agent/backend/src/config/db.js"
import dotenv from "dotenv"
dotenv.config()

const app= express()


const PORT=  3001

app.use(express.json())
// database connection 
connectDB()
// routes 
app.use("/api/leads",leadRoutes)


// start server 
app.listen(PORT,()=>{
    console.log(`server started listening on port ${PORT}`)
})