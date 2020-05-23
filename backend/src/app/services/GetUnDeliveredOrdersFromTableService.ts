import { injectable, inject } from 'tsyringe';

import IOrderModel from '@interfaces/models/IOrderModel';
import IOrderRepository from '@interfaces/repositories/IOrderRepository';

@injectable()
export default class GetUnDeliveredOrdersFromTableService {
  constructor(
    @inject('OrderRepository')
    private orderRepository: IOrderRepository,
  ) {}

  async execute(tableId: number): Promise<IOrderModel[]> {
    return this.orderRepository.findUndeliveredFromTable(tableId);
  }
}
