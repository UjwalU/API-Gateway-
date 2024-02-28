const express = require('express');
const router = express.Router();
const api1Controller = require('../controllers/api1');



router.get('/db1all', api1Controller.getAllData);
router.post('/db1new',api1Controller.createData);
router.put('/:id', api1Controller.updateData);
router.delete('/:id',api1Controller.deleteData);

module.exports = router;