import "./App.css";
// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Solutions from "./components/Solutions/Solutions";
import Business from "./components/Business/Business";
function App() {
  return (
    <>
      <Header />
      <Home />
      <Solutions />
      <Business />
    </>
  );
}

export default App;
