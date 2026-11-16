import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import OpenSource from "./sections/OpenSource";
import Internship from "./sections/Internship";
import Education from "./sections/Education";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import "./styles/global.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <OpenSource />
        <Internship />
        <Education />
        <Resume />
        <Contact />
      </main>
    </>
  );
}

export default App;
