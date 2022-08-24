// Libraries
import express from "express";
import passport from "passport";

// Database modal
import { ReviewModel } from "../../database/allModels";

//validation
import { ValidateReview } from "../../validation/review";
const Router = express.Router();

/*
Route     /new
Des       Add new food review/rating
Params    none
BODY      review object
Access    Public
Method    POST  
*/
Router.post("/new", async (req, res) => {
  try {
    await ValidateReview(req.params);

    const { reviewData } = req.body;
    await ReviewModel.create(reviewData);

    return res.json({ review: "Review Created sucessfully." });
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
