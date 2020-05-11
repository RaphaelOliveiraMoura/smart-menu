import { Request, Response } from 'express';

import { getRepository } from 'typeorm';

import Order, { OrderStatus } from '@models/Order';

class DashboardController {
  static async index(_request: Request, response: Response): Promise<Response> {
    const inProgress = await getRepository(Order).find({
      where: { status: OrderStatus.IN_PROGRESS },
      relations: ['product', 'table'],
    });

    const finished = await getRepository(Order).find({
      where: { status: OrderStatus.DONE },
      relations: ['product', 'table'],
    });

    const dashboard = {
      inProgress,
      finished,
    };

    return response.json(dashboard);
  }
}

export default DashboardController;
