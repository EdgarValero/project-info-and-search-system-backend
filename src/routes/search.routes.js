const { Router } = require('express');
const router = Router();

const Product = require("../models/products.model");

router.post('/', async (req, res, next) => {
    const { productSearch } = req.body;
    console.log(req.body);
    const searched = await Product.find().or([
        {
            productDescription: { $regex: productSearch }
        },
        {
            productName: { $regex: productSearch }
        },
        {
            productType: { $regex: productSearch }
        },
        {
            productCategory: { $regex: productSearch }
        }
    ]);
    if(searched == '') {
        res.json({productSearch, msg: 'product_not_found'});
    } else {
        res.json({productSearch, searched});
    }
});

module.exports = router;