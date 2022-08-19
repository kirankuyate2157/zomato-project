import Mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullName: { type: "String", required: true },
  email: { type: "String", required: true },
  password: { type: "String" },
  address: [{ detail: { type: "String" }, for: { type: "String" } }],
  phoneNumber: [{ type: "String" }],
});

export const UserModel = mongoose.model("User", UserSchema);
