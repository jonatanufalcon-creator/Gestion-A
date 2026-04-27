import { Pool } from 'pg';

// Create a connection pool
const pool = new Pool({
  user: 'your_user',
  host: 'localhost',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
});

// Function to handle errors
const errorHandler = (res, error) => {
  console.error(error);
  res.status(500).json({ message: 'An error occurred', error });
};

// Sample route handlers for 8 modules

// Module 1
app.get('/module1', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM module1');
    res.json(result.rows);
  } catch (error) {
    errorHandler(res, error);
  }
});

// Module 2
app.get('/module2', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM module2');
    res.json(result.rows);
  } catch (error) {
    errorHandler(res, error);
  }
});

// Module 3
app.get('/module3', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM module3');
    res.json(result.rows);
  } catch (error) {
    errorHandler(res, error);
  }
});

// Module 4
app.get('/module4', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM module4');
    res.json(result.rows);
  } catch (error) {
    errorHandler(res, error);
  }
});

// Module 5
app.get('/module5', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM module5');
    res.json(result.rows);
  } catch (error) {
    errorHandler(res, error);
  }
});

// Module 6
app.get('/module6', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM module6');
    res.json(result.rows);
  } catch (error) {
    errorHandler(res, error);
  }
});

// Module 7
app.get('/module7', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM module7');
    res.json(result.rows);
  } catch (error) {
    errorHandler(res, error);
  }
});

// Module 8
app.get('/module8', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM module8');
    res.json(result.rows);
  } catch (error) {
    errorHandler(res, error);
  }
});

// Export the pool for use in other modules
export default pool;