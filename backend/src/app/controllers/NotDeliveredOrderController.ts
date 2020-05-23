import { Request, Response } from 'express';

import GetUnDeliveredOrdersFromTableService from '@services/GetUnDeliveredOrdersFromTableService';

class NotDeliveredOrderController {
  async index(request: Request, response: Response): Promise<Response> {
    const { id_table } = request.headers;

    const orders = await GetUnDeliveredOrdersFromTableService.execute(
      Number(id_table),
    );

    return response.json(orders);
  }
}

export default NotDeliveredOrderController;
