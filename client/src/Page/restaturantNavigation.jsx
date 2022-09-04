import React from "react";

import { useParams } from "react-router-dom";

import Overview from "./Restaurant/Overview";
import OrderOnline from "./Restaurant/OrderOnline";
import Reviews from "./Restaurant/Reviews";
import Temp from "../Components/temp";
import Menu from "./Restaurant/Menu";


const RestaurantNavigation = () => {
    const { type } = useParams();
    return (
        <div className="my-5">
            {type === "overview" && <Overview />}
            {type === "order-online" && <OrderOnline />}
            {type === "reviews" && <Reviews />}
            {type === "menu" && <Menu />}
            {type === "photos" && <Temp />}
        </div>
    );
};

export default RestaurantNavigation;