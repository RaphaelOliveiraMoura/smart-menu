import TypeORMProductRepository from '@infra/typeorm/repositories/TypeORMProductRepository';
import IProductModel from '@interfaces/models/IProductModel';
import IProductRepository from '@interfaces/repositories/IProductRepository';
import HttpErrors from '@utils/HttpErrors';

class GetProductByIdService {
  private productRepository: IProductRepository;

  async execute(tableId: number): Promise<IProductModel> {
    this.productRepository = new TypeORMProductRepository();

    const product = await this.productRepository.findById(tableId);

    if (!product) {
      throw new HttpErrors('Invalid product')[400]();
    }

    return product;
  }
}

export default new GetProductByIdService();
