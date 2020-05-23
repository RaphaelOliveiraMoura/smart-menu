import TypeORMOrderRepository from '@infra/typeorm/repositories/TypeORMOrderRepository';
import IOrderModel from '@interfaces/models/IOrderModel';
import IOrderRespository from '@interfaces/repositories/IOrderRespository';

class GetUnDeliveredOrdersFromTableService {
  private orderRepository: IOrderRespository;

  async execute(tableId: number): Promise<IOrderModel[]> {
    this.orderRepository = new TypeORMOrderRepository();

    return this.orderRepository.findUndeliveredFromTable(tableId);
  }
}

export default new GetUnDeliveredOrdersFromTableService();
