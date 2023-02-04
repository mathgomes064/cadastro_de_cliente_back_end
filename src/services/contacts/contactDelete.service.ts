import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";

const contactDeleteService = async(id: string) =>{
    const contactRepository = AppDataSource.getRepository(Contact)

    const contacts = await contactRepository.findOneBy({ id })

    if (!contacts) {
        throw new Error("Contact not found");
    }

    await contactRepository.delete(contacts)

    const deleteContact = await contactRepository.findOneBy({ id: id });

    return deleteContact!
}

export default contactDeleteService