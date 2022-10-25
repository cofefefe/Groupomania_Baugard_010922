const Users = require('../models/user.models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config({path: '../config/.env'})

module.exports.signUp = async (req,res) =>{
    // retrieve key/value from request
    const password = req.body.password
    const email = req.body.email
    const firstname = req.body.firstname
    const name = req.body.name
    const userId = req.body._id
    // Use user models to create new user
    bcrypt.hash(password, 10)
    .then(hash => {
        const user = new Users({
            firstname: firstname,
            name: name,
            email: email,
            password: hash,
        })
        user.save()
            .then(() => {
                return res.status(201).json({ message: "utilisateur créé !", userId})
            }
            )
            .catch((error) => {
                return res.status(400).json({ error })
            })
    })
    .catch((error) => res.status(500).json({ error }))
}
// managing connection and adding token to userID
exports.signIn = (req, res, next) => {
    // Compare user email with emails in the data base
    Users.findOne({ email: req.body.email })
        .then((user) => {
            // if user dont exist
            if (!user) {
                return res.status(401).json({ message: "Paire identifiant/mot de passe incorrect" })
            }
            // compare their password with our data base
            bcrypt.compare(req.body.password, user.password)
                .then((valid) => {
                    if (!valid) {
                        return res.status(401).json({ message: "Paire identifiant/mot de passe incorrect" })
                    }
                    // create a token and connecting user
                    res.status(200).json({
                        user: user,
                        token: jwt.sign(
                            { userId: user._id },
                            process.env.TOKEN,
                            { expiresIn: '24h' }
                        )
                    })
                })
                .catch((error) => res.status(500).json({ error }))
        })
        .catch((error) => res.status(500).json({ error }))
};

exports.auth = (req, res, next) => {
    const {token} = req.body;
    try {
        var decodedToken = jwt.verify(token, process.env.TOKEN);
        Users.findOne({_id: decodedToken.userId}).then(function (user) {
            if (!user) {
                return res.status(401).json({error: 'Utilisateur non trouvé !'});
            }
            return res.status(200).json(user);
        });
    } catch (error) {
        return res.status(401).json(error);
    }
}