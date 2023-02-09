import {Request, Response} from "express"
import { AppError, handleError } from "../../errors/appErro"
import clientCreateService from "../../services/clients/clientCreate.service"

const clientCreateController = async(req: Request, res: Response) =>{
    try {
        const {name, email, password, telefone} = req.body
        const newClient = await clientCreateService({name, email, password, telefone})

        return res.status(201).send(newClient)
        
    } catch (err) {
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}

export default clientCreateController;