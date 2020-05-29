import faker from 'faker';
import { getRepository, InsertResult } from 'typeorm';

import TypeORMRatingModel from '@shared/infra/typeorm/models/TypeORMRatingModel';

class RatingFactory {
  public generate(number = 1, attributes = {}): Promise<InsertResult> {
    const ratings = Array(number)
      .fill(0)
      .map(() => ({
        id: faker.random.number(),
        stars: faker.random.number(),
        ...attributes,
      }));

    return getRepository(TypeORMRatingModel)
      .createQueryBuilder()
      .insert()
      .values([...ratings])
      .onConflict(`("id") DO NOTHING`)
      .execute();
  }
}

export default new RatingFactory();
