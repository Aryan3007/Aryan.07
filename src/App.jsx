import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import WebDevPage from "./pages/WebDevPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Resume from "./pages/Resume";
import AllProjects from "./pages/AllProjects";

import AppDevPage from "./pages/AppDevPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <div className="w-full z-30 fixed">
        <Navbar />
      </div>

<ScrollToTop/>
      <div className="pt-12">
        <Routes>
          <Route path="/" element={<HomePage />} />

{/* explore section 3 routes */}
          <Route path="/web-dev" element={<WebDevPage />} />
          <Route path="/app-dev" element={<AppDevPage />} />



          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/allprojects" element={<AllProjects/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
