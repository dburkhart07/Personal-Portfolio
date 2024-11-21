const express = require('express');
const cors = require('cors'); 
const connectDB = require('./db'); 
const projectRoutes = require('./routes/project'); 
const experienceRoutes = require('./routes/experience');

const app = express();

// Enable CORS for frontend (localhost:3000)
app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // Parse JSON requests

// API Routes
app.use('/api/projects', projectRoutes); 
app.use('/api/experience', experienceRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
