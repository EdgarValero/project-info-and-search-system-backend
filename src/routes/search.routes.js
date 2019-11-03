const { Router } = require('express');
const router = Router();

const Product = require("../models/products.model");

router.post('/', async (req, res) => {
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
        res.json({msg: 'product_not_found'});
    } else {
        res.json(searched);
    }
});

module.exports = router;