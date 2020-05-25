import { Request, Response } from 'express';
import { container } from 'tsyringe';

import GetDeliveredOrdersFromTableService from '@services/GetDeliveredOrdersFromTableService';
import UpdateOrderStatusToDeliveredService from '@services/UpdateOrderStatusToDeliveredService';

const getDeliveredOrdersFromTable = container.resolve(
  GetDeliveredOrdersFromTableService,
);

const updateOrdersStatusToDelivered = container.resolve(
  UpdateOrderStatusToDeliveredService,
);

class DeliveredOrderController {
  async show(request: Request, response: Response): Promise<Response> {
    const { id_table } = request.headers;

    const orders = await getDeliveredOrdersFromTable.execute(Number(id_table));

    return response.json(orders);
  }

  async store(request: Request, response: Response): Promise<Response> {
    const { idOrder } = request.body;

    const order = await updateOrdersStatusToDelivered.execute(idOrder);

    return response.json(order);
  }
}

export default DeliveredOrderController;
