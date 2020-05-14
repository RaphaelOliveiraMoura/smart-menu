import '@config/Env';

import cors from 'cors';
import express, { Express, json } from 'express';

import routes from './routes';

import '@database/index';

class Application {
  public app: Express;

  constructor() {
    this.app = express();

    this.middlewares();
    this.routes();
  }

  middlewares(): void {
    this.app.use(json());
    this.app.use(cors());
  }

  routes(): void {
    this.app.use(routes);
  }
}

export default new Application().app;
