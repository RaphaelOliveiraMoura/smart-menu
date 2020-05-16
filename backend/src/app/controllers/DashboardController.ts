import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Order, { OrderStatus } from '@models/Order';

class DashboardController {
  static async index(_request: Request, response: Response): Promise<Response> {
    const orderRepository = getRepository(Order);

    const inProgress = await orderRepository.find({
      where: { status: OrderStatus.IN_PROGRESS },
      relations: ['product', 'table'],
    });

    const finished = await orderRepository.find({
      where: { status: OrderStatus.DONE },
      relations: ['product', 'table'],
    });

    const delivered = await orderRepository.find({
      where: { status: OrderStatus.DELIVERED },
      relations: ['product', 'table'],
    });

    const dashboard = {
      inProgress,
      finished,
      delivered,
    };

    return response.json(dashboard);
  }
}

export default DashboardController;
