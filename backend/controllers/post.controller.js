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
    console.log('req.body : ' + req.body)
    
    let post = new postModel({
        content:req.body.content,
        createdAt: new Date(),
        updatedAt: new Date(),
        likes:[],
        userLiked:[]
    })
    if (req.file) {
        post.imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    }
    post.save()
        .then(()=>{
            res.status(200).json({message:"enregistrement du post réussi !"})
          })
          .catch((error)=>{
            res.status(420).json({error})
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