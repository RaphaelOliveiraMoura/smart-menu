import IProductModel from '@shared/models/IProductModel';
import SharedProductRepository from '@shared/repositories/IProductRepository';

export default interface IProductRepository extends SharedProductRepository {
  findById(id: number): Promise<IProductModel | undefined>;

  findFilteredByCategories(
    categories: number[] | null,
  ): Promise<IProductModel[]>;

  findPromotionsFilteredByCategories(
    categories: number[] | null,
  ): Promise<IProductModel[]>;
}
