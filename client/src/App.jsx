import { Route, Routes } from "react-router-dom";
import HomeLayout from "./Layout/Home.Layout";
import Temp from "./Components/temp";

function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Temp />} />
        ... other routes to render with Home layout and Navbar ...
      </Route>
      ... other routes to render without Home layout and Navbar ...
    </Routes>
  );
}

export default App;
