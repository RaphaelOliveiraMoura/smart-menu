import ICategoryModel from '@interfaces/models/ICategoryModel';

export default interface ICategoryRepository {
  find(): Promise<ICategoryModel[]>;
}
