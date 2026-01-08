import { Request, Response } from "express";
import { authService } from "./auth.service";



const loginUser = async(req:Request, res:Response) =>{
    try{
        
        const result = await authService.loginUser(req.body.email, req.body.password);
        console.log('printing auth.controller Result : -------');
        console.log(result);

        return res.status(201).json({
            success: true,
            message: "Successfully Logged in",
            data: result.rows[0],
        })
    }
    catch(err:any){
        return res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}



export const authController = {
    loginUser,
}