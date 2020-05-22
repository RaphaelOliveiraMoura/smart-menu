import { Repository, getRepository, IsNull, In, Not } from 'typeorm';

import TypeORMProductModel from '@infra/typeorm/models/TypeORMProductModel';
import IProductRepository from '@interfaces/repositories/IProductRepository';

export default class TypeORMProductRepository implements IProductRepository {
  private productRepository: Repository<TypeORMProductModel>;

  constructor() {
    this.productRepository = getRepository(TypeORMProductModel);
  }

  async findById(id: number): Promise<TypeORMProductModel | undefined> {
    return this.productRepository.findOne(id);
  }

  async findWithCategories(
    categories: number[] | null,
  ): Promise<TypeORMProductModel[]> {
    const filterByCategories: { category?: object } = {};

    if (categories !== null) {
      if (categories.length === 0) {
        filterByCategories.category = { id: IsNull() };
      } else {
        filterByCategories.category = { id: In(categories) };
      }
    }

    return this.productRepository.find({
      where: { ...filterByCategories },
    });
  }

  async findPromotionsWithCategories(
    categories: number[] | null,
  ): Promise<TypeORMProductModel[]> {
    const filterByCategories: { category?: object } = {};

    if (categories !== null) {
      if (categories.length === 0) {
        filterByCategories.category = { id: IsNull() };
      } else {
        filterByCategories.category = { id: In(categories) };
      }
    }

    return this.productRepository.find({
      where: { oldPrice: Not(IsNull()), ...filterByCategories },
    });
  }
}
