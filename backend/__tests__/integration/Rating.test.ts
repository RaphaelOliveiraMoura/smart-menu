import request from 'supertest';

import app from '@root/app';
import { OrderStatus } from '@root/app/models/Order';

import OrderFactory from '../factories/OrderFactory';
import RatingFactory from '../factories/RatingFactory';
import truncate from '../truncate';

describe('Rating', () => {
  beforeEach(() => truncate());

  it('should be able get orders rating when orders are delivered', async () => {
    await OrderFactory.generate(
      1,
      { status: OrderStatus.DELIVERED },
      { id_table: 1 },
    );

    const response = await request(app.express)
      .get('/orders/delivery')
      .set('id_table', String(1));

    expect(response.status).toEqual(200);

    expect(response.body[0]).toHaveProperty('rating');
  });

  it('should be able create a new rating from a order', async () => {
    await OrderFactory.generate(
      1,
      { id: 5, status: OrderStatus.DONE },
      { id_table: 1 },
    );

    const response = await request(app.express)
      .post(`/orders/${5}/rating`)
      .set('id_table', String(1))
      .send({ stars: 4 });

    expect(response.status).toEqual(200);

    expect(response.body.rating.stars).toEqual(4);
  });

  it('should be able update a rating from a order', async () => {
    await RatingFactory.generate(1, { id: 1, stars: 0 });
    await OrderFactory.generate(
      1,
      { id: 5, status: OrderStatus.DELIVERED, rating: { id: 1 } },
      { id_table: 1 },
    );

    const response = await request(app.express)
      .post(`/orders/${5}/rating`)
      .set('id_table', String(1))
      .send({ stars: 4 });

    expect(response.status).toEqual(200);

    expect(response.body.rating.stars).toEqual(4);
  });

  it('should get error when try rate a invalid order', async () => {
    const response = await request(app.express)
      .post(`/orders/${123}/rating`)
      .set('id_table', String(1))
      .send({ stars: 4 });

    expect(response.status).toEqual(400);
  });
});
