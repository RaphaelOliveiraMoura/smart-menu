import { Request, Response } from 'express';

import GetProductById from '@services/GetProductById';

class ProductController {
  static async show(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const product = await GetProductById.execute(Number(id));

      return response.json(product);
    } catch ({ message = 'Internal Server Error', status = 500 }) {
      return response.status(status).json({ error: message });
    }
  }
}

export default ProductController;
