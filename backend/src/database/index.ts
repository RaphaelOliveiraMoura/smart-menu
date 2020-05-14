import { createConnection } from 'typeorm';

import Env from '@config/Env';

export default createConnection({
  type: Env.database.type,
  host: Env.database.host,
  port: Env.database.port,
  username: Env.database.username,
  password: Env.database.password,
  database: Env.database.database,
  entities: ['src/app/models/*.ts'],
  synchronize: true,
});
