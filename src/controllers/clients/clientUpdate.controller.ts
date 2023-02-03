import { Request, Response } from "express";
import clientUpdateService from "../../services/clients/clientUpdate.service";

const clientUpdateController = async(req: Request, res: Response) =>{
    try {
        const client = req.body
        const id = req.params.id

        const updateClient = await clientUpdateService(client, id)
        return res.json({ message: "Updated Client", updateClient });
    } catch (err) {
        if(err instanceof Error){
            return res.status(401).send({
                error: err.name,
                massage: err.message
            })
        }
    }
}

export default clientUpdateController