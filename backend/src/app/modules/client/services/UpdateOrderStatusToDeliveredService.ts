import { injectable, inject } from 'tsyringe';

import WebSocketService from '@lib/WebSocket';
import IOrderRepository from '@modules/client/repositories/IOrderRepository';
import IOrderModel, { OrderStatus } from '@shared/models/IOrderModel';

@injectable()
export default class UpdateOrderStatusToDeliveredService {
  constructor(
    @inject('@client/OrderRepository')
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
