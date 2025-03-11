import { z } from "zod";


 export const zodShema = z.object({
    content: z.string().min(1, "Tweet cannot be empty").max(280, "Tweet too long"),
    author: z.string().min(3, "Author name is too short"),
    tweet:z.string().min(1,"Tweet cannot be empty"),
});


