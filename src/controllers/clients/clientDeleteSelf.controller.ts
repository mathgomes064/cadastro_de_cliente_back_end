import {Request, Response} from "express"
import { AppError, handleError } from "../../errors/appErro"
import clientDeleteSelfService from "../../services/clients/clientDeleteSelf.service"

const clientDeleteSelfController = async(req: Request, res: Response) =>{
    try {
        const id = req.params.id

        const deletedClient = await clientDeleteSelfService(id)
        return res.status(204).json("");
    } catch (err) {
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}

export default clientDeleteSelfController