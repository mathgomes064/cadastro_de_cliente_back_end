import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"

export const authClient = (req: Request, res: Response, next: NextFunction) =>{
    try {
        const token = req.headers.authorization
        console.log(token)

        jwt.verify(token as string, process.env.JWT_SECRET as string, (err: any, decoded: any) => {
            req.clientEmail = decoded.email
            next()
        })
    } catch (error) {
        return res.status(401).json({message: "Invalid Token"})
    }
}