import { injectable, inject } from 'tsyringe';

import IOrderRepository from '@modules/managment/repositories/IOrderRepository';
import IOrderModel, { OrderStatus } from '@shared/models/IOrderModel';

interface IDashboardOrdersInf {
  inProgress: IOrderModel[];
  finished: IOrderModel[];
  delivered: IOrderModel[];
}

@injectable()
export default class GetGroupedOrdersByTypeService {
  constructor(
    @inject('@managment/OrderRepository')
    private orderRepository: IOrderRepository,
  ) {}

  async execute(): Promise<IDashboardOrdersInf> {
    const inProgress = await this.orderRepository.findByStatus(
      OrderStatus.IN_PROGRESS,
    );

    const finished = await this.orderRepository.findByStatus(OrderStatus.DONE);

    const delivered = await this.orderRepository.findByStatus(
      OrderStatus.DELIVERED,
    );

    return {
      inProgress,
      finished,
      delivered,
    };
  }
}
