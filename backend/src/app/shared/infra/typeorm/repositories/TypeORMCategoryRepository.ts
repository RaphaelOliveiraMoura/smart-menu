import { EntityRepository, getRepository } from 'typeorm';

import TypeORMCategoryModel from '@shared/infra/typeorm/models/TypeORMCategoryModel';
import ICategoryRepository from '@shared/repositories/ICategoryRepository';

@EntityRepository(TypeORMCategoryModel)
export default class TypeORMCategoryRepository implements ICategoryRepository {
  async find(): Promise<TypeORMCategoryModel[]> {
    return getRepository(TypeORMCategoryModel).find();
  }
}
