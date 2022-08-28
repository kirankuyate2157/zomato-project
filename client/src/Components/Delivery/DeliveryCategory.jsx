import React from "react";

const DeliverySmCard = (props) => {
  return (
    <>
      <div className="lg:hidden bg-white shadow rounded-md w-24 md:w-56">
        <div className="w-full h-24">
          <img
            src={props.image}
            alt="food"
            className="w-full h-full object-cover rounded-t-md"
          />
        </div>
        <div className="border rounded-b-md border-gray-100">
          <h3 className="text-sm my-1 text-center font-light">{props.title}</h3>
        </div>
      </div>
    </>
  );
};

const DeliveryLgCard = (props) => {
  return (
    <>
      <div className="hidden  lg:block w-64 h-64">
        <div className="w-full h-full">
          <img
            src={props.image}
            alt="food"
            className="w-full h-full object-cover rounded-full shadow-lg"
          />
        </div>
        <div>
          <h3 className="text-xl my-1 font-medium">{props.title}</h3>
        </div>
      </div>
    </>
  );
};

const DeliveryCategory = (props) => {
  return (
    <>
      <DeliverySmCard {...props} />
      <DeliveryLgCard {...props} />
    </>
  );
};
export default DeliveryCategory;
