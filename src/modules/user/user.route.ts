import { Router } from "express";
import { userController } from "./user.controller";
import verify from "../../middleware/verify";
import auth from "../../middleware/auth";
import { Roles } from "../auth/auth.constant";
// import express from "express";
// const router = express.Router();

const router = Router();

router.post("/", verify, userController.createUser);
router.get("/",auth(Roles.admin), userController.getAllUser);
router.get("/singleUser", auth(Roles.user), userController.getSingleUser);

export const userRoutes = router;