import {Entity, Column, PrimaryColumn, OneToMany} from "typeorm"
import { v4 as uuid } from "uuid"
import { Contact } from "./contact.entity"

// lado one
   
@Entity()
export class Client{
    @PrimaryColumn("uuid")
    readonly id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    telefone: string

    @Column()
    created_at: Date

    @OneToMany((type) => Contact, contact => contact.client, {
        eager: true
    })
    contact: Contact[]

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}