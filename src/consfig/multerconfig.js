import multer from 'multer';
import multerS3 from 'multer-s3';
import { s3 } from './awscomfig.js';
import { AWS_BUCKET_NAME } from './serverconfig.js';

export const  s3Uploder= multer({
    storage:multerS3({
        s3:s3,
        bucket:AWS_BUCKET_NAME,
        key: function(req,file,cb)
        {
            if(!file)
            {
                return cb(new Error("no file found"));
            }
            console.log(file);
            if(file.mimetype !=='image/jpeg'&& file.mimetype !=="image/png")
            {
                return cb(new Error("envalid file type"));
            }
            const fileExtension =file.originalname.split('.')[1];
            cb(null,Date.now().toString()+"."+fileExtension);
        }
    })
})