import { getRepository } from 'typeorm';

import IRatingRepository from '@modules/client/repositories/IRatingRepository';
import IRatingDTO from '@shared/dtos/IRatingDTO';
import TypeORMRatingModel from '@shared/infra/typeorm/models/TypeORMRatingModel';

export default class TypeORMRatingRepository implements IRatingRepository {
  async findByOrderId(
    orderId: number,
  ): Promise<TypeORMRatingModel | undefined> {
    const rating = await getRepository(TypeORMRatingModel).findOne({
      where: { order: { id: orderId } },
    });

    return rating;
  }

  async create(rating: IRatingDTO): Promise<TypeORMRatingModel> {
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
