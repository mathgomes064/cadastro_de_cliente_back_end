import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appErro";
import { IContactCreate } from "../../interfaces/contacts";
import contactCreateService from "../../services/contacts/contactCreate.service";

const contactCreateController = async(req: Request, res: Response) =>{
    try {
        const contact: IContactCreate = req.body

        const newContact = await contactCreateService(contact)
        
        return res.status(201).send(newContact)
        
    } catch (err) {
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}

export default contactCreateController