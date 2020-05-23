import { injectable, inject } from 'tsyringe';

import IProductModel from '@interfaces/models/IProductModel';
import IProductRepository from '@interfaces/repositories/IProductRepository';

interface IProductsOverview {
  recommended: IProductModel[];
  promotions: IProductModel[];
}

@injectable()
export default class GetGroupedProductsOverviewService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  async execute(categories: number[] | null): Promise<IProductsOverview> {
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
