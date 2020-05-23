import IRatingDAO from '@interfaces/dao/IRatingDAO';
import IRatingProduct from '@interfaces/models/IRatingProduct';

export default interface IProductRepository {
  findByOrderId(orderId: number): Promise<IRatingProduct | undefined>;
  create(rating: IRatingDAO): Promise<IRatingProduct>;
  update(
    id: number,
    updatedRating: IRatingProduct,
  ): Promise<IRatingProduct | undefined>;
}
