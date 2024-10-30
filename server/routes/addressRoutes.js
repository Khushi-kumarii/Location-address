const express = require('express');
const Address = require('../models/Address');
const router = express.Router();

// Create a new address
router.post('/add', async (req, res) => {
    try {
        const address = new Address(req.body);
        await address.save();
        res.status(201).json(address);
    } catch (error) {
        res.status(500).json({ error: "Failed to save address" });
    }
});

// Fetch all addresses
router.get('/all', async (req, res) => {
    try {
        const addresses = await Address.find();
        res.json(addresses);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch addresses" });
    }
});

// Update an address
router.put('/update/:id', async (req, res) => {
    try {
        const address = await Address.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(address);
    } catch (error) {
        res.status(500).json({ error: "Failed to update address" });
    }
});

module.exports = router;
