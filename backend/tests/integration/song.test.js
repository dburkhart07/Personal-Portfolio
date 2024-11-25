const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../../index');
const Song = require('../../models/Song');

describe('Song Routes', () => {
  beforeAll(async () => {
    const dbURI = process.env.MONGO_URI_TEST;
    await mongoose.connect(dbURI);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  afterEach(async () => {
    await Song.deleteMany(); // Clean up test data
  });

  it('GET /api/songs › should fetch all songs', async () => {
    const song = new Song({ embedUrl: 'https://example.com', delay: 1.5 });
    await song.save();

    const response = await request(app).get('/api/songs');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toMatchObject({ embedUrl: 'https://example.com', delay: 1.5 });
  });

  it('POST /api/songs › should save a new song', async () => {
    const songData = { embedUrl: 'https://example.com', delay: 1.5 };

    const response = await request(app).post('/api/songs').send(songData);

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(songData);

    const savedSong = await Song.findOne({ embedUrl: 'https://example.com' });
    expect(savedSong).not.toBeNull();
  });

  it('POST /api/songs › should return validation error for missing fields', async () => {
    const songData = { delay: 1.5 }; // Missing embedUrl

    const response = await request(app).post('/api/songs').send(songData);

    expect(response.status).toBe(400);
    expect(response.body.message).toMatch(/validation failed/i);
  });
});
