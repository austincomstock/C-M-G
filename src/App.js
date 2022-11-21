import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import cmgLogo from "./components/Images/cmgLogo.jpg";

// COMPONENTS
// import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Gallery } from "./components/Gallery/Gallery";
import { Estimates } from "./components/Estimates/Estimates";
import { ServiceArea } from "./components/ServiceArea/ServiceArea";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Home /> */}

        <section>
          <h1>Construction Management Group</h1>
          <img src={cmgLogo} className="BrandLogo" alt="logo" />
        </section>

        {/* Navigation */}
        <nav>
          <ul className="NavigationUL">
            {/* <li>
              <Link to="/">Home</Link>
            </li> */}
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/estimates">Estimates</Link>
            </li>
            <li>
              <Link to="/servicearea">Service Area</Link>
            </li>
          </ul>
        </nav>

        {/* <Home /> */}
        {/* <About /> */}
        {/* <Contact /> */}
        {/* <Gallery /> */}
        {/* <Estimates /> */}
        {/* <ServiceArea /> */}

        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/estimates" element={<Estimates />} />
          <Route path="/servicearea" element={<ServiceArea />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
