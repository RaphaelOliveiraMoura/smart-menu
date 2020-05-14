import { ConnectionOptions } from 'typeorm';

export type DatabaseType = 'postgres' | 'sqlite';

export function getDatabaseConfigurations(): ConnectionOptions {
  return {
    type: (process.env.DB_TYPE as DatabaseType) || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT || 5432),
    username: process.env.DB_USER || 'docker',
    password: process.env.DB_PASS || 'docker',
    database: process.env.DB_NAME || 'smart_menu',
  };
}
