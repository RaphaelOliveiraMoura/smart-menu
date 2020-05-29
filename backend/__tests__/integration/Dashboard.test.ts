import request from 'supertest';

import app from '@root/app';
import { OrderStatus } from '@shared/models/IOrderModel';

import OrderFactory from '../factories/OrderFactory';
import ProductsFactory from '../factories/ProcuctsFactory';
import TablesFactory from '../factories/TablesFactory';
import truncate from '../truncate';

describe('Dashboard', () => {
  beforeEach(() => truncate());

  it('should return a list of in progress and finished products from all tables', async () => {
    const productsInProgressAmmount = 10;
    const productsFinishedAmmount = 5;
    const productsDeliveredAmmount = 5;

    await TablesFactory.generate(1, { id: 1 });
    await TablesFactory.generate(1, { id: 2 });

    await ProductsFactory.generate(1, { id: 1 });

    await OrderFactory.generate(productsInProgressAmmount, {
      status: OrderStatus.IN_PROGRESS,
      table: { id: 1 },
      product: { ìd: 1 },
    });

    await OrderFactory.generate(productsFinishedAmmount, {
      status: OrderStatus.DONE,
      table: { id: 2 },
      product: { ìd: 1 },
    });

    await OrderFactory.generate(productsDeliveredAmmount, {
      status: OrderStatus.DELIVERED,
      table: { id: 2 },
      product: { ìd: 1 },
    });

    const response = await request(app.express).get('/dashboard');

    expect(response.status).toEqual(200);

    expect(response.body.inProgress.length).toEqual(productsInProgressAmmount);
    expect(response.body.finished.length).toEqual(productsFinishedAmmount);
    expect(response.body.delivered.length).toEqual(productsDeliveredAmmount);
  });
});
