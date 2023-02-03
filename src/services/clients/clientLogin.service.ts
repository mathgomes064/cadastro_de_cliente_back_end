import { IClientLogin } from "../../interfaces/clients"
import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/client.entity"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const clientLoginService = async({ email, password}: IClientLogin) =>{
    const clientRepository = AppDataSource.getRepository(Client)
    const clients = await clientRepository.find()

    const account = clients.find((client) => client.email === email)

    if(!account){
        throw new Error("Wrong email/password")
    }

    if(!bcrypt.compareSync(password, account.password)){
        throw new Error("Wrong email/password")
    }

    const token = jwt.sign(
        {email: email},
        String(process.env.JWT_SECRET),
        {expiresIn: "1d"}
    )

    return token
}

export default clientLoginService