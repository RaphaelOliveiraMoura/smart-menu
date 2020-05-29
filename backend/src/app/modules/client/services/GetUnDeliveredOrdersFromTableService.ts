import { injectable, inject } from 'tsyringe';

import IOrderRepository from '@modules/client/repositories/IOrderRepository';
import IOrderModel from '@shared/models/IOrderModel';

@injectable()
export default class GetUnDeliveredOrdersFromTableService {
  constructor(
    @inject('@client/OrderRepository')
    private orderRepository: IOrderRepository,
  ) {}

  async execute(tableId: number): Promise<IOrderModel[]> {
    return this.orderRepository.findUndeliveredFromTable(tableId);
  }
}
