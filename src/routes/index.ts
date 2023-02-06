import { Express } from "express";
import {clientRoutes} from "./clientRoutes"
import {contactRoutes} from "./contactRoutes"

export const appRoutes = (app: Express) =>{
    app.use("/clients", clientRoutes())
    app.use("/contacts", contactRoutes())
} 
