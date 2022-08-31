import React, { useState } from "react";

//components
import DeliveryCarousal from "./DeliveryCarousal";
import Brand from "./Brand";
import RestaurantCard from "../RestaurantCard";

const Delivery = () => {
  const [restaurantList] = useState([
    {
      _id: "123456",
      photos: [
        "https://b.zmtcdn.com/data/pictures/chains/8/6506988/82f36c57fd1c39cb8db1482fdca0be4f_o2_featured_v2.jpg",
      ],
      name: "KNS",
      cuisine: ["Burger", "Pizza", "Fast Food", "Sandwich", " Beverages"],
      averageCost: 100,
      isPro: true,
      isOff: 80,
      durationOfdelivery: 48,
      restaurantReviewValue: 4.7,
    },
    {
      _id: "123456",
      photos: [
        "https://b.zmtcdn.com/data/pictures/chains/8/6506988/82f36c57fd1c39cb8db1482fdca0be4f_o2_featured_v2.jpg",
      ],
      name: "KNS",
      cuisine: ["Burger", "Pizza", "Fast Food", "Sandwich", " Beverages"],
      averageCost: 100,
      isPro: true,
      isOff: 80,
      durationOfdelivery: 48,
      restaurantReviewValue: 4.7,
    },
    {
      _id: "123456",
      photos: [
        "https://b.zmtcdn.com/data/pictures/chains/8/6506988/82f36c57fd1c39cb8db1482fdca0be4f_o2_featured_v2.jpg",
      ],
      name: "KNS",
      cuisine: ["Burger", "Pizza", "Fast Food", "Sandwich", " Beverages"],
      averageCost: 100,
      isPro: true,
      isOff: 80,
      durationOfdelivery: 48,
      restaurantReviewValue: 4.7,
    },
  ]);
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
