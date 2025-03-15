import { Filter } from "bad-words";
import { createTweet1, delettweets, gettweets, gettweetsbyID, updatetweetrep } from "../repository/tweetrepository.js";

export const createTweet = async({body,image})=>
{
    const fliter= new Filter();
    if(fliter.isProfane(body))
    {
        console.log(body+'hello');
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
 try
    {
        
    const delettweets2 =await delettweets(id);
    return delettweets2;
    }
    catch(erorr)
    {
        throw erorr;
    }
}

export const updatedtweetser = async (id, body) => {
  try {
     
      if (!body || typeof body !== "string") {
         
          throw new Error("Tweet body must be a string");
      }

      const updatedTweet1 = await updatetweetrep(id, body);
      return updatedTweet1;
  } catch (error) {
     
      throw error;
  }
};
