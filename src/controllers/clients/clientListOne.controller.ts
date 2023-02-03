import { Request, Response } from "express";
import clientListOneService from "../../services/clients/clientListOne.service";

const clientListOneController = async(req: Request, res: Response) =>{
    try {
       const email = req.clientEmail

       const client = await clientListOneService(email)

       return res.status(200).send(client)

    } catch (err) {
        if(err instanceof Error){
            return res.status(401).send({
                error: err.name,
                message: err.message,
            })
        }
    }
}

export default clientListOneController