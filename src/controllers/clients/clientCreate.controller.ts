import {Request, Response} from "express"
import clientCreateService from "../../services/clients/clientCreate.service"

const clientCreateController = async(req: Request, res: Response) =>{
    try {
        const {name, email, password, telefone} = req.body

        const newClient = await clientCreateService({name, email, password, telefone})

        return res.status(201).send(newClient)
        
    } catch (err) {
        if(err instanceof Error){
            return res.status(400).send({
                error: err.name,
                message: err.message
            })
        }
    }
}

export default clientCreateController;