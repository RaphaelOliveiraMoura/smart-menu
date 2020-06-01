import ITableRepository from '@modules/client/repositories/ITableRepository';
import SharedTypeORMTableRepository from '@shared/infra/typeorm/repositories/TypeORMTableRepository';

export default class TypeORMTableRepository extends SharedTypeORMTableRepository
  implements ITableRepository {}
