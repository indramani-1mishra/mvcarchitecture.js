 const ManualValidetor =(req,res,next)=>
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
export default ManualValidetor;