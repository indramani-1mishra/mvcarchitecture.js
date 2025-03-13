import dotenv from "dotenv";

dotenv.config();

 export const PORTNUMBER= process.env.PORT || 3001;
 export const MONGODBURL=process.env.MONGODB_URL;
 export const AWS_REASION=process.env.AWS_REISION;
 export const AWS_BUCKET_NAME=process.env.AWS_BUCKET_NAME;
 export const AWS_ID=process.env.AWS_ID;
 export const AWS_SECREAT_KEY= process.env.AWS_SECREAT_KEY;