const jwt = require('jsonwebtoken');
const userModel = require("../models/user.models");


module.exports = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decodedToken = jwt.verify(token, process.env.TOKEN);
        userModel.findOne({_id: decodedToken.userId}).then((user) => {
            if (!user) {
                return res.status(401).json({error: 'Utilisateur non trouvé !'});
            }
            req.currentUser = user;
            next();
        });
    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
};