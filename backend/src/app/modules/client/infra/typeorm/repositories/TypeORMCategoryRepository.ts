import { EntityRepository } from 'typeorm';

import ICategoryRepository from '@modules/client/repositories/ICategoryRepository';
import TypeORMCategoryModel from '@shared/infra/typeorm/models/TypeORMCategoryModel';
import SharedTypeORMCategoryRepository from '@shared/infra/typeorm/repositories/TypeORMCategoryRepository';

@EntityRepository(TypeORMCategoryModel)
export default class TypeORMCategoryRepository
  extends SharedTypeORMCategoryRepository
  implements ICategoryRepository {}
