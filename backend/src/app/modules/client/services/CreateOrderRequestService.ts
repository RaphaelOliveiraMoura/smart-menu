import { injectable, inject } from 'tsyringe';

import IOrderRepository from '@modules/client/repositories/IOrderRepository';
import IOrderDTO from '@shared/dtos/IOrderDTO';
import IOrderModel from '@shared/models/IOrderModel';
import IWebSocket from '@shared/services/IWebSocket';

@injectable()
export default class CreateOrderRequestService {
  constructor(
    @inject('@client/OrderRepository')
    private orderRepository: IOrderRepository,

    @inject('@shared/WebSocket')
    private webSocketService: IWebSocket,
  ) {}

  async execute(orderDTO: IOrderDTO): Promise<IOrderModel> {
    const order = await this.orderRepository.create(orderDTO);

    this.webSocketService.emit('NEW_ORDER');

    return order;
  }
}
