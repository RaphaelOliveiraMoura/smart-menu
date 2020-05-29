import path from 'path';
import { BaseConnectionOptions } from 'typeorm/connection/BaseConnectionOptions';

const rootPath = path.resolve(__dirname, '..');
const entitiesPath = path.join(
  rootPath,
  'app/shared/infra/typeorm/models/*.{ts,js}',
);

export default {
  typeorm: {
    type: process.env.DB_TYPE || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT || 5432),
    username: process.env.DB_USER || 'docker',
    password: process.env.DB_PASS || 'docker',
    database: process.env.DB_NAME || 'smart_menu',
    entities: [entitiesPath],
    synchronize: process.env.NODE_ENV !== 'production',
  } as BaseConnectionOptions,
};
