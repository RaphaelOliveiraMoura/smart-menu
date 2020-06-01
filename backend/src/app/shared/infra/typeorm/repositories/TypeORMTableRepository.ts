import { EntityRepository, getRepository } from 'typeorm';

import TypeORMTableModel from '@shared/infra/typeorm/models/TypeORMTableModel';
import ITableRepository from '@shared/repositories/ITableRepository';

@EntityRepository(TypeORMTableModel)
export default class TypeORMTableRepository implements ITableRepository {
  async findById(tableId: number): Promise<TypeORMTableModel | undefined> {
    return getRepository(TypeORMTableModel).findOne(tableId);
  }
}
