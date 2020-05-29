import IProductModel from '@shared/models/IProductModel';
import ITableModel from '@shared/models/ITableModel';

export enum OrderStatus {
  IN_PROGRESS = 'in_progress',
  DONE = 'done',
  DELIVERED = 'delivered',
}

export default interface IOrderModel {
  id?: number;
  table?: ITableModel;
  product?: IProductModel;
  observations?: string;
  status?: OrderStatus;
  ammount?: number;
  createdAt?: Date;
  updatedAt?: Date;
  doneAt?: Date;
  devliveredAt?: Date;
}
