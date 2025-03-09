import express from "express";
import { gettweet, gettweetByID } from "../../controller/tweetcontrollerforversion2.js";
  export const tweetRouterforV2 = express.Router();

tweetRouterforV2.get("/",gettweet);
tweetRouterforV2.get('/:id',gettweetByID);
