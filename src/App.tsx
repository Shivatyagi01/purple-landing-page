import "./App.css";
// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Solutions from "./components/Solutions/Solutions";
import Business from "./components/Business/Business";
import About from "./components/About/About";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";
import Blog from "./components/Blog/Blog";
import Marquee from "./components/Marquee/Marquee";
import Faqs from "./components/Faqs/Faqs";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <Home />
      <Solutions />
      <Business />
      <About />
      <Pricing />
      <Testimonials />
      <Blog />
      <Marquee />
      <Faqs />
      <Footer />
    </>
  );
}

export default App;
