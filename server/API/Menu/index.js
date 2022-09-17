//library
import express from "express";
import passport from "passport";

//DATABASE MODEL
import { MenuModel, ImageModel } from "../../database/allModels";

// validation
import { ValidateMenuId } from "../../validation/menu";

const Router = express.Router();

/*
Route       /list
 Des        get all list menu details based on the restaurant
 Params     _id
 Access     public
 Method     GET 
*/
Router.get("/list/:_id", async (req, res) => {
  try {
    await ValidateMenuId(req.params);

    const { _id } = req.params;
    const menus = await MenuModel.findById(_id);

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
    await ValidateMenuId(req.params);

    const { _id } = req.params;
    const menus = await ImageModel.findOne(_id);

    return res.json({ menus });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route       /new
 Des        add new menu to database
 Params     none
 Access     public
 Method     POST
*/

Router.post("/new", async (req, res) => {
  try {
    const { menuData } = req.body;

    if (menuData._id) {
      const updateMenu = await MenuModel.findByIdAndUpdate(
        menuData._id,
        {
          $push: {
            menus: { $each: menuData.menus },
          },
        },
        { new: true }
      );

      return res.json({ menu: updateMenu });
    }

    const createNewMenu = await MenuModel.create(menuData);

    return res.json({ menu: createNewMenu });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route       /recommendation/new
 Des        add new recommendation
 Params     none
 Access     public
 Method     POST
*/

Router.post("/recommendation/new", async (req, res) => {
  try {
    const { menuData } = req.body;

    const updateMenu = await MenuModel.findByIdAndUpdate(
      menuData._id,
      {
        $push: {
          recommended: { $each: menuData.recommended },
        },
      },
      { new: true }
    );

    return res.json({ menu: updateMenu });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route       /update
 Des        update new menu database
 Params     none
 Access     public
 Method     PATCH
*/

Router.patch("/update", async (req, res) => {
  try {
    const { menuData } = req.body;
    const updateMenu = await MenuModel.findOneAndUpdate(
      { _id: menuData._id, "menus._id": menuData.menu_id },
      {
        $set: {
          "menus.$.name": menuData.name,
        },
        $push: { "menus.$.items": { $each: menuData.items } },
      },
      { new: true }
    );

    return res.json({ menu: updateMenu });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
