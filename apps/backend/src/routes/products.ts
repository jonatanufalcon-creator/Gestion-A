// products.ts

import express from 'express';

const router = express.Router();

let products = []; // This will act as an in-memory database for demo purposes.

// Get all products
router.get('/', (req, res) => {
    res.json(products);
});

// Add a new product
router.post('/', (req, res) => {
    const { name, stock } = req.body;
    const newProduct = { id: products.length + 1, name, stock };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Update stock of a product
router.put('/:id/stock', (req, res) => {
    const { id } = req.params;
    const { stockAdjustment } = req.body;
    
    const product = products.find(p => p.id === parseInt(id));
    if (!product) return res.status(404).send('Product not found');

    product.stock += stockAdjustment; // Adjust stock
    res.json(product);
});

// Delete a product
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    products = products.filter(p => p.id !== parseInt(id));
    res.status(204).send();
});

export default router;