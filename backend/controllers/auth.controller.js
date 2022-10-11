const User = require('../models/user.models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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
        const user = new User({
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

exports.signIn = (req, res, next) => {
    // Compare user email with emails in the data base
    User.findOne({ email: req.body.email })
        .then((user) => {
            // if user dont exist
            if (!user) {
                return res.status(401).json({ message: "Paire identifiant/mot de passe incorrect" })
            }
            console.log(req.body.password, user.password)
            // compare their password with our data base
            bcrypt.compare(req.body.password, user.password)
                .then((valid) => {
                    if (!valid) {
                        return res.status(401).json({ message: "Paire identifiant/mot de passe incorrect" })
                    }
                    // create a token and connecting user
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            process.env.TOKEN,
                            { expiresIn: '24h' }
                        )
                    })
                })
                .catch((error) => res.status(505).json({ error }))
        })
        .catch((error) => res.status(500).json({ error }))
};