import { Route, Routes } from "react-router-dom";
import HomeLayout from "./Layout/Home.Layout";
import Restaurant from "./Layout/Restaurant.layout";


// import Temp from "./Components/temp";
import Home from "./Page/Home";
import Delivery from "../src/Components/Delivery";

function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Delivery />} />
        <Route path="/:type" element={<Home />} />
        ... other routes to render with Home layout and Navbar ...
      </Route>
      <Route path="/restaurant" element={<Restaurant />} />
      ... other routes to render without Home layout and Navbar ...
    </Routes>
  );
}

export default App;
