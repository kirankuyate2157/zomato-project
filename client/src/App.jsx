import { Route, Routes } from "react-router-dom";
import HomeLayout from "./Layout/Home.Layout";
// import Temp from "./Components/temp";
import Master from "./Components/master";
import Delivery from "../src/Components/Delivery";

function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Delivery />} />
        <Route path="/:type" element={<Master />} />
        ... other routes to render with Home layout and Navbar ...
      </Route>
      ... other routes to render without Home layout and Navbar ...
    </Routes>
  );
}

export default App;
