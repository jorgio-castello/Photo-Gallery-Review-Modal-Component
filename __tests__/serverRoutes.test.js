const request = require('supertest');
const app = require('../server');

describe('GET Gallery Data', () => {
  test('should retrieve photo JSON for an activity between 1 - 100', async () => {
    const activityId = Math.floor(Math.random() * 100);
    const res = await request(app)
      .get(`http://127.0.0.1:9999/tripAdvisor/${activityId}/gallery`);
    expect(res.statusCode).toEqual(200);
  });
});
