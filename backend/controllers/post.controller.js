const postModel = require('../models/post.models')
const fs = require("fs");

module.exports.getPost = async (req, res, next) => {
    try {
        const posts = await postModel.find().sort({'createdAt': -1}).populate('poster');
        res.send(posts)
    } catch (e) {
        res.status(500).json({e})
    }
}

exports.addPost = async (req,res,next)=>{

    let postObject = req.body.post
    let post = new postModel({
        ...postObject,
        content:req.body.content,
        poster: req.currentUser._id,
        createdAt: new Date(),
        updatedAt: new Date(),
        likes:0,
        userLiked:[],
    })
    if (req.file != null || req.file != undefined) {
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

    const newPost = JSON.parse(req.body.post);
    let filter = {
        _id: newPost._id
    };
    if (!req.currentUser.isAdmin) {
        filter._id = newPost._id
        filter.poster = req.currentUser._id
    }

    // Add the user filter only if the user is not admin
    postModel.findOne(filter).then((post) => {
        if (!post) {
            return res.status(401).json({error: 'Article non trouvé !'});
        }
        // 1. Chercher le nom du fichier
        if (req.file) {
            // 2. supprimer l'image du serveur si elle existe
            if (post.imageUrl) {
                const filename = post.imageUrl.split('/images/')[1];
                fs.unlink(`images/${filename}`, function () {});
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
                postModel.findOne({_id: newPost._id}).then(function (post) {
                    post.content = newPost.content;
                    post.save().then(function () {
                        return res.status(200).json({message: 'Article modifié'});
                    });
                });
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
                // Delete the img of post removed
                if(post.imageUrl){
                    // retrieve filename by path of img    
                    const filename = post.imageUrl.split('/images/')[1] 
                    fs.unlink(`images/${filename}`, () => {
                        postModel.deleteOne({_id: req.params.id})
                            .then(() => { res.status(200).json({message: 'post supprimé !'})})
                            .catch(error => res.status(401).json({ error }))
                    });
                }else{
                    postModel.deleteOne({_id: req.params.id})
                            .then(() => { res.status(200).json({message: 'post supprimé !'})})
                            .catch(error => res.status(401).json({ error }))
                }
                
            })
        .catch( error => {
            res.status(500).json({ error });
            console.log({error})
        });
 };