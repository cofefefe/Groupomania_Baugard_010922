const mongoose = require('mongoose')
const { isEmail } = require('validator')

const userSchema = mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        maxLength:40,
        minLength:2
    },
    name:{
        type:String,
        required:true,
        maxLength:40,
        minLength:2
    },
    email:{
        type:String,
        required:true,
        maxLength:40,
        minLength:2,
        unique:true,
        validate:[isEmail]
    },
    password :{
        type:String,
        required:true,
        minLength:6
    },
    picture :{
        type:String,
        default:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'
    },
    bio :{
        type:String,
        maxLength:580
    },
    post:{
        type:[String],
        mxLength:1024,
        minLength:2,
    }
},{
    timestamps:true,
})

module.exports = mongoose.model('User', userSchema)
