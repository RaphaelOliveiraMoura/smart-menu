import { injectable, inject } from 'tsyringe';

import IOrderRepository from '@modules/client/repositories/IOrderRepository';
import IRatingRepository from '@modules/client/repositories/IRatingRepository';
import IRatingDTO from '@shared/dtos/IRatingDTO';
import IRating from '@shared/models/IRating';
import HttpError from '@shared/utils/HttpError';

@injectable()
export default class EvaluateOrderService {
  constructor(
    @inject('@client/RatingRepository')
    private ratingRepository: IRatingRepository,

    @inject('@client/OrderRepository')
    private orderRepository: IOrderRepository,
  ) {}

  async execute(ratingDTO: IRatingDTO): Promise<IRating> {
    if (!ratingDTO.order || !ratingDTO.order.id) {
      throw new HttpError('Order id is required').withStatus(400);
    }

    const orderExists = await this.orderRepository.findById(ratingDTO.order.id);

    if (!orderExists) {
      throw new HttpError('Invalid order').withStatus(400);
    }

    const orderAlreadyHasRating = await this.ratingRepository.findByOrderId(
      ratingDTO.order.id,
    );

    if (orderAlreadyHasRating && orderAlreadyHasRating.id) {
      const updatedRating = await this.ratingRepository.update(
        orderAlreadyHasRating.id,
        { stars: ratingDTO.stars },
      );

      return updatedRating as IRating;
    }

    const createdRating = await this.ratingRepository.create(ratingDTO);

    return createdRating;
  }
}
