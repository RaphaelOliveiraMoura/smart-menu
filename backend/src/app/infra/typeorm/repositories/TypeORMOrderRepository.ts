import { getRepository, In } from 'typeorm';

import TypeORMOrderModel from '@infra/typeorm/models/TypeORMOrderModel';
import IOrderDAO from '@interfaces/dao/IOrderDAO';
import { OrderStatus } from '@interfaces/models/IOrderModel';
import IOrderRepository from '@interfaces/repositories/IOrderRepository';
import HttpErrors from '@utils/HttpErrors';

export default class TypeORMOrderRepository implements IOrderRepository {
  async findById(id: number): Promise<TypeORMOrderModel | undefined> {
    return getRepository(TypeORMOrderModel).findOne(id, {
      relations: ['rating'],
    });
  }

  async findByStatus(status: OrderStatus): Promise<TypeORMOrderModel[]> {
    return getRepository(TypeORMOrderModel).find({
      where: { status },
      order: { createdAt: 'DESC' },
      relations: ['product', 'table'],
    });
  }

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

  async updateStatus({
    id,
    status,
  }: {
    id: number;
    status: OrderStatus;
  }): Promise<TypeORMOrderModel> {
    const order = await getRepository(TypeORMOrderModel).findOne(id);

    if (!order) {
      throw new HttpErrors('Invalid order')[400]();
    }

    order.status = status;

    if (status === OrderStatus.DELIVERED) order.deliveredAt = new Date();
    if (status === OrderStatus.DONE) order.doneAt = new Date();

    await getRepository(TypeORMOrderModel).save(order);

    return order;
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

  async create(orderDAO: IOrderDAO): Promise<TypeORMOrderModel> {
    const order = getRepository(TypeORMOrderModel).create(orderDAO);

    await getRepository(TypeORMOrderModel).save(order);

    return order;
  }
}
