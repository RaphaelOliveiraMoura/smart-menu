import { inject, injectable } from 'tsyringe';

import IOrderRepository from '@modules/client/repositories/IOrderRepository';
import IOrderModel, { OrderStatus } from '@shared/models/IOrderModel';

@injectable()
export default class GetDeliveredOrdersFromTableService {
  constructor(
    @inject('@client/OrderRepository')
    private orderRepository: IOrderRepository,
  ) {}

  async execute(tableId: number): Promise<IOrderModel[]> {
    return this.orderRepository.findByTable(tableId, {
      status: OrderStatus.DELIVERED,
    });
  }
}
