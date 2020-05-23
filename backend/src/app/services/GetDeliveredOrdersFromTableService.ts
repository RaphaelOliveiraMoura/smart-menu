import { inject, injectable } from 'tsyringe';

import IOrderModel, { OrderStatus } from '@interfaces/models/IOrderModel';
import IOrderRepository from '@interfaces/repositories/IOrderRepository';

@injectable()
export default class GetDeliveredOrdersFromTableService {
  constructor(
    @inject('OrderRepository')
    private orderRepository: IOrderRepository,
  ) {}

  async execute(tableId: number): Promise<IOrderModel[]> {
    return this.orderRepository.findByTable(tableId, {
      status: OrderStatus.DELIVERED,
    });
  }
}
