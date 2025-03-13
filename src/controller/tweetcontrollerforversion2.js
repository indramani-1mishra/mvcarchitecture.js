import { StatusCodes } from "http-status-codes";
import { createTweet,  delettweetser, gettweetsbyidser, gettweetser } from "../service/tweetservice.js";

    export const createPost = async(req, res, next) => {
        console.log(req.file);
        try {
            if (!req.body.content || !req.body.author) {
                throw new Error("Content and Author are required");
            }
             const reponse = await createTweet({
                body:req.body.body,
                image:req.file.location

             });
    
            return res.status(201).json({
                success: true,
                message: "Tweet created successfully!",
                data: {
                    content: req.body.content,
                    author: req.body.author,
                    tweet:req.body.tweet,
                    data:reponse,
                    createdAt: new Date().toISOString(),
                },
            });
        } catch (error) {
            return res.status(404).json({
                message:"tweet contains blocks word",
                error: error
            })
            next(); // 🔴 Yeh error ko Express ke global error handler tak bhej dega
        }
    };
    
    export const gettweetrepo = async(req,res)=>
    {
      try
      { 
        const respones =  await gettweetser();
        
         return res.status(200).json
         ({
            success:true,
            data:respones,
            message: "tweets fetch successfully hello"
         });

      }
      catch(error)
      {
        console.log(error)
        return res.status(500).json({
            message:"internal server error",
            success:false
        });

      }
    }

    export const gettweetsbyID = async (req,res)=>
    {
       try
       {
        const response = await gettweetsbyidser(req.params.id);
        return res.status(200).json({
            success:true,
            data:response,
            Message:'tweet fetched successfully'
        });
       }
       catch(error)
       {
        if(error.status)
        {
            return res.status(error.status).json({
                success:false,
                message:error.message
            })
        }
        return res.status(501).json({
            message:'internal server error',
            success:false
        });
       }
       

    }
 
    
    export const delettweetsc = async (req, res) => {
        try {
            const deletedTweet = await delettweetser(req.params.id); // Correct function name
            if (!deletedTweet) {
                return res.status(StatusCodes.NOT_FOUND).json({
                    message: "Tweet not found",
                    success: false
                });
            }
    
            return res.status(StatusCodes.OK).json({
                message: "Data deleted successfully",
                data: deletedTweet,
                success: true
            });
    
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ // 500 for server errors
                message: "Error in deleting tweet",
                error: error.message, // Include error message for debugging
                success: false
            });
        }
    };
    