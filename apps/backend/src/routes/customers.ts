import express from 'express';

const router = express.Router();

// Sample data structure for customers and transactions
let customers = [];
let transactions = [];

// Create a new customer
router.post('/customers', (req, res) => {
    const { name, email } = req.body;
    const newCustomer = { id: customers.length + 1, name, email };
    customers.push(newCustomer);
    res.status(201).json(newCustomer);
});

// Get all customers
router.get('/customers', (req, res) => {
    res.json(customers);
});

// Get a customer by ID
router.get('/customers/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if (!customer) return res.status(404).send('Customer not found');
    res.json(customer);
});

// Create a transaction for a customer
router.post('/customers/:id/transactions', (req, res) => {
    const customerId = parseInt(req.params.id);
    const { amount, type } = req.body;
    const transaction = { id: transactions.length + 1, customerId, amount, type };
    transactions.push(transaction);
    res.status(201).json(transaction);
});

// Get all transactions for a customer
router.get('/customers/:id/transactions', (req, res) => {
    const customerId = parseInt(req.params.id);
    const customerTransactions = transactions.filter(t => t.customerId === customerId);
    res.json(customerTransactions);
});

export default router;