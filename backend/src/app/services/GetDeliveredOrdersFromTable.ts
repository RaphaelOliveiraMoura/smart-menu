import TypeORMOrderRepository from '@infra/typeorm/repositories/TypeORMOrderRepository';
import IOrderModel, { OrderStatus } from '@interfaces/models/IOrderModel';
import IOrderRespository from '@interfaces/repositories/IOrderRespository';

class GetDeliveredOrdersFromTable {
  private orderRepository: IOrderRespository;

  async execute(tableId: number): Promise<IOrderModel[]> {
    this.orderRepository = new TypeORMOrderRepository();

    return this.orderRepository.findByTable(tableId, {
      status: OrderStatus.DELIVERED,
    });
  }
}

export default new GetDeliveredOrdersFromTable();
