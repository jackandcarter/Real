const request = require('supertest');
const app = require('../server');

describe('GET /api/plots', () => {
  it('should return an empty array initially', async () => {
    const res = await request(app).get('/api/plots');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });
});

