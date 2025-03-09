export const getcomments =(req,res)=>
{
    return res.status(200).json({
        message:"comments componest in versoin 1",
        status:200,

    })
}

export const getcommentsbyId =(req,res)=>
{
    return res.status(200).json({
        message:"comments by id in versoin 1",
        Status:200,
        id: req.params.id
    })
}