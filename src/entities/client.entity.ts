import {Entity, Column, PrimaryColumn} from "typeorm"
import { v4 as uuid } from "uuid"
   
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

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}