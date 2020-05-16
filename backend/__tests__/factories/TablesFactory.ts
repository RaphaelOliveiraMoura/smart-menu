import faker from 'faker';
import { getRepository, InsertResult } from 'typeorm';

import Table from '@models/Table';

class TablesFactory {
  public generate(number = 1, attributes = {}): Promise<InsertResult> {
    const tables = Array(number)
      .fill(0)
      .map(() => ({
        id: faker.random.number(),
        ...attributes,
      }));

    return getRepository(Table)
      .createQueryBuilder()
      .insert()
      .values([...tables])
      .onConflict(`("id") DO NOTHING`)
      .execute();
  }
}

export default new TablesFactory();
