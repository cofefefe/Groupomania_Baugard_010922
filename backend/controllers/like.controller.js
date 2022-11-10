const Post = require('../models/post.models')
const User = require('../models/user.models')
const jwt = require("jsonwebtoken");
const userToken = require('../middleware/auth');



exports.likePost = (req, response) => {
  
  // Retrieve post in the data base
  Post.findOne({ _id: req.params.id })
    .then((res) => {
      console.log(req)
      // if user has already liked the post, it's a dislike
    if (res.usersLiked.includes(res._id)) {
      Post.findOneAndUpdate(
        { _id: req.params.id },
        // update like's value and pull user from array of userLiked
        { $inc: { likes: -1 }, $pull: { usersLiked: res._id } }
      )
        .then((res) =>
          response.status(200).json({ message: "like retiré !"})
        )
        .catch((err) => response.status(400).json({ err }));
        // if user has not liked the post
    } else {
      Post.findOneAndUpdate(
        { _id: req.params.id },
        // update like's value and push user from array of userLiked
        { $inc: { likes: 1 }, $push: { usersLiked: res._id } }
      )
        .then((res) =>
          response.status(200).json({ message: "Like ajouté!"})
        )
        .catch((err) => console.log(err));
    }
  });
};