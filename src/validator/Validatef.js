
export const validateF =(schema)=>
{
    return async (req,res,next)=>{
     try{
        console.log(req.body);
        schema.parse(req.body);
        next();
     }
     catch(error){
        return res.status(404).json({
            error:error.errors,
            message:"validation erorr",
            success:false

        });

     }
    }
}