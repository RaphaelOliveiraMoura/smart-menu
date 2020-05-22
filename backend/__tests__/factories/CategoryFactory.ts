import faker from 'faker';
import { getRepository, InsertResult } from 'typeorm';

import TypeORMCategoryModel from '@infra/typeorm/models/TypeORMCategoryModel';

class CategoryFactory {
  public generate(number = 1, attributes = {}): Promise<InsertResult> {
    const categories = Array(number)
      .fill(0)
      .map(() => ({
        id: faker.random.number(),
        title: faker.lorem.words(5),
        ...attributes,
      }));

    return getRepository(TypeORMCategoryModel)
      .createQueryBuilder()
      .insert()
      .values([...categories])
      .onConflict(`("id") DO NOTHING`)
      .execute();
  }
}

export default new CategoryFactory();
