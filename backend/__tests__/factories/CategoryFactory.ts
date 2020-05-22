import faker from 'faker';
import { getRepository, InsertResult } from 'typeorm';

import Category from '@models/Category';

class CategoryFactory {
  public generate(number = 1, attributes = {}): Promise<InsertResult> {
    const categories = Array(number)
      .fill(0)
      .map(() => ({
        id: faker.random.number(),
        title: faker.commerce.product(),
        ...attributes,
      }));

    return getRepository(Category)
      .createQueryBuilder()
      .insert()
      .values([...categories])
      .onConflict(`("id") DO NOTHING`)
      .execute();
  }
}

export default new CategoryFactory();
