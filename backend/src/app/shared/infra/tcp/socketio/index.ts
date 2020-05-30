import { Server } from 'http';
import socketIo, { Server as WebSocketServer } from 'socket.io';

import IWebSocket from '@shared/services/IWebSocket';

class WebSocketService implements IWebSocket {
  public io: WebSocketServer;

  private connections: string[] = [];

  initialize(server: Server): void {
    this.io = socketIo(server);

    this.io.on('connection', (socket) => {
      this.connections.push(socket.id);
    });
  }

  emit(event: string, payload?: object): void {
    this.connections.forEach((socketId) => {
      this.io.to(socketId).emit(event, payload);
    });
  }
}

export default WebSocketService;
