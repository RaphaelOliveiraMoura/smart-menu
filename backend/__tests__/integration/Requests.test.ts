import request from 'supertest';

import app from '../../src/app';

describe('Requests', () => {
  it('should made a request item from a specif table', async () => {
    const tableId = 1;
    const itemId = 1;

    const response = await request(app)
      .post('/requests')
      .set('table_id', String(tableId))
      .send({ itemId, observations: 'Adicionar dobro de cebola' });

    expect(response.status).toEqual(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        item: expect.any(Object),
        observations: expect.any(String),
      }),
    );
  });
});
