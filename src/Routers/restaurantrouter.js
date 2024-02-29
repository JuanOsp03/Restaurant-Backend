const express = require('express');
const restaurantController = require('../Controllers/restaurantController');
const router = express.Router();

router.post('/createrestaurant', restaurantController.createRestaurant);
router.get('/listrestaurant', restaurantController.listRestaurant);
router.put('/updaterestaurant/:restaurantId', restaurantController.updateRestaurant);
router.put('/disablerestaurant/:restaurantId', restaurantController.disableRestaurant);

module.exports = router;