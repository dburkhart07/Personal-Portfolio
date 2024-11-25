const mongoose = require('mongoose');
const connectDB = require('../../db'); // Import the connectDB function
require('dotenv').config(); // Ensure dotenv is loaded

describe('Database Connection', () => {
  beforeAll(async () => {
    // Ensure MONGO_URI is loaded correctly
    const dbURI = process.env.MONGO_URI; // Fallback to local test DB
    if (!dbURI) {
      console.error('MONGO_URI is not defined in your .env file');
      process.exit(1);
    }
    
    // Log URI for debugging (Remove this in production)
    console.log('MongoDB URI for test environment:', dbURI);

    // Use the connectDB function to connect to the test database
    await connectDB();
  });

  afterAll(async () => {
    // Disconnect from the database after tests
    await mongoose.disconnect();
  });

  it('should connect to MongoDB', async () => {
    // Test to ensure the connection is successful
    const connection = mongoose.connection;
    expect(connection.readyState).toBe(1); // readyState 1 means connected
  });
});
