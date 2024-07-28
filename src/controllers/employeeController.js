const connection = require('../config/db');

const getAllEmployees = (req, res) => {
  const query = 'SELECT * FROM employees';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching employees:', err);
      res.status(500).send('Error fetching employees');
      return;
    }
    res.json(results);
  });
};

const addEmployee = (req, res) => {
  const employee = req.body;
  const query = 'INSERT INTO employees SET ?';
  connection.query(query, employee, (err, results) => {
    if (err) {
      console.error('Error adding employee:', err);
      res.status(500).send('Error adding employee');
      return;
    }
    res.status(201).send(`Employee added with ID: ${results.insertId}`);
  });
};

module.exports = {
  getAllEmployees,
  addEmployee,
};
