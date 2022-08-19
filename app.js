require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const connectDB = require('./db/connect')
const studentsRouter = require('./routes/students')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

//middlerware
app.use(express.json())

//routes

app.get('/',(req,res)=>{
    res.send('<h1> Yoklama</h1><a href="/api/v1/products">product routes</a>')
})


app.use('/api/v1/students',studentsRouter)

// products route
app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000

const start = async () =>{
    try {
        // connectDB
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log('server running http://localhost:'+ port))
    } catch (error) {
        console.log(error);
    }
}

start()