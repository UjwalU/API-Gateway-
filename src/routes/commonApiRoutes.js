const express = require('express');
const router = express.Router();
const commonApiController = require('../controllers/commonapi');


router.get('/db1', commonApiController.getAllDataFromDB1);
router.get('/db2', commonApiController.getAllDataFromDB2);

module.exports = router; 