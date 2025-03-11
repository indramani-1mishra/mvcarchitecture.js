import express from "express";

export const validate = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.body); // ✅ Pehle validation check karein

    if (!result.success) {  
        console.log("Validation Error:", result.error);  // ✅ Debugging ke liye

        return res.status(400).json({  
            message: "Validation Failed",  
            errors: result.error ? result.error.format() : "Unknown error occurred",  
        });  
    }

    next(); // ✅ Agar validation pass ho gaya to next middleware ya controller call karein
};
