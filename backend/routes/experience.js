const express = require('express');
const Experience = require('../models/Experience');
const router = express.Router();

// GET all experiences
router.get('/', async (req, res) => {
  try {
    const experience = await Experience.find();  // Fetch all experiences from MongoDB
    res.json(experience);  // Send the experiences as a JSON response
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
