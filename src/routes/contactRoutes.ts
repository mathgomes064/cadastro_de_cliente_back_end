import { Router } from "express";
import { authClient } from "../middlewares/authClient.middleware";

const routes = Router()

import contactCreateController from "../controllers/contacts/contactCreate.controller"
import contactListController from "../controllers/contacts/contactList.controller";
import contactUpdateContoller from "../controllers/contacts/contactUpdate.controller"
import contactDeleteController from "../controllers/contacts/contactDelete.controller"


routes.post("/contacts", authClient, contactCreateController)
routes.get("/contacts", authClient, contactListController)
routes.patch("/clients/:id", authClient, contactUpdateContoller)
routes.delete("/clients/:id", authClient, contactDeleteController)

export default routes

