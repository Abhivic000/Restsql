require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employeeRoutes');
const { createEmployeesTable } = require('./models/employeeModel');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', employeeRoutes);

// Create employees table
createEmployeesTable();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
