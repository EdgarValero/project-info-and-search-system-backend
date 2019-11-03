const { Schema, model } = require('mongoose');

const sucursalSchema = new Schema({
    address: { type: String, required: true },
    numberContact: { type: String, required: true },
    officeHours: { type: String, require: true},
    googleMaps: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = model('sucursals', sucursalSchema);