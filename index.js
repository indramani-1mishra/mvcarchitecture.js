import express from "express";
import { PORTNUMBER } from "./src/consfig/serverconfig.js";
import { finalRouter } from "./src/routes/routes.js";


const app = express();
  app.use('/api',finalRouter)



app.listen(PORTNUMBER,()=>
{
    console.log(`server is running on Port ${PORTNUMBER}`)
})