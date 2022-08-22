import AWS from "aws-sdk";

//AWS s3 bucket configs
const s3Bucket = new AWS.S3({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY,
  secretAccessKey: process.env.AWS_S3_SECRET_KEY,
  region: "ap-south-1",
});

export const s3Upload = (options) => {
  return new Promise((resolve, reject) =>
    s3Bucket.upload(options, (err, data) => {
      if (err) return reject(err);
      return resolve(data);
    })
  );
};
