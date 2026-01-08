import { Request, Response } from "express";
import { pool } from "../../database/db";
import { userServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
	try {
		const result = await userServices.createUser(req.body);
		// console.log('result ---' ,result);

	 	return res.status(201).json({
			success: true,
			message: "User Created",
			data: result.rows[0],
		});
	} catch (error: any) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

const getAllUser = async(req:Request,res:Response) =>{
    try{
        const result = await userServices.getAllUser();
        console.log('printing user.controller ... ----', result);

        return res.status(200).json({
            success: true,
            message: "Got all users",
            data: result.rows,
        })
    }
    catch(error: any) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });;
    }
}

export const userController = {
	createUser,
    getAllUser,
};
