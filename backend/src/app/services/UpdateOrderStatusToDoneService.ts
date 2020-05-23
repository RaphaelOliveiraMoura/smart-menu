import { injectable, inject } from 'tsyringe';

import IOrderModel, { OrderStatus } from '@interfaces/models/IOrderModel';
import IOrderRepository from '@interfaces/repositories/IOrderRepository';

@injectable()
export default class UpdateOrderStatusToDoneService {
  constructor(
    @inject('OrderRepository')
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
