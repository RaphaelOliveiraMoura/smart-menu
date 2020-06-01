import request from 'supertest';

import app from '@root/app';
import { OrderStatus } from '@shared/models/IOrderModel';

import OrderFactory from '../factories/OrderFactory';
import ProcuctsFactory from '../factories/ProcuctsFactory';
import truncate from '../truncate';
import WebSocket from './instances/WebSocket';
import { clientAuthentication } from './utils/authenticate';

describe('RequestOrder', () => {
  beforeEach(() => truncate());

  it('should be able get all in progress orders from a table', async () => {
    const { token, idTable } = await clientAuthentication();

    await OrderFactory.generate(10, {}, { id_table: 1 });
    await OrderFactory.generate(5, {}, { id_table: idTable });

    const response = await request(app.express)
      .get('/orders')
      .set('authorization', token);

    expect(response.status).toEqual(200);

    expect(response.body.length).toEqual(5);
  });

  it('should be able create a new order', async () => {
    const { token } = await clientAuthentication();

    const webSocketSpy = jest.spyOn(WebSocket, 'emit');

    await ProcuctsFactory.generate(1, { id: 15 });

    const order = {
      idProduct: 15,
      ammount: 1,
      observations: 'random-observation',
    };

    const response = await request(app.express)
      .post('/orders')
      .set('authorization', token)
      .send(order);

    expect(response.status).toEqual(200);

    expect(webSocketSpy).toHaveBeenCalledWith('NEW_ORDER');

    expect(response.body).toEqual(
      expect.objectContaining({
        status: OrderStatus.IN_PROGRESS,
        ammount: order.ammount,
      }),
    );
  });
});
