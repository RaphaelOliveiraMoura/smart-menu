import { Repository, getRepository } from 'typeorm';

import TypeORMCategoryModel from '@infra/typeorm/models/TypeORMCategoryModel';
import ICategoryRepository from '@interfaces/repositories/ICategoryRepository';

export default class TypeORMCategoryRepository implements ICategoryRepository {
  private categoryRepository: Repository<TypeORMCategoryModel>;

  constructor() {
    this.categoryRepository = getRepository(TypeORMCategoryModel);
  }

  async find(): Promise<TypeORMCategoryModel[]> {
    return this.categoryRepository.find();
  }
}
