import 'reflect-metadata';
import { container } from 'tsyringe';

import TypeORMCategoryRepository from '@infra/typeorm/repositories/TypeORMCategoryRepository';
import TypeORMOrderRepository from '@infra/typeorm/repositories/TypeORMOrderRepository';
import TypeORMProductRepository from '@infra/typeorm/repositories/TypeORMProductRepository';
import TypeORMRatingRepository from '@infra/typeorm/repositories/TypeORMRatingRepository';
import ICategoryRepository from '@interfaces/repositories/ICategoryRepository';
import IOrderRepository from '@interfaces/repositories/IOrderRepository';
import IProductRepository from '@interfaces/repositories/IProductRepository';
import IRatingRepository from '@interfaces/repositories/IRatingRepository';

container.registerSingleton<ICategoryRepository>(
  'CategoryRepository',
  TypeORMCategoryRepository,
);

container.registerSingleton<IOrderRepository>(
  'OrderRepository',
  TypeORMOrderRepository,
);

container.registerSingleton<IProductRepository>(
  'ProductRepository',
  TypeORMProductRepository,
);

container.registerSingleton<IRatingRepository>(
  'RatingRepository',
  TypeORMRatingRepository,
);
