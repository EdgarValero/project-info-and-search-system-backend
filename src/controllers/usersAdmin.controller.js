const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userAdmin = require('../models/usersAdmin.model');

class userAdminController{
    async signUp(input) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(input.adminPassword, salt);
        input.adminPassword = hash;
        const newUserAdmin = new userAdmin(input);
        await newUserAdmin.save();
        console.log(newUserAdmin);
    }
    async signIn(input) {
        if(input.adminEmail) {
            const admin = await userAdmin.findOne({ adminEmail: input.adminEmail });
            if(admin) {
                if(input.adminPassword) {
                    if(await bcrypt.compareSync(input.adminPassword, admin.adminPassword)) {
                        const token = jwt.sign({admin}, process.env.SECRET_KEY_JWT, {
                            expiresIn: 86400 // expires in 24 hours
                        });
                        return {token}
                    } else {
                        return {msg: 'incorrect_password'};
                    }
                } else {
                    return {msg: 'intro_your_password'};
                }
            } else {
                return {msg: 'user_not_found'};
            }
        } else {
            return {msg: 'intro_your_email'};
        }
    }
}

module.exports = new userAdminController();