import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <div className="w-full z-30 fixed">
        <Navbar />
      </div>
      <HomePage />
    </>
  );
}

export default App;
