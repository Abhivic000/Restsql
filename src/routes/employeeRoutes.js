const express = require('express');
const { getAllEmployees, addEmployee } = require('../controllers/employeeController');

const router = express.Router();

router.get('/employees', getAllEmployees);
router.post('/employees', addEmployee);

module.exports = router;
