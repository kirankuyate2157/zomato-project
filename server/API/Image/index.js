//library
import express from "express";
import passport from "passport";
import multer from "multer";

//Utilies for
import { s3Upload } from "../../Utils/AWS/s3";
//DATABASE MODEL
import { ImageModel } from "../../database/allModels";

const Router = express.Router();

//multer configs
const storage = multer.memoryStorage();
const upload = multer({ storage });

/*
Route       /
 Des        Uploads given image to S3 bucket,and saves file link to mongodb
 Params     none
 Access     public
 Method     POST
*/

Router.post("/", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;

    //upload  to S3 bucket
    const bucketOptions = {
      Bucket: "kkzomato",
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read", //access control list
    };

    const uploadImage = await s3Upload(bucketOptions);

    return res.status(200).json({ uploadImage });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
