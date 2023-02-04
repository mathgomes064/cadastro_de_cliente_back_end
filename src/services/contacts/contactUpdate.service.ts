import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contact.entity"
import { hash } from "bcrypt"
import { AppError } from "../../errors/appErro";
import { IContactUpdate } from "../../interfaces/contacts"


const contactUpdateService = async({name, email, telefone}: IContactUpdate, id: string) =>{
    const contactRepository = AppDataSource.getRepository(Contact)

    const contacts = await contactRepository.findOneBy({ id })

    if(!contacts){
        throw new AppError(409, "contact not found");
    }

    await contactRepository.update(id, {...{name, email, telefone}})

    const contact = await contactRepository.findOneBy({ id })

    return contact!;
}

export default contactUpdateService