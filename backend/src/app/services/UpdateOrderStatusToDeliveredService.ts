import TypeORMOrderRepository from '@infra/typeorm/repositories/TypeORMOrderRepository';
import IOrderModel, { OrderStatus } from '@interfaces/models/IOrderModel';
import IOrderRespository from '@interfaces/repositories/IOrderRespository';
import WebSocketService from '@services/WebSocket';

class UpdateOrderStatusToDeliveredService {
  private orderRepository: IOrderRespository;

  async execute(orderId: number): Promise<IOrderModel> {
    this.orderRepository = new TypeORMOrderRepository();

    const updatedOrder = this.orderRepository.updateStatus({
      id: orderId,
      status: OrderStatus.DELIVERED,
    });

    WebSocketService.emit('DELIVERY_ORDER');

    return updatedOrder;
  }
}

export default new UpdateOrderStatusToDeliveredService();
