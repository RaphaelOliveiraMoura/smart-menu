import IOrderModel, { OrderStatus } from '@shared/models/IOrderModel';

export default interface IOrderRepository {
  findByStatus(status: OrderStatus): Promise<IOrderModel[]>;

  updateStatus({
    id,
    status,
  }: {
    id: number;
    status: OrderStatus;
  }): Promise<IOrderModel>;
}
