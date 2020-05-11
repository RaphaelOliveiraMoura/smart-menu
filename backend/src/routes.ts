import { Router } from 'express';

import DashboardController from '@controllers/DashboardController';
import ProductController from '@controllers/ProductController';
import RequestOrderController from '@controllers/RequestOrderController';
import ProductsOverviewController from '@controllers/ProductsOverviewController';
import FinishedOrderController from '@controllers/FinishedOrderController';

const routes = Router();

routes.get('/dashboard', DashboardController.index);

routes.get('/orders/finished', FinishedOrderController.show);
routes.post('/orders/finished', FinishedOrderController.store);

routes.get('/products/:id', ProductController.show);

routes.get('/orders', RequestOrderController.index);
routes.post('/orders', RequestOrderController.store);

routes.get('/overview', ProductsOverviewController.index);

export default routes;
