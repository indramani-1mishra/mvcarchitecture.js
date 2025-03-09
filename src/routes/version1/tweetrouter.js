import express from "express";
import { gettweet, gettweetByID } from "../../controller/tweetcontroller.js";

 export const tweetrouter1= express.Router();

tweetrouter1.get('/',gettweet)
tweetrouter1.get('/:id',gettweetByID);