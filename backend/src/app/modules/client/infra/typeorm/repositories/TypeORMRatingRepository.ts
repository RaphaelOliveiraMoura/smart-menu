import IRatingRepository from '@modules/client/repositories/IRatingRepository';
import SharedTypeORMRatingRepository from '@shared/infra/typeorm/repositories/TypeORMRatingRepository';

export default class TypeORMRatingRepository
  extends SharedTypeORMRatingRepository
  implements IRatingRepository {}
