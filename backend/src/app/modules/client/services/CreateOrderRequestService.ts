import { injectable, inject } from 'tsyringe';

import WebSocketService from '@lib/WebSocket';
import IOrderRepository from '@modules/client/repositories/IOrderRepository';
import IOrderDTO from '@shared/dtos/IOrderDTO';
import IOrderModel from '@shared/models/IOrderModel';

@injectable()
export default class CreateOrderRequestService {
  constructor(
    @inject('@client/OrderRepository')
    private orderRepository: IOrderRepository,
  ) {}

  async execute(orderDTO: IOrderDTO): Promise<IOrderModel> {
    const order = await this.orderRepository.create(orderDTO);

    WebSocketService.emit('NEW_ORDER');

    return order;
  }
}
