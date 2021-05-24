
import './App.css';
import Landing from "./components/Landing/Landing";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Socialicons from "./components/Socialicons/Socialicons";
import Navbar from "./components/Navbar/DesktopNavMenu"
import Blogs from "./components/Blogs/Blogs"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Socialicons />
      <Landing />
      <About />
      <Projects />
      <Blogs/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
