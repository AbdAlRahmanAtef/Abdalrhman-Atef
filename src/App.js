import "./Styles/main.scss";
import Navbar from "./componnents/Navbar";
import Home from "./componnents/Home";
import About from "./componnents/About";
import Skills from "./componnents/Skills";
import Projects from "./componnents/Projects";
import Footer from "./componnents/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
