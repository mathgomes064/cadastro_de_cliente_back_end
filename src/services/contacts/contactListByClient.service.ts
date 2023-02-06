import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/client.entity"
import { AppError } from "../../errors/appErro"


const contactListByClientService = async(clientId: string) =>{
    const clientRepository = AppDataSource.getRepository(Client)

    const contact = await clientRepository.findOne({
        where: {id: clientId},
        relations: {
            contact: true,
        }
    })

    if (!contact) {
        throw new AppError(404, "Property doesnot exist");
    }

    return contact.contact
}

export default contactListByClientService