import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appErro";
import clientListOneService from "../../services/clients/clientListOne.service";

const clientListOneController = async(req: Request, res: Response) =>{
    try {
       const email = req.clientEmail

       const client = await clientListOneService(email)

       return res.status(200).send(client)

    } catch (err) {
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}

export default clientListOneController