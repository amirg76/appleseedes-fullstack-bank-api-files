import { Router } from "express";
import { getAll, createAll, getById } from "../controllers/user.controllers.js";
const userRouter = Router();

userRouter.get("/get-all-users", getAll);
userRouter.get("/create-all", createAll);
userRouter.post("/get-by-id", getById);

export { userRouter };
