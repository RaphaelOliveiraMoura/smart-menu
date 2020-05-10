import { Request, Response } from 'express';

import requests, { Request as ItemRequest } from '../mocks/requests';

class RequestController {
  static async show(request: Request, response: Response): Promise<Response> {
    const tableId = request.headers.table_id;

    if (!tableId) {
      return response.status(400).json({ error: 'Table id is required' });
    }

    const itemsRequest = requests.finished[1];

    return response.json(itemsRequest);
  }

  static async store(request: Request, response: Response): Promise<Response> {
    const tableId = request.headers.table_id;
    const { requestId } = request.body;

    if (!tableId) {
      return response.status(400).json({ error: 'Table id is required' });
    }

    const itemRequest = requests.inProgress[1].find(
      ({ id }) => id === requestId,
    );

    requests.finished[1].push(itemRequest as ItemRequest);

    requests.inProgress[1] = requests.inProgress[1].filter(
      ({ id }) => id !== requestId,
    );

    return response.json(itemRequest);
  }
}

export default RequestController;
