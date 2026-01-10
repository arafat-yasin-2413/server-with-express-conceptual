import { Router } from "express";
import { userController } from "./user.controller";
import verify from "../../middleware/verify";
import auth from "../../middleware/auth";
// import express from "express";
// const router = express.Router();

const router = Router();

router.post("/", verify, userController.createUser);
router.get("/",auth(), userController.getAllUser);

export const userRoutes = router;