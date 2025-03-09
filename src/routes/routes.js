import express from "express";
import { router } from "./version1/version1.js";
import { v2Router } from "./version 2/version2.js";
 export const finalRouter = express.Router();

finalRouter.use("/v1",router);
finalRouter.use('/v2',v2Router);