import Navbar from "../components/Navbar";
import HomePage from "../components/HomePage";
import About from "../components/About";
import Skill from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="portfolio">
      <header>
        <Navbar />
      </header>
      <main>
        <HomePage />
        <About />
        <Skill />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
