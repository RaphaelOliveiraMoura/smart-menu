import { OrderStatus } from '@models/Order';

export default interface IOrderDAO {
  table: { id: number };
  product: { id: number };
  observations: string;
  status: OrderStatus;
}
