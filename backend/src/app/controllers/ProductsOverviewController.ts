import { Request, Response } from 'express';

import GetGroupedProductsOverviewService from '@services/GetGroupedProductsOverviewService';

class ProductsOverviewController {
  async index(request: Request, response: Response): Promise<Response> {
    const { categories } = request.query;

    const categoriesFilter = categories ? JSON.parse(String(categories)) : null;

    const productsOverview = await GetGroupedProductsOverviewService.execute(
      categoriesFilter,
    );

    return response.json(productsOverview);
  }
}

export default ProductsOverviewController;
