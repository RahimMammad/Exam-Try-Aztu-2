import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import route from "./src/routes/Product.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use(route)
dotenv.config()

const port = process.env.PORT
const url = process.env.URL.replace("<password>", process.env.PASSWORD)
mongoose.connect(url)
    .then(resp => {
        console.log("Database connected");
    }).catch(err => {
        console.log("Database is not connected", err);
    })

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})