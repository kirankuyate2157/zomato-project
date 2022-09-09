import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";

import HomeLayout from "./Layout/Home.Layout";
import RestaurantLayout from "./Layout/Restaurant.layout";
import CheckoutLayout from "./Layout/Checkout.layout";

// import Temp from "./Components/temp";
import Home from "./Page/Home";
// import Overview from "./Page/Restaurant/Overview";
import Delivery from "../src/Components/Delivery";
import RestaurantNavigation from "./Page/restaturantNavigation";
import Checkout from "./Page/Checkout";
import RedirectRestaurant from "./Page/Restaurant/Redirect";
import GoogleAuth from "./Page/GoogleAuth";

// redux action
import { getMyself } from "./Redux/Reducer/User/user.action";

// axios global settings
if (localStorage.zomatoUser) {
  const { token } = JSON.parse(localStorage.zomatoUser);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.zomatoUser) dispatch(getMyself());
  }, []);

  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Delivery />} />
        <Route path="/:type" element={<Home />} />
        <Route path="/google/:token" element={<GoogleAuth />} />
        ... other routes to render with Home layout and Navbar ...
      </Route>
      <Route element={<RestaurantLayout />}>
        <Route path="/restaurant/:id" element={<RedirectRestaurant />} />
        <Route
          path="/restaurant/:id/:type"
          element={<RestaurantNavigation />}
        />
      </Route>
      <Route element={<CheckoutLayout />}>
        <Route path="/checkout/order" element={<Checkout />} />
      </Route>
      ... other routes to render without Home layout and Navbar ...
    </Routes>
  );
}

export default App;
