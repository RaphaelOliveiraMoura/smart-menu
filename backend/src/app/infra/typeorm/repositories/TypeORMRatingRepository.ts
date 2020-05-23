import { getRepository } from 'typeorm';

import TypeORMRatingModel from '@infra/typeorm/models/TypeORMRatingModel';
import IRatingDAO from '@interfaces/dao/IRatingDAO';
import IRatingRepository from '@interfaces/repositories/IRatingRepository';

export default class TypeORMRatingRepository implements IRatingRepository {
  async findByOrderId(
    orderId: number,
  ): Promise<TypeORMRatingModel | undefined> {
    const rating = await getRepository(TypeORMRatingModel).findOne({
      where: { order: { id: orderId } },
    });

    return rating;
  }

  async create(rating: IRatingDAO): Promise<TypeORMRatingModel> {
    const createdRating = getRepository(TypeORMRatingModel).create(rating);

    await getRepository(TypeORMRatingModel).save(createdRating);

    return createdRating;
  }

  async update(
    id: number,
    updatedRating: TypeORMRatingModel,
  ): Promise<TypeORMRatingModel | undefined> {
    const { affected } = await getRepository(TypeORMRatingModel).update(
      id,
      updatedRating,
    );

    return getRepository(TypeORMRatingModel).findOne(affected);
  }
}
