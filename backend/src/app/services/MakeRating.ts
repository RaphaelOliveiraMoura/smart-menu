import TypeORMRatingRepository from '@infra/typeorm/repositories/TypeORMRatingRepository';
import IRatingDAO from '@interfaces/dao/IRatingDAO';
import IOrderModel from '@interfaces/models/IOrderModel';
import IRatingRepository from '@interfaces/repositories/IRatingRepository';
import HttpErrors from '@utils/HttpErrors';

class MakeRating {
  private ratingRepository: IRatingRepository;

  async execute(ratingDAO: IRatingDAO): Promise<IOrderModel> {
    this.ratingRepository = new TypeORMRatingRepository();

    const rating = await this.ratingRepository.updateOrCreate(ratingDAO);

    if (!rating) {
      throw new HttpErrors('Invalid order')[400]();
    }

    return rating;
  }
}

export default new MakeRating();
