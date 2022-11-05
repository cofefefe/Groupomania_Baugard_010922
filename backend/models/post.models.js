const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    posterId: { type: String },
    content: { type: String, trim: true, maxlenght: 500 },
    imageUrl: { type: String },
    likes: { type: Number, default : 0 },
    usersLiked: { type: Array}},
{
    timestamps:true
})

module.exports = mongoose.model('post', postSchema)
