export const gettweet=(req,res)=>
    {
        return res.json({
            message:"i am form get tweet components version 2"
        });
    }
    
    export const gettweetByID=(req,res)=>
    {
        return res.json({
            message:"i am form form getitembyid version 2 ",
            id:req.params.id
        })
    }