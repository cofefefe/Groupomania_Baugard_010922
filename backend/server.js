const express = require('express')
// Routes
const userRoutes = require('./routes/user.routes')
const postRoutes = require('./routes/post.routes')

const bodyParser = require('body-parser')
require('dotenv').config({path: './config/.env'})
const app = express()
require('./config/db')

// Retrieve request's body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
// server
app.listen(process.env.PORT, () =>{
    console.log(`Listening on port ${process.env.PORT}`)
})

// routes
app.use('/api/user', userRoutes)
app.use('/api/post',  postRoutes)


