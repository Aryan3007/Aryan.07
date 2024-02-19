import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import WebDevPage from "./pages/WebDevPage";

function App() {
  return (
    <>
      <div className="w-full z-30 fixed">
        <Navbar />
      </div>

      <div className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/web-dev" element={<WebDevPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
