import IOrderModel from '@interfaces/models/IOrderModel';

export default interface IRatingProduct {
  id?: number;
  stars?: number;
  order?: IOrderModel;
  createdAt?: Date;
  updatedAt?: Date;
}
