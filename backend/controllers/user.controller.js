const userModels = require('../models/user.models')
const objectId = require('mongoose').Types.ObjectId
const { isValid } = require('validator')

module.exports.getAllUsers = async (req,res,next) => {
    let users = await userModels.find().select('-password')
    .then((users) => {
        res.status(200).json({users})
    }
    )
    .catch((error) => {
        res.status(400).json({ error })
    })
}

module.exports.updateUserInfo = async (req,res,next) =>{
    if(!objectId){
        console.log(req.params.id + ' voici object id => ' + objectId)
        return res.status(400).send('Id utilisateur invalide' + req.params.id)
    }    
    try{
        await userModels.findOneAndUpdate(
            {_id:req.params.id},
            {
                $set:{
                    email:req.body.email
                }
            },
            {new:true, upsert:true,setDefaultsOnInsert:true},
            (err, docs) => {
                if(!err) return res.send(docs)
                if(err) return res.status(500).json(err)
            }
        )
    } catch(err){
        return res.status(500).json({err})
    }

}