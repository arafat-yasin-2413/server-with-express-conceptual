import { Router } from "express";
import { userController } from "./user.controller";
import verify from "../../middleware/verify";
// import express from "express";
// const router = express.Router();

const router = Router();

router.post("/", verify, userController.createUser);

export const userRoutes = router;