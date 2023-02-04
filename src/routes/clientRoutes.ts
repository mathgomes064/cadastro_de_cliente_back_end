import { Router } from "express";
import { authClient } from "../middlewares/authClient.middleware";

const routes = Router();

import clientCreateController from "../controllers/clients/clientCreate.controller";
import clientListController from "../controllers/clients/clientList.controller";
import clientListOneController from "../controllers/clients/clientListOne.controller";
import clientLoginController from "../controllers/clients/clientLogin.controller";
import clientDeleteSelfController from "../controllers/clients/clientDeleteSelf.controller";
import clientUpdateController from "../controllers/clients/clientUpdate.controller";

routes.post("/clients", clientCreateController)
routes.post("/clients/login", clientLoginController)
routes.get("/clients", authClient, clientListController)
routes.get("/clients/me", authClient, clientListOneController)

routes.patch("/clients/:id", authClient, clientUpdateController)
routes.delete("/clients/:id", authClient, clientDeleteSelfController)

export default routes