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

const categoryController = new CategoryController();
const dashboardController = new DashboardController();
const deliveredOrderController = new DeliveredOrderController();
const finishedOrderController = new FinishedOrderController();
const notDeliveredOrderController = new NotDeliveredOrderController();
const productController = new ProductController();
const productsOverviewController = new ProductsOverviewController();
const ratingController = new RatingController();
const requestOrderController = new RequestOrderController();

const routes = Router();

routes.get('/dashboard', dashboardController.index);

routes.get('/products/:id', productController.show);

routes.post('/orders/finished', finishedOrderController.store);

routes.get('/orders/delivery', deliveredOrderController.show);
routes.post('/orders/delivery', deliveredOrderController.store);

routes.get('/orders', notDeliveredOrderController.index);
routes.post('/orders', requestOrderController.store);

routes.post('/orders/:id_order/rating', ratingController.store);

routes.get('/overview', productsOverviewController.index);

routes.get('/categories', categoryController.index);

export default routes;
