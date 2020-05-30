import { Server } from 'http';

export default interface IWebSocket {
  initialize(server: Server): void;
  emit(key: string): void;
}
