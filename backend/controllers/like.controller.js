const Post = require('../models/post.models')
const User = require('../models/user.models')

exports.likePost = (req, res) => {
  
  Post.findOne({ _id: req.params.id })
    .then((response) => {
    if (response.usersLiked.includes(User._id)) {
      Post.findOneAndUpdate(
        { _id: req.params.id },
        { $inc: { likes: -1 }, $pull: { usersLiked: User._id } }
      )
        .then((response) =>
          response.status(200).json({ message: "like retiré !", liked: false })
        )
        .catch((err) => response.status(400).json({ err }));
    } else {
      Post.findOneAndUpdate(
        { _id: req.params.id },
        { $inc: { likes: 1 }, $push: { usersLiked: User._id } }
      )
        .then((response) =>
          response.status(200).json({ message: "Like ajouté!", liked: true })
        )
        .catch((err) => console.log(err));
    }
  });
};