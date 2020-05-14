import { config as configDotenv } from 'dotenv';
import path from 'path';

import { getDatabaseConfigurations, DatabaseType } from './Database';

interface Environment {
  database: {
    type: DatabaseType;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
  };
}

const dotenvFilename = process.env.NODE_ENV === 'test' ? '.env.test' : '.env';
configDotenv({ path: path.resolve(__dirname, '..', '..', dotenvFilename) });

export default {
  database: getDatabaseConfigurations(),
} as Environment;
