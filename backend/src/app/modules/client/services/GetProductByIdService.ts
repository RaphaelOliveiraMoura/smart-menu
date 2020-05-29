import { injectable, inject } from 'tsyringe';

import IProductRepository from '@modules/client/repositories/IProductRepository';
import IProductModel from '@shared/models/IProductModel';
import HttpError from '@shared/utils/HttpError';

@injectable()
export default class GetProductByIdService {
  constructor(
    @inject('@client/ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  async execute(tableId: number): Promise<IProductModel> {
    const product = await this.productRepository.findById(tableId);

    if (!product) {
      throw new HttpError('Invalid product').withStatus(400);
    }

    return product;
  }
}
