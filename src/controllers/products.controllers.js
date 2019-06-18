const Product =  require('../models/products.model');

class productController {
    async getProducts() {
        return await Product.find();
    }
    async getProduct(id) {
        return await Product.findById({_id: id});
    }
    async getProductsFeatured() {
        return await Product.find().limit(9);
    }
    async addProduct(input) {
        const newProduct = new Product(input);
        await newProduct.save();
    }   
    async deleteProduct(id) {
        return await Product.findByIdAndDelete({_id: id});
    }
    async updateProduct(id, input, imagePath) {
        if(imagePath) {
            return await Product.findByIdAndUpdate({_id: id}, {input, imagePath});
        }
        return await Product.findByIdAndUpdate({_id: id}, input);
    }
    async getProductsCategoryAlimentosBasicos() {
        const category = {
            productCategory: "alimentos basicos"
        };
        return await Product.find(category);
    }
    async getProductsCategoryCereales() {
        const category = {
            productCategory: "cereales"
        };
        return await Product.find(category);
    }
    async getProductsCategoryDulcesSnacks() {
        const category = {
            productCategory: "dulces y snacks"
        };
        return await Product.find(category);
    }
    async getProductsCategoryCuidadoPersonal() {
        const category = {
            productCategory: "cuidado personal"
        };
        return await Product.find(category);
    }
    async getProductsCategoryCharcuteria() {
        const category = {
            productCategory: "charcuteria"
        };
        return await Product.find(category);
    }
    async getProductsCategoryBebidasLiquidas() {
        const category = {
            productCategory: "bebidas liquidas"
        };
        return await Product.find(category);
    }
    async getProductsCategoryBebidasEnPolvo() {
        const category = {
            productCategory: "bebidas en polvo"
        };
        return await Product.find(category);
    }
    async getProductsCategoryYogurts() {
        const category = {
            productCategory: "yogurts"
        };
        return await Product.find(category);
    }
    async getProductsCategoryHelados() {
        const category = {
            productCategory: "helados"
        };
        return await Product.find(category);
    }
}

module.exports = new productController();