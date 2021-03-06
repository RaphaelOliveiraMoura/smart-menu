import IOrderDTO from '@shared/dtos/IOrderDTO';
import IOrderModel, { OrderStatus } from '@shared/models/IOrderModel';
import SharedOrderRepository from '@shared/repositories/IOrderRepository';

interface IFindByTableWhereClause {
  status?: OrderStatus;
}

export default interface IOrderRepository extends SharedOrderRepository {
  findById(id: number): Promise<IOrderModel | undefined>;

  findByTable(
    tableId: number,
    whereClause: IFindByTableWhereClause,
  ): Promise<IOrderModel[]>;

  findUndeliveredFromTable(tableId: number): Promise<IOrderModel[]>;

  updateStatus({
    id,
    status,
  }: {
    id: number;
    status: OrderStatus;
  }): Promise<IOrderModel | undefined>;

  create(order: IOrderDTO): Promise<IOrderModel>;
}
