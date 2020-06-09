import { differenceInMinutes } from 'date-fns';
import { injectable, inject } from 'tsyringe';

import IOrderRepository from '@modules/managment/repositories/IOrderRepository';
import IOrderModel, { OrderStatus } from '@shared/models/IOrderModel';

interface IDashboardOrdersInf {
  inProgress: IOrderModel[];
  finished: IOrderModel[];
  delivered: IOrderModel[];
}

const OUTSIDE_ORDER_TIME_IN_MINUTES = 30;

@injectable()
export default class GetGroupedOrdersByTypeService {
  constructor(
    @inject('@managment/OrderRepository')
    private orderRepository: IOrderRepository,
  ) {}

  async execute(): Promise<IDashboardOrdersInf> {
    const inProgress = await this.orderRepository.findAllByStatus(
      OrderStatus.IN_PROGRESS,
    );

    const finished = await this.orderRepository.findAllByStatus(
      OrderStatus.DONE,
    );

    const delivered = await this.orderRepository.findAllByStatus(
      OrderStatus.DELIVERED,
    );

    const finishedAfterOutsideDate = finished.filter((order) => {
      return (
        differenceInMinutes(order.doneAt as Date, new Date()) >
        OUTSIDE_ORDER_TIME_IN_MINUTES
      );
    });

    const finishedBeforeOutsideDate = finished.filter((order) => {
      return (
        differenceInMinutes(order.doneAt as Date, new Date()) <
        OUTSIDE_ORDER_TIME_IN_MINUTES
      );
    });

    return {
      inProgress,
      finished: finishedBeforeOutsideDate,
      delivered: [...delivered, ...finishedAfterOutsideDate],
    };
  }
}
