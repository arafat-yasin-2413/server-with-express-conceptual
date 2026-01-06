import express, { Request, Response } from "express";
import {Pool} from "pg";

const app = express();
app.use(express.json());

const pool = new Pool

app.post("/users", async(req: Request, res: Response)=>{
    const body = req.body;
    console.log('printing req.body--------');
    console.log(body);
})


app.get("/", (req :Request , res: Response)=>{
    res.status(200).json({
        message: "This is the root route",
        path: req.path,
    })
})



app.listen(5000, ()=>{
    console.log(`Server is running on port 5000`);
})