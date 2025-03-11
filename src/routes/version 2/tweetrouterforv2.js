import express from "express";
import { createPost, gettweet, gettweetByID } from "../../controller/tweetcontrollerforversion2.js";
import ManualValidetor from "../../validator/manualvalidater.js";
import { validateF } from "../../validator/Validatef.js";
import {zodShema} from "../../validator/zodShema.js";
//import {validate}  from "../../validator/validetor.js";
//import zValidator from "../../validator/zodvalidetor.js";
  export const tweetRouterforV2 = express.Router();

tweetRouterforV2.get("/",gettweet);
tweetRouterforV2.get('/:id',gettweetByID);
//tweetRouterforV2.post('/create',validate(zValidator),createPost);
//tweetRouterforV2.post('/create',ManualValidetor,createPost);
tweetRouterforV2.post('/create',validateF(zodShema),createPost);
