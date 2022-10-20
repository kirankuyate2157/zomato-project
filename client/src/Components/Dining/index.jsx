import React from "react";

//components
import RestaurantcCards from "../restaurantCardLocal";
import DiningCarousal from "./DiningCarousal";

const Dining = () => {
  const restaurantLocal = [
    {
      image:
        "https://b.zmtcdn.com/data/pictures/8/18952058/0b87b795dd48bf0cadc6125e854386e6_featured_v2.jpg",
      title: "Rollfie",
      desc: "Rolls,North Indian,Chines",
      time: "40",
      isPro: true,
      isOff: 80,
      _id: "6325700e24a338ea8015ca22",
      star: 4.1,
      price: "360",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/chains/1/10571/c0ba9ec0f08684316b2552a8eb5a1ea8_o2_featured_v2.jpg",
      title: "McDonald`s",
      desc: "Burger, Fast Food, Beverages, Coffee, Desserts",
      time: "30",
      isOff: 60,
      _id: "6325700e24a338ea8015ca22",
      star: 4.0,
      price: "160",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/chains/0/19035820/311db57e8ccaf1f085fa5efb96c701f9_o2_featured_v2.jpg",
      title: "Bebe Di Rasoi -Punjabi",
      desc: "North Indian, Biryani, Kebab, Mughlai, Beverages",
      time: "40",
      isPro: true,
      isOff: 30,
      _id: "6325700e24a338ea8015ca22",
      star: 3.9,
      price: "260",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/chains/6/10506/0b9e5880b9300a440b0d15da1efff752.jpg",
      title: "Domino's Pizza",
      desc: "Pizza, Fast Food, Desserts, Beverages",
      time: "30",
      isPro: true,
      isOff: 10,
      _id: "6325700e24a338ea8015ca22",
      star: 4.0,
      price: "180",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/3/13813/8d9f57206a77d0e8ee673fbea24ee143_o2_featured_v2.jpg",
      title: "Teri Rajput",
      desc: "North Indian, Mithai, Beverages, Street Food, Fast Food",
      time: "30", isOff: 60,
      _id: "6325700e24a338ea8015ca22",
      star: 4.2,
      price: "70",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/0/18658840/2b621a879cda2d23c95bf67ca46abde7_o2_featured_v2.jpg",
      title: "Te Amo",
      desc: "North Indian, Chinese, Street Food, South Indian, Fast Food, Beverages, Shake, Sichuan",
      time: "35",
      isOff: 50,
      _id: "6325700e24a338ea8015ca22",
      star: 4.1,
      price: "140",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/chains/2/18608702/67b0460675d4d07e6180defe10ef1676_o2_featured_v2.jpg",
      title: "BOX8 - Desi Meals",
      desc: "North Indian, Biryani, Fast Food, Desserts, Beverages",
      time: "30",
      isPro: true,
      isOff: 60,
      _id: "6325700e24a338ea8015ca22",
      star: 3.9,
      price: "150",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/6/18350016/9706d2067d98052e0309cf686a7a37fc_o2_featured_v2.jpg",
      title: "Chulbul Dhaba",
      desc: "North Indian, Chinese, Sichuan",
      time: "30",
      isPro: true,
      isOff: 80,
      _id: "6325700e24a338ea8015ca22",
      star: 4.1,
      price: "149",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/chains/5/18349085/36d65d8d5c4fc33d68e17820e5d2f7ad_o2_featured_v2.jpg",
      title: "Zeeshan Restaurant",
      desc: "North Indian, Hyderabadi, Biryani, Kebab, Arabian, Mandi, Mughlai, Chinese",
      time: "30",
      _id: "6325700e24a338ea8015ca22",
      star: 3.8,
      price: "155",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/0/13820/b9a8200b298990ab4c358985cf333b72_o2_featured_v2.jpg",
      title: "Sandwich Express",
      desc: "Sandwich, Fast Food, Beverages, Shake",
      time: "30",
      isPro: true,
      isOff: 50,
      _id: "6325700e24a338ea8015ca22",
      star: 4.1,
      price: "100",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/chains/8/6506108/1edc341a1cb0b7bd57c812b93e6ce333_o2_featured_v2.jpg",
      title: "Burger King",
      desc: "Burger, Fast Food, Beverages, Desserts",
      time: "40",
      isOff: 60,
      _id: "6325700e24a338ea8015ca22",
      star: 3.7,
      price: "100",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/chains/3/10013/34600614f8ed8b2f722c30442fd0fd9e_o2_featured_v2.jpg",
      title: "Chaitanya Paranthas",
      desc: "North Indian, Chinese, Biryani, Beverages",
      time: "40",
      isPro: true,
      isOff: 20,
      _id: "6325700e24a338ea8015ca22",
      star: 4.1,
      price: "100",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/chains/4/10624/9b8b6df17bb5b360d5c81b23a76752a2.jpg",
      title: "KFC",
      desc: "Burger, Fast Food, Biryani, Desserts, Beverages",
      time: "52",
      isPro: true,
      isOff: 80,
      _id: "6325700e24a338ea8015ca22",
      star: 3.7,
      price: "100",
    },
  ];
  return (
    <>
      <div className="bg-gray-100 h-full pb-7">
        <DiningCarousal />
      </div>
      <div className=" container mx-auto px-4 lg:px-20 ">
        <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">
          Best Dining Restaurants near you in Koregaon Park
        </h1><div className="flex justify-between  flex-wrap">

          {restaurantLocal.map((restaurant) => (
            <RestaurantcCards
              {...restaurant}
              key="6325700e24a338ea8015ca22"
              whereIsThis="asf"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dining;
