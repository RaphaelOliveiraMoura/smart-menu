import IOrderRepository from '@modules/managment/repositories/IOrderRepository';
import SharedTypeORMOrderRepository from '@shared/infra/typeorm/repositories/TypeORMOrderRepository';

export default class TypeORMOrderRepository extends SharedTypeORMOrderRepository
  implements IOrderRepository {}
