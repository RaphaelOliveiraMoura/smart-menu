import { Request, Response } from 'express';

import MakeRequestsOrder from '@services/MakeRequestsOrder';

class RequestOrderController {
  static async store(request: Request, response: Response): Promise<Response> {
    const { id_table } = request.headers;

    const { idProduct, ammount, observations } = request.body;

    const order = await MakeRequestsOrder.execute({
      table: { id: Number(id_table) },
      product: { id: idProduct },
      ammount,
      observations,
    });

    return response.json(order);
  }
}

export default RequestOrderController;
