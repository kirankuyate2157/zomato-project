import React from "react";
import { GoChevronRight } from "react-icons/go";
const LocationPlate = (props) => {
  return (
    <>
      <div className="shadow-lg md:w-2/5 hover:shadow-xl rounded-xl border-2 border-gray-100 flex flex-row items-center justify-between p-4">
        <div>
          <h1 className="text-gray-800 bold ">{props.title}</h1>
          <p className="text-gray-600">{props.place} places</p>
        </div>
        <GoChevronRight />
      </div>
    </>
  );
};

export default LocationPlate;
