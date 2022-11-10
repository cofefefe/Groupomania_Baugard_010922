const Users = require("../models/user.models");
const mongoose = require('mongoose')

/**
 * Make any changes you need to make to the database here
 */
async function up () {
    mongoose.connect(`mongodb+srv://Luubin:Trinite333762@cluster0.lvtppdv.mongodb.net/Groupomania_project`,
    {useNewUrlParser:true,})
    await Users.create({ firstname: 'admin', name: 'ADMIN', isAdmin: true, email: 'admin@groupomania.fr',
        password: '$2b$10$wbphnIMtu9/2rLWX3S5/m.QI5UrMFW.pLwVAiebC9tHNfshRZooqy' });
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
async function down () {

}

module.exports = { up, down };
