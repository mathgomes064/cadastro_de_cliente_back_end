import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appErro";
import contactListByClientService from "../../services/contacts/contactListByClient.service"

const contactListByClientController = async(req: Request, res: Response) =>{
    try {
        const clientId = req.params.id

        const contacts = await contactListByClientService(clientId)

        return res.status(200).json(contacts);
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res);
          }
    }
}

export default contactListByClientController