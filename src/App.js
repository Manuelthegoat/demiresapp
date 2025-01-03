import { useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Routing from "./Routes";

function App() {
  const location = useLocation();
  const hideLayoutPaths = ["/admin", "/login"]; // Added paths to hide Navbar and Footer

  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <Navbar />}
      <Routing />
      {!shouldHideLayout && <Footer />}
    </>
  );
}

export default App;
