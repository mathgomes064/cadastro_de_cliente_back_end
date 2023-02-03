import {Request, Response} from "express"
import clientDeleteSelfService from "../../services/clients/clientDeleteSelf.service"

const clientDeleteSelfController = async(req: Request, res: Response) =>{
    try {
        const id = req.params.id

        const deletedClient = await clientDeleteSelfService(id)
        return res.status(204).json("");
    } catch (err) {
        if(err instanceof Error){
            return res.status(401).send({
                error: err.name,
                massage: err.message
            })
        }
    }
}

export default clientDeleteSelfController