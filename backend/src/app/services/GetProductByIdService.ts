import { injectable, inject } from 'tsyringe';

import IProductModel from '@interfaces/models/IProductModel';
import IProductRepository from '@interfaces/repositories/IProductRepository';
import HttpErrors from '@utils/HttpErrors';

@injectable()
export default class GetProductByIdService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  async execute(tableId: number): Promise<IProductModel> {
    const product = await this.productRepository.findById(tableId);

    if (!product) {
      throw new HttpErrors('Invalid product')[400]();
    }

    return product;
  }
}
