import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateOrderStatusToDoneService from '@services/UpdateOrderStatusToDoneService';

const updatedOrderStatusToDone = container.resolve(
  UpdateOrderStatusToDoneService,
);

class FinishedOrderController {
  async store(request: Request, response: Response): Promise<Response> {
    const { idOrder } = request.body;

    const order = await updatedOrderStatusToDone.execute(idOrder);

    return response.json(order);
  }
}

export default FinishedOrderController;
