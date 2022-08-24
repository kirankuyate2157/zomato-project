//Library
import express from "express";
import passport from "passport";

// Models
import { UserModel } from "../../database/user";

//validation
import { ValidateSignup, ValidateSignin } from "../../validation/auth";
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
    await ValidateSignup(req.body.credentials);

    await UserModel.findByEmailAndPhoneNumber(req.body.credentials);

    //save to DB
    const newUser = await UserModel.create(req.body.credentials);

    //generate JWT auth token
    const token = newUser.generateJwtToken();

    //return
    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route       /Signup
 Des        Signup with email and password
 Params     none
 Access     public
 Method     POST
*/

Router.post("/signin", async (req, res) => {
  try {
    await ValidateSignin(req.body.credentials);

    const user = await UserModel.findByEmailAndPassword(req.body.credentials);
    //generate JWT auth token
    const token = user.generateJwtToken();

    //return
    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route       /google
 Des        google SignIn
 Params     none
 Access     public
 Method     GET 
*/

Router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

/*
Route       /google/callback
 Des        google SignIn callback
 Params     none
 Access     public
 Method     GET 
*/

Router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    return res.json({ token: req.session.passport.user.token });
  }
);

export default Router;
