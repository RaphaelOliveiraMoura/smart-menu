import { Router } from 'express';

import CategoryController from '@controllers/CategoryController';
import DashboardController from '@controllers/DashboardController';
import DeliveredOrderController from '@controllers/DeliveredOrderController';
import FinishedOrderController from '@controllers/FinishedOrderController';
import NotDeliveredOrderController from '@controllers/NotDeliveredOrderController';
import ProductController from '@controllers/ProductController';
import ProductsOverviewController from '@controllers/ProductsOverviewController';
import RatingController from '@controllers/RatingController';
import RequestOrderController from '@controllers/RequestOrderController';

const routes = Router();

routes.get('/dashboard', DashboardController.index);

routes.get('/products/:id', ProductController.show);

routes.post('/orders/finished', FinishedOrderController.store);

routes.get('/orders/delivery', DeliveredOrderController.show);
routes.post('/orders/delivery', DeliveredOrderController.store);

routes.get('/orders', NotDeliveredOrderController.index);
routes.post('/orders', RequestOrderController.store);

routes.post('/orders/:id_order/rating', RatingController.store);

routes.get('/overview', ProductsOverviewController.index);

routes.get('/categories', CategoryController.index);

export default routes;
