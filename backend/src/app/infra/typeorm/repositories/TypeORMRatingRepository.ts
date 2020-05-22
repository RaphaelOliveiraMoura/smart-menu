import { Repository, getRepository } from 'typeorm';

import TypeORMOrderModel from '@infra/typeorm/models/TypeORMOrderModel';
import TypeORMRatingModel from '@infra/typeorm/models/TypeORMRatingModel';
import IRatingDAO from '@interfaces/dao/IRatingDAO';
import IRatingRepository from '@interfaces/repositories/IRatingRepository';

export default class TypeORMRatingRepository implements IRatingRepository {
  private orderRepository: Repository<TypeORMOrderModel>;

  private ratingRepository: Repository<TypeORMRatingModel>;

  constructor() {
    this.orderRepository = getRepository(TypeORMOrderModel);
    this.ratingRepository = getRepository(TypeORMRatingModel);
  }

  async updateOrCreate({
    order,
    stars,
  }: IRatingDAO): Promise<TypeORMRatingModel | undefined> {
    const findOrder = await this.orderRepository.findOne(order.id, {
      relations: ['rating'],
    });

    if (!findOrder) {
      return undefined;
    }

    if (!findOrder.rating) {
      const rating = this.ratingRepository.create({ stars });

      await this.ratingRepository.save(rating);

      findOrder.rating = rating;

      await this.orderRepository.save(order);

      return rating;
    }

    findOrder.rating.stars = stars;

    await this.ratingRepository.update(findOrder.rating.id, { stars });

    return findOrder.rating;
  }
}
