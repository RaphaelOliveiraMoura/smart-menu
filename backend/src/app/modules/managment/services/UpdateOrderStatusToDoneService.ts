import { injectable, inject } from 'tsyringe';

import IOrderRepository from '@modules/managment/repositories/IOrderRepository';
import IOrderModel, { OrderStatus } from '@shared/models/IOrderModel';

@injectable()
export default class UpdateOrderStatusToDoneService {
  constructor(
    @inject('@managment/OrderRepository')
    private orderRepository: IOrderRepository,
  ) {}

  async execute(orderId: number): Promise<IOrderModel> {
    const updatedOrder = this.orderRepository.updateStatus({
      id: orderId,
      status: OrderStatus.DONE,
    });

    return updatedOrder;
  }
}
