import {Request, Response} from "express"
import { AppError, handleError } from "../../errors/appErro";
import clientListService from "../../services/clients/clientList.service";

const clientListController = async(req: Request, res: Response) =>{
    try {
        const clients = await clientListService();

        return res.send(clients)
        
    } catch (err) {
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}

export default clientListController;