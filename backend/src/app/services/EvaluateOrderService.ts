import { injectable, inject } from 'tsyringe';

import IRatingDAO from '@interfaces/dao/IRatingDAO';
import IRatingProduct from '@interfaces/models/IRatingProduct';
import IOrderRepository from '@interfaces/repositories/IOrderRepository';
import IRatingRepository from '@interfaces/repositories/IRatingRepository';
import HttpErrors from '@utils/HttpErrors';

@injectable()
export default class EvaluateOrderService {
  constructor(
    @inject('RatingRepository')
    private ratingRepository: IRatingRepository,

    @inject('OrderRepository')
    private orderRepository: IOrderRepository,
  ) {}

  async execute(ratingDAO: IRatingDAO): Promise<IRatingProduct> {
    const orderExists = await this.orderRepository.findById(ratingDAO.order.id);

    if (!orderExists) {
      throw new HttpErrors('Invalid order')[400]();
    }

    const orderAlreadyHasRating = await this.ratingRepository.findByOrderId(
      ratingDAO.order.id,
    );

    if (orderAlreadyHasRating && orderAlreadyHasRating.id) {
      const updatedRating = await this.ratingRepository.update(
        orderAlreadyHasRating.id,
        { stars: ratingDAO.stars },
      );

      return updatedRating as IRatingProduct;
    }

    const createdRating = await this.ratingRepository.create(ratingDAO);

    return createdRating;
  }
}
