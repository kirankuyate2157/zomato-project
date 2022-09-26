import React from "react";
import { GoChevronDown } from "react-icons/go";
const ExploreOption = (props) => {
  return (
    <>
      <div className="shadow-lg w-full h-20 hover:shadow-xl rounded-xl border-2 border-gray-100 flex flex-row items-center justify-between p-4">
        <div>
          <h1 className="text-gray-800 bold ">{props.title}</h1>
        </div>
        <GoChevronDown />
      </div>
    </>
  );
};

export default ExploreOption;
