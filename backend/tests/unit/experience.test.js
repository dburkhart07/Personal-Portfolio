const mongoose = require('mongoose');
const Experience = require('../../models/Experience');

jest.setTimeout(10000); // Increase timeout to 10 seconds

describe('Experience Model', () => {
  beforeAll(async () => {
    const dbURI = process.env.MONGO_URI_TEST || 'mongodb://localhost:27017/test';
    await mongoose.connect(dbURI);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  afterEach(async () => {
    try {
      await Experience.deleteMany(); // Clean up test data
    } catch (error) {
      console.error('Error during cleanup:', error);
    }
  });
  

  it('should save an experience with valid fields', async () => {
    const experience = new Experience({
      company: 'Tech Corp',
      duration: '2 years',
      responsibilities: ['Developed APIs', 'Managed team'],
    });

    const savedExperience = await experience.save();
    expect(savedExperience).toHaveProperty('_id');
    expect(savedExperience.company).toBe('Tech Corp');
    expect(savedExperience.responsibilities).toContain('Developed APIs');
  });

  it('should throw validation error for missing fields', async () => {
    const experience = new Experience({ company: 'Tech Corp' });

    await expect(experience.save()).rejects.toThrowError(/validation failed/);
  });
});
