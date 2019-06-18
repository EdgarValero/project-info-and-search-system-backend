const { Router } = require('express');
const router = Router();
const fs = require('fs-extra');
const path = require('path');

const categoryController = require('../controllers/categories.controllers')

router.get('/', async (req, res, next) => {
    const categories = await categoryController.getCategories();
    res.json(categories);
});

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    const category = await categoryController.getCategory(id);
    res.json(category);
});

router.post('/add-category', async (req, res , next) => {
    const { categoryName, categoryDescription, categoryUrl } = req.body;
    const imagePath = '/uploads/' + req.file.filename;
    const input = {
        categoryName,
        categoryDescription,
        categoryUrl,
        imagePath
    };
    await categoryController.addCategory(input);
    res.json({message: 'Category Saved'});
});

router.delete('/delete-category/:id', async (req, res, next) => {
    const { id } = req.params;
    const category = await categoryController.deleteCategory(id);
    fs.unlink(path.resolve('./src/public' + category.imagePath));
    res.json({message: 'Category Deleted'});
});

router.put('/edit-category/:id', async (req, res, next) => {
    const { id } = req.params;
    const { categoryName, categoryDescription, categoryUrl } = req.body;
    const input = {
        categoryName, 
        categoryDescription,
        categoryUrl
    };
    const imagePath = req.file;
    if (imagePath) {
        const imagePath = '/uploads/' + req.file.filename;
        const product = await categoryController.updateCategory(id, input, imagePath);
        fs.unlink(path.resolve('./src/public' + product.imagePath));
    }
    await categoryController.updateCategory(id, input);
    res.json({message: 'Category Updated'});
});

module.exports = router;