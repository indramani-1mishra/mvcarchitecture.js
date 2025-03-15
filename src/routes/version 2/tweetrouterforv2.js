import express from "express";
import { createPost, delettweetsc, gettweetrepo, gettweetsbyID, updatedTweetc } from "../../controller/tweetcontrollerforversion2.js";
import  { gettweetbyIdmanualValidetor } from "../../validator/manualvalidater.js";
import { validateF } from "../../validator/Validatef.js";
import {zodShema} from "../../validator/zodShema.js";
import { s3Uploder } from "../../consfig/multerconfig.js";

//import {validate}  from "../../validator/validetor.js";
//import zValidator from "../../validator/zodvalidetor.js";
  export const tweetRouterforV2 = express.Router();

tweetRouterforV2.get("/",gettweetrepo);
tweetRouterforV2.get('/:id',gettweetbyIdmanualValidetor,gettweetsbyID);
tweetRouterforV2.delete('/:id',delettweetsc);
//tweetRouterforV2.post('/create',validate(zValidator),createPost);
//tweetRouterforV2.post('/create',ManualValidetor,createPost);
tweetRouterforV2.post('/create',s3Uploder.single("tweetimage"),validateF(zodShema),createPost);
tweetRouterforV2.put('/:id',updatedTweetc); 