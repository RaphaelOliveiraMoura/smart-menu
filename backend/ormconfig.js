require('dotenv');

const productionConfigs =
  process.env.NODE_ENV === 'production'
    ? { ssl: true, extra: { ssl: { rejectUnauthorized: false } } }
    : {};

module.exports = [
  {
    name: 'seed',
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    ...productionConfigs,
    migrations: ['src/database/seeds/*.ts'],
    entities: ['src/app/infra/typeorm/models/*.ts'],
    cli: {
      migrationsDir: 'src/database/seeds',
    },
  },
];
