const express = require('express');
const citycontroller = require('../Controllers/cityController');
const router = express.Router();

router.get('/listcities/:departmentId', citycontroller.listCities);

module.exports = router;