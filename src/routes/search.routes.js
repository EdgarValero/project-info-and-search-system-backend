const { Router } = require('express');
const router = Router();

const Product = require("../models/products.model");

router.post('/', async (req, res, next) => {
    const { productSearch } = req.body;
    const searched = await Product.find().or({productDescription: { $regex: productSearch }});
    res.send(searched);
});

module.exports = router;