import IRatingDTO from '@shared/dtos/IRatingDTO';
import IRating from '@shared/models/IRating';
import SharedRatingRepository from '@shared/repositories/IRatingRepository';

export default interface IProductRepository extends SharedRatingRepository {
  findByOrderId(orderId: number): Promise<IRating | undefined>;
  create(rating: IRatingDTO): Promise<IRating>;
  update(id: number, updatedRating: IRating): Promise<IRating | undefined>;
}
