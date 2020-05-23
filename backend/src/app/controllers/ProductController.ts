import { Request, Response } from 'express';
import { container } from 'tsyringe';

import GetProductByIdService from '@services/GetProductByIdService';

const getProductById = container.resolve(GetProductByIdService);

class ProductController {
  async show(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const product = await getProductById.execute(Number(id));

      return response.json(product);
    } catch ({ message = 'Internal Server Error', status = 500 }) {
      return response.status(status).json({ error: message });
    }
  }
}

export default ProductController;
