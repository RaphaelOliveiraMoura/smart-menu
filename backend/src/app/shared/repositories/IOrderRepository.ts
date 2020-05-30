import IOrderDTO from '@shared/dtos/IOrderDTO';
import IOrderModel, { OrderStatus } from '@shared/models/IOrderModel';

interface IFindByTableWhereClause {
  status?: OrderStatus;
}

export default interface IOrderRepository {
  findById(id: number): Promise<IOrderModel | undefined>;

  updateStatus({
    id,
    status,
  }: {
    id: number;
    status: OrderStatus;
  }): Promise<IOrderModel>;

  create(order: IOrderDTO): Promise<IOrderModel>;
}
