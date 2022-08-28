import React from "react";
import { Outlet } from "react-router-dom";
import FoodTab from "../Components/FoodTab";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <FoodTab />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default HomeLayout;
