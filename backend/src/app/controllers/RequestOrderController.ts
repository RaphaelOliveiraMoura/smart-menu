import { Request, Response } from 'express';

import CreateOrderRequestService from '@services/CreateOrderRequestService';

class RequestOrderController {
  async store(request: Request, response: Response): Promise<Response> {
    const { id_table } = request.headers;

    const { idProduct, ammount, observations } = request.body;

    const order = await CreateOrderRequestService.execute({
      table: { id: Number(id_table) },
      product: { id: idProduct },
      ammount,
      observations,
    });

    return response.json(order);
  }
}

export default RequestOrderController;
