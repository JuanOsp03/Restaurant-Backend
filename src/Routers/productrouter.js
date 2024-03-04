const express = require('express');
const productController = require('../Controllers/productController');
const router = express.Router();

router.post('/createproduct/', productController.createProduct);
router.get('/listproducts/:restaurantId', productController.listProducts);

module.exports = router;