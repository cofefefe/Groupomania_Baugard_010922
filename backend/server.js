const express = require('express')
const cors = require("cors")
// Routes
const userRoutes = require('./routes/user.routes')
const postRoutes = require('./routes/post.routes')
const bodyParser = require('body-parser')
require('dotenv').config({path: './config/.env'})

// server
const app = express()
app.listen(process.env.PORT, () =>{
    console.log(`Listening on port ${process.env.PORT}`)
})

require('./config/db')



app.use(cors())

// Cors middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
// Retrieve request's body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


// routes
app.use('/api/user', userRoutes)
app.use('/api/post',  postRoutes)

