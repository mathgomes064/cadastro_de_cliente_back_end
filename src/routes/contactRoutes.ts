import { Router } from "express";
import { authClient } from "../middlewares/authClient.middleware";


import contactCreateController from "../controllers/contacts/contactCreate.controller"
import contactListController from "../controllers/contacts/contactList.controller";
import contactUpdateContoller from "../controllers/contacts/contactUpdate.controller"
import contactDeleteController from "../controllers/contacts/contactDelete.controller"
import contactListByClientController from "../controllers/contacts/contactListByClient.controller"

const routes = Router()

export const contactRoutes = () =>{
    routes.post("/", authClient, contactCreateController)
    routes.get("/", authClient, contactListController)
    routes.get("/:id/clients", authClient, contactListByClientController)
    routes.patch("/:id", authClient, contactUpdateContoller)
    routes.delete("/:id", authClient, contactDeleteController)

    return routes

}


