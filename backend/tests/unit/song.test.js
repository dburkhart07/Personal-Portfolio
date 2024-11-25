const mongoose = require('mongoose');
const Song = require('../../models/Song');

describe('Song Model', () => {
  beforeAll(async () => {
    const dbURI = process.env.MONGO_URI_TEST || 'mongodb://localhost:27017/test';
    await mongoose.connect(dbURI);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  afterEach(async () => {
    await Song.deleteMany(); // Clean up test data
  });

  it('should save a song with valid fields', async () => {
    const song = new Song({ embedUrl: 'https://mockurl.com', delay: 1.5 });
    const savedSong = await song.save();

    expect(savedSong).toHaveProperty('_id');
    expect(savedSong.embedUrl).toBe('https://mockurl.com');
    expect(savedSong.delay).toBe(1.5);
  });

  it('should throw validation error for missing embedUrl', async () => {
    const song = new Song({ delay: 1.5 });

    await expect(song.save()).rejects.toThrowError(/validation failed/);
  });
});
