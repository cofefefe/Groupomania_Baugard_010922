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

    const postObject = JSON.stringify(req.body)
    console.log(postObject)
    const content = req.body.content
    const posterId = req.body.id
    let post = new postModel({
        ...postObject,
        content:content,
        posterId:posterId,
        createdAt: new Date(),
        updatedAt: new Date(),
        likes:0,
        userLiked:[]
    })
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
    console.log('modifypost')
}

module.exports.deletePost = (req,res,next)=>{
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
            console.log(err)
            console.log(post)
        })
}