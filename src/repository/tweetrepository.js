import Tweet from "../schema/tweet.js";

export const createTweet1 = async ({body})=>
{
   try
   {
     const tweet = await Tweet.create({body});
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