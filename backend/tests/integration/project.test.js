const Project = require('../models/Project');

describe('Project Routes', () => {
  beforeAll(async () => {
    const dbURI = process.env.MONGO_URI_TEST || 'mongodb://localhost:27017/test';
    await mongoose.connect(dbURI);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  afterEach(async () => {
    await Project.deleteMany(); // Clean up test data
  });

  it('GET /api/projects › should fetch all projects', async () => {
    const project = new Project({
      title: 'Sample Project',
      techStack: ['Node.js', 'React'],
      duration: '3 months',
      description: 'Test Description',
    });
    await project.save();

    const response = await request(app).get('/api/projects');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toMatchObject({
      title: 'Sample Project',
      techStack: ['Node.js', 'React'],
    });
  });
});
