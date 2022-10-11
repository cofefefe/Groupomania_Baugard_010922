const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    posterId:{
        type:String,
        required:true
    },
    content:{
        type:String,
        maxLenght:580
    },
    picture:{
        type:String,
    },
    like:{
        type:[String],
        required:true
    }
},
{
    timestamps:true
})

module.exports = mongoose.model('post', postSchema)
