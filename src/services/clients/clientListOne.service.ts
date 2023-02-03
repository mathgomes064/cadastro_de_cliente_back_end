import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";

const clientListOneService = async(email: string) =>{
   const clientRepository = AppDataSource.getRepository(Client)

   const clients = await clientRepository.find()

   const account = clients.find((client) => client.email === email)

   return account
}

export default clientListOneService