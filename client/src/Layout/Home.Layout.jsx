import React from "react";
import { Outlet } from "react-router-dom";
import FoodTab from "../Components/FoodTab";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <FoodTab />
      <div className="container mx-auto px-4 lg:px-20  ">
        <Outlet />
      </div>
    </>
  );
};

export default HomeLayout;
