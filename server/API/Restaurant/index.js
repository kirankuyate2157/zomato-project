//library
import express from "express";
import passport from "passport";

//DATABASE MODEL
import { RestaurantModel } from "../../database/allModels";

//validation
import {
  ValidateRestaurantCity,
  ValidateRestaurantSearchString,
} from "../../validation/restaurant";

import { ValidateRestaurantId } from "../../validation/food";

const Router = express.Router();
/*
Route       /
 Des        get all the restaurant details based on the city
 Params     none
 Access     public
 Method     GET 
*/
Router.get("/", async (req, res) => {
  try {
    await ValidateRestaurantCity(req.query);

    const { city } = req.query;
    const restaurants = await RestaurantModel.find({ city });

    return res.json({ restaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route       /
 Des        get individual restaurant details based on the _id
 Params     id
 Access     public
 Method     GET 
*/

Router.get("/:_id", async (req, res) => {
  try {
    await ValidateRestaurantId(req.params);

    const { _id } = req.params;
    const restaurant = await RestaurantModel.findById(_id);

    if (!restaurant)
      return res.status(404).json({ error: "Restaurant Not found" });
    return res.json({ restaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route       /search
 Des        get restaurant details based on the search string
 Params     none
 Body       searchString
 Access     public
 Method     GET 
*/
Router.get("/search", async (req, res) => {
  try {
    await ValidateRestaurantSearchString(req.body);

    const { searchString } = req.body;
    const restaurants = await RestaurantModel.find({
      name: { $regex: searchString, $options: "i" },
    });

    if (!restaurants)
      return res
        .status(404)
        .json({ error: `No restaurants matches with ${searchString} ` });
    return rs.json({ restaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
