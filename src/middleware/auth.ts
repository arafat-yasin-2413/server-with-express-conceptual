import { NextFunction, Request, Response } from "express"


const auth = () =>{
    return async (req:Request, res:Response, next:NextFunction) =>{
        const tokenF = req.headers.authorization;
        console.log('printing in auth.ts ----',tokenF);
        next();
    }
}

export default auth;