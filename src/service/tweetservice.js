import { Filter } from "bad-words";
import { createTweet1 } from "../repository/tweetrepository.js";

export const createTweet = async({body})=>
{
    const fliter= new Filter();
    if(fliter.isProfane(body))
    {
        console.log(body);
        console.log(fliter.clean(body));
        throw new Error(" Tweets contains blocked word");
        }


        const tweet = await createTweet1({body});
        return tweet;
}