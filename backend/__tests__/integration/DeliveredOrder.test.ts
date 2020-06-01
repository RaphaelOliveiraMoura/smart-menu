import request from 'supertest';

import app from '@root/app';
import { OrderStatus } from '@shared/models/IOrderModel';

import OrderFactory from '../factories/OrderFactory';
import truncate from '../truncate';
import WebSocket from './instances/WebSocket';
import { clientAuthentication } from './utils/authenticate';

describe('DeliveredOrder', () => {
  beforeEach(() => truncate());

  it('should return a list of delivred orders from a table', async () => {
    const { token, idTable } = await clientAuthentication();

    const productsFinishedAmmount = 5;

    await OrderFactory.generate(productsFinishedAmmount, {
      status: OrderStatus.DELIVERED,
      table: { id: idTable },
      product: { ìd: 1 },
    });

    const response = await request(app.express)
      .get('/orders/delivery')
      .set('authorization', token);

    expect(response.status).toEqual(200);

    expect(response.body.length).toEqual(productsFinishedAmmount);
  });

  it('should be able change order status to delivered', async () => {
    const { token, idTable } = await clientAuthentication();

    const webSocketSpy = jest.spyOn(WebSocket, 'emit');

    await OrderFactory.generate(1, {
      id: 1,
      status: OrderStatus.IN_PROGRESS,
      table: { id: idTable },
      product: { ìd: 1 },
    });

    const response = await request(app.express)
      .post('/orders/delivery')
      .set('authorization', token)
      .send({ idOrder: 1 });

    expect(response.status).toEqual(200);

    expect(webSocketSpy).toHaveBeenCalledWith('DELIVERY_ORDER');

    expect(response.body.status).toEqual(OrderStatus.DELIVERED);
  });

  it('should get error when try change status from a invalid order', async () => {
    const { token } = await clientAuthentication();

    const response = await request(app.express)
      .post('/orders/delivery')
      .set('authorization', token)
      .send({ idOrder: 'invalid' });

    expect(response.status).toEqual(400);
  });
});
