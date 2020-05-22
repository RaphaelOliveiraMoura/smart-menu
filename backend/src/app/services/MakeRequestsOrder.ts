import TypeORMOrderRepository from '@infra/typeorm/repositories/TypeORMOrderRepository';
import IOrderDAO from '@interfaces/dao/IOrderDAO';
import IOrderModel from '@interfaces/models/IOrderModel';
import IOrderRespository from '@interfaces/repositories/IOrderRespository';
import WebSocketService from '@services/WebSocket';

class MakeRequestsOder {
  private orderRepository: IOrderRespository;

  async execute(orderDAO: IOrderDAO): Promise<IOrderModel> {
    this.orderRepository = new TypeORMOrderRepository();

    const order = await this.orderRepository.create(orderDAO);

    WebSocketService.emit('NEW_ORDER');

    return order;
  }
}

export default new MakeRequestsOder();
