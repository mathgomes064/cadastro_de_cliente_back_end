import { Client } from "../../entities/client.entity";
import { IClientCreate } from "../../interfaces/clients";
import { AppDataSource } from "../../data-source";
import bcrypt from "bcrypt"
import { AppError } from "../../errors/appErro";

const clientCreateService = async({name, email, senha, telefone}: IClientCreate) =>{
    const clientRepository = AppDataSource.getRepository(Client)
    const clients = await clientRepository.find()

    const emailAlreadyExists = clients.find((client) => client.email === email)

    if(emailAlreadyExists){
        throw new AppError(409, "Email Already Existis")
    }

    const client = new Client()
    client.name = name
    client.email = email
    client.password = bcrypt.hashSync(senha, 10)
    client.telefone = telefone
    client.created_at = new Date()

    clientRepository.create(client)
    await clientRepository.save(client)

    return client
}

export default clientCreateService