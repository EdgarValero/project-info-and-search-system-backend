const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserAdmin = require('../models/usersAdmin.model');

class userAdminController{
    async signUp(input) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(input.adminPassword, salt);
        input.adminPassword = hash;
        const newUserAdmin = new UserAdmin(input);
        await newUserAdmin.save();
    }
    async signIn(input) {
        if(input.adminEmail) {
            const admin = await UserAdmin.findOne({ adminEmail: input.adminEmail });
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
    async getUsersAdmin() {
        return await UserAdmin.find();
    }
    async updateUserAdmin(id, input) {
        if (input.adminPassword) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(input.adminPassword, salt);
            input.adminPassword = hash;
        }
        return await UserAdmin.findByIdAndUpdate({_id: id}, input);
    }
    async deleteUserAdmin(id) {
        return await UserAdmin.findByIdAndDelete({_id: id});
    }
}

module.exports = new userAdminController();