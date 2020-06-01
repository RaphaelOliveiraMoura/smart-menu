import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateOrderRequestService from '@modules/client/services/CreateOrderRequestService';

const createOrderRequest = container.resolve(CreateOrderRequestService);

class RequestOrderController {
  async store(request: Request, response: Response): Promise<Response> {
    const { id_table } = request.clientSessionPayload;

    const { idProduct, ammount, observations } = request.body;

    const order = await createOrderRequest.execute({
      table: { id: Number(id_table) },
      product: { id: idProduct },
      ammount,
      observations,
    });

    return response.json(order);
  }
}

export default RequestOrderController;
