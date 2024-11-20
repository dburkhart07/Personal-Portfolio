const express = require('express');
const connectDB = require('./db'); // Import the connectDB function
const projectRoutes = require('./routes/project'); // Import your route

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // Parse JSON requests

// API Routes
app.use('/api/project', projectRoutes); // Use the project route

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
