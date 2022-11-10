const Post = require('../models/post.models')
const User = require('../models/user.models')
const jwt = require('jsonwebtoken');
const userToken = require('../middleware/auth');



exports.likePost = (req, response) => {

 const token = req.headers.authorization
  const decodedToken = jwt.verify(token, process.env.TOKEN);
  const userId = decodedToken.userId;
  const messageId = req.params.id;


  // Retrieve post in the data base
  Post.findOne({ _id: messageId })
    .then((res) => {
      // if user has already liked the post, it's a dislike
    if (res.usersLiked.includes(userId)) {
      Post.findOneAndUpdate(
        { _id: messageId },
        // update like's value and pull user from array of userLiked
        { $inc: { likes: -1 }, $pull: { usersLiked: userId} }
      )
        .then((res) =>
          response.status(200).json({ message: "like retiré !"})
        )
        .catch((err) => response.status(400).json({ err }));
        // if user has not liked the post
    } else {
      Post.findOneAndUpdate(
        { _id: messageId },
        // update like's value and push user from array of userLiked
        { $inc: { likes: 1 }, $push: { usersLiked: userId} }
      )
        .then((res) =>
          response.status(200).json({ message: "Like ajouté!"})
        )
        .catch((err) => console.log(err));
    }
  });
};