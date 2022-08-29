import React from "react";

//components
import NightlifeCarousal from "./NightlifeCarousal";

const Nightlife = () => {
  return (
    <>
      <div className="bg-gray-100 h-full pb-7">
        <NightlifeCarousal />
      </div>
      <div className=" container mx-auto px-4 lg:px-20 ">
        <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">
          Nightlife Restaurants near you in Koregaon Park
        </h1>
      </div>
    </>
  );
};

export default Nightlife;
