import { Router } from 'express';

const router = Router();

// Mock data for companies
let companies = [];

// GET all companies
router.get('/', (req, res) => {
    res.json(companies);
});

// POST a new company
router.post('/', (req, res) => {
    const newCompany = req.body;
    companies.push(newCompany);
    res.status(201).json(newCompany);
});

// PUT to update an existing company
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updatedCompany = req.body;
    companies = companies.map(company => company.id === id ? updatedCompany : company);
    res.json(updatedCompany);
});

// DELETE a company
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    companies = companies.filter(company => company.id !== id);
    res.status(204).send();
});

export default router;