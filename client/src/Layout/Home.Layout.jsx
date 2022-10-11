import React from "react";
// import { useDispatch } from "react-redux";

import { Outlet } from "react-router-dom";
import FoodTab from "../Components/FoodTab";
import Navbar from "../Components/Navbar";

// redux action
// import { getCart } from "../Redux/Reducer/Cart/Cart.action";

const HomeLayout = () => {
  // const dispatch = useDispatch;
  // useEffect(() => {
  //   dispatch(getCart());
  // }, []);

  return (
    <>
      <Navbar />
      <FoodTab />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default HomeLayout;
