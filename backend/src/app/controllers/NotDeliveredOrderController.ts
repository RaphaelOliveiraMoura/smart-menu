import { Request, Response } from 'express';
import { container } from 'tsyringe';

import GetUnDeliveredOrdersFromTableService from '@services/GetUnDeliveredOrdersFromTableService';

const getUndeliveredOrdersFromTable = container.resolve(
  GetUnDeliveredOrdersFromTableService,
);

class NotDeliveredOrderController {
  async index(request: Request, response: Response): Promise<Response> {
    const { id_table } = request.headers;

    const orders = await getUndeliveredOrdersFromTable.execute(
      Number(id_table),
    );

    return response.json(orders);
  }
}

export default NotDeliveredOrderController;
