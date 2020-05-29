import '@root/bootstrap';
import '@app/container';

import cors from 'cors';
import express, { Express, json } from 'express';
import 'express-async-errors';
import { Server, createServer } from 'http';

import database from '@database/index';
import IDatabaseConnection from '@database/interfaces/IDatabaseConnection';
import WebSocketService from '@lib/WebSocket';
import routes from '@root/routes';
import handleErrors from '@shared/infra/http/middlewares/handleErrors';

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

    this.webSocket();
    this.http();
  }

  http(): void {
    this.express.use(json());
    this.express.use(cors());
    this.express.use(routes);
    this.express.use(handleErrors);
  }

  webSocket(): void {
    WebSocketService.initialize(this.server);
  }
}

export default new Application();
