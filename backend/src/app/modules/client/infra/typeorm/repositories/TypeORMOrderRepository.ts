import { getRepository, In } from 'typeorm';

import IOrderRepository from '@modules/client/repositories/IOrderRepository';
import TypeORMOrderModel from '@shared/infra/typeorm/models/TypeORMOrderModel';
import SharedTypeORMOrderRepository from '@shared/infra/typeorm/repositories/TypeORMOrderRepository';
import { OrderStatus } from '@shared/models/IOrderModel';

export default class TypeORMOrderRepository extends SharedTypeORMOrderRepository
  implements IOrderRepository {
  async findByTable(
    tableId: number,
    { status }: { status?: OrderStatus },
  ): Promise<TypeORMOrderModel[]> {
    return getRepository(TypeORMOrderModel).find({
      where: { table: { id: tableId }, status },
      order: { updatedAt: 'DESC' },
      relations: ['product', 'rating'],
    });
  }

  async findUndeliveredFromTable(
    tableId: number,
  ): Promise<TypeORMOrderModel[]> {
    const orders = await getRepository(TypeORMOrderModel).find({
      where: {
        status: In([OrderStatus.IN_PROGRESS, OrderStatus.DONE]),
        table: { id: tableId },
      },
      order: { updatedAt: 'DESC' },
      relations: ['product'],
    });

    return orders;
  }
}
