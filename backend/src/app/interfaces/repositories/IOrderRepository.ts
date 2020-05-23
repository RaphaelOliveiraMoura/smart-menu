import IOrderDAO from '@interfaces/dao/IOrderDAO';
import IOrderModel, { OrderStatus } from '@interfaces/models/IOrderModel';

interface IFindByTableWhereClause {
  status?: OrderStatus;
}

export default interface IOrderRepository {
  findById(id: number): Promise<IOrderModel | undefined>;

  findByStatus(status: OrderStatus): Promise<IOrderModel[]>;

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
  }): Promise<IOrderModel>;

  create(order: IOrderDAO): Promise<IOrderModel>;
}
