import { Route, Routes } from "react-router-dom";
import HomeLayout from "./Layout/Home.Layout";
import Temp from "./Components/temp";
import Master from "./Components/master";

function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Temp />} />
        <Route path="/:type" element={<Master />} />
        ... other routes to render with Home layout and Navbar ...
      </Route>
      ... other routes to render without Home layout and Navbar ...
    </Routes>
  );
}

export default App;
