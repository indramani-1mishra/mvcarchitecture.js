import { createTweet } from "../service/tweetservice.js";

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

    export const createPost = async(req, res, next) => {
        try {
            if (!req.body.content || !req.body.author) {
                throw new Error("Content and Author are required");
            }
             const reponse = await createTweet({
                body:req.body.body
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
    