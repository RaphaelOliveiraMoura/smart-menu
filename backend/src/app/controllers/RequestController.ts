import { Request, Response } from 'express';

import requests, { Request as ItemRequest } from '../mocks/requests';
import items, { Item } from '../mocks/items';

class RequestController {
  static async show(request: Request, response: Response): Promise<Response> {
    const tableId = request.headers.table_id;

    if (!tableId) {
      return response.status(400).json({ error: 'Table id is required' });
    }

    const itemsRequest = requests.inProgress[1];

    return response.json(itemsRequest);
  }

  static async store(request: Request, response: Response): Promise<Response> {
    const tableId = request.headers.table_id;
    const { itemId, observations } = request.body;

    if (!tableId) {
      return response.status(400).json({ error: 'Table id is required' });
    }

    const item = items.find(({ id }) => id === Number(itemId));

    const itemRequest: ItemRequest = {
      id: requests.inProgress[1].length + requests.finished[1].length,
      item: item as Item,
      observations,
    };

    requests.inProgress[1].push(itemRequest);

    return response.json(itemRequest);
  }
}

export default RequestController;
