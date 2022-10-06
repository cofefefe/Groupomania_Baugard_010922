const User = require('../models/user.model')
const bcrypt = require('bcrypt')

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
