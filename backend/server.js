import express from "express"
import leadRoutes from "./src/routes/lead.routes.js"
import { connectDB } from "./src/config/db.js"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

const app= express()

app.use(cors({
    origin:"http://localhost:5173"
}))
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