import request from 'supertest';

import app from '@root/app';

import CategoryFactory from '../factories/CategoryFactory';
import truncate from '../truncate';

describe('Category', () => {
  beforeEach(() => truncate());

  it('should return a list of product categories', async () => {
    const categoriesAmmount = 5;

    await CategoryFactory.generate(categoriesAmmount);

    const response = await request(app.express).get('/categories');

    expect(response.status).toEqual(200);

    expect(response.body.length).toEqual(categoriesAmmount);
  });
});
