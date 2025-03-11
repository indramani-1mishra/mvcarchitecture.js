import { z } from "zod";

const zValidator = z.object({
    content: z.string().min(1, "Tweet cannot be empty").max(280, "Tweet too long"),
    author: z.string().min(3, "Author name is too short"),
});

export default zValidator;