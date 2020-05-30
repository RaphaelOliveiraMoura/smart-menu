import { getRepository } from 'typeorm';

import TypeORMProductModel from '@shared/infra/typeorm/models/TypeORMProductModel';
import IProductRepository from '@shared/repositories/IProductRepository';

export default class TypeORMProductRepository implements IProductRepository {
  async findById(id: number): Promise<TypeORMProductModel | undefined> {
    return getRepository(TypeORMProductModel).findOne(id);
  }
}
