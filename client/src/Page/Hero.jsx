import React from "react";
import { Link } from "react-router-dom";
import HeroRestaurantCard from "../Components/HeroRestaurantCard";
import Collections from "../Components/Dining/DiningCarousal";
const Hero = () => {
  return (
    <>
      <div classname="container mx-auto px-4 lg:px-20 ">
        <div className="px-20 flex flex-row flex-wrap items-center gap-8">
          <Link to={"/delivery"}>
            <HeroRestaurantCard
              image="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
              title="Order Online"
              desc="Stay home and order to your doorstep"
            />
          </Link>
          <Link to={"/dining"}>
            <HeroRestaurantCard
              image="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
              title="Dining"
              desc="View the city's favorite dining venues"
            />
          </Link>{" "}
          <Link to={"/night"}>
            <HeroRestaurantCard
              image="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
              title="Nightlife and Clubs"
              desc="Explore the city's top nightlife outlets"
            />
          </Link>
          <Link to={"/nutri"}>
            <HeroRestaurantCard
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyql3hUTSuTdu73TSa8J2BhhUPckGiowVQzQ&usqp=CAU"
              title="Nutritions"
              desc="Includ high quality nutrition made by zomato "
            />
          </Link>
        </div>
        <Collections />
      </div>
    </>
  );
};
export default Hero;
