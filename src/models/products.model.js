const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    productName: { type: String, required: true },
    productType: { type: String, required: true },
    productCategory: { type: String, required: true },
    productDescription: { type: String, required: true },
    salePrice: { type: Number, required: true },
    disponibility: { type: String, required: true },
    imagePath: { type: String, required: true}, 
    create_at: { type: Date, default: Date.now }
});

module.exports = model('products', productSchema);