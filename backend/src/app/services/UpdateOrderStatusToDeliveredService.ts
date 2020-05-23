import { injectable, inject } from 'tsyringe';

import IOrderModel, { OrderStatus } from '@interfaces/models/IOrderModel';
import IOrderRepository from '@interfaces/repositories/IOrderRepository';
import WebSocketService from '@services/WebSocket';

@injectable()
export default class UpdateOrderStatusToDeliveredService {
  constructor(
    @inject('OrderRepository')
    private orderRepository: IOrderRepository,
  ) {}

  async execute(orderId: number): Promise<IOrderModel> {
    const updatedOrder = this.orderRepository.updateStatus({
      id: orderId,
      status: OrderStatus.DELIVERED,
    });

    WebSocketService.emit('DELIVERY_ORDER');

    return updatedOrder;
  }
}
