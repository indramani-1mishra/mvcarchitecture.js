import mongoose from "mongoose";
import { MONGODBURL } from "./serverconfig.js";
import errorMap from "zod/locales/en.js";

export default async function connectDB() {
    try{
        await mongoose.connect(MONGODBURL);
        console.log("conected to mongodp");
    }
    catch(erorr){
        console.log("failed to connect mangodb");
        console.log(erorr)
    }
}