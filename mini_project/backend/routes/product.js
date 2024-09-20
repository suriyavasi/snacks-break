const express = require('express');
const { getProducts, getsingleProducts } = require('../controller/productController');
const router = express.Router();


router.route('/products').get(getProducts);
router.route('/products/:id').get(getsingleProducts);


module.exports= router;