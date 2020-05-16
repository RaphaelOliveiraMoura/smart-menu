import request from 'supertest';

import { OrderStatus } from '@models/Order';
import app from '@root/app';

import OrderFactory from '../factories/OrderFactory';
import ProductsFactory from '../factories/ProcuctsFactory';
import TablesFactory from '../factories/TablesFactory';
import truncate from '../truncate';

describe('FinishedOrder', () => {
  beforeEach(() => truncate());

  it('should return a list of finished orders from a table', async () => {
    const productsFinishedAmmount = 5;

    await TablesFactory.generate(1, { id: 1 });

    await ProductsFactory.generate(1, { id: 1 });

    await OrderFactory.generate(productsFinishedAmmount, {
      status: OrderStatus.DONE,
      table: { id: 1 },
      product: { ìd: 1 },
    });

    const response = await request(app.express)
      .get('/orders/finished')
      .set('id_table', String(1));

    expect(response.status).toEqual(200);

    expect(response.body.length).toEqual(productsFinishedAmmount);
  });

  it('should not return products from different tables', async () => {
    const productsFinishedAmmount = 5;

    await TablesFactory.generate(1, { id: 1 });

    await ProductsFactory.generate(1, { id: 1 });

    await OrderFactory.generate(productsFinishedAmmount, {
      status: OrderStatus.DONE,
      table: { id: 1 },
      product: { ìd: 1 },
    });

    const response = await request(app.express)
      .get('/orders/finished')
      .set('id_table', String(2));

    expect(response.status).toEqual(200);

    expect(response.body.length).toEqual(0);
  });

  it('should be able change product status to finished/done', async () => {
    await TablesFactory.generate(1, { id: 1 });

    await ProductsFactory.generate(1, { id: 1 });

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
