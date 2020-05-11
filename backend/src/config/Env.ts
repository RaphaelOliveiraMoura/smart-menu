import { DatabaseType } from 'typeorm';

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

export default {
  database: {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
} as Environment;
