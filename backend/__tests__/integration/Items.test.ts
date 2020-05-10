import request from 'supertest';

import app from '../../src/app';

describe('Items', () => {
  it('should get a specific item informations', async () => {
    const itemId = 1;
    const response = await request(app).get(`/items/${itemId}`);

    expect(response.status).toEqual(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        image_url: expect.any(String),
        title: expect.any(String),
        description: expect.any(String),
        price: expect.any(Number),
      }),
    );
  });
});
