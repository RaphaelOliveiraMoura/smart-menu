import request from 'supertest';

import app from '@root/app';
import { OrderStatus } from '@shared/models/IOrderModel';

import OrderFactory from '../factories/OrderFactory';
import truncate from '../truncate';
import { clientAuthentication } from './utils/authenticate';

describe('FinishedOrder', () => {
  beforeEach(() => truncate());

  it('should be able change order status to finished/done', async () => {
    const { token, idTable } = await clientAuthentication();

    await OrderFactory.generate(1, {
      id: 1,
      status: OrderStatus.IN_PROGRESS,
      table: { id: idTable },
      product: { ìd: 1 },
    });

    const response = await request(app.express)
      .post('/orders/finished')
      .set('authorization', token)
      .send({ idOrder: 1 });

    expect(response.status).toEqual(200);

    expect(response.body.status).toEqual(OrderStatus.DONE);
  });

  it('should get error when try update a invalid order', async () => {
    const { token } = await clientAuthentication();

    const response = await request(app.express)
      .post('/orders/finished')
      .set('authorization', token)
      .send({ idOrder: 'invalid' });

    expect(response.status).toEqual(400);
  });
});
