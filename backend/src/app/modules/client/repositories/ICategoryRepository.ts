import ICategoryModel from '@shared/models/ICategoryModel';
import SharedCategoryRepository from '@shared/repositories/ICategoryRepository';

export default interface ICategoryRepository extends SharedCategoryRepository {
  find(): Promise<ICategoryModel[]>;
}
