import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Product from '@models/Product';

class ProductController {
  static async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const product = await getRepository(Product).findOne(id);

    return response.json(product);
  }
}

export default ProductController;
