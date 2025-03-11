import dotenv from "dotenv";

dotenv.config();

 export const PORTNUMBER= process.env.PORT || 3001;
 export const MONGODBURL=process.env.MONGODB_URL;