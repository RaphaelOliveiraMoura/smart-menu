import TypeORMOrderRepository from '@infra/typeorm/repositories/TypeORMOrderRepository';
import IOrderModel, { OrderStatus } from '@interfaces/models/IOrderModel';
import IOrderRespository from '@interfaces/repositories/IOrderRespository';

interface IDashboardOrdersInf {
  inProgress: IOrderModel[];
  finished: IOrderModel[];
  delivered: IOrderModel[];
}

class GetDashboardOrdersInf {
  private orderRepository: IOrderRespository;

  async execute(): Promise<IDashboardOrdersInf> {
    this.orderRepository = new TypeORMOrderRepository();

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

export default new GetDashboardOrdersInf();
