const { Schema, model } = require('mongoose');

const sucursalSchema = new Schema({
    direction: { type: String, required: true },
    numberContact: { type: String, required: true },
    googleMaps: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = model('sucursals', sucursalSchema);