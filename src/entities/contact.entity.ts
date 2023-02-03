import {Entity, Column, PrimaryColumn, ManyToOne} from "typeorm"
import { v4 as uuid } from "uuid"
import { Client } from "./client.entity"

// lado many

@Entity()
export class Contact{
    @PrimaryColumn("uuid")
    readonly id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    telefone: string

    @Column()
    created_at: Date

    @ManyToOne(() => Client, client => client.contacts)
    client: Client

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}