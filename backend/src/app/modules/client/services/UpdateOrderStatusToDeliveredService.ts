import { injectable, inject } from 'tsyringe';

import IOrderRepository from '@modules/client/repositories/IOrderRepository';
import IOrderModel, { OrderStatus } from '@shared/models/IOrderModel';
import IWebSocket from '@shared/services/IWebSocket';

@injectable()
export default class UpdateOrderStatusToDeliveredService {
  constructor(
    @inject('@client/OrderRepository')
    private orderRepository: IOrderRepository,

    @inject('@shared/WebSocket')
    private webSocketService: IWebSocket,
  ) {}

  async execute(orderId: number): Promise<IOrderModel> {
    const updatedOrder = this.orderRepository.updateStatus({
      id: orderId,
      status: OrderStatus.DELIVERED,
    });

    this.webSocketService.emit('DELIVERY_ORDER');

    return updatedOrder;
  }
}
