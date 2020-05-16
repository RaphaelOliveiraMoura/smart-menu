import faker from 'faker';
import { getRepository, InsertResult } from 'typeorm';

import Rating from '@models/Rating';

class RatingFactory {
  public generate(number = 1, attributes = {}): Promise<InsertResult> {
    const ratings = Array(number)
      .fill(0)
      .map(() => ({
        id: faker.random.number(),
        stars: faker.random.number(),
        ...attributes,
      }));

    return getRepository(Rating)
      .createQueryBuilder()
      .insert()
      .values([...ratings])
      .onConflict(`("id") DO NOTHING`)
      .execute();
  }
}

export default new RatingFactory();
