const Post = require('../models/post.models')

exports.likePost = (req, res) => {
    Post.findOne({ _id: req.params.id }).then((req) => {
      console.log("req", req);
      if (req.like.includes(req.auth.userId)) {
        Post.findOneAndUpdate(
          { _id: req.params.id },
          { $inc: { likes: -1 }, $pull: { likers: req.auth.userId } }
        )
          .then(() =>
            res.status(200).json({ message: "like retiré !", liked: false })
          )
          .catch((error) => res.status(400).json({ error }));
      } else {
        Post.findOneAndUpdate(
          { _id: req.params.id },
          { $inc: { likes: 1 }, $push: { likers: req.auth.userId } }
        )
          .then(() =>
            res.status(200).json({ message: "Like ajouté!", liked: true })
          )
          .catch((error) => res.status(400).json({ error }));
      }
    });
  };