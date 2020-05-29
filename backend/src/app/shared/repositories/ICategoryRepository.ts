import ICategoryModel from '@shared/models/ICategoryModel';

export default interface ICategoryRepository {
  find(): Promise<ICategoryModel[]>;
}
