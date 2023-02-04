import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";

const contactListOneService = async(email: string) =>{
    const contactRepository = AppDataSource.getRepository(Contact)

    const contacts = await contactRepository.find()

    const account = contacts.find((contact) => contact.email === email)

    return account
}

export default contactListOneService