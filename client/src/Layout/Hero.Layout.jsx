import React from "react";
import { Outlet } from "react-router-dom";
import HeroNav from "../Components/Navbar/HeroNav";
const HeroLayout = () => {
  return (
    <>
      <HeroNav />
      <div>
        <Outlet />
      </div>
      <div>Hero !!</div>
    </>
  );
};

export default HeroLayout;
