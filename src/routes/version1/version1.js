import express from "express";
import { tweetrouter1 } from "./tweetrouter.js";
import { commentsRouter } from "./commentsRouter.js";
export  const router = express.Router();

router.use("/tweets",tweetrouter1);
router.use("/comments",commentsRouter);