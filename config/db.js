const mongoose = require('mongoose')
require('dotenv').config({path: './config/.env'})

const uri = `mongodb+srv://${process.env.NAME}:${process.env.PASSWORD}@cluster0.lvtppdv.mongodb.net/Groupomania_project`

mongoose.connect(uri, 
    {
    useNewUrlParser:true,
    })
    .then(()=> console.log('Connected to mongodb'))
    .catch((error) => console.log('failed connexion to mongoDB, look error => ', error))