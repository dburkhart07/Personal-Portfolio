const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../index'); // Import the app
const Contact = require('../models/Contact'); // Import the model

describe('Contact Routes', () => {
  beforeAll(async () => {
    const dbURI = process.env.MONGO_URI_TEST || 'mongodb://localhost:27017/test';
    await mongoose.connect(dbURI);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  afterEach(async () => {
    await Contact.deleteMany(); // Clean up test data
  });

  it('POST /api/contact › should save a contact message and return it', async () => {
    const contactData = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      subject: 'Test Subject',
      message: 'Test Message',
    };

    const response = await request(app)
      .post('/api/contact')
      .send(contactData);

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(contactData);
    const savedContact = await Contact.findOne({ email: 'johndoe@example.com' });
    expect(savedContact).not.toBeNull();
  });
});
