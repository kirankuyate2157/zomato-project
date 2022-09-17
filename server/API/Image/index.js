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
Route     /
Des       Get Image details
Params    _id
Access    Public
Method    GET  
*/
Router.get("/:_id", async (req, res) => {
  try {
    const image = await ImageModel.findById(req.params._id);

    return res.json({ image });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

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

    await ImageModel.create({ images: [{ location: uploadImage.Location }] });

    return res.status(200).json({ uploadImage });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
