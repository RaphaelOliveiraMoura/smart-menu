import { Request, Response } from 'express';

import GetUnDeliveredOrdersFromTable from '@services/GetUnDeliveredOrdersFromTable';

class NotDeliveredOrderController {
  static async index(request: Request, response: Response): Promise<Response> {
    const { id_table } = request.headers;

    const orders = await GetUnDeliveredOrdersFromTable.execute(
      Number(id_table),
    );

    return response.json(orders);
  }
}

export default NotDeliveredOrderController;
