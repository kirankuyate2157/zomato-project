import React from "react";

import HeroRestaurantCard from "../Components/HeroRestaurantCard";

const Hero = () => {
  return (
    <>
      <div classname="container px-20 mt-20 mx-auto items-center">
        <div className="flex flex-row items-center gap-4">
          <HeroRestaurantCard
            image="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
            title="Order Online"
            desc="Stay home and order to your doorstep"
          />
          <HeroRestaurantCard
            image="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
            title="Order Online"
            desc="Stay home and order to your doorstep"
          />
          <HeroRestaurantCard
            image="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
            title="Order Online"
            desc="Stay home and order to your doorstep"
          />
        </div>
      </div>
    </>
  );
};
export default Hero;
