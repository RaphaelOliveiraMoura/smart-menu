import { container } from 'tsyringe';

import TypeORMCategoryRepository from '@modules/client/infra/typeorm/repositories/TypeORMCategoryRepository';
import TypeORMOrderRepository from '@modules/client/infra/typeorm/repositories/TypeORMOrderRepository';
import TypeORMProductRepository from '@modules/client/infra/typeorm/repositories/TypeORMProductRepository';
import TypeORMRatingRepository from '@modules/client/infra/typeorm/repositories/TypeORMRatingRepository';
import TypeORMTableRepository from '@modules/client/infra/typeorm/repositories/TypeORMTableRepository';
import ICategoryRepository from '@modules/client/repositories/ICategoryRepository';
import IOrderRepository from '@modules/client/repositories/IOrderRepository';
import IProductRepository from '@modules/client/repositories/IProductRepository';
import IRatingRepository from '@modules/client/repositories/IRatingRepository';
import ITableRepository from '@modules/client/repositories/ITableRepository';

container.registerSingleton<ICategoryRepository>(
  '@client/CategoryRepository',
  TypeORMCategoryRepository,
);

container.registerSingleton<IOrderRepository>(
  '@client/OrderRepository',
  TypeORMOrderRepository,
);

container.registerSingleton<IProductRepository>(
  '@client/ProductRepository',
  TypeORMProductRepository,
);

container.registerSingleton<IRatingRepository>(
  '@client/RatingRepository',
  TypeORMRatingRepository,
);

container.registerSingleton<ITableRepository>(
  '@client/TableRepository',
  TypeORMTableRepository,
);
