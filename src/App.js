import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import cmgLogo from "./components/Images/cmgLogo.jpg";
import "bootstrap/dist/css/bootstrap.min.css"; //Bootstrap CSS for Carousel https://react-bootstrap.github.io/getting-started/introduction/

// COMPONENTS
import { Navigation } from "./components/Navigation/Navigation";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Gallery } from "./components/Gallery/Gallery";
import { Estimates } from "./components/Estimates/Estimates";
import { ServiceArea } from "./components/ServiceArea/ServiceArea";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <img src={cmgLogo} className="BrandLogo" alt="logo" />

        {/* <Home /> */}
        <Contact />
        {/* <About /> */}
        {/* <Gallery /> */}
        {/* <Estimates /> */}
        {/* <ServiceArea /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={null} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/estimates" element={<Estimates />} />
          <Route path="/servicearea" element={<ServiceArea />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
