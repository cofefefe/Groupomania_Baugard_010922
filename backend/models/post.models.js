const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
        poster: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: { type: String, trim: true, maxlenght: 500 },
    imageUrl: { type: String },
    likes: { type: Number, default : 0 },
    usersLiked: { type: Array}},
{
    timestamps:true
})

module.exports = mongoose.model('post', postSchema)
