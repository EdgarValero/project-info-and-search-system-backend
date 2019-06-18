const Category =  require('../models/categories.model');

class categoryController {
    async getCategories() {
        return await Category.find().sort('desc')
    }
    async getCategory(id) {
        return await Category.findById({_id: id});
    }
    async addCategory(input) {
        const newCategory = new Category(input);
        await newCategory.save();
    }   
    async deleteCategory(id) {
        return await Category.findByIdAndDelete({_id: id});
    }
    async updateCategory(id, input, imagePath) {
        if(imagePath) {
            return await Category.findByIdAndUpdate({_id: id}, {input, imagePath});
        }
        return await Category.findByIdAndUpdate({_id: id}, input);
    }
}

module.exports = new categoryController();