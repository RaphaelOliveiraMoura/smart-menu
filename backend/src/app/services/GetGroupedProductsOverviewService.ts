import TypeORMProductRepository from '@infra/typeorm/repositories/TypeORMProductRepository';
import IProductModel from '@interfaces/models/IProductModel';
import IProductRepository from '@interfaces/repositories/IProductRepository';

interface IProductsOverview {
  recommended: IProductModel[];
  promotions: IProductModel[];
}

class GetGroupedProductsOverviewService {
  private productRepository: IProductRepository;

  async execute(categories: number[] | null): Promise<IProductsOverview> {
    this.productRepository = new TypeORMProductRepository();

    const recommended = await this.productRepository.findWithCategories(
      categories,
    );

    const promotions = await this.productRepository.findPromotionsWithCategories(
      categories,
    );

    return {
      recommended,
      promotions,
    };
  }
}

export default new GetGroupedProductsOverviewService();
