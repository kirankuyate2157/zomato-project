import React from "react";
import { Outlet } from "react-router-dom";
import HeroNav from "../Components/Navbar/HeroNav";
import HeroFooter from "../Components/Footer/Hero.Footer";
const HeroLayout = () => {
  return (
    <>
      <HeroNav />
      <div className="container px-10 md:px-20 mx-auto mt-20 ">
        <Outlet />
      </div>
      <div>Hero !!</div>
      <HeroFooter />
    </>
  );
};

export default HeroLayout;
