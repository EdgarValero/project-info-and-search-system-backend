const { Schema, model } = require('mongoose');

const userAdminSchema = new Schema({
    adminFirstName: { type: String, required: true },
    adminLastName: { type: String, required: true },
    adminEmail: { type: String, required: true },
    adminPassword: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = model('usersAdmin', userAdminSchema);