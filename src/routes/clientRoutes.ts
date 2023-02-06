import { Router } from "express";
import { authClient } from "../middlewares/authClient.middleware";


import clientCreateController from "../controllers/clients/clientCreate.controller";
import clientListController from "../controllers/clients/clientList.controller";
import clientListOneController from "../controllers/clients/clientListOne.controller";
import clientLoginController from "../controllers/clients/clientLogin.controller";
import clientDeleteSelfController from "../controllers/clients/clientDeleteSelf.controller";
import clientUpdateController from "../controllers/clients/clientUpdate.controller";

const routes = Router();

export const clientRoutes = () =>{
    routes.post("/", clientCreateController)
    routes.post("/login", clientLoginController)
    routes.get("/", authClient, clientListController)
    routes.get("/me", authClient, clientListOneController)
    routes.patch("/:id", authClient, clientUpdateController)
    routes.delete("/:id", authClient, clientDeleteSelfController)

    return routes
}
