import request from 'supertest';

import { OrderStatus } from '@models/Order';
import app from '@root/app';

import OrderFactory from '../factories/OrderFactory';
import truncate from '../truncate';

describe('FinishedOrder', () => {
  beforeEach(() => truncate());

  it('should be able change order status to finished/done', async () => {
    await OrderFactory.generate(1, {
      id: 1,
      status: OrderStatus.IN_PROGRESS,
      table: { id: 1 },
      product: { ìd: 1 },
    });

    const response = await request(app.express)
      .post('/orders/finished')
      .send({ idOrder: 1 });

    expect(response.status).toEqual(200);

    expect(response.body.status).toEqual(OrderStatus.DONE);
  });

  it('should get error when try update a invalid order', async () => {
    const response = await request(app.express)
      .post('/orders/finished')
      .send({ idOrder: 'invalid' });

    expect(response.status).toEqual(400);
  });
});
