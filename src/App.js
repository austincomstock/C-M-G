import "./App.css";

// COMPONENTS
import { Brand } from "./components/Brand/Brand";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Gallery } from "./components/Gallery/Gallery";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Brand />
        <About />
        <Contact />
      </header>
      <Gallery />
    </div>
  );
}

export default App;
