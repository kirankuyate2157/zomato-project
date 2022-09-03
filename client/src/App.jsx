import { Route, Routes } from "react-router-dom";
import HomeLayout from "./Layout/Home.Layout";
import Restaurant from "./Layout/Restaurant.layout";
import Overview from "./Page/Restaurant/Overview";
import OrderOnline from "./Page/Restaurant/OrderOnline";

// import Temp from "./Components/temp";
import Home from "./Page/Home";
import Delivery from "../src/Components/Delivery";
import RestaurantNavigation from "./Page/restaturantNavigation";

function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Delivery />} />
        <Route path="/:type" element={<Home />} />
        ... other routes to render with Home layout and Navbar ...
      </Route>
      <Route element={<Restaurant />}>
        <Route path="/restaurant/:id" element={<Overview />} />
        <Route path="/restaurant/:id/:type" element={RestaurantNavigation} />
      </Route>
      ... other routes to render without Home layout and Navbar ...
    </Routes>
  );
}

export default App;
