//library
import express from "express";
import passport from "passport";

//DATABASE MODEL
import { FoodModel } from "../../database/allModels";

//validation
import { ValidateCategory, ValidateRestaurantId } from "../../validation/food";

const Router = express.Router();

/*
Route       /r
 Des        get all the Food details based on particular restaurant
 Params     id
 Access     public
 Method     GET 
*/

Router.get("/r/:_id", async (req, res) => {
  try {
    await ValidateRestaurantId(req.params);

    const { _id } = req.params;
    const foods = await FoodModel.find({ restaurant: _id });
    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route     /:_id
Desc      Get food based on id
Params    _id
Access    Public
Method    GET  
*/

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const foods = await FoodModel.findById(_id);

    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route     /new
Desc      add new food record to database
Params    _id
Access    PRIVATE
Method    POST
*/

Router.post("/new", async (req, res) => {
  try {
    const { foodData } = req.body;
    const newFood = await FoodModel.create(foodData);
    return res.json({ foods: newFood });
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
    await ValidateCategory(req.params);

    const { category } = req.params;
    const foods = await FoodModel.find({
      category: { $regex: category, $options: "i" },
    });

    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
