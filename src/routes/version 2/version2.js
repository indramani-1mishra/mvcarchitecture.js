import express from "express";
import { tweetRouterforV2 } from "./tweetrouterforv2.js";

 export const v2Router= express.Router();

v2Router.use('/tweets',tweetRouterforV2);
