import "./App.css";
// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Solutions from "./components/Solutions/Solutions";
import Business from "./components/Business/Business";
import About from "./components/About/About";
import Pricing from "./components/Pricing/Pricing";
function App() {
  return (
    <>
      <Header />
      <Home />
      <Solutions />
      <Business />
      <About />
      <Pricing />
    </>
  );
}

export default App;
