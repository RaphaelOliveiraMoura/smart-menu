import IOrderModel from '@shared/models/IOrderModel';

export default interface IRating {
  id: number;
  stars: number;
  order: IOrderModel;
  createdAt: Date;
  updatedAt: Date;
}
