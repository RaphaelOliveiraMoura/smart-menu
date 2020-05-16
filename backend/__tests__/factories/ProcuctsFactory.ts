import faker from 'faker';
import { getRepository, InsertResult } from 'typeorm';

import Product from '@models/Product';

class ProductsFactory {
  public generate(number = 1, attributes = {}): Promise<InsertResult> {
    const products = Array(number)
      .fill(0)
      .map(() => ({
        id: faker.random.number(),
        title: faker.commerce.productName(),
        description: faker.lorem.words(5),
        image_url: faker.image.imageUrl(),
        price: faker.random.number(),
        oldPrice: faker.random.number(),
        ...attributes,
      }));

    return getRepository(Product)
      .createQueryBuilder()
      .insert()
      .values([...products])
      .onConflict(`("id") DO NOTHING`)
      .execute();
  }
}

export default new ProductsFactory();
