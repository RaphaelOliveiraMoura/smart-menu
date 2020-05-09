import request from 'supertest';

import app from '../../src/app';

describe('Dashboard', () => {
  it('should get recommendation items list from dashboard route', async () => {
    const response = await request(app).get('/dashboard');

    expect(response.status).toEqual(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        recommendations: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            image_url: expect.any(String),
            title: expect.any(String),
            description: expect.any(String),
            price: expect.any(Number),
          }),
        ]),
      }),
    );
  });

  it('should get promotion items list from dashboard route', async () => {
    const response = await request(app).get('/dashboard');

    expect(response.status).toEqual(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        promotions: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            image_url: expect.any(String),
            title: expect.any(String),
            description: expect.any(String),
            price: expect.any(Number),
          }),
        ]),
      }),
    );
  });
});
