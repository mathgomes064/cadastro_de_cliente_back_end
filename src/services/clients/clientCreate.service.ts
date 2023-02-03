import { Client } from "../../entities/client.entity";
import { IClientCreate } from "../../interfaces/clients";
import { AppDataSource } from "../../data-source";
import bcrypt from "bcrypt"

const clientCreateService = async({name, email, password, telefone}: IClientCreate) =>{
    const clientRepository = AppDataSource.getRepository(Client)
    const clients = await clientRepository.find()

    const emailAlreadyExists = clients.find((client) => client.email === email)

    if(emailAlreadyExists){
        throw new Error("Email Already Existis")
    }

    const client = new Client()
    client.name = name
    client.email = email
    client.password = bcrypt.hashSync(password, 10)
    client.telefone = telefone
    client.created_at = new Date()

    clientRepository.create(client)
    await clientRepository.save(client)

    return client
}

export default clientCreateService