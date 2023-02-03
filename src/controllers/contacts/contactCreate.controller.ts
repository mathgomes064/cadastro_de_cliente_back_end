import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appErro";

const contactCreateController = async(req: Request, res: Response) =>{
    try {
        const {name, email, telefone} = req.body

        
    } catch (err) {
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}

export default contactCreateController