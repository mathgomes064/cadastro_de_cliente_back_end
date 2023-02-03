export interface IClient{
    id: string
    name: string
    email: string
    password: string
    telefone: string
    created_at: Date
}

export interface IClientCreate{
    name: string
    email: string
    password: string
    telefone: string
}

export interface IClientLogin{
    email: string
    password: string
}

export interface IClientListOne{
    authorization?: string
}