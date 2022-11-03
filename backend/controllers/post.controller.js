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
    let postObject = req.body.post
    const content = req.body.content
    const posterId = req.body.posterId

    let post = new postModel({
        ...postObject,
        content:content,
        posterId:posterId,
        createdAt: new Date(),
        updatedAt: new Date(),
        likes:0,
        userLiked:[]
    })
    console.log("post", post)

    if (req.file) {
        post.imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    }
    post.save()
        .then(()=>{
            res.status(200).json({message:"enregistrement du post réussi !"})
            console.log('on est dans le then')
            console.log('api call req body'+ postObject)
          })
          .catch((error)=>{
            res.status(420).json({error})
            console.log('dans le catch')
          })
}

module.exports.modifyPost = (req,res,next)=>{
    console.log(req.params)
}

module.exports.deleteArticle = (req,res,next)=>{
    postModel.findOne({_id:req.params.id})
        .then((post)=>{

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
        })
}