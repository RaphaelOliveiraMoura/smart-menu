import { Request, Response } from 'express';
import { container } from 'tsyringe';

import GetGroupedProductsOverviewService from '@services/GetGroupedProductsOverviewService';

const getGroupedProductsOverview = container.resolve(
  GetGroupedProductsOverviewService,
);

class ProductsOverviewController {
  async index(request: Request, response: Response): Promise<Response> {
    const { categories } = request.query;

    const categoriesFilter = categories ? JSON.parse(String(categories)) : null;

    const productsOverview = await getGroupedProductsOverview.execute(
      categoriesFilter,
    );

    return response.json(productsOverview);
  }
}

export default ProductsOverviewController;
