import { NextFunction, Request, Response } from "express";

const verify = (req: Request, res: Response, next: NextFunction) => {
    console.log('Wait brother ! Are you original or AI?');
    next();
};

export default verify;
