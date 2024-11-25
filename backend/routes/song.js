const express = require('express');
const Songs = require('../models/Song');
const router = express.Router();

// GET all projects
router.get('/', async (req, res) => {
  try {
    const songs = await Songs.find();  // Fetch all projects from MongoDB
    res.json(songs);  // Send the projects as a JSON response
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
