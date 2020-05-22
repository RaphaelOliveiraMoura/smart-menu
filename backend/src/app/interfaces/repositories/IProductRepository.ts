import IProductModel from '@interfaces/models/IProductModel';

export default interface IProductRepository {
  findById(id: number): Promise<IProductModel | undefined>;

  findWithCategories(categories: number[] | null): Promise<IProductModel[]>;

  findPromotionsWithCategories(
    categories: number[] | null,
  ): Promise<IProductModel[]>;
}
