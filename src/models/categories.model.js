const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
    categoryName: { type: String, required: true },
    categoryDescription: { type: String, required: true },
    categoryUrl: { type: String, required: true },
    imagePath: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = model('categories', categorySchema);