import Footer from "../components/Footer";
import Contact from "../sections/Contact";
import Domains from "../sections/Domains";
import Explore from "../sections/Explore";
import FrontPage from "../sections/FrontPage";

const HomePage = () => {
  return (
    <>
      <FrontPage />
      <Domains />
      <Explore />
      <Contact/>
      <Footer />
    </>
  );
};

export default HomePage;
