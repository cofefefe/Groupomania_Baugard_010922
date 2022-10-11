const postModel = require('../models/post.models')
const userModel = require('../models/user.models')
const objectId = require('mongoose').Types.objectId

module.exports.getPost = (req,res,next)=>{
    postModel.find((err,docs)=>{
        if (!err) res.send(docs)
        else{
            console.log('error to get data : ' + err)
        }
    })
}

exports.addPost = async (req,res,next)=>{    
 
    const newPost = new postModel({
        posterId:req.body.posterId,
        content:req.body.content,
        picture:req.body.picture,
        like:[]
    })
    newPost.save()
    .then(()=>{
      res.status(200).json({message:"publication du message réussie !"})
    })
    .catch((error)=>{
      res.status(400).json({error})
    })
}

module.exports.modifyPost = (req,res,next)=>{
    console.log('modifypost')
}

module.exports.deletePost = (req,res,next)=>{
    postModel.findOne({_id:req.params.id})
        .then((post)=>{
            console.log("req.params.id :", req.params.id)
            console.log("post",post)
            post.deleteOne({_id:req.params.id})
                .then(()=>{
                    res.status(200).json(message, ' : votre publication est supprimée ')
                })
                .catch((err)=>{
                    res.status(401).json({err})
                })
        })
        .catch((err)=>{
            res.status(402).json(err)
            console.log(err)
            console.log(post)
        })
}