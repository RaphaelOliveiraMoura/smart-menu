import { injectable, inject } from 'tsyringe';

import IOrderDAO from '@interfaces/dao/IOrderDAO';
import IOrderModel from '@interfaces/models/IOrderModel';
import IOrderRepository from '@interfaces/repositories/IOrderRepository';
import WebSocketService from '@services/WebSocket';

@injectable()
export default class CreateOrderRequestService {
  constructor(
    @inject('OrderRepository')
    private orderRepository: IOrderRepository,
  ) {}

  async execute(orderDAO: IOrderDAO): Promise<IOrderModel> {
    const order = await this.orderRepository.create(orderDAO);

    WebSocketService.emit('NEW_ORDER');

    return order;
  }
}
