import AWS from 'aws-sdk'
import { AWS_ID, AWS_REASION, AWS_SECREAT_KEY } from './serverconfig.js'

export const s3 = new AWS.S3({
    region:AWS_REASION,
    accessKeyId:AWS_ID,
    secretAccessKey:AWS_SECREAT_KEY
});
