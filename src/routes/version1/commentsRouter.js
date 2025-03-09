import express from "express";
import { getcomments, getcommentsbyId } from "../../controller/commentRouterforv1.js";
 export const commentsRouter= express.Router();

commentsRouter.get("/",getcomments);
commentsRouter.get("/:id",getcommentsbyId);