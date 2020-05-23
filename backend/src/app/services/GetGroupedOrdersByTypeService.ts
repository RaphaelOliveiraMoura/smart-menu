import { injectable, inject } from 'tsyringe';

import IOrderModel, { OrderStatus } from '@interfaces/models/IOrderModel';
import IOrderRepository from '@interfaces/repositories/IOrderRepository';

interface IDashboardOrdersInf {
  inProgress: IOrderModel[];
  finished: IOrderModel[];
  delivered: IOrderModel[];
}

@injectable()
export default class GetGroupedOrdersByTypeService {
  constructor(
    @inject('OrderRepository')
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
