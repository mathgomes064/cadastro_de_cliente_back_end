import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { hash } from "bcrypt"
import { IClientUpdate } from "../../interfaces/clients"

const clientUpdateService = async({name, email, password, telefone}: IClientUpdate, id: string) =>{
    const clientRepository = AppDataSource.getRepository(Client)

    const clients = await clientRepository.findOneBy({ id })

    if(!clients){
        throw new Error("Client not found");
    }

    const updatedpassword = await hash(password!, 10)

    await clientRepository.update(id, {...{name, email, password: updatedpassword, telefone}})

    // await clientRepository.update(id, {
    //         name: name ? name: clients.name,
    //         email: email ? email: clients.email,
    //         password: password ? await hash(password, 10) : clients.password,
    //         telefone: telefone ? telefone: clients.telefone
    //     }
    // )

    const client = await clientRepository.findOneBy({id})

    return client!;
}

export default clientUpdateService