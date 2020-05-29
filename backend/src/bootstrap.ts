import { config as configDotenv } from 'dotenv';
import path from 'path';

const dotenvFilename = process.env.NODE_ENV === 'test' ? '.env.test' : '.env';
configDotenv({ path: path.resolve(__dirname, '..', dotenvFilename) });
