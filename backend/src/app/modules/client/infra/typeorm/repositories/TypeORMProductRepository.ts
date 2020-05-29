import IProductRepository from '@modules/client/repositories/IProductRepository';
import SharedTypeORMProductRepository from '@shared/infra/typeorm/repositories/TypeORMProductRepository';

export default class TypeORMProductRepository
  extends SharedTypeORMProductRepository
  implements IProductRepository {}
