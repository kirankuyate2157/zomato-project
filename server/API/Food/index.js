//library
import express from "express";
import passport from "passport";

//DATABASE MODEL
import { FoodModel } from "../../database/allModels";

const Router = express.Route();

/*
Route       /r
 Des        get all the Food details based on particular restaurant
 Params     id
 Access     public
 Method     GET 
*/

Router.get("/r/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const foods = await FoodModel.find({ restaurant: _id });
    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route       /c 
 Des        get all the Food details based on particular restaurant
 Params     id
 Access     public
 Method     GET 
*/

Router.get("/r/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const foods = await FoodModel.find({
      category: { $regex: category, $options: "i" },
    });

    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
