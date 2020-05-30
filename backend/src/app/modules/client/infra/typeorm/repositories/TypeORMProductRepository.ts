import { getRepository, IsNull, In, Not } from 'typeorm';

import IProductRepository from '@modules/client/repositories/IProductRepository';
import TypeORMProductModel from '@shared/infra/typeorm/models/TypeORMProductModel';
import SharedTypeORMProductRepository from '@shared/infra/typeorm/repositories/TypeORMProductRepository';

export default class TypeORMProductRepository
  extends SharedTypeORMProductRepository
  implements IProductRepository {
  async findFilteredByCategories(
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

  async findPromotionsFilteredByCategories(
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
