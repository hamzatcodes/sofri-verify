import { Router } from "express";
import userController from "../controllers/userController";

const userRouter = Router();

userRouter.route("/").get(userController.getUsers).post(userController.addUser);

userRouter.route("/:id").patch(userController.verifyUser);

export default userRouter;
