const postModel = require('../models/post.models')
const userModel = require('../models/user.models')
const fs = require("fs");
const objectId = require('mongoose').Types.objectId
const mongoose = require('mongoose')

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
    let post = new postModel({
        ...postObject,
        content:req.body.content,
        posterId:req.currentUser._id,
        createdAt: new Date(),
        updatedAt: new Date(),
        likes:0,
        userLiked:[],
    })
    console.log('req file'+req.file)
    if (req.file != null || req.file != undefined) {
        post.imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        console.log(post.imageUrl)
    }
    console.log("post", post)
    post.save()
        .then(()=>{
            res.status(200).json({message:"enregistrement du post réussi !"})
          })
          .catch((error)=>{
            res.status(420).json({error})
            console.log('dans le catch')
          })
}

module.exports.modifyPost = (req,res,next)=>{
    console.log("req file", req.file)

    const newPost = JSON.parse(req.body.post);

    let filter = {
        _id: newPost._id,
        posterId: req.currentUser._id
    };
    // Add the user filter only if the user is not admin
    if (req.currentUser.isAdmin === false) {
        filter.userId = req.currentUser.id;
    }
    postModel.findOne(filter).then((post) => {
        if (!post) {
            return res.status(401).json({error: 'Article non trouvé !'});
        }
        // 1. Chercher le nom du fichier
        if (req.file) {
            // 2. supprimer l'image du serveur si elle existe
            if (post.imageUrl) {
                const filename = post.imageUrl.split('/images/')[1];
                fs.unlink(`images/${filename}`);
            }
            try {
                newPost.imageUrl = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
                postModel.updateOne({_id: newPost._id}, newPost)
                    .then(() => res.status(200).json({message: 'Article modifié !'}));
            } catch (error){
                return res.status(400).json({error});
            }
        } else {
            // Pas d'image ajoutée --> On met à jour uniquement le contenu
            try {
                postModel.updateOne({_id: newPost._id}, newPost)
                    .then(() => res.status(200).json({message: 'Article modifié !'}));
                return res.status(200).json({message: 'Article modifié'});
            } catch (error) {
                return res.status(400).json({error});
            }
        }
    });
}

exports.deletePost = (req, res, next) => {
    // Find the sauce by id
    postModel.findOne({ _id: req.params.id})
        .then(post => {
            // retrieve filename by path of img
            
                const filename = post.imageUrl.split('/images/')[1]

                // Delete the img of post removed
                fs.unlink(`images/${filename}`, () => {
                    postModel.deleteOne({_id: req.params.id})
                        .then(() => { res.status(200).json({message: 'post supprimé !'})})
                        .catch(error => res.status(401).json({ error }))
                });
            })
        .catch( error => {
            res.status(500).json({ error });
            console.log({error})
        });
 };