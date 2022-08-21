//library
import express from "express";
import passport from "passport";

//DATABASE MODEL
import { FoodModel } from "../../database/allModels";

const Router = express.Route();

/*
Route       /
 Des        get all the restaurant details based on the city
 Params     none
 Access     public
 Method     GET 
*/


