import faker from 'faker';
import request from 'supertest';

import app from '@root/app';
import IProductModel from '@shared/models/IProductModel';

import ProductsFactory from '../factories/ProcuctsFactory';
import truncate from '../truncate';

describe('Product', () => {
  beforeEach(() => truncate());

  it('should be get informations about one product', async () => {
    const product: Partial<IProductModel> = {
      title: faker.commerce.productName(),
      description: faker.lorem.words(10),
      image_url: faker.image.imageUrl(),
      price: faker.random.number(),
      oldPrice: faker.random.number(),
    };

    await ProductsFactory.generate(1, { id: 1, ...product });

    const response = await request(app.express).get(`/products/${1}`);

    expect(response.status).toEqual(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        ...product,
      }),
    );
  });
});
