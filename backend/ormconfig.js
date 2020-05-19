require('dotenv');

module.exports = [
  {
    name: 'seed',
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    migrations: ['src/database/seeds/*.ts'],
    entities: ['src/app/models/*.ts'],
    cli: {
      migrationsDir: 'src/database/seeds',
    },
  },
];
