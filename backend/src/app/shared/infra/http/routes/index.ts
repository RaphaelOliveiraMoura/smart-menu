import { Router } from 'express';

import clientRoutes from '@modules/client/infra/http/routes';
import managementRoutes from '@modules/managment/infra/http/routes';

const routes = Router();

routes.use(managementRoutes);
routes.use(clientRoutes);

export default routes;
