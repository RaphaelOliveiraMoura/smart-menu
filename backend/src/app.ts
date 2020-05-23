import '@config/Env';
import '@app/container';

import cors from 'cors';
import express, { Express, json } from 'express';
import { Server, createServer } from 'http';

import database from '@database/index';
import IDatabaseConnection from '@database/interfaces/IDatabaseConnection';
import WebSocketService from '@services/WebSocket';

import routes from './routes';

class Application {
  public express: Express;

  public connection: IDatabaseConnection;

  public server: Server;

  constructor() {
    this.express = express();
    this.server = createServer(this.express);
  }

  async initialize(): Promise<void> {
    this.connection = await database.connect();

    this.middlewares();
    this.routes();
    this.webSocket();
  }

  webSocket(): void {
    WebSocketService.initialize(this.server);
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
