import { Router } from 'express';

import DashboardController from '@controllers/DashboardController';
import FinishedOrderController from '@controllers/FinishedOrderController';
import ProductController from '@controllers/ProductController';
import ProductsOverviewController from '@controllers/ProductsOverviewController';
import RatingController from '@controllers/RatingController';
import RequestOrderController from '@controllers/RequestOrderController';

const routes = Router();

routes.get('/dashboard', DashboardController.index);

routes.get('/products/:id', ProductController.show);

routes.get('/orders/finished', FinishedOrderController.show);
routes.post('/orders/finished', FinishedOrderController.store);

routes.get('/orders', RequestOrderController.index);
routes.post('/orders', RequestOrderController.store);

routes.post('/orders/:id_order/rating', RatingController.store);

routes.get('/overview', ProductsOverviewController.index);

export default routes;
