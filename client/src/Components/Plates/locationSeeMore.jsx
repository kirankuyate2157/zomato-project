import React from "react";
import { GoChevronDown } from "react-icons/go";
const LocationSeeMore = (props) => {
  return (
    <>
      <div className="shadow-lg md:w-2/5 hover:shadow-xl h-20 rounded-xl border-2 border-gray-100 flex flex-row items-center justify-center p-4">
        <div className="flex items-center text-lg gap-2">
          <h1 className="text-gray-800 bold  ">See More</h1>
          <GoChevronDown />
        </div>
      </div>
    </>
  );
};

export default LocationSeeMore;
