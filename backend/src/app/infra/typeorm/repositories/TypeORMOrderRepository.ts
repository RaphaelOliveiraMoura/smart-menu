import { Repository, getRepository, In } from 'typeorm';

import TypeORMOrderModel from '@infra/typeorm/models/TypeORMOrderModel';
import IOrderDAO from '@interfaces/dao/IOrderDAO';
import { OrderStatus } from '@interfaces/models/IOrderModel';
import IOrderRespository from '@interfaces/repositories/IOrderRespository';
import HttpErrors from '@utils/HttpErrors';

export default class TypeORMOrderRepository implements IOrderRespository {
  private orderRepository: Repository<TypeORMOrderModel>;

  constructor() {
    this.orderRepository = getRepository(TypeORMOrderModel);
  }

  async findByStatus(status: OrderStatus): Promise<TypeORMOrderModel[]> {
    return this.orderRepository.find({
      where: { status },
      order: { createdAt: 'DESC' },
      relations: ['product', 'table'],
    });
  }

  async findByTable(
    tableId: number,
    { status }: { status?: OrderStatus },
  ): Promise<TypeORMOrderModel[]> {
    return this.orderRepository.find({
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
    const order = await this.orderRepository.findOne(id);

    if (!order) {
      throw new HttpErrors('Invalid order')[400]();
    }

    order.status = status;

    if (status === OrderStatus.DELIVERED) order.deliveredAt = new Date();
    if (status === OrderStatus.DONE) order.doneAt = new Date();

    await this.orderRepository.save(order);

    return order;
  }

  async findUndeliveredFromTable(
    tableId: number,
  ): Promise<TypeORMOrderModel[]> {
    const orders = await this.orderRepository.find({
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
    const order = this.orderRepository.create(orderDAO);

    await this.orderRepository.save(order);

    return order;
  }
}
