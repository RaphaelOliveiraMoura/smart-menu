import { getRepository } from 'typeorm';

import IOrderDTO from '@shared/dtos/IOrderDTO';
import TypeORMOrderModel from '@shared/infra/typeorm/models/TypeORMOrderModel';
import { OrderStatus } from '@shared/models/IOrderModel';
import IOrderRepository from '@shared/repositories/IOrderRepository';
import HttpError from '@shared/utils/HttpError';

export default class TypeORMOrderRepository implements IOrderRepository {
  async findById(id: number): Promise<TypeORMOrderModel | undefined> {
    return getRepository(TypeORMOrderModel).findOne(id, {
      relations: ['rating'],
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
      throw new HttpError('Invalid order').withStatus(400);
    }

    order.status = status;

    if (status === OrderStatus.DELIVERED) order.deliveredAt = new Date();
    if (status === OrderStatus.DONE) order.doneAt = new Date();

    await getRepository(TypeORMOrderModel).save(order);

    return order;
  }

  async create(orderDTO: IOrderDTO): Promise<TypeORMOrderModel> {
    const order = getRepository(TypeORMOrderModel).create(orderDTO);

    await getRepository(TypeORMOrderModel).save(order);

    return order;
  }
}
