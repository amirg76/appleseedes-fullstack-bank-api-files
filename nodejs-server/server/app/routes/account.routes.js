import { Router } from "express";
import { createAccAll } from "../controllers/account.controllers.js";
const accountRouter = Router();

accountRouter.post("/create-all-account", createAccAll);

export { accountRouter };
