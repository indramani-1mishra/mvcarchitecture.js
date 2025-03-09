export const gettweet=(req,res)=>
{
    return res.json({
        message:"i am form get tweet components"
    });
}

export const gettweetByID=(req,res)=>
{
    return res.json({
        message:"i am form form getitembyid ",
        id:req.params.id
    })
}