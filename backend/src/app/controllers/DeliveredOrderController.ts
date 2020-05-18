import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Order, { OrderStatus } from '@models/Order';
import WebSocketSerivce from '@services/WebSocket';

class DeliveredOrderController {
  static async show(request: Request, response: Response): Promise<Response> {
    const { id_table } = request.headers;

    const orders = await getRepository(Order).find({
      where: {
        table: { id: id_table },
        status: OrderStatus.DELIVERED,
      },
      order: { updatedAt: 'DESC' },
      relations: ['product', 'rating'],
    });

    return response.json(orders);
  }

  static async store(request: Request, response: Response): Promise<Response> {
    const { idOrder } = request.body;

    const orderRepository = await getRepository(Order);

    const order = await orderRepository.findOne(idOrder);

    if (!order) {
      return response.status(400).json({ error: 'Invalid order' });
    }

    order.status = OrderStatus.DELIVERED;
    order.deliveredAt = new Date();

    await orderRepository.save(order);

    WebSocketSerivce.emit('DELIVERY_ORDER');

    return response.json(order);
  }
}

export default DeliveredOrderController;
