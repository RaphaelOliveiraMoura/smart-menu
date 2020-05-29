import { getRepository, IsNull, In, Not } from 'typeorm';

import TypeORMProductModel from '@shared/infra/typeorm/models/TypeORMProductModel';
import IProductRepository from '@shared/repositories/IProductRepository';

export default class TypeORMProductRepository implements IProductRepository {
  async findById(id: number): Promise<TypeORMProductModel | undefined> {
    return getRepository(TypeORMProductModel).findOne(id);
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

    return getRepository(TypeORMProductModel).find({
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

    return getRepository(TypeORMProductModel).find({
      where: { oldPrice: Not(IsNull()), ...filterByCategories },
    });
  }
}
