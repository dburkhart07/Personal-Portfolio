const express = require('express');
const cors = require('cors'); 
const connectDB = require('./db'); 
const projectRoutes = require('./routes/project'); 
const experienceRoutes = require('./routes/experience');
const songRoutes = require('./routes/song')
const contactRoutes = require('./routes/contact');

const app = express();

const allowedOrigins = [
  'http://localhost:3000',
  'https://dalton-burkhart.onrender.com',
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
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
app.use('/api/songs', songRoutes);
app.use('/api/contact', contactRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
