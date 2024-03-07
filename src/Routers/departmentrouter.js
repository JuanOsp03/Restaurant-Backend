const express = require('express');
const deparmentController = require('../Controllers/departmentController');
const router = express.Router();

router.get('/listdepartments', deparmentController.listDepartments);

module.exports = router;