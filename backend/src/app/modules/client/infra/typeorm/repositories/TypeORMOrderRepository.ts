import IOrderRepository from '@modules/client/repositories/IOrderRepository';
import SharedTypeORMOrderRepository from '@shared/infra/typeorm/repositories/TypeORMOrderRepository';

export default class TypeORMOrderRepository extends SharedTypeORMOrderRepository
  implements IOrderRepository {}
