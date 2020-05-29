import { container } from 'tsyringe';

import TypeORMOrderRepository from '@modules/managment/infra/typeorm/repositories/TypeORMOrderRepository';
import IOrderRepository from '@modules/managment/repositories/IOrderRepository';

container.registerSingleton<IOrderRepository>(
  '@managment/OrderRepository',
  TypeORMOrderRepository,
);
