import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appErro";
import contactListOneService from "../../services/contacts/contactListOne.service";


const contactListOneController = async(req: Request, res: Response) =>{
    try {
        const email = req.contactEmail

        const contact = await contactListOneService(email)

       return res.status(200).send(contact)

    } catch (err) {
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}

export default contactListOneController