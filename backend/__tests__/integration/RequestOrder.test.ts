import request from 'supertest';

import { OrderStatus } from '@interfaces/models/IOrderModel';
import app from '@root/app';

import OrderFactory from '../factories/OrderFactory';
import ProcuctsFactory from '../factories/ProcuctsFactory';
import TablesFactory from '../factories/TablesFactory';
import truncate from '../truncate';

describe('RequestOrder', () => {
  beforeEach(() => truncate());

  it('should be able get all in progress orders from a table', async () => {
    await OrderFactory.generate(10, {}, { id_table: 1 });
    await OrderFactory.generate(5, {}, { id_table: 2 });

    const response = await request(app.express)
      .get('/orders')
      .set('id_table', String(2));

    expect(response.status).toEqual(200);

    expect(response.body.length).toEqual(5);
  });

  it('should be able create a new order', async () => {
    await TablesFactory.generate(1, { id: 5 });
    await ProcuctsFactory.generate(1, { id: 15 });

    const order = {
      idProduct: 15,
      ammount: 1,
      observations: 'random-observation',
    };

    const response = await request(app.express)
      .post('/orders')
      .set('id_table', String(5))
      .send(order);

    expect(response.status).toEqual(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        status: OrderStatus.IN_PROGRESS,
        ammount: order.ammount,
      }),
    );
  });
});
