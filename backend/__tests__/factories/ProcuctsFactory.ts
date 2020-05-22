import faker from 'faker';
import { getRepository, InsertResult } from 'typeorm';

import TypeORMProductModel from '@infra/typeorm/models/TypeORMProductModel';

import CategoryFactory from './CategoryFactory';

interface IRelationalAttributes {
  id_category?: number;
}

class ProductsFactory {
  public async generate(
    number = 1,
    attributes = {},
    relationalAttributes: IRelationalAttributes = {
      id_category: 1,
    },
  ): Promise<InsertResult> {
    await CategoryFactory.generate(1, { id: relationalAttributes.id_category });

    const products = Array(number)
      .fill(0)
      .map(() => ({
        id: faker.random.number(),
        category: { id: relationalAttributes.id_category },
        title: faker.commerce.productName(),
        description: faker.lorem.words(5),
        image_url: faker.image.imageUrl(),
        price: faker.random.number(),
        oldPrice: faker.random.number(),
        ...attributes,
      }));

    return getRepository(TypeORMProductModel)
      .createQueryBuilder()
      .insert()
      .values([...products])
      .onConflict(`("id") DO NOTHING`)
      .execute();
  }
}

export default new ProductsFactory();
