import IProductModel from '@shared/models/IProductModel';

export default interface IProductRepository {
  findById(id: number): Promise<IProductModel | undefined>;
}
