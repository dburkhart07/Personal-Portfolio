const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../index');
const Experience = require('../models/Experience');

describe('Experience Routes', () => {
  beforeAll(async () => {
    const dbURI = process.env.MONGO_URI_TEST || 'mongodb://localhost:27017/test';
    await mongoose.connect(dbURI);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  afterEach(async () => {
    await Experience.deleteMany(); // Clean up test data
  });

  it('GET /api/experience › should fetch all experiences', async () => {
    const experience = new Experience({
      company: 'Tech Corp',
      duration: '2 years',
      responsibilities: ['Developed APIs', 'Managed team'],
    });
    await experience.save();

    const response = await request(app).get('/api/experience');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toMatchObject({
      company: 'Tech Corp',
      duration: '2 years',
      responsibilities: ['Developed APIs', 'Managed team'],
    });
  });

  it('POST /api/experience › should save a new experience', async () => {
    const experienceData = {
      company: 'Tech Corp',
      duration: '2 years',
      responsibilities: ['Developed APIs', 'Managed team'],
    };

    const response = await request(app).post('/api/experience').send(experienceData);

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(experienceData);

    const savedExperience = await Experience.findOne({ company: 'Tech Corp' });
    expect(savedExperience).not.toBeNull();
  });
});
