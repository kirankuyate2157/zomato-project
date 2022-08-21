//library
import express from "express";
import passport from "passport";

//DATABASE MODEL
import { MenuModel, ImageModel } from "../../database/allModels";

const Router = express.Route();

/*
Route       /list
 Des        get all list menu details based on the restaurant
 Params     _id
 Access     public
 Method     GET 
*/
Router.get("/list/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const menus = await MenuModel.findOne(_id);

    return res.json({ menus });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route       /image
 Des        get all list menu images base on id
 Params     _id
 Access     public
 Method     GET 
*/
Router.get("/image/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const menus = await ImageModel.findOne(_id);

    return res.json({ menus });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
