import path from 'path';
import { createConnection, Connection } from 'typeorm';

import Env from '@config/Env';
import IDatabase from '@database/interfaces/IDatabase';

const rootPath = path.resolve(__dirname, '..', '..');
const entitiesPath = path.join(rootPath, 'app/infra/typeorm/models/*.{ts,js}');

export default class TypeORM implements IDatabase {
  connect(): Promise<Connection> {
    return createConnection({
      ...Env.database,
      entities: [entitiesPath],
      synchronize: process.env.NODE_ENV !== 'production',
    });
  }
}
