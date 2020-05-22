import { Request, Response } from 'express';

import GetDeliveredOrdersFromTable from '@services/GetDeliveredOrdersFromTable';
import UpdateOrderStatusToDelivered from '@services/UpdateOrderStatusToDelivered';

class DeliveredOrderController {
  static async show(request: Request, response: Response): Promise<Response> {
    const { id_table } = request.headers;

    const orders = await GetDeliveredOrdersFromTable.execute(Number(id_table));

    return response.json(orders);
  }

  static async store(request: Request, response: Response): Promise<Response> {
    try {
      const { idOrder } = request.body;

      const order = await UpdateOrderStatusToDelivered.execute(idOrder);

      return response.json(order);
    } catch ({ message = 'Internal Server Error', status = 500 }) {
      return response.status(status).json({ error: message });
    }
  }
}

export default DeliveredOrderController;
