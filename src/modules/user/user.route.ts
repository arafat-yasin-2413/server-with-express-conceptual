import { Request, Response, Router } from "express";
import { pool } from "../../database/db";
// import express from "express";
// const router = express.Router();

const router = Router();

router.post("/",  async(req: Request, res: Response)=>{
    const {name , email, password } = req.body;

    const result = await pool.query (`
            INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *
        `,[name, email, password]);

        // console.log(result);

        res.status(201).json({
            success: true,
            message: "User Created",
            data: result.rows[0]
        })
})

export const userRoutes = router;