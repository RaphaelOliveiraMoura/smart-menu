require('dotenv');

const databaseConfigs = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
};

const productionConfigs =
  process.env.NODE_ENV === 'production'
    ? { ssl: true, extra: { ssl: { rejectUnauthorized: false } } }
    : {};

module.exports = [
  {
    name: 'seed',
    ...databaseConfigs,
    ...productionConfigs,
    migrations: ['src/app/shared/infra/typeorm/database/seeds/*.ts'],
    entities: ['src/app/shared/infra/typeorm/models/*.ts'],
    cli: { migrationsDir: 'src/app/shared/infra/typeorm/database/seeds/' },
  },
  {
    name: 'migrations',
    ...databaseConfigs,
    ...productionConfigs,
    migrations: ['src/app/shared/infra/typeorm/database/migrations/*.ts'],
    entities: ['src/app/shared/infra/typeorm/models/*.ts'],
    cli: { migrationsDir: 'src/app/shared/infra/typeorm/database/migrations/' },
  },
];
