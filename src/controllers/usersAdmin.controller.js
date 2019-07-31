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
        const admin = await userAdmin.findOne({ adminEmail: input.adminEmail });
        if(admin) {
            if(input.adminPassword) {
                if(await bcrypt.compareSync(input.adminPassword, admin.adminPassword)) {
                    console.log('User Admin Verificated');
                    const token = jwt.sign({admin}, process.env.SECRET_KEY_JWT);
                    console.log(token);
                } else {
                    console.log('Incorrect Password');
                }
            } else {
                console.log('Intro your password');
            }
        } else {
            console.log('User no exist.');
        }
    }
}

module.exports = new userAdminController();