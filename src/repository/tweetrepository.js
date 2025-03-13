import Tweet from "../schema/tweet.js";

export const createTweet1 = async ({body,image})=>
{
   try
   {
     const tweet = await Tweet.create({body,image});
     return tweet.save;
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