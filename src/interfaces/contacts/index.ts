export interface IContact{
    id: string
    name: string
    email: string
    telefone: string
    created_at: Date
}

export interface IContactCreate{
    name: string
    email: string
    telefone: string
}

export interface IContactUpdate{
    name?: string
    email?: string
    telefone?: string
}

export interface IContactDeleted{
    name?: string
    email?: string
    telefone?: string
}