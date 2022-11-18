import "./App.css";

// COMPONENTS
import { Brand } from "./components/Brand/Brand";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Gallery } from "./components/Gallery/Gallery";
import { Estimates } from "./components/Estimates/Estimates";
import { ServiceArea } from "./components/ServiceArea/ServiceArea";

function App() {
  return (
    <div className="App">
      <Brand />
      <About />
      <Contact />
      <Gallery />
      <Estimates />
      <ServiceArea />
    </div>
  );
}

export default App;
