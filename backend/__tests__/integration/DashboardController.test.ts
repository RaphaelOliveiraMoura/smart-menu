import request from 'supertest';

import { getRepository } from 'typeorm';

import Order, { OrderStatus } from '../../src/app/models/Order';
import Table from '../../src/app/models/Table';
import Product from '../../src/app/models/Product';

import connection from '../../src/database/index';

import app from '../../src/app';

describe('DashboardController', () => {
  const inProgressProduct = {
    id: 1,
    title: 'product1',
    description: 'descritpion-product1',
    image_url: 'image-product1',
    price: 10,
  };

  const finishedProduct = {
    id: 2,
    title: 'product2',
    description: 'descritpion-product2',
    image_url: 'image-product2',
    price: 20,
  };

  const table = {
    id: 1,
  };

  beforeAll(async () => {
    const database = await connection;
    await database.synchronize(true);

    await getRepository(Table).insert({ ...table });
    await getRepository(Product).insert([
      { ...inProgressProduct },
      { ...finishedProduct },
    ]);
  });

  it('should get a list of inProgress and finished products', async () => {
    await getRepository(Order).insert([
      {
        table: { id: table.id },
        product: { id: inProgressProduct.id },
        observations: '',
      },
      {
        table: { id: table.id },
        product: { id: finishedProduct.id },
        observations: '',
        status: OrderStatus.DONE,
      },
    ]);

    const response = await request(app).get('/dashboard');

    expect(response.status).toEqual(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        inProgress: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            ammount: expect.any(Number),
            observations: expect.any(String),
            status: OrderStatus.IN_PROGRESS,
            product: expect.objectContaining({ ...inProgressProduct }),
            table: expect.objectContaining({ ...table }),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
          }),
        ]),
        finished: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            ammount: expect.any(Number),
            observations: expect.any(String),
            status: OrderStatus.DONE,
            product: expect.objectContaining({ ...finishedProduct }),
            table: expect.objectContaining({ ...table }),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
          }),
        ]),
      }),
    );
  });
});
