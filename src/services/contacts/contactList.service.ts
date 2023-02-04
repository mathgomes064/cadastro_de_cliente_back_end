import { Contact } from "../../entities/contact.entity"
import { AppDataSource } from "../../data-source"

const contactListService = async() =>{
    const contactRepository = AppDataSource.getRepository(Contact)

    const contacts = contactRepository.find()

    return contacts
}

export default contactListService