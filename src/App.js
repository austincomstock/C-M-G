// import cmgLogo from "./Images/cmgLogo.jpg";
import "./App.css";

// COMPONENTS
import { Navigation } from "./components/Navigation/Navigation";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <About />
      <Contact />
    </div>
  );
}

export default App;
