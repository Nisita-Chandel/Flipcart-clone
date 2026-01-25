require("dotenv").config()
const express = require("express")
const cookieParser = require("cookie-parser")
const connectdb = require("./src/config/db")
const authRoutes = require("./src/routes/auth.routes")
const cacheInstance = require("./src/services/cache.service")


const app = express()

cacheInstance.on("connect",() =>{
    console.log("Redis connected successfully");
})

cacheInstance.on("error",(error) => {
    console.log("Error in connecting redis",error)
})

app.use(express.json())
app.use("/api/auth",authRoutes)
app.use(cookieParser());

connectdb();

let port = process.env.PORT || 4000

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})