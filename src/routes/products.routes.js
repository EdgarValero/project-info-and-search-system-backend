const { Router } = require('express');
const router = Router();
const fs = require('fs-extra');
const path = require('path');

const productController = require('../controllers/products.controllers')

router.get('/', async (req, res, next) => {
    const products = await productController.getProducts();
    res.json(products);
});

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    const product = await productController.getProduct(id);
    res.json(product);
});

router.get('/featured/products', async (req, res, next) => {
    const products = await productController.getProductsFeatured();
    res.json(products);
});

router.post('/add-product', async (req, res , next) => {
    const { productName, productType, productCategory, productDescription, salePrice, disponibility } = req.body;
    const imagePath = '/uploads/' + req.file.filename;
    console.log(typeof(salePrice));
    const input = {
        productName,
        productType,
        productCategory,
        productDescription, 
        salePrice,
        disponibility,
        imagePath
    };
    await productController.addProduct(input);
    res.json({msg: 'product_saved'});
});

router.delete('/delete-product/:id', async (req, res, next) => {
    const { id } = req.params;
    const product = await productController.deleteProduct(id);
    fs.unlink(path.resolve('./src/public' + product.imagePath));
    res.json({msg: 'product_deleted'});
});

router.put('/edit-product/:id', async (req, res, next) => {
    const { id } = req.params;
    const { productName, productType, productCategory, productDescription, salePrice, disponibility } = req.body;
    const input = {
        productName,
        productType,
        productCategory,
        productDescription,
        salePrice,
        disponibility
    };
    const imagePath = req.file;
    if (imagePath) {
        const imagePath = '/uploads/' + req.file.filename;
        const product = await productController.updateProduct(id, input, imagePath);
        fs.unlink(path.resolve('./src/public' + product.imagePath));
    }
    await productController.updateProduct(id, input);
    res.json({msg: 'product_updated'});
});

router.get('/categories/alimentos-basicos', async (req, res, next) => {
    const products = await productController.getProductsCategoryAlimentosBasicos();
    res.json(products);
});

router.get('/categories/cereales', async (req, res, next) => {
    const products = await productController.getProductsCategoryCereales();
    res.json(products);
});

router.get('/categories/dulces-y-snacks', async (req, res, next) => {
    const products = await productController.getProductsCategoryDulcesSnacks();
    res.json(products);
});

router.get('/categories/cuidado-personal', async (req, res, next) => {
    const products = await productController.getProductsCategoryCuidadoPersonal();
    res.json(products);
});

router.get('/categories/charcuteria', async (req, res, next) => {
    const products = await productController.getProductsCategoryCharcuteria();
    res.json(products);
});

router.get('/categories/bebidas-liquidas', async (req, res, next) => {
    const products = await productController.getProductsCategoryBebidasLiquidas();
    res.json(products);
});

router.get('/categories/bebidas-en-polvo', async (req, res, next) => {
    const products = await productController.getProductsCategoryBebidasEnPolvo();
    res.json(products);
});

router.get('/categories/yogurts', async (req, res, next) => {
    const products = await productController.getProductsCategoryYogurts();
    res.json(products);
});

router.get('/categories/helados', async (req, res, next) => {
    const products = await productController.getProductsCategoryHelados();
    res.json(products);
});

module.exports = router;