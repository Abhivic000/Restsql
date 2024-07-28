const connection = require('../config/db');

const createEmployeesTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS employees (
      id INT AUTO_INCREMENT PRIMARY KEY,
      emp_name VARCHAR(100),
      department VARCHAR(100),
      designation VARCHAR(100),
      email VARCHAR(100),
      gender VARCHAR(10),
      phone VARCHAR(20),
      address TEXT,
      country VARCHAR(100),
      state VARCHAR(100),
      city VARCHAR(100),
      address2 TEXT,
      dob DATE,
      joining_date DATE,
      salary DECIMAL(10, 2),
      per_day_salary DECIMAL(10, 2),
      bank_name VARCHAR(100),
      ifsc_code VARCHAR(20),
      account_num VARCHAR(50),
      bank_address TEXT,
      upi_id VARCHAR(100),
      emp_status VARCHAR(50),
      emp_timing VARCHAR(50),
      service_terms TEXT,
      emp_image TEXT,
      emp_cv TEXT,
      total_leave INT,
      login_email VARCHAR(100),
      password VARCHAR(100),
      role VARCHAR(50),
      certificates TEXT,
      emergency_contact TEXT,
      social_media TEXT,
      created_by VARCHAR(100),
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `;
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error creating employees table:', err);
      return;
    }
    console.log('Employees table created successfully.');
  });
};

module.exports = {
  createEmployeesTable,
};
