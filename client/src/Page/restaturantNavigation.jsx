import React from "react";

import { useParams } from "react-router-dom";

import Overview from "./Restaurant/Overview";
import OrderOnline from "./Restaurant/OrderOnline";

const RestaurantNavigation = () => {
    const { type } = useParams();
    return (
        <div className="my-5">
            {type === "overview" && <Overview />}
            {type === "order-online" && <OrderOnline />}
            {type === "reviews" && <Overview />}
            {type === "menu" && <Overview />}
            {type === "photos" && <Overview />}
        </div>
    );
};

export default RestaurantNavigation;