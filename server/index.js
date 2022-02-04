import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
//connects routes
import postRoutes from './routes/posts.js'
import { Console } from "console"
import dotenv from "dotenv";

const app = express()
dotenv.config()

//limit is for images 
app.use(bodyParser.json({limit: "30mb", extended: true}))

//setting up bodyparser so it can properly send our request
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

app.get('/hello', (req, res) => {
    res.send("hello to memories app")
})

//every route in postRoute will start with post
//every route in "posts.js" will have "/posts" added on ? could be wrong
//localhost:5000/posts

app.use('/posts', postRoutes)

//Set up connection between database
//url

process.env.CONNECTION_URL
//port
const PORT = process.env.PORT;
// || 5000;

//connects to mongoDB
mongoose.connect(process.env.CONNECTION_URL)
    //returns a promise (if connection is successful)
    //listens to port 5000 to get the data to include into mongoDB 
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))

    //because it gets everything from port 5000 we change everything on the express side and it automatically changes in MDB
    