import { injectable, inject } from 'tsyringe';

import IProductRepository from '@modules/client/repositories/IProductRepository';
import IProductModel from '@shared/models/IProductModel';

interface IProductsOverview {
  recommended: IProductModel[];
  promotions: IProductModel[];
}

@injectable()
export default class GetGroupedProductsOverviewService {
  constructor(
    @inject('@client/ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  async execute(categories: number[] | null): Promise<IProductsOverview> {
    const recommended = await this.productRepository.findFilteredByCategories(
      categories,
    );

    const promotions = await this.productRepository.findPromotionsFilteredByCategories(
      categories,
    );

    return {
      recommended,
      promotions,
    };
  }
}
