import { Router } from 'express';

import DashboardController from '@modules/managment/controllers/DashboardController';
import FinishedOrderController from '@modules/managment/controllers/FinishedOrderController';

const dashboardController = new DashboardController();
const finishedOrderController = new FinishedOrderController();

const routes = Router();

routes.get('/dashboard', dashboardController.index);

routes.post('/orders/finished', finishedOrderController.store);

export default routes;
