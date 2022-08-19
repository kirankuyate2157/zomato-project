//Library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Models
import { UserModel } from "../../database/user";

const Router = express.Router();

/*
Route       /Signup
 Des        Signup with email and password
 Params     none
 Access     public
 Method     POST
*/

Router.post("/signup", async (req, res) => {
  try {
    const { email, password, fullName, phoneNumber } = req.body.credentials;

    //check whether email is exist
    const checkUserByEmail = await UserModel.findOne({ email });
    const checkUserByPhone = await UserModel.findOne({ phoneNumber });

    if (checkUserByEmail || checkUserByPhone) {
      return res.json({ error: "User already exists!" });
    }
    //has password
    const bcryptSalt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, bcryptSalt);

    //save to DB
    await UserModel.create({
      ...req.body.credentials,
      password: hashedPassword,
    });
    //generate JWT auth token
    const token = jwt.sign({ user: { fullName, email } }, "zomatoAPP");

    //return
    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
