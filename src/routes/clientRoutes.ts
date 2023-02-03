import { Router } from "express";

const routes = Router();

import clientCreateController from "../controllers/clients/clientCreate.controller";
import clientListController from "../controllers/clients/clientList.controller";
import clientListOneController from "../controllers/clients/clientListOne.controller";
import clientLoginController from "../controllers/clients/clientLogin.controller";

routes.post("/clients", clientCreateController)
routes.post("/clients/login", clientLoginController)
routes.get("/clients", clientListController)
routes.get("/clients/me", clientListOneController)

export default routes