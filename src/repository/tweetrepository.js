import { tweetRouterforV2 } from "../routes/version 2/tweetrouterforv2.js";
import Tweet from "../schema/tweet.js";

export const createTweet1 = async ({body,image})=>
{
   try
   {
     const tweet = await Tweet.create({body,image});
     return tweet;
   }
   catch(erorr)
   { 
      throw erorr;
   }
}

export const gettweets = async()=>
{
    try
    {
      const tweets = await Tweet.find();
      return tweets;
    }
    catch(erorr)
    {
        throw erorr;
    }
}

export const gettweetsbyID=(tweetID)=>
{
    try
    {
       const tweetsbyid = Tweet.findById(tweetID);
       return tweetsbyid;
    }
    catch(erorr)
    {
        throw erorr;
    }
}


export const delettweets = async (tweetsID) => {
  try {
    const tweet = await Tweet.findByIdAndDelete(tweetsID);
    return tweet;
  } catch (error) {
    throw error;
  }
};

export const updatetweetrep = async (tweetID, body) => {
  try {
      console.log("Repository Layer - Updating Tweet with ID:", tweetID);
      
      const updatedTweet = await Tweet.findByIdAndUpdate(
          tweetID,
          { body },
          { new: true, runValidators: true } // runValidators ensures validation rules are checked
      );

      if (!updatedTweet) {
          console.log("Tweet not found with ID:", tweetID);
          return null; // Return null if no tweet is found
      }

      console.log("Updated Tweet:", updatedTweet);
      return updatedTweet;
  } catch (error) {
      console.error("Error in updatetweetrep:", error);
      throw error;
  }
};
