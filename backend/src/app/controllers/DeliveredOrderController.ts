import { Request, Response } from 'express';

import GetDeliveredOrdersFromTableService from '@services/GetDeliveredOrdersFromTableService';
import UpdateOrderStatusToDeliveredService from '@services/UpdateOrderStatusToDeliveredService';

class DeliveredOrderController {
  async show(request: Request, response: Response): Promise<Response> {
    const { id_table } = request.headers;

    const orders = await GetDeliveredOrdersFromTableService.execute(
      Number(id_table),
    );

    return response.json(orders);
  }

  async store(request: Request, response: Response): Promise<Response> {
    try {
      const { idOrder } = request.body;

      const order = await UpdateOrderStatusToDeliveredService.execute(idOrder);

      return response.json(order);
    } catch ({ message = 'Internal Server Error', status = 500 }) {
      return response.status(status).json({ error: message });
    }
  }
}

export default DeliveredOrderController;
