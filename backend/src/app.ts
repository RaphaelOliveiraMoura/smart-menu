import '@config/Env';

import cors from 'cors';
import express, { Express, json } from 'express';
import { Connection } from 'typeorm';

import createConenction from '@database/index';

import routes from './routes';

class Application {
  public express: Express;

  public connection: Connection;

  constructor() {
    this.express = express();
  }

  async initialize(): Promise<void> {
    this.connection = await createConenction();

    this.middlewares();
    this.routes();
  }

  middlewares(): void {
    this.express.use(json());
    this.express.use(cors());
  }

  routes(): void {
    this.express.use(routes);
  }
}

export default new Application();
