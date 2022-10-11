import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

//components
import DeliveryCarousal from "./DeliveryCarousal";
import Brand from "./Brand";
import RestaurantCard from "../RestaurantCard";
const Delivery = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const reduxState = useSelector(
    (globalStore) => globalStore.restaurant.restaurants
  );

  useEffect(() => {
    reduxState.restaurants && setRestaurantList(reduxState.restaurants);
  }, [reduxState.restaurants]);

  return (
    <>
      <div className="bg-gray-100 h-96">
        <DeliveryCarousal />
      </div>
      <div className=" container mx-auto px-4 lg:px-20 ">
        <Brand />

        <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
          Order food online
        </h1>

        <div className="flex justify-between  flex-wrap">
          {restaurantList.map((restaurant) => (
            <RestaurantCard
              {...restaurant}
              key={restaurant._id}
              whereIsThis="asf"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Delivery;
