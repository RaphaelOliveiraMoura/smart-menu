import { getRepository } from 'typeorm';

import IOrderRepository from '@modules/managment/repositories/IOrderRepository';
import TypeORMOrderModel from '@shared/infra/typeorm/models/TypeORMOrderModel';
import SharedTypeORMOrderRepository from '@shared/infra/typeorm/repositories/TypeORMOrderRepository';
import { OrderStatus } from '@shared/models/IOrderModel';

export default class TypeORMOrderRepository extends SharedTypeORMOrderRepository
  implements IOrderRepository {
  async findAllByStatus(status: OrderStatus): Promise<TypeORMOrderModel[]> {
    return getRepository(TypeORMOrderModel).find({
      where: { status },
      order: { createdAt: 'DESC' },
      relations: ['product', 'table'],
    });
  }
}
