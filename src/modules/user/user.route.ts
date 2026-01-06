import { Router } from "express";
import { userController } from "./user.controller";
// import express from "express";
// const router = express.Router();

const router = Router();

router.post("/",  userController.createUser);

export const userRoutes = router;