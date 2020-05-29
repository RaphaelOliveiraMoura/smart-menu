import faker from 'faker';
import { getRepository, InsertResult } from 'typeorm';

import TypeORMOrderModel from '@shared/infra/typeorm/models/TypeORMOrderModel';
import { OrderStatus } from '@shared/models/IOrderModel';

import ProcuctsFactory from './ProcuctsFactory';
import TablesFactory from './TablesFactory';

interface IRelationalAttributes {
  id_table?: number;
  id_product?: number;
}

class ProductsFactory {
  public async generate(
    number = 1,
    attributes = {},
    relationalAttributes: IRelationalAttributes = {
      id_table: 1,
      id_product: 1,
    },
  ): Promise<InsertResult> {
    await TablesFactory.generate(1, { id: relationalAttributes.id_table });
    await ProcuctsFactory.generate(1, { id: relationalAttributes.id_product });

    const orders = Array(number)
      .fill(0)
      .map(() => ({
        id: faker.random.number(),
        table: { id: relationalAttributes.id_table },
        product: { id: relationalAttributes.id_product },
        observations: faker.lorem.words(5),
        status: OrderStatus.IN_PROGRESS,
        ...attributes,
      }));

    return getRepository(TypeORMOrderModel)
      .createQueryBuilder()
      .insert()
      .values([...orders])
      .onConflict(`("id") DO NOTHING`)
      .execute();
  }
}

export default new ProductsFactory();
