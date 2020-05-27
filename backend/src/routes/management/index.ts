import { Router } from 'express';

import DashboardController from '@controllers/DashboardController';
import FinishedOrderController from '@controllers/FinishedOrderController';

const dashboardController = new DashboardController();
const finishedOrderController = new FinishedOrderController();

const routes = Router();

routes.get('/dashboard', dashboardController.index);

routes.post('/orders/finished', finishedOrderController.store);

export default routes;
