import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { IClientListOne } from "../../interfaces/clients";
import jwt from "jsonwebtoken"

const clientListOneService = async({authorization}: IClientListOne) =>{
    const clientRepository = AppDataSource.getRepository(Client)
    const clients = await clientRepository.find()

    if(!authorization){
        throw new Error("No authorization token found")
    }

    const token = authorization.split(" ")[1]
    
    const account = jwt.verify(token, String(process.env.JWT_SECRET), (err, decoded) =>{
        if(!decoded){
            throw new Error("Invalid token")
        }
        const client = clients.find(client => client.email === (<any>decoded).email)

        return client
    })

    return account
}

export default clientListOneService