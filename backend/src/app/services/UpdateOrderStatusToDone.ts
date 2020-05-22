import TypeORMOrderRepository from '@infra/typeorm/repositories/TypeORMOrderRepository';
import IOrderModel, { OrderStatus } from '@interfaces/models/IOrderModel';
import IOrderRespository from '@interfaces/repositories/IOrderRespository';

class UpdateOrderStatusToDone {
  private orderRepository: IOrderRespository;

  async execute(orderId: number): Promise<IOrderModel> {
    this.orderRepository = new TypeORMOrderRepository();

    const updatedOrder = this.orderRepository.updateStatus({
      id: orderId,
      status: OrderStatus.DONE,
    });

    return updatedOrder;
  }
}

export default new UpdateOrderStatusToDone();
