import express, { Request, Response } from "express";
import {Pool} from "pg";
import { userRoutes } from "./modules/user/user.route";
import { initDB } from "./database/db";
import { authRouter } from "./modules/auth/auth.route";

const app = express();
app.use(express.json());


initDB();

app.use("/api/v1/users",userRoutes);
app.use("/api/v1/auth", authRouter);












// initial testing route
app.get("/", (req :Request , res: Response)=>{
    res.status(200).json({
        message: "This is the root route",
        path: req.path,
    })
})

app.listen(5000, ()=>{
    console.log(`Server is running on port 5000`);
})