import { Filter } from "bad-words";
import { createTweet1, delettweets, gettweets, gettweetsbyID } from "../repository/tweetrepository.js";

export const createTweet = async({body,image})=>
{
    const fliter= new Filter();
    if(fliter.isProfane(body))
    {
        console.log(body);
        console.log(fliter.clean(body));
        throw new Error(" Tweets contains blocked word");
        }


        const tweet = await createTweet1({body,image});
        return tweet;
}

export const gettweetser = async ()=>
{
     const tweets = await gettweets();
     return tweets;
}
export const gettweetsbyidser = async(id)=>
{
    const tweetsbyid = await gettweetsbyID(id);
   if(!tweetsbyid)
   {
   throw {
    message:"tweet not found",
    status:404
   }
   }
   return tweetsbyid;

}


export const delettweetser =async(id)=>
{
    const delettweets2 =await delettweets(id);
    return delettweets2;
}