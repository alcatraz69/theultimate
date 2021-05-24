
import './App.css';
import Landing from "./components/Landing/Landing";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Socialicons from "./components/Socialicons/Socialicons";

function App() {
  return (
    <div className="App">
      <Socialicons />
      <Landing />
      <About />
      <Projects />
      
    </div>
  );
}

export default App;
