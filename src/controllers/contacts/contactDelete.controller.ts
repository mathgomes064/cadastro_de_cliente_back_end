import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appErro"
import contactDeleteService from "../../services/contacts/contactDelete.service"


const contactDeleteController = async(req: Request, res: Response) =>{
    try {
        const id = req.params.id

        const deletedContact = await contactDeleteService(id)
        return res.status(204).json("");
    } catch (err) {
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}

export default contactDeleteController