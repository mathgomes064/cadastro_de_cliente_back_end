import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appErro";
import clientUpdateService from "../../services/clients/clientUpdate.service";

const clientUpdateController = async(req: Request, res: Response) =>{
    try {
        const client = req.body
        console.log(client)
        const id = req.params.id

        const updateClient = await clientUpdateService(client, id)
        return res.json({ message: "Updated Client", updateClient });
    } catch (err) {
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}

export default clientUpdateController