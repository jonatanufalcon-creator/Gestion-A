import { Router } from 'express';

const router = Router();

// Mock database
let purchases = [];

// Create a purchase order
router.post('/purchase', (req, res) => {
    const newPurchase = req.body;
    newPurchase.id = purchases.length + 1; // Simple ID assignment
    purchases.push(newPurchase);
    res.status(201).json({ message: 'Purchase created successfully', purchase: newPurchase });
});

// Get details of a purchase order
router.get('/purchase/:id', (req, res) => {
    const { id } = req.params;
    const purchase = purchases.find(p => p.id == id);
    if (!purchase) {
        return res.status(404).json({ message: 'Purchase not found' });
    }
    res.json(purchase);
});

// Cancel a purchase order
router.delete('/purchase/:id', (req, res) => {
    const { id } = req.params;
    const index = purchases.findIndex(p => p.id == id);
    if (index === -1) {
        return res.status(404).json({ message: 'Purchase not found' });
    }
    purchases.splice(index, 1);
    res.json({ message: 'Purchase cancelled successfully' });
});

export default router;
