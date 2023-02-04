import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appErro"
import contactListService from "../../services/contacts/contactList.service"

const contactListController = async(req: Request, res: Response) =>{
    try {
        const contacts = await contactListService()

        return res.send(contacts)
        
    } catch (err) {
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}

export default contactListController