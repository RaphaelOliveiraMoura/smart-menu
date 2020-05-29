import { createConnection, Connection, ConnectionOptions } from 'typeorm';

import DatabaseConfig from '@config/Database';
import IDatabase from '@database/interfaces/IDatabase';

export default class TypeORM implements IDatabase {
  connect(): Promise<Connection> {
    return createConnection({
      ...(DatabaseConfig.typeorm as ConnectionOptions),
    });
  }
}
