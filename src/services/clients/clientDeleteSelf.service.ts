import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { IClientDeleted } from "../../interfaces/clients";

const clientDeleteSelfService = async(id: string) =>{
    const clientRepository = AppDataSource.getRepository(Client)

    const clients = await clientRepository.findOneBy({ id })
    
    if (!clients) {
        throw new Error("user not found");
    }

    await clientRepository.delete({id}) 

}

export default clientDeleteSelfService