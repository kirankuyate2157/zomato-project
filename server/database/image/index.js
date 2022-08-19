import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  images: [
    {
      location: { type: "String", required: true },
    },
  ],
});

export const ImageModel = new mongoose.Model("Images", ImageSchema);
