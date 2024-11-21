const express = require('express');
const cors = require('cors');  // Import cors
const connectDB = require('./db'); // Import the DB connection
const projectRoutes = require('./routes/project'); // Import your route

const app = express();

// Enable CORS for frontend (localhost:3000)
app.use(cors({
  origin: 'http://localhost:3000',  // Allow frontend on port 3000
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // Parse JSON requests

// API Routes
app.use('/api/projects', projectRoutes);  // Make sure route is '/api/projects'

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
