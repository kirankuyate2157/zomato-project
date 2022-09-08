import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

// components
import FloatMenuBtn from "../../Components/Order-Online/FloatMenuBtn";
// import FoodItem from "../../Components/Order-Online/FoodItem";
import FoodList from "../../Components/Order-Online/FoodList";
import MenuListContainer from "../../Components/Order-Online/MenuListContainer";

// redux actions
import { getFoodList } from "../../Redux/Reducer/Food/Food.action";

const OrderOnline = () => {
  const [menu, setMenu] = useState([]);

  const reduxState = useSelector(
    (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
  );
  const dispatch = useDispatch();

  useEffect(() => {
    reduxState &&
      dispatch(getFoodList(reduxState.menu)).then((data) =>
        setMenu(data.payload.menus.menus)
      );
  }, [reduxState]);

  return (
    <>
      <div className="w-full h-screen flex">
        <aside className="hidden md:flex flex-col gap-3 border-r overflow-y-scroll border-gray-200 h-screen w-1/4">
          <MenuListContainer />
          <MenuListContainer />
        </aside>
        <div className="w-full  px-3 md:w-3/4">
          <div className="pl-3 mb-4">
            <h2 className="text-xl font-semibold">Order Online</h2>
            <h4 className="flex items-center gap-2 font-light text-gray-500">
              <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
            </h4>
          </div>
          <section className="flex  h-screen overflow-y-scroll flex-col gap-3 md:gap-5">
            {menu.map((item) => (
              <FoodList key={item._id} {...item} />
            ))}
          </section>
        </div>
      </div>
      <FloatMenuBtn />
    </>
  );
};

export default OrderOnline;