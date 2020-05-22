import IProductModel from '@interfaces/models/IProductModel';
import ITableModel from '@interfaces/models/ITableModel';

export enum OrderStatus {
  IN_PROGRESS = 'in_progress',
  DONE = 'done',
  DELIVERED = 'delivered',
}

export default interface IOrderModel {
  table?: ITableModel;
  product?: IProductModel;
  observations?: string;
  status?: OrderStatus;
  createdAt?: Date;
  updatedAt?: Date;
  doneAt?: Date;
  devliveredAt?: Date;
}
