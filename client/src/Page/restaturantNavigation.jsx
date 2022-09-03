import React from "react";

import { useParams } from "react-router-dom";

import Overview from "./Restaurant/Overview";
import OrderOnline from "./Restaurant/OrderOnline";
import Temp from "../Components/temp";


const RestaurantNavigation = () => {
    const { type } = useParams();
    return (
        <div className="my-5">
            {type === "overview" && <Overview />}
            {type === "order-online" && <OrderOnline />}
            {type === "reviews" && <Temp />}
            {type === "menu" && <Temp />}
            {type === "photos" && <Temp />}
        </div>
    );
};

export default RestaurantNavigation;