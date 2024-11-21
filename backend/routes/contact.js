const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

// POST - Create a new contact form submission
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate if required fields are present
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new contact entry
    const newContact = new Contact({ name, email, subject, message });

    // Save the contact entry to the database
    await newContact.save();
    res.status(201).json({ message: 'Message received successfully!' });
    console.log("New Contact:", newContact);
  } catch (error) {
    console.error('Error saving contact form data:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
