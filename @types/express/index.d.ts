import * as express from "express"

declare global {
    namespace Express{
        interface Request{
            clientEmail: string
            contactEmail: string
            clientId: string
        }
    }
}