const express = require('express');
const Project = require('../models/Project');  // Import the Mongoose Project model
const router = express.Router();

// GET all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();  // Fetch all projects from MongoDB
    res.json(projects);  // Send the projects as a JSON response
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
