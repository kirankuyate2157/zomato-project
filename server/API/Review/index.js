// Libraries
import express from "express";
import passport from "passport";

// Database modal
import { ReviewModel } from "../../database/allModels";

//validation
import { ValidateReview } from "../../validation/review";
const Router = express.Router();

/*
Route     /
Des       Get all review
Params    resid
BODY      none
Access    Public
Method    GET  
*/
Router.get("/:resid", async (req, res) => {
  try {
    const reviews = await ReviewModel.find({ restaurant: req.params.resid });
    return res.json({ reviews });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route     /new
Des       Add new food review/rating
Params    none
BODY      review object
Access    Public
Method    POST  
*/
// Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
//   try {
//     const { _id } = req.session.passport.user._doc;
//     const { reviewData } = req.body;

//     await ReviewModel.create({ ...reviewData, user: _id });

//     return res.json({ review: "Review Created sucessfully." });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });

Router.post("/new", async (req, res) => {
  try {
    const { reviewData } = req.body;
    const newReview = await ReviewModel.create(reviewData);
    return res.json({ review: newReview });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route     /new
Des       delete food review/rating
Params    _id
BODY      none
Access    Public
Method    DELETE
*/
Router.get("/delete/:id", async (req, res) => {
  try {
    const { _id } = req.params;

    await ReviewModel.findByIdAndDelete(_id);

    return res.json({ review: "Review Deleted Successfully." });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
