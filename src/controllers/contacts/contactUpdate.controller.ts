import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appErro";
import contactUpdateService from "../../services/contacts/contactUpdate.service";


const contactUpdateContoller = async(req: Request, res: Response) =>{
    try {
        const contact = req.body
        const id = req.params.id

        const updateContact = await contactUpdateService(contact, id)
        return res.json({ message: "Updated Contact", updateContact })
    } catch (err) {
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}

export default contactUpdateContoller