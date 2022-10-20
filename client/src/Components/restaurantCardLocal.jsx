import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
    return (
        <>

            <div className="bg-white p-4 w-full mb-8  rounded-2xl transition duration-700 ease-in-out hover:shadow-xl  hover:border-gray-70  hover:border md:w-1/2 lg:w-1/3">
                <div className="w-full h-56 lg:h-64 relative p-1">
                    <Link to={`/restaurant/${props._id}/overview`} className="w-full">
                        <div className="absolute w-full bottom-4 flex items-end justify-between">

                            <div className="flex flex-col gap-2 items-start">
                                {props.isPro && (
                                    <span className="bg-zomato-400 text-white px-2 py-1 rounded text-sm">
                                        Pro extra 10% off
                                    </span>
                                )}
                                {props.isOff && (
                                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
                                        ₹{`${props.isOff}`} OFF
                                    </span>
                                )}
                            </div>
                            <span className="bg-white bg-opacity-75 p-1 rounded	mr-3">
                                {props.time} min
                            </span>
                        </div>
                        <img
                            src={props.image}
                            alt="food"
                            className="w-full h-full rounded-2xl"
                        />
                    </Link>
                </div>
                <div className="my-2 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <h4 className="text-xl font-medium">{props.title}</h4>
                        <span className="bg-green-800 text-white text-sm p-1 rounded flex items-center">
                            {props.star} <AiTwotoneStar />
                        </span>
                    </div>
                    <div className="flex items-center justify-between text-gray-500">
                        <p>{props.desc}</p>
                        <p>₹{props.price} for one</p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default RestaurantCard;
