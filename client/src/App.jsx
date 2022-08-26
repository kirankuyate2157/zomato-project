//HOC
// import HomeLayoutHOC from "./HOC/Home.Hoc";
import { Routes, Route } from "react-router-dom";
//Component
// import Temp from "./Components/temp";
import HomeLayout from "./Layout/Home.Layout";

function App() {
  return (
    <>
      <Routes>
        {/* <HomeLayoutHOC path="/" exact element={Temp} /> */}
        <Route path="/" element={<HomeLayout />} />
      </Routes>
    </>
  );
}

export default App;
