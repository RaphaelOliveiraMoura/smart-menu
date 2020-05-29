import IRatingDTO from '@shared/dtos/IRatingDTO';
import IRating from '@shared/models/IRating';

export default interface IRatingRepository {
  findByOrderId(orderId: number): Promise<IRating | undefined>;
  create(rating: IRatingDTO): Promise<IRating>;
  update(id: number, updatedRating: IRating): Promise<IRating | undefined>;
}
