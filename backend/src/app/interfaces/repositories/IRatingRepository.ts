import IRatingDAO from '@interfaces/dao/IRatingDAO';
import IRatingProduct from '@interfaces/models/IRatingProduct';

export default interface IProductRepository {
  updateOrCreate(rating: IRatingDAO): Promise<IRatingProduct | undefined>;
}
