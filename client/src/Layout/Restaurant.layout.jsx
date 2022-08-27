import React from "react";
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";

// components

const RestaurantLayout = () => {
  return (
    <div>
      <RestaurantNavbar />
      <div className="w-full h-48 md:hidden">
        <img
          src="https://b.zmtcdn.com/data/pictures/chains/3/10113/e23d7deb6de4e7830c649e4ec4a31184_featured_v2.png?output-format=webp"
          alt="restaurant Images"
          className="w-full h-full"
        />
      </div>
      <div className="hidden flex gap-3">
        <img
          src="https://b.zmtcdn.com/data/pictures/chains/3/10113/e23d7deb6de4e7830c649e4ec4a31184_featured_v2.png?output-format=webp"
          alt="restaurant Images"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default RestaurantLayout;
