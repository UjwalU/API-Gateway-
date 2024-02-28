// routes/api2Routes.js

const express = require('express');
const router = express.Router();
const api2Controller = require('../controllers/api2');

// Routes for API2
router.get('/db2all', api2Controller.getAllData);
router.post('/db2new', api2Controller.createData);
router.put('/:id', api2Controller.updateData);
router.delete('/:id', api2Controller.deleteData);

module.exports = router;
