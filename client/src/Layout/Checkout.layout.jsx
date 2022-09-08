import React from "react";
import { Outlet } from "react-router-dom"

// components
import Navbar from "../Components/Navbar/checkoutNavbar";

const CheckoutLayout = (props) => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 lg:px-20 ">
                <Outlet />
            </div>
        </>
    );
};

export default CheckoutLayout;