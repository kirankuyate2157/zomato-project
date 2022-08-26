import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 lg:px-20 ">
        <Outlet />
      </div>
    </>
  );
};

export default HomeLayout;
