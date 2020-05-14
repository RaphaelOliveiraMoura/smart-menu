import path from 'path';
import { createConnection, Connection } from 'typeorm';

import Env from '@config/Env';

export default (): Promise<Connection> =>
  createConnection({
    type: Env.database.type,
    host: Env.database.host,
    port: Env.database.port,
    username: Env.database.username,
    password: Env.database.password,
    database: Env.database.database,
    entities: [path.join(__dirname, '..', 'app/models/*.{ts,js}')],
    synchronize: true,
  });
