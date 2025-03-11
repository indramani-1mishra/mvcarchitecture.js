import express, { urlencoded } from "express";
import { PORTNUMBER } from "./src/consfig/serverconfig.js";
import { finalRouter } from "./src/routes/routes.js";
import connectDB from "./src/consfig/databaseconfig.js";
import bodyParser from "body-parser";


const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api',finalRouter)

 


app.listen(PORTNUMBER,()=>
{
    console.log(`server is running on Port ${PORTNUMBER}`)
    connectDB();
})