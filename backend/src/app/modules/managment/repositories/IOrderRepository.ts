import IOrderModel, { OrderStatus } from '@shared/models/IOrderModel';
import SharedOrderRepository from '@shared/repositories/IOrderRepository';

export default interface IOrderRepository extends SharedOrderRepository {
  findAllByStatus(status: OrderStatus): Promise<IOrderModel[]>;

  updateStatus({
    id,
    status,
  }: {
    id: number;
    status: OrderStatus;
  }): Promise<IOrderModel>;
}
