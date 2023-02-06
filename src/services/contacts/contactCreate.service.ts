import { AppDataSource } from "../../data-source"
import {IContactCreate} from "../../interfaces/contacts/index"
import { Contact } from "../../entities/contact.entity"
import { Client } from "../../entities/client.entity"

const contactCreateService = async({name, email, telefone, clientId}: IContactCreate): Promise<Contact> =>{
    const contactRepository = AppDataSource.getRepository(Contact)
    const clientRepository = AppDataSource.getRepository(Client)

    const clients = await clientRepository.findOne({
        where: {id: clientId}
    })

    const contact = new Contact()
    contact.name = name
    contact.email = email
    contact.telefone = telefone
    contact.created_at = new Date()
    contact.client = clients!
    
    contactRepository.create(contact)
    await contactRepository.save(contact)
    

    return contact
}

export default contactCreateService