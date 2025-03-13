import { StatusCodes } from "http-status-codes";

import mongoose from "mongoose";

export const ManualValidetor =(req,res,next)=>
{
    if(!req.body.tweet)
    {
        return  res.status(404).json({
            message:"tweet is required"
        })
    }
    if(req.body.tweet>12)
    {
        return res.status(404).json({
            message:"maximum size of tweet is 12"
        })
    }

    next();
}
 
export  const gettweetbyIdmanualValidetor =(req,res,next)=>
{
    var isValid = mongoose.Types.ObjectId.isValid(req.params.id);
    if(!isValid)
    {
        return res.status(StatusCodes.BAD_REQUEST).json({
            message:"not a valid id",
            success:false
        })
    }
    next();
}